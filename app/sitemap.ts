import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/onderwijsontwikkeling",
    "/initiatieven",
    "/projecten",
    "/doelgroepen",
    "/contact",
    "/over",
    "/veiligheid",
    "/pers",
    "/privacy",
  ];

  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
