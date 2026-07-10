import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content Security Policy voor een volledig statische site zonder user-input.
 *
 * Ontwerpkeuzes:
 * - `script-src`/`style-src` hebben `'unsafe-inline'` nodig: Next injecteert
 *   inline bootstrap-scripts en Tailwind/Next inline styles, en de site rendert
 *   statisch (geen nonce mogelijk zonder dynamische rendering te forceren).
 *   Dit is een bewuste trade-off: er is nergens reflected/stored user-input,
 *   dus de XSS-oppervlakte is nagenoeg nul. Alle overige directives staan strak.
 * - `'unsafe-eval'` en `ws:` alleen in development (React-debugging + HMR).
 * - Geen externe origins: fonts zijn self-hosted via next/font, geen next/image,
 *   geen externe scripts, geen iframes.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Twee jaar HTTPS afdwingen, incl. subdomeinen; klaar voor de HSTS-preloadlist.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Clickjacking-bescherming voor oudere browsers (moderne dekking: frame-ancestors).
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Schakel browser-features uit die de site niet gebruikt.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=(), payment=(), usb=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // Verberg de framework-fingerprint; geen SEO-signaal, wel netter.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
