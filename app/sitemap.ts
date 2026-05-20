import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

type Route = { path: string; priority: number };

const routes: Route[] = [
  { path: "", priority: 1 },
  { path: "/onderwijsontwikkeling", priority: 0.7 },
  { path: "/initiatieven", priority: 0.7 },
  { path: "/projecten", priority: 0.7 },
  { path: "/doelgroepen", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/over", priority: 0.7 },
  { path: "/veiligheid", priority: 0.7 },
  { path: "/pers", priority: 0.7 },
  { path: "/veelgestelde-vragen", priority: 0.7 },
  { path: "/roadmap", priority: 0.6 },
  { path: "/carriere", priority: 0.6 },
  { path: "/changelog", priority: 0.5 },
  { path: "/privacy", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
