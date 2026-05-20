import type { Metadata } from "next";
import { Button } from "@/components/button";
import { DarkCta } from "@/components/dark-cta";
import { SectionHero } from "@/components/section-hero";

export const metadata: Metadata = {
  title: "Carrière",
  description:
    "Onderwijsbouwen breidt het netwerk uit in productontwikkeling, didactische advisering en partnerrelaties. Open sollicitaties zijn welkom.",
  alternates: { canonical: "/carriere" },
  openGraph: {
    url: "/carriere",
    title: "Carrière | Onderwijsbouwen",
    description:
      "Onderwijsbouwen breidt het netwerk uit in productontwikkeling, didactische advisering en partnerrelaties. Open sollicitaties zijn welkom.",
  },
};

const directions = [
  {
    number: "01",
    title: "Productontwikkeling",
    body: "Wij zoeken mensen die zelfstandig kunnen ontwerpen en bouwen aan onderwijssoftware, met aandacht voor de praktijk waarin docenten en leerlingen werken. Ervaring met TypeScript, moderne webframeworks en een gevoel voor toetsing of leerontwerp is een sterke pré.",
  },
  {
    number: "02",
    title: "Didactische advisering",
    body: "Wij werken met een netwerk van docent-adviseurs dat meedenkt over wat wij bouwen en hoe wij het uitrollen. Wij staan open voor docenten in het voortgezet onderwijs die af en toe willen meedenken, betaald of in ruil voor toegang tot wat wij maken.",
  },
  {
    number: "03",
    title: "Partner- en sectorrelaties",
    body: "Wij investeren in samenwerkingen met scholen, koepelorganisaties en onderzoeksinstellingen. Wij staan open voor mensen met een sterk netwerk in het Nederlandse onderwijs die ons helpen om relaties op te bouwen en te onderhouden.",
  },
];

const mailtoOpenSollicitatie =
  "mailto:contact@onderwijsbouwen.nl?subject=Open%20sollicitatie";

export default function CarrierePage() {
  return (
    <>
      <SectionHero
        eyebrow="09 / Carrière"
        digit="09"
        title={
          <>
            Wij groeien op basis
            <br />
            van inhoudelijke fit.
          </>
        }
        lead="Onderwijsbouwen is een kleine, toegewijde organisatie in groei. Wij breiden ons netwerk uit langs drie richtingen en staan open voor sterke kandidaten die zich daarin herkennen."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">10 / Drie richtingen</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Waar wij ons
                <br />
                netwerk uitbreiden.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                Wij hebben geen vaste vacaturepagina. In plaats daarvan
                beschrijven wij drie richtingen waarin samenwerking welkom is.
                Functietitels en uren zijn onderhandelbaar, fit is dat niet.
              </p>
            </div>
          </div>

          <div className="mt-20 divide-y divide-[#1B4D3E] border-y border-[#1B4D3E]">
            {directions.map((d) => (
              <article
                key={d.number}
                className="grid grid-cols-1 gap-8 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20"
              >
                <div className="lg:col-span-4">
                  <span
                    aria-hidden="true"
                    className="stat-numeral text-[#1B4D3E]"
                  >
                    {d.number}
                  </span>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="h-display-md text-[#1B4D3E]">{d.title}</h3>
                  <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-[#0a1a14]">
                    {d.body}
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
              <p className="eyebrow text-[#5a5a52]">11 / Hoe wij werken</p>
              <h2 className="h-display-md mt-8 text-[#1B4D3E]">
                Hybride van vorm,
                <br />
                inhoudelijk consistent.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <div className="space-y-6 text-[17px] leading-[1.7] text-[#0a1a14]">
                <p>
                  Wij hechten aan transparantie over wat wij zijn: een vroege
                  Nederlandse scale-up, klein in uitvoering, met een netwerk
                  van adviseurs en partners eromheen. Onze samenwerkingen zijn
                  vaak hybride. Sommige mensen werken op uurbasis met ons mee,
                  anderen zitten in een vast verband, en weer anderen denken
                  als partner mee op strategisch niveau. Wij kiezen op
                  inhoudelijke fit, niet op functietitel.
                </p>
                <p>
                  Voor productontwikkeling werken wij grotendeels remote, met
                  ankerdagen in Rotterdam en de Haaglanden. Wij verwachten
                  zelfstandigheid en een sterke schrijf- en denkvaardigheid,
                  omdat wij asynchroon werken.
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
              <p className="eyebrow text-[#5a5a52]">12 / Open sollicitatie</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Een korte mail
                <br />
                is genoeg.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                Stuur ons een korte mail met een beschrijving van wat je doet,
                waarin je je herkent in een van de drie richtingen, en hoe je
                denkt dat een samenwerking met Onderwijsbouwen er voor jou uit
                zou zien. Een cv is welkom maar niet vereist. Wij reageren
                binnen één week.
              </p>
              <div className="mt-10">
                <Button as="a" variant="primary" href={mailtoOpenSollicitatie}>
                  contact@onderwijsbouwen.nl →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DarkCta
        eyebrow="13 / Twijfel?"
        title="Niet zeker of het past?"
        body="Mail toch maar. Wij denken liever mee dan dat wij een goede match laten lopen."
        ctaLabel="contact@onderwijsbouwen.nl"
        ctaHref={mailtoOpenSollicitatie}
      />
    </>
  );
}
