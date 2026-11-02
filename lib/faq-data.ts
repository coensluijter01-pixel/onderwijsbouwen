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
      'Onderwijsbouwen is een Nederlandse onderwijssoftware-studio, gevestigd in Rotterdam. Wij ontwikkelen drie initiatieven voor primair en voortgezet onderwijs: <a href="https://corrigo.nl" target="_blank" rel="noopener noreferrer">Corrigo</a>, <a href="https://actuales.nl" target="_blank" rel="noopener noreferrer">Actuales</a> en <a href="https://nexusacademy.nl" target="_blank" rel="noopener noreferrer">Nexus</a>.',
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
  {
    id: "roadmap-changelog",
    categorie: "over-onderwijsbouwen",
    vraag: "Waar vind ik jullie plannen en mijlpalen?",
    antwoord:
      'Onze richting per kwartaal staat op de <a href="/roadmap">roadmap</a>. Afgeronde mijlpalen en releases vindt u in de <a href="/changelog">changelog</a>. Beide pagina\'s worden bijgewerkt zodra er nieuwe ontwikkelingen zijn.',
  },
  // Over onze initiatieven
  {
    id: "relatie-initiatieven",
    categorie: "producten",
    vraag: "Wat is de relatie tussen Onderwijsbouwen, Corrigo, Actuales en Nexus?",
    antwoord:
      'Onderwijsbouwen is het overkoepelende bedrijf. <a href="https://corrigo.nl" target="_blank" rel="noopener noreferrer">Corrigo</a>, <a href="https://actuales.nl" target="_blank" rel="noopener noreferrer">Actuales</a> en <a href="https://nexusacademy.nl" target="_blank" rel="noopener noreferrer">Nexus</a> zijn drie initiatieven die wij ontwikkelen, elk met een eigen doelgroep en website.',
  },
  {
    id: "verschil-initiatieven",
    categorie: "producten",
    vraag: "Wat is het verschil tussen Corrigo, Actuales en Nexus?",
    antwoord:
      "Corrigo is een nakijk- en toetsbouwtool voor docenten in het voortgezet onderwijs. Actuales levert wekelijks kant-en-klare lespakketten over actueel nieuws voor po en onderbouw vo. Nexus is een leerplatform in ontwikkeling voor leerlingen. Alle initiatieven delen hetzelfde uitgangspunt: de docent en de school houden de regie.",
  },
  {
    id: "wat-is-corrigo",
    categorie: "producten",
    vraag: "Wat is Corrigo?",
    antwoord:
      '<a href="https://corrigo.nl" target="_blank" rel="noopener noreferrer">Corrigo</a> is een AI-nakijktool en toetsbouwer voor docenten in het voortgezet onderwijs. De tool automatiseert het corrigeren van open vragen, essays en toetsen met consistente feedback, biedt een toetsbouwer met RTTI-analyse en levert inzicht in waar de klas vastloopt (gemiddeld 9 uur/week tijdsbesparing). Docenten behouden 100% de regie.',
  },
  {
    id: "is-corrigo-beschikbaar",
    categorie: "producten",
    vraag: "Is Corrigo al beschikbaar?",
    antwoord:
      'Ja. <a href="https://corrigo.nl" target="_blank" rel="noopener noreferrer">Corrigo</a> is live op corrigo.nl (Nederland) en corrigo.be (Vlaanderen), en wordt gebruikt op 25+ VO-scholen met 100+ docenten. Scholen die een pilot of implementatie willen bespreken, kunnen starten via corrigo.nl of mailen naar <a href="mailto:contact@onderwijsbouwen.nl">contact@onderwijsbouwen.nl</a>.',
  },
  {
    id: "wat-is-actuales",
    categorie: "producten",
    vraag: "Wat is Actuales?",
    antwoord:
      '<a href="https://actuales.nl" target="_blank" rel="noopener noreferrer">Actuales</a> maakt van elke grote nieuwsgebeurtenis een compleet lespakket: presentatie (PowerPoint & digibord-Klaslokaal), lesscript (50 min), werkbladen op drie niveaus met NT2-taalsteun, RTTI-quiz en nieuwsfragment met kijkvragen. Elke week een nieuwe editie, en bij groot nieuws binnen 24 uur een extra editie. Ontwikkeld voor po (groep 5 t/m 8) en vo-onderbouw over 8 vakgebieden (o.a. burgerschap conform WVO 2020).',
  },
  {
    id: "is-actuales-beschikbaar",
    categorie: "producten",
    vraag: "Is Actuales al beschikbaar?",
    antwoord:
      'Ja. <a href="https://actuales.nl" target="_blank" rel="noopener noreferrer">Actuales</a> is live en elke week beschikbaar voor docenten in po en onderbouw vo met 0 leerlingaccounts (100% AVG-proof). Scholen die Actuales schoolbreed willen inzetten of een pilot willen bespreken, kunnen mailen naar <a href="mailto:contact@onderwijsbouwen.nl">contact@onderwijsbouwen.nl</a>.',
  },
  {
    id: "wat-is-nexus",
    categorie: "producten",
    vraag: "Wat is Nexus?",
    antwoord:
      '<a href="https://nexusacademy.nl" target="_blank" rel="noopener noreferrer">Nexus Academy</a> is een Socratische AI-studiecoach en studieomgeving voor leerlingen in het voortgezet onderwijs en studenten. Het biedt persoonlijke begeleiding op basis van 544 SLO-curriculumdoelen en 400+ examens. Dankzij de gesloten leerlus met Corrigo worden toetsscores automatisch omgezet in gerichte oefenpaden.',
  },
  {
    id: "is-nexus-live",
    categorie: "producten",
    vraag: "Is Nexus al beschikbaar?",
    antwoord:
      'Nexus Academy is live in besloten pilotfase op <a href="https://nexusacademy.nl" target="_blank" rel="noopener noreferrer">nexusacademy.nl</a>. De actuele voortgang en uitrolfases vindt u op de <a href="/roadmap">roadmap</a>.',
  },
  // Privacy en veiligheid
  {
    id: "privacy-aanpak",
    categorie: "privacy-en-veiligheid",
    vraag: "Hoe gaan jullie om met privacy?",
    antwoord:
      'Wij zijn aangesloten bij het Privacyconvenant Onderwijs 4.0, Kennisnet Entree Federatie, SIVON (Modelverwerkersovereenkomst 4.0) en Edu-V. Op de pagina <a href="/veiligheid">Veiligheid</a> staat een actueel overzicht van onze sub-verwerkers en datastroom-waarborgen.',
  },
  {
    id: "buitenlandse-leveranciers",
    categorie: "privacy-en-veiligheid",
    vraag: "Werken jullie met buitenlandse leveranciers?",
    antwoord:
      'Onze hoofdopslag van onderwijsdata én de AI-verwerking (zoals AWS Bedrock EU in Frankfurt) vinden 100% plaats binnen de EU. Geen enkele klant- of leerlingdata wordt gebruikt voor het trainen van modellen. Het volledige verwerkingsoverzicht staat op <a href="/veiligheid">Veiligheid</a>.',
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
      'Voor het voortgezet onderwijs: neem contact op voor een Corrigo-pilot of implementatie via <a href="https://corrigo.nl" target="_blank" rel="noopener noreferrer">corrigo.nl</a> of mail naar <a href="mailto:contact@onderwijsbouwen.nl">contact@onderwijsbouwen.nl</a> met schoolnaam, aantal docenten en gewenste schaal. Voor po en onderbouw vo: start direct op <a href="https://actuales.nl" target="_blank" rel="noopener noreferrer">actuales.nl</a> of mail voor een schoolbrede pilot. Vermeld in beide gevallen wie er vanuit de school betrokken is.',
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
