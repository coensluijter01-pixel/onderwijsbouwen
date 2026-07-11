import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/constants";

type Crumb = {
  name: string;
  path: string;
};

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  return <JsonLd data={jsonLd} />;
}
