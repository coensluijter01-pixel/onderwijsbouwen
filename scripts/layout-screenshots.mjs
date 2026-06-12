import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.AUDIT_BASE_URL ?? "https://onderwijsbouwen.nl";
const OUT = path.resolve("scripts/layout-screenshots");

const CHECKS = [
  { path: "/", name: "home" },
  { path: "/initiatieven", name: "initiatieven" },
  { path: "/pers", name: "pers" },
  { path: "/doelgroepen", name: "doelgroepen" },
];

const VIEWPORTS = [
  { name: "375", width: 375, height: 812 },
  { name: "768", width: 768, height: 1024 },
  { name: "1024", width: 1024, height: 900 },
  { name: "1280", width: 1280, height: 900 },
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

for (const vp of VIEWPORTS) {
  await page.setViewportSize({ width: vp.width, height: vp.height });
  for (const check of CHECKS) {
    await page.goto(`${BASE}${check.path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    const file = path.join(OUT, `${check.name}-${vp.name}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log("saved", file);
  }
}

await browser.close();
