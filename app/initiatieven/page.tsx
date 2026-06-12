import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { DarkCta } from "@/components/dark-cta";
import { Pullquote } from "@/components/pullquote";
import {
  ProductColumnGrid,
  ProductColumnItem,
} from "@/components/product-column-grid";
import { SectionHero } from "@/components/section-hero";
import { PRODUCTS } from "@/lib/constants";

const PRODUCT_COUNT = PRODUCTS.length;

export const metadata: Metadata = {
  title: "Initiatieven",
  description:
    "Corrigo, Actuales en Nexus Academy zijn de drie initiatieven van Onderwijsbouwen. Voor docenten en leerlingen, drie ingangen, één samenhangende visie op onderwijs.",
  alternates: { canonical: "/initiatieven" },
  openGraph: {
    url: "/initiatieven",
    title: "Initiatieven | Onderwijsbouwen",
    description:
      "Corrigo, Actuales en Nexus Academy zijn de drie initiatieven van Onderwijsbouwen. Voor docenten en leerlingen, drie ingangen, één samenhangende visie op onderwijs.",
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
            Drie initiatieven,
            <br />
            één visie.
          </>
        }
        lead="Onder Onderwijsbouwen werken we aan drie zelfstandige initiatieven die elk een specifieke laag van het Nederlandse onderwijssysteem aanpakken. Alle drie werken op zichzelf en zijn voor hun gebruikers direct beschikbaar via hun eigen website. Samen vormen ze de eerste drie bouwstenen van een bredere benadering die in de komende jaren stap voor stap zichtbaar wordt."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">03 / De portfolio</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Drie ingangen.
                <br />
                Hetzelfde fundament.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[19px] leading-[1.65] text-[#0a1a14]">
                Corrigo werkt aan de docentenkant in het voortgezet onderwijs:
                tijd, inzicht, kwaliteit van feedback. Actuales brengt actueel
                nieuws terug in de klas, met kant-en-klare lespakketten voor po
                en onderbouw vo. Nexus werkt aan de leerlingenkant:
                toegankelijkheid, gelijke kansen, persoonlijke begeleiding. Alle
                drie zijn ontwikkeld vanuit dezelfde overtuiging, dat goed
                onderwijs niet vraagt om radicale verandering, maar om gerichte
                interventies op de plekken waar het systeem het meest onder
                druk staat. Voor de bredere analyse achter dit werk, zie{" "}
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
            <ProductColumnGrid>
              {PRODUCTS.map((product, idx) => (
                <ProductColumnItem
                  key={product.domain}
                  index={idx}
                  total={PRODUCT_COUNT}
                >
                  <p className="eyebrow break-words text-[#5a5a52]">
                    {product.audience}
                  </p>
                  <h2 className="h-display-md mt-6 text-[#1B4D3E]">
                    {product.name}
                  </h2>
                  <div className="mt-10 space-y-5 text-[17px] leading-[1.7] text-[#0a1a14]">
                    {product.longDescription.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-auto inline-flex items-center gap-2 pt-12 text-sm font-semibold tracking-wide text-[#1B4D3E] transition-colors hover:text-[#c9a961]"
                  >
                    Bezoek {product.domain}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </ProductColumnItem>
              ))}
            </ProductColumnGrid>
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
              Corrigo ontlast docenten in het voortgezet onderwijs. Actuales
              helpt docenten in po en onderbouw vo actueel nieuws structureel
              in de les te brengen. Nexus geeft leerlingen toegang tot
              persoonlijke begeleiding. Alle drie raken hetzelfde fundament
              vanuit verschillende ingangen, en alle drie zijn ontwikkeld
              vanuit dezelfde overtuiging: dat goed onderwijs niet vraagt om
              radicale verandering, maar om gerichte interventies op de
              plekken waar het systeem het meest onder druk staat.
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
        body="Voor scholen die Corrigo of Actuales willen draaien, of organisaties die met Nexus willen meewerken: een mail is altijd het beste startpunt. Een uitgebreide pitch is daarbij niet nodig, een korte beschrijving van wat u voor ogen heeft volstaat om te bepalen of er een vervolg in zit."
        ctaLabel="contact@onderwijsbouwen.nl"
        ctaHref="mailto:contact@onderwijsbouwen.nl"
      />
    </>
  );
}
