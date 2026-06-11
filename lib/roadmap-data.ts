// TODO @gebruiker: verifieer en pas items aan voor go-live.
// Roadmaps zijn richtinggevend, niet contractueel. Wees voorzichtig met
// dateringen op publieke pagina's, vooral voor items die "gepland" zijn.

export type RoadmapStatus = "afgerond" | "in-uitvoering" | "gepland";
export type RoadmapProduct = "onderwijsbouwen" | "corrigo" | "actuales" | "nexus";

export type RoadmapItem = {
  id: string;
  kwartaal: string;
  product: RoadmapProduct;
  titel: string;
  beschrijving: string;
  status: RoadmapStatus;
};

export const roadmap: RoadmapItem[] = [
  // Q2 2026
  {
    id: "q2-2026-actuales-launch",
    kwartaal: "Q2 2026",
    product: "actuales",
    titel: "Actuales live",
    beschrijving:
      "Lancering van Actuales: wekelijkse lespakketten over actueel nieuws voor po en onderbouw vo, met presentatie, lesscript, werkbladen en quiz.",
    status: "afgerond",
  },
  {
    id: "q2-2026-onderwijsbouwen-site",
    kwartaal: "Q2 2026",
    product: "onderwijsbouwen",
    titel: "Nieuwe corporate site live",
    beschrijving:
      "Herziene corporate site met volledige positionering, drie nieuwe structurele pagina's (over, veiligheid, pers) en een data-gedreven roadmap en changelog.",
    status: "afgerond",
  },
  // Q3 2026
  {
    id: "q3-2026-nexus-beta",
    kwartaal: "Q3 2026",
    product: "nexus",
    titel: "Closed beta met pilot-scholen",
    beschrijving:
      "Eerste werkende versie van het Nexus-leerplatform live bij een beperkte groep pilot-scholen in de Haaglanden.",
    status: "in-uitvoering",
  },
  // Q4 2026
  {
    id: "q4-2026-nexus-publiek",
    kwartaal: "Q4 2026",
    product: "nexus",
    titel: "Nexus publieke lancering",
    beschrijving:
      "Bredere beschikbaarheid van Nexus voor het voortgezet onderwijs in Nederland.",
    status: "gepland",
  },
  {
    id: "q4-2026-onderwijsbouwen-uitbreiding",
    kwartaal: "Q4 2026",
    product: "onderwijsbouwen",
    titel: "Uitbreiding partnernetwerk",
    beschrijving:
      "Verdere verdieping van samenwerkingen met onderzoeks- en sectorpartners.",
    status: "gepland",
  },
];

export const roadmapBijgewerkt = "2026-06-11";
