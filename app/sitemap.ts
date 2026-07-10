import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { changelog, changelogBijgewerkt } from "@/lib/changelog-data";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

type Route = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  // Waarheidsgetrouwe wijzigingsdatum. Ontbreekt deze, dan valt de route
  // terug op de laatste site-brede contentwijziging (changelogBijgewerkt).
  lastModified?: string;
};

// De changelog is de meest recente, aantoonbare wijziging op de site.
const latestChangelogDate = changelog[0]?.datum ?? changelogBijgewerkt;

const routes: Route[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/onderwijsontwikkeling", priority: 0.8, changeFrequency: "yearly" },
  { path: "/initiatieven", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projecten", priority: 0.7, changeFrequency: "yearly" },
  { path: "/doelgroepen", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/over", priority: 0.7, changeFrequency: "yearly" },
  { path: "/veiligheid", priority: 0.6, changeFrequency: "yearly" },
  { path: "/pers", priority: 0.5, changeFrequency: "yearly" },
  { path: "/veelgestelde-vragen", priority: 0.7, changeFrequency: "monthly" },
  {
    path: "/roadmap",
    priority: 0.6,
    changeFrequency: "monthly",
    lastModified: latestChangelogDate,
  },
  { path: "/carriere", priority: 0.5, changeFrequency: "yearly" },
  {
    path: "/changelog",
    priority: 0.5,
    changeFrequency: "monthly",
    lastModified: latestChangelogDate,
  },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastModified ?? changelogBijgewerkt,
    changeFrequency,
    priority,
  }));
}
