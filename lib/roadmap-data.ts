// Roadmaps zijn richtinggevend, niet contractueel. Dateringen op publieke
// pagina's zijn indicatief, vooral voor items met status "gepland".

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
    id: "q2-2026-onderwijsbouwen-site",
    kwartaal: "Q2 2026",
    product: "onderwijsbouwen",
    titel: "Corporate site met drie initiatieven",
    beschrijving:
      "Herziene corporate site met volledige positionering van Corrigo, Actuales en Nexus. Nieuwe pagina's voor over, veiligheid en pers, plus data-gedreven roadmap en changelog.",
    status: "afgerond",
  },
  {
    id: "q2-2026-actuales-launch",
    kwartaal: "Q2 2026",
    product: "actuales",
    titel: "Actuales live",
    beschrijving:
      "Lancering van Actuales: wekelijkse lespakketten over actueel nieuws voor po en onderbouw vo, met presentatie, lesscript, werkbladen op drie niveaus, NT2-taalsteun, quiz en nieuwsfragment.",
    status: "afgerond",
  },
  // Q3 2026
  {
    id: "q3-2026-actuales-edities",
    kwartaal: "Q3 2026",
    product: "actuales",
    titel: "Doorlopende wekelijkse edities",
    beschrijving:
      "Wekelijkse lespakketten en extra edities bij groot nieuws, met doorontwikkeling op basis van feedback van docenten in po en onderbouw vo.",
    status: "in-uitvoering",
  },
  {
    id: "q3-2026-corrigo-uitrol",
    kwartaal: "Q3 2026",
    product: "corrigo",
    titel: "Uitrol en doorontwikkeling op middelbare scholen",
    beschrijving:
      "Verdere implementatie van Corrigo op middelbare scholen in Nederland, met verbeteringen aan nakijkkwaliteit, toetsbouw en schoolrapportage op basis van pilot-feedback.",
    status: "in-uitvoering",
  },
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
    id: "q4-2026-actuales-scholen",
    kwartaal: "Q4 2026",
    product: "actuales",
    titel: "Schoolbrede pilots en vakuitbreiding",
    beschrijving:
      "Pilots met scholen die Actuales structureel in het rooster willen inzetten, en uitbreiding van het aanbod naar aanvullende vakken en niveaus binnen po en onderbouw vo.",
    status: "gepland",
  },
  {
    id: "q4-2026-corrigo-scholen",
    kwartaal: "Q4 2026",
    product: "corrigo",
    titel: "Schoolbrede implementaties",
    beschrijving:
      "Implementatietrajecten voor scholen die Corrigo op vakgroep- of schoolniveau willen inzetten, inclusief begeleiding bij invoering.",
    status: "gepland",
  },
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

export const roadmapBijgewerkt = "2026-06-12";
