export type Product = {
  name: string;
  audience: string;
  shortDescription: string;
  longDescription: string[];
  href: string;
  domain: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Corrigo",
    audience: "Voor docenten in het voortgezet onderwijs",
    shortDescription:
      "AI-nakijktool voor docenten in het voortgezet onderwijs. Geeft tijd terug aan de mensen die hem het hardst nodig hebben.",
    longDescription: [
      "Corrigo is een AI-nakijktool die het corrigeren van open vragen, essays en toetsen automatiseert. Het werkt naast de docent, niet in plaats van hem. Output: consistente feedback, inzicht in waar leerlingen vastlopen, en een paar uur per week terug in de week van de docent.",
      "Corrigo is geen experiment. Het wordt op dit moment gebruikt door middelbare scholen door heel Nederland, en het portfolio groeit gestaag.",
    ],
    href: "https://corrigo.nl",
    domain: "corrigo.nl",
  },
  {
    name: "Nexus Academy",
    audience: "Voor leerlingen en studenten",
    shortDescription:
      "AI-leercoach voor leerlingen en studenten. Persoonlijke begeleiding, op elk moment, voor iedereen.",
    longDescription: [
      "Nexus Academy is een AI-leercoach die op elk moment beschikbaar is. Hij legt uit, vraagt door, en denkt mee. Voor leerlingen zonder thuisondersteuning is Nexus de gelijke kans die ze in een ideale wereld zouden krijgen. Voor leerlingen mét ondersteuning is hij een serieuze sparringpartner.",
      "Nexus is opgezet vanuit één principe: persoonlijke begeleiding mag niet langer afhangen van wat ouders kunnen betalen.",
    ],
    href: "https://nexusacademy.nl",
    domain: "nexusacademy.nl",
  },
];

export const NAV_LINKS = [
  { label: "Visie", href: "/onderwijsontwikkeling" },
  { label: "Initiatieven", href: "/initiatieven" },
  { label: "Projecten", href: "/projecten" },
  { label: "Doelgroepen", href: "/doelgroepen" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  { label: "Privacyverklaring", href: "/privacy" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export const CONTACT_EMAIL = "contact@onderwijsbouwen.nl";
export const KVK_PLACEHOLDER = "Nog in te vullen";
export const VESTIGING = "Rotterdam";
export const SITE_URL = "https://onderwijsbouwen.nl";
