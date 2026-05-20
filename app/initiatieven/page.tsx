import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { DarkCta } from "@/components/dark-cta";
import { Pullquote } from "@/components/pullquote";
import { SectionHero } from "@/components/section-hero";
import { PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Initiatieven",
  description:
    "Corrigo en Nexus Academy zijn de twee initiatieven van Onderwijsbouwen. Voor docenten en voor leerlingen, twee ingangen, één samenhangende visie op onderwijs.",
  alternates: { canonical: "/initiatieven" },
  openGraph: {
    url: "/initiatieven",
    title: "Initiatieven | Onderwijsbouwen",
    description:
      "Corrigo en Nexus Academy zijn de twee initiatieven van Onderwijsbouwen. Voor docenten en voor leerlingen, twee ingangen, één samenhangende visie op onderwijs.",
  },
};

export default function InitiatievenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Initiatieven", path: "/initiatieven" },
        ]}
      />
      <SectionHero
        eyebrow="Wat we bouwen"
        digit="02"
        title={
          <>
            Twee initiatieven,
            <br />
            één visie.
          </>
        }
        lead="Onder Onderwijsbouwen werken we aan twee zelfstandige initiatieven die elk een specifieke laag van het Nederlandse onderwijssysteem aanpakken. Beide werken op zichzelf en zijn voor hun gebruikers direct beschikbaar via hun eigen website. Samen vormen ze de eerste twee bouwstenen van een bredere benadering die in de komende jaren stap voor stap zichtbaar wordt."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">03 / De portfolio</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Twee ingangen.
                <br />
                Hetzelfde fundament.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[19px] leading-[1.65] text-[#0a1a14]">
                Corrigo werkt aan de docentenkant van het stelsel: tijd,
                inzicht, kwaliteit van feedback. Nexus werkt aan de
                leerlingenkant: toegankelijkheid, gelijke kansen, persoonlijke
                begeleiding. Beide zijn ontwikkeld vanuit dezelfde
                overtuiging, dat goed onderwijs niet vraagt om radicale
                verandering, maar om gerichte interventies op de plekken waar
                het systeem het meest onder druk staat. Voor de bredere
                analyse achter dit werk, zie{" "}
                <Link
                  href="/onderwijsontwikkeling"
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  onze visie op onderwijsontwikkeling
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1B4D3E]">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-[#1B4D3E]">
              {PRODUCTS.map((product, idx) => (
                <article
                  key={product.domain}
                  className={`flex flex-col p-12 md:p-16 ${
                    idx === 0 ? "border-b border-[#1B4D3E] lg:border-b-0" : ""
                  }`}
                >
                  <p className="eyebrow text-[#5a5a52]">
                    {product.audience}
                  </p>
                  <h2 className="h-display-lg mt-6 text-[#1B4D3E]">
                    {product.name}
                  </h2>
                  <div className="mt-10 space-y-5 text-[17px] leading-[1.7] text-[#0a1a14]">
                    {idx === 0 ? (
                      <>
                        <p>
                          Corrigo is een AI-nakijktool die het corrigeren van
                          open vragen, essays en toetsen automatiseert. Het
                          werkt naast de docent, niet in plaats van hem. De
                          tool produceert consistente feedback per leerling,
                          levert inzicht in waar leerlingen vastlopen en geeft
                          daarmee een beeld van waar de klas als geheel staat.
                        </p>
                        <p>
                          Het belangrijkste effect: docenten krijgen gemiddeld
                          zes uur per week terug. Niet door werk over te nemen
                          dat zij liever zelf doen, maar door de taak die het
                          minst bijdraagt aan goed onderwijs uit hun werkweek
                          te halen. Corrigo wordt op dit moment gebruikt door
                          middelbare scholen door heel Nederland en is direct
                          beschikbaar voor scholen die een pilot willen
                          draaien of een implementatietraject willen starten.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          Nexus Academy is een AI-leercoach die op elk moment
                          beschikbaar is voor de leerling die hem nodig heeft.
                          Hij legt uit, vraagt door en denkt mee, op het
                          niveau van de leerling zelf. Anders dan een
                          traditionele bijles past Nexus zich aan aan het
                          tempo, de stof en de leerstijl van de individuele
                          gebruiker.
                        </p>
                        <p>
                          Het verschil met bestaande oplossingen zit niet in
                          de technologie alleen, maar in de toegankelijkheid.
                          Persoonlijke begeleiding hoort niet langer
                          afhankelijk te zijn van wat een ouder kan betalen.
                          Nexus is opgezet vanuit dat principe: dezelfde
                          kwaliteit van begeleiding voor wie thuis
                          ondersteuning kan kopen als voor wie dat niet kan.
                          Voor scholieren in elke fase, en voor studenten in
                          het hoger onderwijs.
                        </p>
                      </>
                    )}
                  </div>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-12 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#1B4D3E] transition-colors hover:text-[#c9a961]"
                  >
                    Bezoek {product.domain}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Pullquote eyebrow="04 / De aanpak">
        “We bouwen niet bovenop het systeem. We bouwen er ín.”
      </Pullquote>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-28 sm:py-36 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[#5a5a52]">05 / Hoe ze samenhangen</p>
            <h2 className="h-display-md mt-8 text-[#1B4D3E]">
              Gerichte interventies in een systeem onder druk.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-[19px] leading-[1.7] text-[#0a1a14]">
              Corrigo werkt aan de docentenkant van het stelsel: tijd,
              inzicht, kwaliteit van feedback. Nexus werkt aan de
              leerlingenkant: toegankelijkheid, gelijke kansen, persoonlijke
              begeleiding. Beide raken hetzelfde fundament vanuit twee
              verschillende ingangen, en beide zijn ontwikkeld vanuit dezelfde
              overtuiging: dat goed onderwijs niet vraagt om radicale
              verandering, maar om gerichte interventies op de plekken waar
              het systeem het meest onder druk staat.
            </p>
            <Link
              href="/projecten"
              className="group mt-12 inline-flex items-center gap-2 text-sm font-semibold text-[#1B4D3E] transition-colors hover:text-[#c9a961]"
            >
              Onze ontwikkelrichtingen
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
        eyebrow="06 / Aan tafel"
        title="Pilot, partnership, gesprek?"
        body="Voor scholen die Corrigo willen draaien, of organisaties die met Nexus willen meewerken: een mail is altijd het beste startpunt. Een uitgebreide pitch is daarbij niet nodig, een korte beschrijving van wat u voor ogen heeft volstaat om te bepalen of er een vervolg in zit."
        ctaLabel="contact@onderwijsbouwen.nl"
        ctaHref="mailto:contact@onderwijsbouwen.nl"
      />
    </>
  );
}
