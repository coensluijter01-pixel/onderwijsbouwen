import type { NextConfig } from "next";

// Security headers voor alle routes. Bewust géén Content-Security-Policy:
// de site rendert inline JSON-LD <script>-tags en heeft geen nonce-middleware,
// dus een strikte CSP zou die blokkeren. De onderstaande set dekt de
// belangrijkste risico's (clickjacking, MIME-sniffing, referrer-lekkage,
// gedwongen HTTPS) zonder iets te breken.
const securityHeaders = [
  {
    // Alleen HTTPS, 2 jaar, incl. subdomeinen. Veilig op Vercel (HTTPS-only).
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  // Verberg de framework-fingerprint; geen SEO-signaal, wel netter.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
