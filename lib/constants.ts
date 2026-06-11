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
  "Onderwijsbouwen ontwikkelt technologie en kennis voor het Nederlandse onderwijs. We bouwen aan drie initiatieven: Corrigo voor docenten in het vo, Actuales voor actueel onderwijs, en Nexus Academy voor leerlingen.";

export const PRODUCTS: Product[] = [
  {
    name: "Corrigo",
    audience: "Voor docenten in het voortgezet onderwijs",
    shortDescription:
      "AI-nakijktool voor docenten in het voortgezet onderwijs. Geeft tijd terug aan de mensen die hem het hardst nodig hebben.",
    longDescription: [
      "Corrigo is een AI-nakijktool die het corrigeren van open vragen, essays en toetsen automatiseert. Het werkt naast de docent, niet in plaats van hem. De tool produceert consistente feedback per leerling, levert inzicht in waar leerlingen vastlopen en geeft daarmee een beeld van waar de klas als geheel staat.",
      "Het belangrijkste effect: docenten krijgen gemiddeld zes uur per week terug. Corrigo wordt op dit moment gebruikt door middelbare scholen door heel Nederland en is direct beschikbaar voor scholen die een pilot willen draaien of een implementatietraject willen starten.",
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
      "Wekelijkse lespakketten over actueel nieuws. Presentatie, lesscript, werkbladen op drie niveaus, quiz en nieuwsfragment, klaar voor digibord en print.",
    longDescription: [
      "Actuales maakt van elke grote nieuwsgebeurtenis een kant-en-klaar lespakket: presentatie, lesscript, werkbladen op drie niveaus met NT2-taalsteun, quiz en een nieuwsfragment met kijkvragen. Elke week een nieuwe editie, en bij groot nieuws een extra editie.",
      "Actuales is ontwikkeld voor groep 5 tot en met 8 en de onderbouw van het voortgezet onderwijs. Aardrijkskunde, rekenen, economie, geschiedenis, burgerschap en mentorles: dezelfde nieuwsgebeurtenis, uitgewerkt voor elk vak en elk niveau in de klas.",
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
      "AI-leercoach voor leerlingen en studenten. Persoonlijke begeleiding, op elk moment, voor iedereen.",
    longDescription: [
      "Nexus Academy is een AI-leercoach die op elk moment beschikbaar is voor de leerling die hem nodig heeft. Hij legt uit, vraagt door en denkt mee, op het niveau van de leerling zelf. Anders dan een traditionele bijles past Nexus zich aan aan het tempo, de stof en de leerstijl van de individuele gebruiker.",
      "Het verschil met bestaande oplossingen zit niet in de technologie alleen, maar in de toegankelijkheid. Persoonlijke begeleiding hoort niet langer afhankelijk te zijn van wat een ouder kan betalen. Nexus is opgezet vanuit dat principe: dezelfde kwaliteit van begeleiding voor wie thuis ondersteuning kan kopen als voor wie dat niet kan.",
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
