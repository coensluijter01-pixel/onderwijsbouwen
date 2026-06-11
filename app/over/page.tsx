import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { DarkCta } from "@/components/dark-cta";
import { SectionHero } from "@/components/section-hero";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Over Onderwijsbouwen",
  description:
    "Onderwijsbouwen is een Nederlandse onderwijssoftware-studio, gevestigd in Rotterdam. We bouwen aan tools en initiatieven voor het voortgezet onderwijs.",
  alternates: { canonical: "/over" },
  openGraph: {
    url: "/over",
    title: "Over Onderwijsbouwen",
    description:
      "Onderwijsbouwen is een Nederlandse onderwijssoftware-studio, gevestigd in Rotterdam. We bouwen aan tools en initiatieven voor het voortgezet onderwijs.",
  },
};

const principles = [
  {
    number: "01",
    title: "Docent in de regie",
    body: "We bouwen tools die de docent ondersteunen, niet vervangen. Beoordeling, didactische keuzes en pedagogische verantwoordelijkheid blijven waar ze horen: bij de school.",
  },
  {
    number: "02",
    title: "Privacy als uitgangspunt",
    body: "We zijn aangesloten bij het Privacyconvenant Onderwijs en werken alleen met sub-verwerkers die voldoen aan de strenge eisen van het Nederlandse onderwijs. Geen leerlinggegevens naar de Verenigde Staten zonder duidelijke noodzaak en grondslag.",
  },
  {
    number: "03",
    title: "Klein, toegewijd, in groei",
    body: "We hebben geen massa-uitrol nodig om relevant te zijn. We werken nauw samen met scholen in de Haaglanden en breiden ons netwerk uit op basis van inhoudelijke fit, niet op basis van omzet-doelen.",
  },
];

const affiliations = [
  {
    name: "Kennisnet Entree Federatie",
    body: "Standaard voor veilige toegang tot leermiddelen via school-identiteit.",
  },
  {
    name: "SIVON",
    body: "De inkoop- en samenwerkingscoöperatie van het funderend onderwijs.",
  },
  {
    name: "Privacyconvenant Onderwijs",
    body: "De afspraak tussen scholen en leveranciers over zorgvuldig omgaan met onderwijsgegevens.",
  },
  {
    name: "Edu-V",
    body: "De gezamenlijke standaard voor uitwisseling van onderwijsgegevens.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/over#coen-sluijter`,
  name: "Coen Sluijter",
  jobTitle: "Oprichter",
  worksFor: {
    "@id": `${SITE_URL}/#organization`,
  },
  url: `${SITE_URL}/over`,
  description:
    "Oprichter van Onderwijsbouwen en docent aardrijkskunde in het voortgezet onderwijs in de Haaglanden.",
  knowsAbout: [
    "Onderwijssoftware",
    "Aardrijkskunde",
    "Voortgezet onderwijs",
    "AI in het onderwijs",
  ],
};

export default function OverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Over", path: "/over" },
        ]}
      />

      <SectionHero
        eyebrow="01 / Over ons"
        digit="01"
        title={
          <>
            Een kleine studio
            <br />
            met een duidelijk plan.
          </>
        }
        lead="Onderwijsbouwen is een Nederlandse onderwijssoftware-studio, opgericht in 2024 en gevestigd in Rotterdam. We bouwen aan slimme tools voor het voortgezet onderwijs, met de docent altijd in de regie."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">02 / Wie we zijn</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Klein in uitvoering.
                <br />
                Groot in netwerk.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <div className="space-y-6 text-[17px] leading-[1.7] text-[#0a1a14]">
                <p>
                  Wij zijn een vroege Nederlandse scale-up in de
                  onderwijssoftware. Klein in uitvoering, met een netwerk van
                  docent-adviseurs en institutionele partners eromheen. Onze
                  focus ligt op het voortgezet onderwijs in Nederland, met als
                  startpunt het docent-perspectief.
                </p>
                <p>
                  Onze kring telt inmiddels meer dan tien betrokkenen, vanuit
                  productontwikkeling, didactische advisering en samenwerkingen
                  met partnerorganisaties. Daaronder Kennisnet, SIVON en het
                  Privacyconvenant Onderwijs. We investeren gericht in groei,
                  met de overtuiging dat goede onderwijssoftware ontstaat uit
                  goede gesprekken met de mensen die er dagelijks mee werken.
                </p>
                <p>
                  We bouwen aan drie initiatieven: Corrigo, een nakijk- en
                  toetsbouwtool voor docenten in het voortgezet onderwijs;
                  Actuales, wekelijkse lespakketten over actueel nieuws voor
                  po en onderbouw vo; en Nexus, een leerplatform in
                  ontwikkeling voor leerlingen. Alle initiatieven delen dezelfde
                  basis: respect voor de tijd van de gebruiker en de regie van
                  de school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="mb-16">
            <p className="eyebrow text-[#5a5a52]">03 / Oprichter</p>
            <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
              De aanleiding zat
              <br />
              in zes klassen aardrijkskunde.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div
                aria-hidden="true"
                className="flex aspect-[4/5] w-full max-w-md items-center justify-center bg-[#1B4D3E]/10"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1B4D3E]/60">
                  Foto Coen
                </span>
              </div>
              <p className="font-display mt-8 text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.05] tracking-tight text-[#1B4D3E]">
                Coen Sluijter
              </p>
              <p className="mt-3 text-sm text-[#1B4D3E]">
                Oprichter, Onderwijsbouwen
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52]">
                Docent aardrijkskunde · voortgezet onderwijs Haaglanden
              </p>
            </div>

            <div className="lg:col-span-7 lg:pt-2">
              <div className="space-y-6 text-[17px] leading-[1.7] text-[#0a1a14]">
                <p>
                  Ik gaf in mijn eerste docent-jaren les aan zes klassen
                  aardrijkskunde en kwam erachter dat ik niet bezig was met wat
                  ik leuk vond. Nakijken vrat mijn weekenden. Toetsen maken
                  voelde als rekenwerk. En als ik er goed naar keek: de tools
                  die ik moest gebruiken waren niet ontworpen door iemand die
                  ooit zes klassen tegelijk had nagekeken.
                </p>
                <p>
                  Onderwijsbouwen begon vanuit dat ongemak, niet vanuit een
                  product-idee. De vraag was: wat zou ik zelf willen gebruiken?
                  Het antwoord werd Corrigo. Een tool die nakijkt zoals een
                  docent het zou doen, maar dan in een fractie van de tijd.
                  Geen vervanger voor de docent, wel het einde van de
                  correctie-zondag.
                </p>
                <p>
                  Inmiddels werken we ook aan Actuales, dat actueel nieuws
                  terugbrengt in de klas met kant-en-klare lespakketten, en aan
                  Nexus, een leerplatform dat hetzelfde uitgangspunt toepast op
                  het leerling-perspectief. De rode draad blijft hetzelfde:
                  bouwen vanuit de praktijk, met de mensen die er dagelijks in
                  werken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">04 / Onze principes</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Drie regels.
                <br />
                Geen uitzonderingen.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                Onze principes staan niet in een document achter slot en
                grendel. Ze sturen elke keuze die we maken in productontwerp,
                samenwerkingen en groei.
              </p>
            </div>
          </div>

          <div className="mt-20 divide-y divide-[#1B4D3E] border-y border-[#1B4D3E]">
            {principles.map((p) => (
              <article
                key={p.number}
                className="grid grid-cols-1 gap-8 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20"
              >
                <div className="lg:col-span-4">
                  <span
                    aria-hidden="true"
                    className="stat-numeral text-[#1B4D3E]"
                  >
                    {p.number}
                  </span>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="h-display-md text-[#1B4D3E]">{p.title}</h3>
                  <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-[#0a1a14]">
                    {p.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">05 / Onze aansluitingen</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Binnen de structuren
                <br />
                van het onderwijs.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                We werken binnen de structuren van het Nederlandse onderwijs.
                Onze institutionele aansluitingen bepalen mee hoe we bouwen,
                met wie we samenwerken en welke standaarden we volgen. Voor
                een uitgebreid overzicht van onze sub-verwerkers, datalocatie
                en continuïteitsaanpak zie de pagina{" "}
                <Link
                  href="/veiligheid"
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  Veiligheid
                </Link>
                .
              </p>
            </div>
          </div>

          <ul className="mt-20 divide-y divide-[#1B4D3E] border-y border-[#1B4D3E]">
            {affiliations.map((a) => (
              <li
                key={a.name}
                className="grid grid-cols-1 items-baseline gap-6 py-10 lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-4">
                  <p className="font-display text-[clamp(1.5rem,2.5vw,1.875rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                    {a.name}
                  </p>
                </div>
                <p className="text-[17px] leading-[1.65] text-[#0a1a14] lg:col-span-8">
                  {a.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
          <p className="eyebrow text-[#5a5a52]">06 / Verder lezen</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <Link
              href="/pers"
              className="group flex flex-col border border-[#1B4D3E] p-8 transition-colors hover:bg-[#1B4D3E] hover:text-[#f5f1e8]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a5a52] transition-colors group-hover:text-[#f5f1e8]/70">
                Pers
              </p>
              <p className="font-display mt-4 text-[clamp(1.25rem,2vw,1.5rem)] font-medium leading-tight tracking-tight text-[#1B4D3E] transition-colors group-hover:text-[#f5f1e8]">
                Persinformatie en mediakit
              </p>
              <span
                aria-hidden="true"
                className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#1B4D3E] transition-colors group-hover:text-[#c9a961]"
              >
                Lees meer →
              </span>
            </Link>
            <Link
              href="/carriere"
              className="group flex flex-col border border-[#1B4D3E] p-8 transition-colors hover:bg-[#1B4D3E] hover:text-[#f5f1e8]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a5a52] transition-colors group-hover:text-[#f5f1e8]/70">
                Carrière
              </p>
              <p className="font-display mt-4 text-[clamp(1.25rem,2vw,1.5rem)] font-medium leading-tight tracking-tight text-[#1B4D3E] transition-colors group-hover:text-[#f5f1e8]">
                Wij groeien op inhoudelijke fit
              </p>
              <span
                aria-hidden="true"
                className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#1B4D3E] transition-colors group-hover:text-[#c9a961]"
              >
                Lees meer →
              </span>
            </Link>
            <Link
              href="/roadmap"
              className="group flex flex-col border border-[#1B4D3E] p-8 transition-colors hover:bg-[#1B4D3E] hover:text-[#f5f1e8]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a5a52] transition-colors group-hover:text-[#f5f1e8]/70">
                Roadmap
              </p>
              <p className="font-display mt-4 text-[clamp(1.25rem,2vw,1.5rem)] font-medium leading-tight tracking-tight text-[#1B4D3E] transition-colors group-hover:text-[#f5f1e8]">
                Waar wij aan bouwen
              </p>
              <span
                aria-hidden="true"
                className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#1B4D3E] transition-colors group-hover:text-[#c9a961]"
              >
                Lees meer →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <DarkCta
        eyebrow="07 / Aan tafel"
        title="Samenwerken of meer weten?"
        body="Onderwijsbouwen werkt samen met scholen, onderzoekers en partnerorganisaties. Een korte mail is altijd het beste startpunt."
        ctaLabel="Neem contact op"
        ctaHref="/contact"
      />
    </>
  );
}
