// TODO @gebruiker: verifieer en pas items aan voor go-live.
// Changelog op onderwijsbouwen.nl toont organisatie- en high-level
// productmijlpalen. Diepe product-changelogs horen op de productsites zelf.

export type ChangelogType = "organisatie" | "corrigo" | "nexus";

export type ChangelogItem = {
  id: string;
  datum: string;
  type: ChangelogType;
  titel: string;
  beschrijving: string;
  link?: string;
};

export const changelog: ChangelogItem[] = [
  {
    id: "2026-05-corporate-site",
    datum: "2026-05-20",
    type: "organisatie",
    titel: "Vernieuwde corporate site live",
    beschrijving:
      "Onderwijsbouwen.nl volledig opnieuw opgezet met nieuwe pagina's voor over ons, veiligheid en pers, en een data-gedreven roadmap en changelog.",
  },
  {
    id: "2026-nexus-start",
    datum: "2026-01-15", // TODO @gebruiker: pas datum en tekst aan voor go-live
    type: "nexus",
    titel: "Nexus in ontwikkeling",
    beschrijving:
      "Start van de bouw van Nexus, het leerplatform voor leerlingen in het voortgezet onderwijs. Eerste werkende versie wordt later dit jaar getest met pilot-scholen.",
    link: "https://nexusacademy.nl",
  },
  {
    id: "2025-corrigo-uitrol",
    datum: "2025-09-01", // TODO @gebruiker: pas datum en tekst aan voor go-live
    type: "corrigo",
    titel: "Corrigo in gebruik bij meerdere scholen",
    beschrijving:
      "Corrigo wordt actief gebruikt door docenten op meerdere middelbare scholen in Nederland. De feedback uit deze pilots stuurt de doorontwikkeling.",
    link: "https://corrigo.nl",
  },
  {
    id: "2024-oprichting",
    datum: "2024-01-01", // TODO @gebruiker: pas aan naar exacte oprichtingsdatum
    type: "organisatie",
    titel: "Onderwijsbouwen opgericht",
    beschrijving:
      "Start van Onderwijsbouwen in Rotterdam (KvK 93598874).",
  },
];

export const changelogBijgewerkt = "2026-05-20";
