import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Verberg de framework-fingerprint; geen SEO-signaal, wel netter.
  poweredByHeader: false,
};

export default nextConfig;
