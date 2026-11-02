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
    id: "q3-2026-corrigo-be-launch",
    kwartaal: "Q3 2026",
    product: "corrigo",
    titel: "Corrigo Vlaanderen (corrigo.be) & EU-Bedrock",
    beschrijving:
      "Uitrol van corrigo.be voor Vlaanderen, overstap naar AWS Bedrock EU (Frankfurt) voor 100% EU-AI-verwerking, en aansluiting bij Privacyconvenant Onderwijs 4.0 en SIVON.",
    status: "afgerond",
  },
  {
    id: "q3-2026-actuales-edities",
    kwartaal: "Q3 2026",
    product: "actuales",
    titel: "Doorlopende wekelijkse edities & Lesweergave",
    beschrijving:
      "Wekelijkse lespakketten en extra edities bij groot nieuws (<24u live), met digibord-Klaslokaal en NT2-steunbladen over 8 vakgebieden.",
    status: "in-uitvoering",
  },
  {
    id: "q3-2026-corrigo-uitrol",
    kwartaal: "Q3 2026",
    product: "corrigo",
    titel: "Uitrol en doorontwikkeling op middelbare scholen",
    beschrijving:
      "Verdere implementatie van Corrigo op 25+ VO-scholen (100+ docenten), met 9 uur/week tijdsbesparing, RTTI-toetsbouwer en cijferexport naar Magister/Somtoday.",
    status: "in-uitvoering",
  },
  {
    id: "q3-2026-nexus-beta",
    kwartaal: "Q3 2026",
    product: "nexus",
    titel: "Nexus Academy pilotfase (nexusacademy.nl)",
    beschrijving:
      "Socratische AI-studiecoach live op nexusacademy.nl met 544 SLO-doelen, 400+ examens, crisisdetectie (X-Safety-Signal) en gesloten leerlus met Corrigo-toetsscores.",
    status: "in-uitvoering",
  },
  // Q4 2026
  {
    id: "q4-2026-actuales-scholen",
    kwartaal: "Q4 2026",
    product: "actuales",
    titel: "Schoolbrede licenties (2026–2027)",
    beschrijving:
      "Introductie van Docent- (€49/jaar) en Schoollicenties (€595/jaar) voor schooljaar 2026–2027, en uitbreiding van het lesaanbod naar aanvullende vakken.",
    status: "gepland",
  },
  {
    id: "q4-2026-corrigo-scholen",
    kwartaal: "Q4 2026",
    product: "corrigo",
    titel: "Schoolbrede implementaties",
    beschrijving:
      "Implementatietrajecten voor scholen die Corrigo op vakgroep- of schoolniveau inzetten, inclusief begeleiding en LVS-koppelingen.",
    status: "gepland",
  },
  {
    id: "q4-2026-nexus-publiek",
    kwartaal: "Q4 2026",
    product: "nexus",
    titel: "Nexus publieke uitrol & winkelschil",
    beschrijving:
      "Bredere beschikbaarheid van Nexus voor het voortgezet onderwijs en uitrol van de mobiele/desktop schil.",
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

export const roadmapBijgewerkt = "2026-08-11";
