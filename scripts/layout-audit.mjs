import { chromium } from "playwright";

const BASE = process.env.AUDIT_BASE_URL ?? "https://onderwijsbouwen.nl";

const PAGES = [
  "/",
  "/initiatieven",
  "/doelgroepen",
  "/pers",
  "/roadmap",
  "/changelog",
  "/over",
  "/contact",
  "/projecten",
  "/veelgestelde-vragen",
];

const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1024, height: 768 },
  { name: "desktop", width: 1280, height: 900 },
  { name: "wide", width: 1440, height: 900 },
];

async function auditPage(page, path, viewport) {
  const url = `${BASE}${path}`;
  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(300);

  const issues = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const overflowX = document.documentElement.scrollWidth > vw + 1;

    const offenders = [];
    for (const el of document.querySelectorAll("body *")) {
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) continue;
      if (rect.right > vw + 2 || rect.left < -2) {
        const style = window.getComputedStyle(el);
        if (style.position === "fixed" || style.visibility === "hidden") continue;
        offenders.push({
          tag: el.tagName.toLowerCase(),
          className: (el.className || "").toString().slice(0, 120),
          right: Math.round(rect.right),
          left: Math.round(rect.left),
          width: Math.round(rect.width),
          text: (el.textContent || "").trim().slice(0, 60),
        });
      }
    }

    offenders.sort((a, b) => b.right - a.right);
    const unique = [];
    const seen = new Set();
    for (const o of offenders) {
      const key = `${o.tag}:${o.className}`;
      if (seen.has(key)) continue;
      seen.add(key);
      unique.push(o);
      if (unique.length >= 8) break;
    }

    return {
      overflowX,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: vw,
      offenders: unique,
    };
  });

  return { path, viewport: viewport.name, ...issues };
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const findings = [];

for (const viewport of VIEWPORTS) {
  for (const path of PAGES) {
    try {
      findings.push(await auditPage(page, path, viewport));
    } catch (error) {
      findings.push({
        path,
        viewport: viewport.name,
        error: error.message,
      });
    }
  }
}

await browser.close();

const problems = findings.filter((f) => f.overflowX || f.error);

console.log(JSON.stringify({ base: BASE, total: findings.length, problems: problems.length, findings: problems }, null, 2));

process.exit(problems.length > 0 ? 1 : 0);
