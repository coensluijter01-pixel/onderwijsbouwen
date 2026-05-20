import type { Metadata } from "next";
import { CopyButton } from "@/components/copy-button";
import { DarkCta } from "@/components/dark-cta";
import { SectionHero } from "@/components/section-hero";
import { CONTACT_EMAIL, KVK_NUMBER, VESTIGING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pers",
  description:
    "Persinformatie, boilerplate, woordmerken en perscontact voor Onderwijsbouwen, Corrigo en Nexus.",
  alternates: { canonical: "/pers" },
  openGraph: {
    url: "/pers",
    title: "Pers | Onderwijsbouwen",
    description:
      "Persinformatie, boilerplate, woordmerken en perscontact voor Onderwijsbouwen, Corrigo en Nexus.",
  },
};

const boilerplateShort =
  "Onderwijsbouwen is een Nederlandse onderwijssoftware-studio, gevestigd in Rotterdam. Onderwijsbouwen ontwikkelt tools en initiatieven voor het voortgezet onderwijs, waaronder Corrigo (AI-nakijktool voor docenten) en Nexus (leerplatform voor leerlingen). Opgericht in 2024 door Coen Sluijter, docent aardrijkskunde.";

const boilerplateLong =
  "Onderwijsbouwen is een Nederlandse onderwijssoftware-studio die werkt aan slimme tools voor het voortgezet onderwijs. Het bedrijf is in 2024 opgericht door Coen Sluijter, docent aardrijkskunde in de Haaglanden, en is gevestigd in Rotterdam (KvK 93598874). Onderwijsbouwen ontwikkelt twee initiatieven: Corrigo, een AI-nakijk- en toetsbouwtool voor docenten in het voortgezet onderwijs, en Nexus, een leerplatform in ontwikkeling voor leerlingen. Beide initiatieven delen hetzelfde uitgangspunt: de docent en de school in de regie houden, en bouwen vanuit de praktijk van het Nederlandse onderwijs. Onderwijsbouwen werkt samen met scholen in de Haaglanden en is aangesloten bij Kennisnet Entree Federatie, SIVON, het Privacyconvenant Onderwijs en Edu-V. Het bedrijf is klein, toegewijd en in groei, met een netwerk van docent-adviseurs en institutionele partners.";

const quickFacts = [
  { label: "Opgericht", value: "2024" },
  { label: "Vestiging", value: VESTIGING },
  { label: "KvK", value: KVK_NUMBER },
  {
    label: "Initiatieven",
    value: "Corrigo (live), Nexus (in ontwikkeling)",
  },
  { label: "Doelgroep", value: "Voortgezet onderwijs in Nederland" },
  {
    label: "Aansluitingen",
    value:
      "Kennisnet Entree Federatie, SIVON, Privacyconvenant Onderwijs, Edu-V",
  },
  { label: "Oprichter", value: "Coen Sluijter" },
  { label: "Contact", value: CONTACT_EMAIL },
];

const colors = [
  { name: "Brunswick Green", hex: "#1B4D3E", textColor: "#f5f1e8" },
  { name: "Cream", hex: "#f5f1e8", textColor: "#1B4D3E" },
  { name: "Goud", hex: "#c9a961", textColor: "#1B4D3E" },
];

export default function PersPage() {
  return (
    <>
      <SectionHero
        eyebrow="03 / Pers"
        digit="03"
        title={
          <>
            Persinformatie
            <br />
            en mediakit.
          </>
        }
        lead="Voor pers, onderzoekers en mediavragen over Onderwijsbouwen, Corrigo en Nexus."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="mb-16">
            <p className="eyebrow text-[#5a5a52]">04 / Perscontact</p>
            <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
              Eén adres,
              <br />
              één werkdag.
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
              <p className="font-display mt-8 text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                Coen Sluijter
              </p>
              <p className="mt-2 text-sm text-[#1B4D3E]">
                Oprichter, Onderwijsbouwen
              </p>
            </div>

            <div className="lg:col-span-7 lg:pt-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-display block break-words text-[clamp(1.875rem,5vw,3.75rem)] font-medium leading-[0.95] tracking-tight text-[#1B4D3E] underline-offset-[8px] hover:text-[#c9a961] hover:underline"
                style={{ fontVariationSettings: "'opsz' 96" }}
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-10 max-w-md text-[17px] leading-[1.65] text-[#0a1a14]">
                Voor pers-aanvragen graag titel publicatie, deadline en korte
                vraagstelling vermelden. We reageren binnen één werkdag.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">05 / Boilerplate</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Twee versies,
                <br />
                klaar voor publicatie.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                Voor korte vermeldingen en langere achtergrondstukken. Klik op
                kopiëren of selecteer de tekst direct uit het blok.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <article className="flex flex-col border border-[#1B4D3E] bg-[#1B4D3E]/[0.03] p-8 sm:p-10">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E]">
                  Kort · circa 50 woorden
                </p>
                <CopyButton text={boilerplateShort} />
              </div>
              <p className="mt-8 select-all text-[17px] leading-[1.7] text-[#0a1a14]">
                {boilerplateShort}
              </p>
            </article>

            <article className="flex flex-col border border-[#1B4D3E] bg-[#1B4D3E]/[0.03] p-8 sm:p-10">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E]">
                  Lang · circa 150 woorden
                </p>
                <CopyButton text={boilerplateLong} />
              </div>
              <p className="mt-8 select-all text-[15px] leading-[1.7] text-[#0a1a14]">
                {boilerplateLong}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">06 / Quick facts</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                In één
                <br />
                oogopslag.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                Voor de feitelijke regels: opgericht, vestiging, KvK,
                initiatieven en aansluitingen. Voor verdieping zie de
                boilerplate hierboven of onze{" "}
                <a
                  href="/over"
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  /over
                </a>
                -pagina.
              </p>
            </div>
          </div>

          <dl className="mt-20 divide-y divide-[#1B4D3E] border-y border-[#1B4D3E]">
            {quickFacts.map((f) => (
              <div
                key={f.label}
                className="grid grid-cols-1 items-baseline gap-4 py-6 lg:grid-cols-12 lg:gap-12"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52] lg:col-span-4">
                  {f.label}
                </dt>
                <dd className="text-[17px] leading-[1.6] text-[#0a1a14] lg:col-span-8">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">
                07 / Woordmerk en kleurpalet
              </p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Drie kleuren.
                <br />
                Eén woordmerk.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                Voor mediakit-downloads (woordmerken, logo&apos;s, screenshots)
                graag mailen naar{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  {CONTACT_EMAIL}
                </a>
                . Hieronder de officiële kleuren van Onderwijsbouwen.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {colors.map((c) => (
              <div key={c.hex} className="flex flex-col">
                <div
                  className="flex aspect-square w-full items-end justify-start border border-[#1B4D3E] p-6"
                  style={{ backgroundColor: c.hex }}
                >
                  <span
                    className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: c.textColor }}
                  >
                    {c.hex.toUpperCase()}
                  </span>
                </div>
                <p className="mt-4 font-display text-[20px] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                  {c.name}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52]">
                  {c.hex}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCta
        eyebrow="08 / Aan tafel"
        title="Bezig met een artikel of onderzoek?"
        body="Voor pers-aanvragen en onderzoeksvragen reageren we binnen één werkdag."
        ctaLabel={CONTACT_EMAIL}
        ctaHref={`mailto:${CONTACT_EMAIL}`}
      />
    </>
  );
}
