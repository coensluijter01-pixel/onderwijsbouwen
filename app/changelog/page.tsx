import type { Metadata } from "next";
import Link from "next/link";
import { SectionHero } from "@/components/section-hero";
import {
  changelog,
  changelogBijgewerkt,
  type ChangelogType,
} from "@/lib/changelog-data";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Mijlpalen en releases van Onderwijsbouwen, Corrigo en Nexus.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    url: "/changelog",
    title: "Changelog | Onderwijsbouwen",
    description:
      "Mijlpalen en releases van Onderwijsbouwen, Corrigo en Nexus.",
  },
};

const typeLabel: Record<ChangelogType, string> = {
  organisatie: "Organisatie",
  corrigo: "Corrigo",
  nexus: "Nexus",
};

const typeStyles: Record<ChangelogType, string> = {
  organisatie: "bg-[#1B4D3E]/10 text-[#1B4D3E]",
  corrigo: "bg-[#c9a961]/20 text-[#1B4D3E]",
  nexus: "bg-black/5 text-black/70",
};

const maanden = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  "juni",
  "juli",
  "augustus",
  "september",
  "oktober",
  "november",
  "december",
];

function formatDatum(iso: string): string {
  const [y, m, d] = iso.split("-");
  const dag = parseInt(d, 10);
  const maand = maanden[parseInt(m, 10) - 1];
  return `${dag} ${maand} ${y}`;
}

export default function ChangelogPage() {
  const items = [...changelog].sort((a, b) =>
    a.datum > b.datum ? -1 : a.datum < b.datum ? 1 : 0,
  );

  return (
    <>
      <SectionHero
        eyebrow="07 / Changelog"
        digit="07"
        title={
          <>
            Wat er
            <br />
            is gebeurd.
          </>
        }
        lead="Mijlpalen van Onderwijsbouwen, Corrigo en Nexus, gesorteerd op datum. Voor dieper-technische product-releases verwijzen wij naar de changelogs van de productsites zelf."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 pt-16 sm:pt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52]">
            Laatste update: {changelogBijgewerkt}
          </p>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">08 / Tijdlijn</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Van nieuw
                <br />
                naar oud.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                Wij houden het kort: enkele regels per mijlpaal en, waar
                relevant, een directe link naar het betreffende initiatief.
                Voor wat eraan komt zie de{" "}
                <Link
                  href="/roadmap"
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  roadmap
                </Link>
                .
              </p>
            </div>
          </div>

          <ol className="mt-16 relative border-l border-[#1B4D3E]/30 pl-6 sm:pl-10">
            {items.map((item) => (
              <li
                key={item.id}
                className="relative pb-14 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border border-[#1B4D3E] bg-[#f5f1e8] sm:-left-[11px]"
                />
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-3">
                    <p className="font-display text-[clamp(1.125rem,2vw,1.375rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                      {formatDatum(item.datum)}
                    </p>
                    <span
                      className={`mt-3 inline-flex items-center px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${typeStyles[item.type]}`}
                    >
                      {typeLabel[item.type]}
                    </span>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="font-display text-[clamp(1.25rem,2.25vw,1.625rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                      {item.titel}
                    </h3>
                    <p className="mt-4 max-w-3xl text-[17px] leading-[1.7] text-[#0a1a14]">
                      {item.beschrijving}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-5 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E] transition-colors hover:text-[#c9a961]"
                      >
                        Naar {typeLabel[item.type]}
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          ↗
                        </span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-4xl px-6 py-20 text-center sm:py-24">
          <p className="eyebrow text-[#5a5a52]">09 / Op de hoogte blijven</p>
          <h3 className="font-display mt-6 text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
            Wij sturen geen nieuwsbrief.
          </h3>
          <p className="mt-6 text-[17px] leading-[1.7] text-[#0a1a14]">
            Onze updates verschijnen hier en op onze publieke kanalen.
          </p>
        </div>
      </section>
    </>
  );
}
