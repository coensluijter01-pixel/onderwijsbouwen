import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { DarkCta } from "@/components/dark-cta";
import { SectionHero } from "@/components/section-hero";
import {
  roadmap,
  roadmapBijgewerkt,
  type RoadmapItem,
  type RoadmapProduct,
  type RoadmapStatus,
} from "@/lib/roadmap-data";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Waar Onderwijsbouwen, Corrigo, Actuales en Nexus per kwartaal aan werken. Levend overzicht van ontwikkelingen.",
  alternates: { canonical: "/roadmap" },
  openGraph: {
    url: "/roadmap",
    title: "Roadmap | Onderwijsbouwen",
    description:
      "Waar Onderwijsbouwen, Corrigo, Actuales en Nexus per kwartaal aan werken. Levend overzicht van ontwikkelingen.",
  },
};

const statusLabel: Record<RoadmapStatus, string> = {
  afgerond: "Afgerond",
  "in-uitvoering": "In uitvoering",
  gepland: "Gepland",
};

const statusStyles: Record<RoadmapStatus, string> = {
  afgerond: "bg-[#1B4D3E]/10 text-[#1B4D3E]",
  "in-uitvoering": "bg-[#c9a961]/20 text-[#1B4D3E]",
  gepland: "bg-black/5 text-black/60",
};

const productLabel: Record<RoadmapProduct, string> = {
  onderwijsbouwen: "Onderwijsbouwen",
  corrigo: "Corrigo",
  actuales: "Actuales",
  nexus: "Nexus",
};

function groupByKwartaal(items: RoadmapItem[]) {
  const order: string[] = [];
  const groups: Record<string, RoadmapItem[]> = {};
  for (const item of items) {
    if (!groups[item.kwartaal]) {
      groups[item.kwartaal] = [];
      order.push(item.kwartaal);
    }
    groups[item.kwartaal].push(item);
  }
  return order.map((kwartaal) => ({ kwartaal, items: groups[kwartaal] }));
}

export default function RoadmapPage() {
  const grouped = groupByKwartaal(roadmap);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Roadmap", path: "/roadmap" },
        ]}
      />
      <SectionHero
        eyebrow="06 / Roadmap"
        digit="06"
        title={
          <>
            Waar wij
            <br />
            aan bouwen.
          </>
        }
        lead="Een levend overzicht van wat wij per kwartaal ontwikkelen voor Onderwijsbouwen, Corrigo, Actuales en Nexus. Items zijn richtinggevend, geen contractuele toezegging."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 pt-16 sm:pt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52]">
            Laatste update: {roadmapBijgewerkt}
          </p>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">07 / Per kwartaal</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Wat er staat
                <br />
                op de planning.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                Per kwartaal tonen we wat is afgerond, wat in uitvoering is en
                wat gepland staat. De roadmap evolueert met onze gesprekken
                met scholen, docenten en partners. Voor wat al is gerealiseerd
                zie de{" "}
                <Link
                  href="/changelog"
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  changelog
                </Link>
                , voor context over wie wij zijn zie{" "}
                <Link
                  href="/over"
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  Over ons
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-16">
            {grouped.map((group) => (
              <div key={group.kwartaal}>
                <div className="flex items-baseline justify-between border-b border-[#1B4D3E] pb-4">
                  <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                    {group.kwartaal}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52]">
                    {group.items.length}{" "}
                    {group.items.length === 1 ? "item" : "items"}
                  </span>
                </div>

                <ul className="divide-y divide-[#1B4D3E]/15">
                  {group.items.map((item) => (
                    <li
                      key={item.id}
                      className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-12 lg:gap-10"
                    >
                      <div className="lg:col-span-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${
                              statusStyles[item.status]
                            }`}
                          >
                            {statusLabel[item.status]}
                          </span>
                        </div>
                        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#1B4D3E]">
                          {productLabel[item.product]}
                        </p>
                      </div>
                      <div className="lg:col-span-9">
                        <h4 className="font-display text-[clamp(1.25rem,2.25vw,1.625rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                          {item.titel}
                        </h4>
                        <p className="mt-4 max-w-3xl text-[17px] leading-[1.7] text-[#0a1a14]">
                          {item.beschrijving}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCta
        eyebrow="08 / Reageren"
        title="Een vraag of input op onze richting?"
        body="Wij horen graag van scholen, docenten en partnerorganisaties die meedenken over wat wij bouwen."
        ctaLabel="contact@onderwijsbouwen.nl"
        ctaHref="mailto:contact@onderwijsbouwen.nl"
      />
    </>
  );
}
