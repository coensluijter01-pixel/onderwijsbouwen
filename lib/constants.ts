export type Product = {
  name: string;
  audience: string;
  shortDescription: string;
  longDescription: string[];
  href: string;
  domain: string;
  hoverClass: string;
};

export const SITE_DESCRIPTION =
  "Onderwijsbouwen ontwikkelt onderwijssoftware en innovatieve initiatieven voor het Nederlandse onderwijs. Wij bouwen aan Corrigo (AI-nakijktool & toetsbouwer vo), Actuales (wekelijkse lespakketten actueel nieuws po & vo) en Nexus Academy (Socratische AI-leercoach voor leerlingen).";

export const PRODUCTS: Product[] = [
  {
    name: "Corrigo",
    audience: "Voor docenten in het voortgezet onderwijs",
    shortDescription:
      "AI-nakijktool en toetsbouwer voor docenten in het voortgezet onderwijs. Scan je stapel. Corrigo kijkt na.",
    longDescription: [
      "Corrigo automatiseert het corrigeren van open vragen, essays en toetsen en biedt een geïntegreerde toetsbouwer met RTTI-analyse en SLO-doelkoppeling. De tool werkt naast de docent, die 100% de regie en de eindbeoordeling behoudt.",
      "Docenten krijgen gemiddeld 9 uur per week terug op nakijk- en administratiewerk. Corrigo is actief op 25+ VO-scholen met 100+ docenten, is aangesloten bij Kennisnet Entree Federatie, SIVON (Modelverwerkersovereenkomst 4.0), Edu-V en voldoet aan het Privacyconvenant Onderwijs 4.0 met 100% EU-AI-verwerking (Frankfurt). Live op corrigo.nl en corrigo.be.",
    ],
    href: "https://corrigo.nl",
    domain: "corrigo.nl",
    hoverClass:
      "hover:bg-[#c9a961] hover:text-[#1B4D3E] hover:border-[#c9a961]",
  },
  {
    name: "Actuales",
    audience: "Voor docenten in basisonderwijs en onderbouw vo",
    shortDescription:
      "Maandagochtend in 5 minuten een complete les over het nieuws. Wekelijkse lespakketten voor groep 5 t/m 8 po en onderbouw vo.",
    longDescription: [
      "Actuales maakt van elke grote nieuwsgebeurtenis een kant-en-klaar lespakket: presentatie (PowerPoint & digibord-Klaslokaal), lesscript (50 min), werkbladen op drie niveaus met NT2-taalsteun, RTTI-quiz en een nieuwsfragment met kijkvragen. Bij groot nieuws verschijnt binnen 24 uur een extra editie.",
      "Ontwikkeld voor groep 5 t/m 8 en de onderbouw van het vo (vmbo, havo, vwo). Behandelt 8 vakgebieden waaronder aardrijkskunde, rekenen, geschiedenis, economie en burgerschap (conform WVO 2020). Volledig AVG-proof met 0 leerlingaccounts en 0 advertenties. Bekijk meer op actuales.nl.",
    ],
    href: "https://actuales.nl",
    domain: "actuales.nl",
    hoverClass:
      "hover:bg-[#4a7c9e] hover:text-[#f5f1e8] hover:border-[#4a7c9e]",
  },
  {
    name: "Nexus Academy",
    audience: "Voor leerlingen en studenten",
    shortDescription:
      "Socratische AI-studiecoach voor leerlingen en studenten. Zet lesstof en toetsresultaten om in persoonlijk inzicht en groei.",
    longDescription: [
      "Nexus Academy is een persoonlijke studieomgeving en AI-leercoach voor leerlingen in het voortgezet onderwijs (vmbo, havo, vwo) en studenten. De coach legt uit, vraagt door en begeleidt socratisch op het niveau van de leerling zelf, met ondersteuning voor eigen lesmateriaal, 544 SLO-curriculumdoelen en ruim 400 examens.",
      "Dankzij de gesloten leerlus met Corrigo worden toetscijfers direct omgezet in gepersonaliseerde oefenpaden. Met ingebouwde kindveiligheid en crisisdetectie (X-Safety-Signal) biedt Nexus hoogwaardige begeleiding voor elke leerling. Live in besloten pilotfase op nexusacademy.nl.",
    ],
    href: "https://nexusacademy.nl",
    domain: "nexusacademy.nl",
    hoverClass:
      "hover:bg-[#e8873a] hover:text-[#1B4D3E] hover:border-[#e8873a]",
  },
];

export const EXTERNAL_INITIATIVES = PRODUCTS.map((product) => ({
  label: product.name === "Nexus Academy" ? "Nexus" : product.name,
  href: product.href,
  hover: product.hoverClass,
}));

export const NAV_LINKS = [
  { num: "00", label: "Over", href: "/over" },
  { num: "01", label: "Visie", href: "/onderwijsontwikkeling" },
  { num: "02", label: "Initiatieven", href: "/initiatieven" },
  { num: "03", label: "Projecten", href: "/projecten" },
  { num: "04", label: "Doelgroepen", href: "/doelgroepen" },
  { num: "05", label: "Contact", href: "/contact" },
];

export const COMPANY_LINKS = [
  { label: "Over ons", href: "/over" },
  { label: "Veiligheid", href: "/veiligheid" },
  { label: "Pers", href: "/pers" },
  { label: "Contact", href: "/contact" },
];

export const MORE_LINKS = [
  { label: "Roadmap", href: "/roadmap" },
  { label: "Changelog", href: "/changelog" },
  { label: "Veelgestelde vragen", href: "/veelgestelde-vragen" },
  { label: "Carrière", href: "/carriere" },
];

export const FOOTER_LINKS = [
  { label: "Privacyverklaring", href: "/privacy" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export const CONTACT_EMAIL = "contact@onderwijsbouwen.nl";
export const KVK_NUMBER = "93598874";
export const VESTIGING = "Rotterdam";
export const SITE_URL = "https://onderwijsbouwen.nl";
