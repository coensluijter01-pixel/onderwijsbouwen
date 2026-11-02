// Changelog op onderwijsbouwen.nl toont organisatie- en high-level
// productmijlpalen. Diepe product-changelogs horen op de productsites zelf.

export type ChangelogType = "organisatie" | "corrigo" | "actuales" | "nexus";

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
    id: "2026-08-actualiseren-holding",
    datum: "2026-08-11",
    type: "organisatie",
    titel: "Geactualiseerde productinformatie live",
    beschrijving:
      "Onderwijsbouwen.nl geactualiseerd met actuele gegevens over Corrigo (NL & BE), Actuales (8 vakgebieden) en Nexus Academy (besloten pilotfase op nexusacademy.nl).",
  },
  {
    id: "2026-08-corrigo-be-bedrock",
    datum: "2026-08-10",
    type: "corrigo",
    titel: "Corrigo Vlaanderen & 100% EU AI-hosting",
    beschrijving:
      "Corrigo gelokaliseerd gelanceerd voor Vlaanderen via corrigo.be en overstap naar AWS Bedrock EU (Frankfurt) voor 100% verwerking en opslag binnen de EU.",
    link: "https://corrigo.be",
  },
  {
    id: "2026-06-drie-initiatieven",
    datum: "2026-06-12",
    type: "organisatie",
    titel: "Drie initiatieven op onderwijsbouwen.nl",
    beschrijving:
      "Actuales toegevoegd als derde initiatief op de corporate site. Homepage, initiatieven, FAQ, roadmap, changelog, pers en contact bijgewerkt naar hetzelfde detailniveau als Corrigo en Nexus.",
  },
  {
    id: "2026-06-actuales-launch",
    datum: "2026-06-11",
    type: "actuales",
    titel: "Actuales live",
    beschrijving:
      "Lancering van Actuales: wekelijkse lespakketten over actueel nieuws voor po en onderbouw vo. Presentatie, lesscript, werkbladen op drie niveaus met NT2-taalsteun, quiz en nieuwsfragment met kijkvragen, klaar voor digibord en print. Bij groot nieuws verschijnt een extra editie.",
    link: "https://actuales.nl",
  },
  {
    id: "2026-05-corporate-site",
    datum: "2026-05-20",
    type: "organisatie",
    titel: "Vernieuwde corporate site live",
    beschrijving:
      "Onderwijsbouwen.nl volledig opnieuw opgezet met pagina's voor over ons, veiligheid en pers, en een data-gedreven roadmap en changelog.",
  },
  {
    id: "2026-nexus-start",
    datum: "2026-01-15",
    type: "nexus",
    titel: "Nexus in ontwikkeling",
    beschrijving:
      "Start van de bouw van Nexus, het leerplatform voor leerlingen in het voortgezet onderwijs. Eerste werkende versie wordt in 2026 getest met pilot-scholen in de Haaglanden.",
    link: "https://nexusacademy.nl",
  },
  {
    id: "2025-corrigo-uitrol",
    datum: "2025-09-01",
    type: "corrigo",
    titel: "Corrigo in gebruik bij meerdere scholen",
    beschrijving:
      "Corrigo wordt actief gebruikt door docenten op meerdere middelbare scholen in Nederland. De feedback uit deze pilots stuurt de doorontwikkeling van nakijkkwaliteit en toetsbouw.",
    link: "https://corrigo.nl",
  },
  {
    id: "2024-oprichting",
    datum: "2024-01-01",
    type: "organisatie",
    titel: "Onderwijsbouwen opgericht",
    beschrijving:
      "Start van Onderwijsbouwen in Rotterdam (KvK 93598874), opgericht door Coen Sluijter. Eerste ontwikkeling richt zich op het ontlasten van docenten in het voortgezet onderwijs.",
  },
];

export const changelogBijgewerkt = "2026-08-11";
