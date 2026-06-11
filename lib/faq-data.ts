// TODO @gebruiker: bekijk en verfijn antwoorden voor go-live.
// FAQ-categorieën spiegelen de structuur van de site.

export type FaqCategorie =
  | "over-onderwijsbouwen"
  | "producten"
  | "privacy-en-veiligheid"
  | "samenwerken"
  | "werken-bij";

export type FaqItem = {
  id: string;
  categorie: FaqCategorie;
  vraag: string;
  antwoord: string;
};

export const faqCategorieLabels: Record<FaqCategorie, string> = {
  "over-onderwijsbouwen": "Over Onderwijsbouwen",
  producten: "Over onze initiatieven",
  "privacy-en-veiligheid": "Privacy en veiligheid",
  samenwerken: "Samenwerken",
  "werken-bij": "Werken bij",
};

export const faqCategorieVolgorde: FaqCategorie[] = [
  "over-onderwijsbouwen",
  "producten",
  "privacy-en-veiligheid",
  "samenwerken",
  "werken-bij",
];

export const faq: FaqItem[] = [
  // Over Onderwijsbouwen
  {
    id: "wat-is-onderwijsbouwen",
    categorie: "over-onderwijsbouwen",
    vraag: "Wat is Onderwijsbouwen?",
    antwoord:
      "Onderwijsbouwen is een Nederlandse onderwijssoftware-studio, gevestigd in Rotterdam. Wij ontwikkelen tools en initiatieven voor het voortgezet onderwijs.",
  },
  {
    id: "wanneer-opgericht",
    categorie: "over-onderwijsbouwen",
    vraag: "Wanneer is Onderwijsbouwen opgericht?",
    antwoord:
      "Onderwijsbouwen is in 2024 opgericht en gevestigd in Rotterdam (KvK 93598874).",
  },
  {
    id: "wie-zit-erachter",
    categorie: "over-onderwijsbouwen",
    vraag: "Wie zit erachter?",
    antwoord:
      'Onderwijsbouwen is opgericht door Coen Sluijter, docent aardrijkskunde in de Haaglanden. We werken met een netwerk van docent-adviseurs en institutionele partners. Meer over de oprichter staat op de <a href="/over">over-pagina</a>.',
  },
  {
    id: "waar-gevestigd",
    categorie: "over-onderwijsbouwen",
    vraag: "Waar zijn jullie gevestigd?",
    antwoord:
      "Onze vestiging staat in Rotterdam. We werken samen met scholen in de Haaglanden en daarbuiten.",
  },
  // Over onze initiatieven
  {
    id: "relatie-initiatieven",
    categorie: "producten",
    vraag: "Wat is de relatie tussen Onderwijsbouwen, Corrigo, Actuales en Nexus?",
    antwoord:
      'Onderwijsbouwen is het overkoepelende bedrijf. <a href="https://corrigo.nl">Corrigo</a>, <a href="https://actuales.nl">Actuales</a> en <a href="https://nexusacademy.nl">Nexus</a> zijn drie initiatieven die wij ontwikkelen, elk met een eigen doelgroep en website.',
  },
  {
    id: "verschil-initiatieven",
    categorie: "producten",
    vraag: "Wat is het verschil tussen Corrigo, Actuales en Nexus?",
    antwoord:
      "Corrigo is een nakijk- en toetsbouwtool voor docenten in het voortgezet onderwijs. Actuales levert wekelijks kant-en-klare lespakketten over actueel nieuws voor po en onderbouw vo. Nexus is een leerplatform in ontwikkeling voor leerlingen. Alle initiatieven delen hetzelfde uitgangspunt: de docent en de school houden de regie.",
  },
  {
    id: "wat-is-actuales",
    categorie: "producten",
    vraag: "Wat is Actuales?",
    antwoord:
      '<a href="https://actuales.nl">Actuales</a> maakt van elke grote nieuwsgebeurtenis een compleet lespakket: presentatie, lesscript, werkbladen op drie niveaus met NT2-taalsteun, quiz en een nieuwsfragment met kijkvragen. Elke week een nieuwe editie, voor groep 5 tot en met 8 en de onderbouw van het vo.',
  },
  {
    id: "is-nexus-live",
    categorie: "producten",
    vraag: "Is Nexus al beschikbaar?",
    antwoord:
      'Nexus is in ontwikkeling en wordt in fases uitgerold. De actuele status staat op de <a href="/roadmap">roadmap</a>.',
  },
  // Privacy en veiligheid
  {
    id: "privacy-aanpak",
    categorie: "privacy-en-veiligheid",
    vraag: "Hoe gaan jullie om met privacy?",
    antwoord:
      'Wij zijn aangesloten bij het Privacyconvenant Onderwijs, Kennisnet Entree Federatie, SIVON en Edu-V. Op de pagina <a href="/veiligheid">Veiligheid</a> staat een actueel overzicht van onze sub-verwerkers en hoe we omgaan met datalocatie en bewaartermijnen.',
  },
  {
    id: "buitenlandse-leveranciers",
    categorie: "privacy-en-veiligheid",
    vraag: "Werken jullie met buitenlandse leveranciers?",
    antwoord:
      'Onze hoofdopslag van onderwijsdata staat in de EU. Voor AI-verwerking schakelen wij ook leveranciers buiten de EU in, met standaard contractuele bepalingen en zonder dat klantdata wordt gebruikt voor het trainen van modellen. Het volledige overzicht staat op <a href="/veiligheid">Veiligheid</a>.',
  },
  {
    id: "verwerkersovereenkomst",
    categorie: "privacy-en-veiligheid",
    vraag: "Hebben jullie een verwerkersovereenkomst?",
    antwoord:
      'Ja, per product is er een verwerkersovereenkomst beschikbaar. Vraag deze op via <a href="mailto:contact@onderwijsbouwen.nl">contact@onderwijsbouwen.nl</a>.',
  },
  // Samenwerken
  {
    id: "pilot-starten",
    categorie: "samenwerken",
    vraag: "Hoe kan mijn school een pilot starten?",
    antwoord:
      'Wij werken graag samen met scholen die actief willen meedenken in de ontwikkeling. Neem contact op via <a href="mailto:contact@onderwijsbouwen.nl">contact@onderwijsbouwen.nl</a> en vermeld om welk product het gaat en wie er vanuit de school betrokken is.',
  },
  {
    id: "onderzoek-samenwerking",
    categorie: "samenwerken",
    vraag: "Werken jullie samen met onderzoekers?",
    antwoord:
      'Ja. Wij staan open voor samenwerking met onderwijs- en onderzoeksinstellingen. Stuur een korte projectbeschrijving naar <a href="mailto:contact@onderwijsbouwen.nl">contact@onderwijsbouwen.nl</a>.',
  },
  {
    id: "partner-aanvraag",
    categorie: "samenwerken",
    vraag: "Hoe word ik partner?",
    antwoord:
      "Wij zijn selectief in partnerschappen en kiezen op inhoudelijke fit. Beschrijf in een mail kort wat je voor ogen hebt en waar je organisatie aan werkt.",
  },
  // Werken bij
  {
    id: "vacatures",
    categorie: "werken-bij",
    vraag: "Hebben jullie vacatures?",
    antwoord:
      'Wij hebben geen vaste vacaturepagina, maar staan open voor sterke kandidaten. Zie de pagina <a href="/carriere">Carrière</a> voor de richtingen waarin wij ons netwerk uitbreiden.',
  },
];
