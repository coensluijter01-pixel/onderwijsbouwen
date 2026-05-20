import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { DarkCta } from "@/components/dark-cta";
import { Pullquote } from "@/components/pullquote";
import { SectionHero } from "@/components/section-hero";

export const metadata: Metadata = {
  title: "Projecten en richting",
  description:
    "Drie ontwikkelrichtingen: tijd voor docenten, toegang voor leerlingen, inzicht in het systeem. Wat Onderwijsbouwen bouwt en waar we naartoe werken.",
  alternates: { canonical: "/projecten" },
  openGraph: {
    url: "/projecten",
    title: "Projecten en richting | Onderwijsbouwen",
    description:
      "Drie ontwikkelrichtingen: tijd voor docenten, toegang voor leerlingen, inzicht in het systeem. Wat Onderwijsbouwen bouwt en waar we naartoe werken.",
  },
};

const directions = [
  {
    number: "01",
    title: "Tijd voor docenten",
    body: "De eerste richting van ons werk is gericht op het ontlasten van docenten. Werkdruk is geen luxeprobleem maar een directe oorzaak van uitval, vroegtijdige beëindiging van loopbanen en kwaliteitsverlies in de klas. Onze interventies in deze richting automatiseren of versimpelen de delen van het docentenwerk die het minst aan goed onderwijs bijdragen. Corrigo is daar het eerste antwoord op. Toekomstige initiatieven in deze richting werken aan andere repetitieve taken in het onderwijsproces.",
  },
  {
    number: "02",
    title: "Toegang voor leerlingen",
    body: "De tweede richting werkt aan de toegankelijkheid van persoonlijke begeleiding. Wat een leerling buiten schooltijd ontvangt aan ondersteuning, hoort niet langer afhankelijk te zijn van het inkomen van zijn ouders. Nexus Academy is hierin onze eerste interventie. We ontwikkelen door op deze richting met aanvullende tools en samenwerkingen die specifieke leerling-doelgroepen beter bedienen.",
  },
  {
    number: "03",
    title: "Inzicht in het systeem",
    body: "De derde richting is nog in ontwikkeling. We bouwen aan instrumenten die docenten, schoolleiders en beleidsmakers beter laten zien wat er in het onderwijs gebeurt: niet als monitoring of bestuurlijk toezicht, wel als basis voor goede beslissingen. Op systeemniveau is veel onbekend over wat werkt en wat niet, en daar willen we aan bijdragen.",
  },
];

export default function ProjectenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Projecten", path: "/projecten" },
        ]}
      />
      <SectionHero
        eyebrow="Onze richting"
        digit="03"
        title={
          <>
            Wat we bouwen,
            <br />
            en waarheen.
          </>
        }
        lead="Onderwijsbouwen is een groeiende organisatie. Onze huidige initiatieven, Corrigo en Nexus Academy, zijn de eerste twee bouwstenen van een breder portfolio dat in de komende jaren stap voor stap zichtbaar wordt. Wat we bouwen is geen verzameling losse producten maar een samenhangende benadering van de drie krachten die het Nederlandse onderwijs onder druk zetten."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">
                04 / Drie ontwikkelrichtingen
              </p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Drie sporen.
                <br />
                Eén richting.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[19px] leading-[1.7] text-[#0a1a14]">
                Ons werk loopt langs drie sporen die elkaar versterken. Elk
                spoor heeft een huidig initiatief en ruimte voor wat erna
                komt. Voor de bredere context waarin deze richtingen worden
                ontwikkeld, zie{" "}
                <Link
                  href="/onderwijsontwikkeling"
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  onze visie op de staat van het onderwijs
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-20 divide-y divide-[#1B4D3E] border-y border-[#1B4D3E]">
            {directions.map((dir) => (
              <article
                key={dir.number}
                className="grid grid-cols-1 gap-8 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20"
              >
                <div className="lg:col-span-4">
                  <span aria-hidden="true" className="stat-numeral text-[#1B4D3E]">
                    {dir.number}
                  </span>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="h-display-md text-[#1B4D3E]">{dir.title}</h3>
                  <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-[#0a1a14]">
                    {dir.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Pullquote eyebrow="05 / Tempo">
        “We hebben geen haast. Onderwijs is geen markt waarin het loont om
        snel te schalen ten koste van kwaliteit.”
      </Pullquote>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-28 sm:py-36 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[#5a5a52]">06 / De komende jaren</p>
            <h2 className="h-display-md mt-8 text-[#1B4D3E]">
              Langzaam en stevig.
              <br />
              Het systeem in.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <div className="space-y-6 text-[19px] leading-[1.7] text-[#0a1a14]">
              <p>
                Onze ambitie reikt verder dan twee initiatieven. We werken
                vanuit Nederland en richten ons in eerste instantie op de
                Nederlandse en West-Europese onderwijsmarkt. Op termijn
                breiden we uit naar Vlaanderen en de bredere Europese context,
                met behoud van de inhoudelijke standaard die we vanuit het
                Nederlandse onderwijs ontwikkelen.
              </p>
              <p>
                We hebben geen haast. Onderwijs is geen markt waarin het loont
                om snel te schalen ten koste van kwaliteit. We bouwen langzaam
                en stevig, met initiatieven die het systeem in willen, niet er
                bovenop. Dat is een keuze, en het is een principiële keuze.
              </p>
            </div>
            <Link
              href="/initiatieven"
              className="group mt-12 inline-flex items-center gap-2 text-sm font-semibold text-[#1B4D3E] transition-colors hover:text-[#c9a961]"
            >
              Bekijk de huidige initiatieven
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <DarkCta
        eyebrow="07 / Bouwen?"
        title="We zoeken partners die langer mee willen."
        body="Voor pilots, gezamenlijke projecten en strategische samenwerkingen werken we met partners die de inhoudelijke richting delen en de tijd nemen om iets stevigs op te bouwen. Een eerste gesprek volgt op een korte mail."
        ctaLabel="Neem contact op"
        ctaHref="/contact"
      />
    </>
  );
}
