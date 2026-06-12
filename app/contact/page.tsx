import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { Pullquote } from "@/components/pullquote";
import { SectionHero } from "@/components/section-hero";
import {
  CONTACT_EMAIL,
  KVK_NUMBER,
  VESTIGING,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact en samenwerking",
  description:
    "Direct contact voor schoolpilots met Corrigo of Actuales, onderzoek, partnerships en pers. Onderwijsbouwen reageert binnen twee werkdagen.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact en samenwerking | Onderwijsbouwen",
    description:
      "Direct contact voor schoolpilots met Corrigo of Actuales, onderzoek, partnerships en pers. Onderwijsbouwen reageert binnen twee werkdagen.",
  },
};

const audiences = [
  {
    number: "01",
    title: "Voor scholen",
    body: "Voor het voortgezet onderwijs: geïnteresseerd in een pilot of implementatie van Corrigo? Stuur een mail met schoolnaam, aantal docenten en de schaal die u voor ogen heeft. Voor po en onderbouw vo: start op actuales.nl of mail voor een schoolbrede pilot met Actuales. Vermeld in beide gevallen welk initiatief u wilt bespreken. We reageren binnen twee werkdagen.",
    link: { href: "/initiatieven", label: "Lees over onze initiatieven" },
  },
  {
    number: "02",
    title: "Voor partners en investeerders",
    body: "Onderzoek, samenwerking, investering? Beschrijf in een paar regels wat u voor ogen heeft. Een uitgebreide pitch is niet nodig in een eerste mail. Voor de inhoudelijke richting waarin we werken, zie onze projecten- en richtingpagina.",
    link: { href: "/projecten", label: "Onze ontwikkelrichtingen" },
  },
  {
    number: "03",
    title: "Voor pers",
    body: "Vragen over onze visie, producten of cijfers? Mail rechtstreeks met uw deadline en publicatie. We helpen graag waar het de inhoud bevordert.",
    link: { href: "/onderwijsontwikkeling", label: "Onze visie op onderwijs" },
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <SectionHero
        eyebrow="Direct contact"
        digit="05"
        title={
          <>
            Laten we
            <br />
            praten.
          </>
        }
        lead="Onderwijsbouwen is een kleine organisatie met een grote ambitie. Dat betekent dat we selectief zijn in samenwerkingen, maar wel serieus over de samenwerkingen die we aangaan. Of het nu gaat om een schoolpilot, een onderzoeksvraag, een mediavraag of een investeringsgesprek, een direct gesprek is altijd het beste startpunt."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow text-[#5a5a52]">06 / Hoofdadres</p>
            </div>
            <div className="lg:col-span-8">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-display block break-words text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-tight text-[#1B4D3E] underline-offset-[8px] hover:text-[#c9a961] hover:underline"
                style={{ fontVariationSettings: "'opsz' 96" }}
              >
                {CONTACT_EMAIL}
              </a>
              <dl className="mt-16 grid grid-cols-1 gap-8 border-t border-[#1B4D3E] pt-10 sm:grid-cols-2">
                <div>
                  <dt className="eyebrow text-[#5a5a52]">Vestiging</dt>
                  <dd className="mt-3 text-[17px] text-[#1B4D3E]">
                    {VESTIGING}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-[#5a5a52]">KVK</dt>
                  <dd className="mt-3 text-[17px] text-[#1B4D3E]">
                    {KVK_NUMBER}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <Pullquote eyebrow="07 / De norm">
        “Geen pitch nodig. Een paar regels is genoeg om te bepalen of er een
        gesprek in zit.”
      </Pullquote>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">08 / Wie we willen spreken</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Drie ingangen.
                <br />
                Eén adres.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                Hieronder staat per ingang wat we van u nodig hebben in een
                eerste mail. We reageren in alle gevallen binnen twee
                werkdagen, en mocht een mail niet passen, dan kunt u via de
                bijbehorende productsite ook direct verder.
              </p>
            </div>
          </div>

          <div className="mt-20 divide-y divide-[#1B4D3E] border-y border-[#1B4D3E]">
            {audiences.map((a) => (
              <article
                key={a.title}
                className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16"
              >
                <div className="flex items-baseline gap-5 lg:col-span-4">
                  <span aria-hidden="true" className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52]">
                    {a.number}
                  </span>
                  <h3 className="h-display-md text-[#1B4D3E]">
                    {a.title}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                    {a.body}
                  </p>
                  <Link
                    href={a.link.href}
                    className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E] transition-colors hover:text-[#c9a961]"
                  >
                    {a.link.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
