import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { DarkCta } from "@/components/dark-cta";
import { NumberedStat } from "@/components/numbered-stat";
import { Pullquote } from "@/components/pullquote";
import { AudienceRow, AudienceRowList } from "@/components/audience-row";
import {
  ProductColumnGrid,
  ProductColumnItem,
} from "@/components/product-column-grid";
import { SectionHero } from "@/components/section-hero";
import { PRODUCTS, SITE_DESCRIPTION } from "@/lib/constants";

const PRODUCT_COUNT = PRODUCTS.length;

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Onderwijsbouwen | Bouwen aan onderwijs",
    description: SITE_DESCRIPTION,
  },
};

const homeProducts = [
  {
    name: "Corrigo",
    audience: "Initiatief 01 · docenten vo",
    tagline: "AI-nakijktool voor het voortgezet onderwijs",
    stat: "6 uur per week",
    statLabel: "die docenten gemiddeld terugkrijgen",
    body: "Corrigo automatiseert het tijdrovende deel van docentenwerk: het corrigeren van open vragen, essays en toetsen, met consistente feedback per leerling. De tool werkt naast de docent, niet in plaats van hem. Het belangrijkste effect zit niet in de technologie maar in wat ermee teruggegeven wordt: zes uur per week, en het einde van de correctie-zondag.",
    href: PRODUCTS[0].href,
    domain: PRODUCTS[0].domain,
    linkLabel: "Pilot starten op corrigo.nl",
  },
  {
    name: "Actuales",
    audience: "Initiatief 02 · po & onderbouw vo",
    tagline: "Wekelijkse lespakketten over actueel nieuws",
    stat: "Elke week",
    statLabel: "een compleet lespakket, klaar voor de klas",
    body: "Actuales maakt van elke grote nieuwsgebeurtenis een kant-en-klaar lespakket: presentatie, lesscript, werkbladen op drie niveaus met NT2-taalsteun, quiz en een nieuwsfragment met kijkvragen. Maandagochtend in vijf minuten een complete les over het nieuws, voor groep 5 tot en met 8 en de onderbouw van het vo.",
    href: PRODUCTS[1].href,
    domain: PRODUCTS[1].domain,
    linkLabel: "Bekijk actuales.nl",
  },
  {
    name: "Nexus Academy",
    audience: "Initiatief 03 · leerlingen",
    tagline: "AI-leercoach voor leerlingen en studenten",
    stat: "24/7 beschikbaar",
    statLabel: "persoonlijke begeleiding, voor iedereen",
    body: "Nexus Academy biedt leerlingen toegang tot een persoonlijke leercoach die uitlegt, doorvraagt en meedenkt op het niveau van de leerling zelf. Het verschil met bestaande oplossingen zit niet alleen in de technologie, maar in de toegankelijkheid. Persoonlijke begeleiding hoort niet langer af te hangen van wat een ouder kan betalen.",
    href: PRODUCTS[2].href,
    domain: PRODUCTS[2].domain,
    linkLabel: "Begin met Nexus",
  },
];

const forces = [
  {
    number: "01",
    title: "Personeelstekort",
    body: "Het Nederlandse lerarentekort is geen incident maar een structureel verschijnsel dat in elke begrotingscyclus opnieuw wordt bevestigd. Het probleem is daarmee allang niet meer alleen kwantitatief: de werkdruk, de variatie aan taken die op een gemiddelde docent afkomen en de tijd die overblijft voor lesgeven maken het werk steeds zwaarder voor wie het wel doet.",
  },
  {
    number: "02",
    title: "AI en digitalisering",
    body: "De opkomst van generatieve AI verandert wat leerlingen leren, hoe ze leren, en hoe leraren hun werk doen. Scholen lopen daarin niet voorop, en dat hoeft ook niet, maar de kloof tussen de werkelijkheid waarin leerlingen opgroeien en de didactiek waarmee ze worden onderwezen wordt elk jaar groter. Negeren is geen optie. Reflexmatig adopteren ook niet.",
  },
  {
    number: "03",
    title: "Kansenongelijkheid",
    body: "De thuissituatie van een kind voorspelt nog steeds te veel van zijn schoolloopbaan. Wie thuis een rustige werkplek heeft, hulp kan kopen en ouders heeft die het schoolsysteem doorgronden, heeft een wezenlijk ander schooljaar dan wie dat niet heeft. Bijles is daarmee allang geen aanvulling meer maar een privilege geworden, en dat maakt het stelsel niet eerlijker, het maakt het ongelijker. Geen detail aan de marge, een ontwerpfout in het hart.",
  },
];

type AudienceCta = {
  text: string;
  href: string;
  external: boolean;
};

const audiences: { num: string; label: string; body: string; cta: AudienceCta }[] =
  [
    {
      num: "01",
      label: "Scholen",
      body: "Schoolleiders en bestuurders die hun docententeam willen ontlasten en hun leerlingen serieus willen nemen, kunnen via Corrigo direct aan de slag in het voortgezet onderwijs. Voor actueel nieuws in po en onderbouw vo is Actuales de directe ingang. Voor implementatietrajecten op grotere schaal is contact met onze organisatie het beste startpunt.",
      cta: {
        text: "Corrigo voor scholen",
        href: "https://corrigo.nl",
        external: true,
      },
    },
    {
      num: "02",
      label: "Docenten",
      body: "Docenten zijn het belangrijkste startpunt van ons werk. Onze initiatieven zijn ontwikkeld in nauw contact met leraren in po en vo, en blijven afhankelijk van hun feedback om relevant te blijven. Corrigo voor nakijken in het vo, Actuales voor actueel nieuws in po en onderbouw vo. Aanmeldingen voor pilot-trajecten worden actief gezocht.",
      cta: {
        text: "Probeer Corrigo",
        href: "https://corrigo.nl",
        external: true,
      },
    },
    {
      num: "03",
      label: "Ouders en leerlingen",
      body: "Voor ouders en leerlingen is Nexus Academy de directe ingang voor persoonlijke begeleiding zonder de prijskaart die er normaal aan hangt. Daarnaast staan we open voor gesprekken met ouder-initiatieven en organisaties die werken aan toegang tot kwalitatief onderwijs.",
      cta: {
        text: "Begin met Nexus",
        href: "https://nexusacademy.nl",
        external: true,
      },
    },
    {
      num: "04",
      label: "Beleid en onderzoek",
      body: "Stakeholders die werken aan onderwijsbeleid, onderzoek of innovatie op systeemniveau zijn welkom voor gesprek. Wij leveren geen beleid, wel inzicht vanuit onze ontwikkelpraktijk over wat werkt en wat de implicaties zijn van technologische ontwikkelingen voor het stelsel.",
      cta: {
        text: "Neem contact op",
        href: "/contact",
        external: false,
      },
    },
    {
      num: "05",
      label: "Partners",
      body: "Voor strategische samenwerkingen, investeerders en mediavragen is direct contact altijd welkom. We zijn selectief in samenwerkingen, maar open voor gesprekken die uitgaan van een gedeelde inhoudelijke benadering van het Nederlandse onderwijs.",
      cta: {
        text: "Stuur een mail",
        href: "mailto:contact@onderwijsbouwen.nl",
        external: false,
      },
    },
  ];

export default function Home() {
  return (
    <>
      <SectionHero
        eyebrow="01 / De stelling"
        size="tall"
        digit="01"
        title={
          <>
            Onderwijs is geen project.
            <br />
            Het is{" "}
            <span
              className="italic text-[#c9a961]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              infrastructuur
            </span>
            .
          </>
        }
        lead="Onderwijsbouwen werkt aan de structuren die het Nederlandse onderwijs dragen. Geen losse interventies, maar samenhangende technologie en kennis voor docenten, leerlingen, scholen en de organisaties die verantwoordelijk zijn voor de toekomst van het onderwijsstelsel."
        cta={
          <>
            <Button
              as="a"
              variant="primary"
              href={PRODUCTS[0].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bekijk Corrigo →
            </Button>
            <Button
              as="a"
              variant="ghost-light"
              href={PRODUCTS[1].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bekijk Actuales →
            </Button>
            <Button
              as="a"
              variant="ghost-light"
              href={PRODUCTS[2].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bekijk Nexus →
            </Button>
          </>
        }
      />

      <section
        id="initiatieven"
        className="border-t border-[#1B4D3E] bg-[#f5f1e8]"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">02 / De initiatieven</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Drie bouwstenen.
                <br />
                Eén systeem.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[19px] leading-[1.55] text-[#0a1a14]">
                Onderwijsbouwen werkt op dit moment aan drie zelfstandige
                initiatieven die elk een specifieke laag van het Nederlandse
                onderwijs aanpakken. Corrigo richt zich op de docentenkant in
                het voortgezet onderwijs, waar werkdruk en correctiewerk
                leraren kostbare tijd kosten. Actuales brengt actueel nieuws
                terug in de klas, met kant-en-klare lespakketten voor po en
                onderbouw vo. Nexus Academy werkt op de leerlingkant, waar
                persoonlijke begeleiding voor te veel kinderen afhankelijk is
                van het inkomen van hun ouders. Samen vormen ze de eerste drie
                bouwstenen van een bredere benadering van de structurele
                uitdagingen waar het Nederlandse onderwijs voor staat.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1B4D3E]">
          <div className="mx-auto w-full max-w-6xl">
            <ProductColumnGrid>
              {homeProducts.map((product, idx) => (
                <ProductColumnItem
                  key={product.domain}
                  as="a"
                  index={idx}
                  total={PRODUCT_COUNT}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer transition-colors duration-300 hover:bg-[#1B4D3E] hover:text-[#f5f1e8]"
                >
                  <p className="eyebrow break-words text-[#5a5a52] transition-colors group-hover:text-[#f5f1e8]/60">
                    {product.audience}
                  </p>
                  <h3 className="h-display-md mt-6 text-[#1B4D3E] transition-colors group-hover:text-[#f5f1e8]">
                    {product.name}
                  </h3>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52] transition-colors group-hover:text-[#f5f1e8]/60">
                    {product.tagline}
                  </p>

                  <div className="mt-10 border-l-2 border-[#c9a961] pl-5 transition-colors group-hover:border-[#c9a961]">
                    <p className="product-stat text-[#1B4D3E] transition-colors group-hover:text-[#c9a961]">
                      {product.stat}
                    </p>
                    <p className="mt-3 text-sm leading-[1.5] text-[#5a5a52] transition-colors group-hover:text-[#f5f1e8]/70">
                      {product.statLabel}
                    </p>
                  </div>

                  <p className="mt-10 text-[17px] leading-[1.65] text-[#0a1a14] transition-colors group-hover:text-[#f5f1e8]">
                    {product.body}
                  </p>
                  <span className="mt-auto pt-12 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#1B4D3E] transition-colors group-hover:text-[#c9a961]">
                    {product.linkLabel}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </ProductColumnItem>
              ))}
            </ProductColumnGrid>
          </div>
        </div>
      </section>

      <Pullquote
        eyebrow="03 / Waarom dit werk bestaat"
        cite={{ label: "Lees onze visie", href: "/onderwijsontwikkeling" }}
      >
        “Het Nederlandse onderwijs functioneert. Maar minder goed dan twintig
        jaar geleden, en het zal het de komende jaren steeds moeilijker
        krijgen. Dat is geen pessimisme, dat is rekenwerk.”
      </Pullquote>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[#5a5a52]">
                04 / De staat van het onderwijs
              </p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Drie krachten.
                <br />
                Allemaal tegelijk.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-2">
              <p className="text-[17px] leading-[1.65] text-[#0a1a14]">
                Geen ervan staat op zichzelf. Ze versterken elkaar, en op losse
                antwoorden hopen is geen plan. De drie krachten hieronder
                vormen samen het probleemveld waarop ons werk ingrijpt.
              </p>
              <Link
                href="/onderwijsontwikkeling"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1B4D3E] transition-colors hover:text-[#c9a961]"
              >
                De volledige analyse
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 border-y border-[#1B4D3E] lg:grid-cols-3 lg:divide-x lg:divide-[#1B4D3E]">
            {forces.map((force, idx) => (
              <div
                key={force.number}
                className={`px-0 py-12 lg:px-12 ${
                  idx < forces.length - 1
                    ? "border-b border-[#1B4D3E] lg:border-b-0"
                    : ""
                } ${idx === 0 ? "lg:pl-0" : ""} ${
                  idx === forces.length - 1 ? "lg:pr-0" : ""
                }`}
              >
                <NumberedStat
                  number={force.number}
                  title={force.title}
                  body={force.body}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">05 / Kies je ingang</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Welke rol
                <br />
                speelt u?
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[19px] leading-[1.55] text-[#0a1a14]">
                Onze initiatieven zijn zelfstandig. Wat u zoekt hangt af van
                wie u bent. Klik door naar het juiste startpunt.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1B4D3E]">
          <div className="mx-auto w-full max-w-6xl">
            <ProductColumnGrid>
              <ProductColumnItem
                as="a"
                index={0}
                total={PRODUCT_COUNT}
                href={PRODUCTS[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer transition-colors duration-300 hover:bg-[#c9a961] hover:text-[#1B4D3E]"
              >
                <p className="eyebrow text-[#5a5a52] transition-colors group-hover:text-[#1B4D3E]/75">
                  Docent of schoolleider in het vo?
                </p>
                <p className="entry-title mt-10 text-[#1B4D3E]">Corrigo</p>
                <p className="mt-8 text-[17px] leading-[1.65] text-[#0a1a14]">
                  Geef uw docententeam de tijd terug die in correctiewerk
                  verdwijnt. Op corrigo.nl kunt u een pilot aanvragen, de tool
                  in actie zien, of direct contact opnemen voor een
                  schoolbreed implementatietraject.
                </p>
                <span className="mt-auto pt-12 inline-flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E]">
                  Naar corrigo.nl
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </ProductColumnItem>

              <ProductColumnItem
                as="a"
                index={1}
                total={PRODUCT_COUNT}
                href={PRODUCTS[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer transition-colors duration-300 hover:bg-[#4a7c9e] hover:text-[#f5f1e8]"
              >
                <p className="eyebrow text-[#5a5a52] transition-colors group-hover:text-[#f5f1e8]/75">
                  Docent in po of onderbouw vo?
                </p>
                <p className="entry-title mt-10 text-[#1B4D3E] transition-colors group-hover:text-[#f5f1e8]">
                  Actuales
                </p>
                <p className="mt-8 text-[17px] leading-[1.65] text-[#0a1a14] transition-colors group-hover:text-[#f5f1e8]">
                  Elke week een compleet lespakket over het nieuws. Op
                  actuales.nl vindt u presentaties, lesscripts, werkbladen op
                  drie niveaus en quizzen, klaar voor digibord en print.
                </p>
                <span className="mt-auto pt-12 inline-flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E] transition-colors group-hover:text-[#f5f1e8]">
                  Naar actuales.nl
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </ProductColumnItem>

              <ProductColumnItem
                as="a"
                index={2}
                total={PRODUCT_COUNT}
                href={PRODUCTS[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer transition-colors duration-300 hover:bg-[#e8873a] hover:text-[#1B4D3E]"
              >
                <p className="eyebrow text-[#5a5a52] transition-colors group-hover:text-[#1B4D3E]/75">
                  Bent u ouder of leerling?
                </p>
                <p className="entry-title mt-10 text-[#1B4D3E]">Nexus</p>
                <p className="mt-8 text-[17px] leading-[1.65] text-[#0a1a14]">
                  Begin direct op nexusacademy.nl. Geen wachtlijsten, geen
                  dure bijles-overeenkomsten, wel persoonlijke begeleiding die
                  meegroeit met de leerling. Voor zowel scholieren als
                  studenten.
                </p>
                <span className="mt-auto pt-12 inline-flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E]">
                  Naar nexusacademy.nl
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </ProductColumnItem>
            </ProductColumnGrid>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-32">
          <div>
            <p className="eyebrow text-[#5a5a52]">06 / Het ecosysteem</p>
            <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
              Voor wie we bouwen.
            </h2>
          </div>

          <div className="mt-20">
          <AudienceRowList>
            {audiences.map((a) => (
              <li key={a.num}>
                <AudienceRow {...a} />
              </li>
            ))}
          </AudienceRowList>
          </div>
        </div>
      </section>

      <DarkCta
        eyebrow="07 / Direct contact"
        title={
          <>
            Selectief.
            <br />
            Wel serieus.
          </>
        }
        body="Onderwijsbouwen is een kleine organisatie met een grote ambitie. Dat betekent dat we selectief zijn in welke samenwerkingen we aangaan, maar wel serieus zijn over de samenwerkingen die we wel aangaan. Of het nu gaat om een schoolpilot, een onderzoeksvraag, een mediavraag of een investeringsgesprek: een direct gesprek is altijd het beste startpunt."
        ctaLabel="contact@onderwijsbouwen.nl"
        ctaHref="mailto:contact@onderwijsbouwen.nl"
      />
    </>
  );
}
