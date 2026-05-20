import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { DarkCta } from "@/components/dark-cta";
import { SectionHero } from "@/components/section-hero";
import {
  faq,
  faqCategorieLabels,
  faqCategorieVolgorde,
} from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op vragen over Onderwijsbouwen, Corrigo, Nexus, privacy en samenwerken.",
  alternates: { canonical: "/veelgestelde-vragen" },
  openGraph: {
    url: "/veelgestelde-vragen",
    title: "Veelgestelde vragen | Onderwijsbouwen",
    description:
      "Antwoorden op vragen over Onderwijsbouwen, Corrigo, Nexus, privacy en samenwerken.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.vraag,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.antwoord.replace(/<[^>]+>/g, ""),
    },
  })),
};

export default function VeelgesteldeVragenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Veelgestelde vragen", path: "/veelgestelde-vragen" },
        ]}
      />

      <SectionHero
        eyebrow="08 / Veelgestelde vragen"
        digit="08"
        title={
          <>
            Antwoord op de meest
            <br />
            gestelde vragen.
          </>
        }
        lead="Vragen over Onderwijsbouwen, onze initiatieven Corrigo en Nexus, privacy, samenwerken of werken bij ons."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
          {faqCategorieVolgorde.map((categorie, idx) => {
            const items = faq.filter((f) => f.categorie === categorie);
            if (items.length === 0) return null;
            return (
              <div
                key={categorie}
                className={`py-12 ${
                  idx > 0 ? "border-t border-[#1B4D3E]/20" : ""
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52]">
                  {String(idx + 1).padStart(2, "0")} /{" "}
                  {faqCategorieLabels[categorie]}
                </p>
                <h2 className="font-display mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                  {faqCategorieLabels[categorie]}
                </h2>

                <ul className="mt-10 divide-y divide-[#1B4D3E]/15 border-y border-[#1B4D3E]/15">
                  {items.map((item) => (
                    <li key={item.id}>
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 transition-colors hover:text-[#c9a961] [&::-webkit-details-marker]:hidden">
                          <span className="font-display text-[clamp(1.125rem,2vw,1.375rem)] font-medium leading-snug tracking-tight text-[#1B4D3E] group-hover:text-[#c9a961]">
                            {item.vraag}
                          </span>
                          <ChevronDown
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 text-[#1B4D3E] transition-transform duration-200 group-open:rotate-180"
                          />
                        </summary>
                        <div
                          className="faq-answer max-w-3xl pb-6 pr-12 text-[17px] leading-[1.7] text-[#0a1a14]"
                          dangerouslySetInnerHTML={{ __html: item.antwoord }}
                        />
                      </details>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <DarkCta
        eyebrow="09 / Vraag er niet bij"
        title="Mail ons gerust."
        body="Wij reageren binnen één werkdag."
        ctaLabel="contact@onderwijsbouwen.nl"
        ctaHref="mailto:contact@onderwijsbouwen.nl"
      />
    </>
  );
}
