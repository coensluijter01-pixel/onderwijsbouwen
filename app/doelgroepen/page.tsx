import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { DarkCta } from "@/components/dark-cta";
import { Pullquote } from "@/components/pullquote";
import { SectionHero } from "@/components/section-hero";

export const metadata: Metadata = {
  title: "Voor wie we bouwen",
  description:
    "Scholen, docenten, leerlingen, ouders, beleidsmakers en partners. De vijf groepen waarmee Onderwijsbouwen samenwerkt aan beter onderwijs in Nederland.",
  alternates: { canonical: "/doelgroepen" },
  openGraph: {
    url: "/doelgroepen",
    title: "Voor wie we bouwen | Onderwijsbouwen",
    description:
      "Scholen, docenten, leerlingen, ouders, beleidsmakers en partners. De vijf groepen waarmee Onderwijsbouwen samenwerkt aan beter onderwijs in Nederland.",
  },
};

type AudienceCta = {
  text: string;
  href: string;
  external: boolean;
};

const audiences: { num: string; label: string; body: string; cta: AudienceCta }[] =
  [
    {
      num: "01",
      label: "Scholen en schoolleiders",
      body: "We werken samen met scholen die hun docenten willen ontlasten en hun leerlingen serieus willen nemen. Corrigo wordt op dit moment gebruikt door middelbare scholen door heel Nederland, en het portfolio breidt uit. Voor schoolleiders die geïnteresseerd zijn in een pilot, een schoolbrede implementatie of een gesprek over wat AI-tools in hun specifieke context kunnen betekenen, zijn we direct benaderbaar via de Corrigo-site.",
      cta: { text: "Naar corrigo.nl", href: "https://corrigo.nl", external: true },
    },
    {
      num: "02",
      label: "Docenten",
      body: "Docenten zijn ons belangrijkste startpunt. Beide initiatieven zijn ontwikkeld in nauw contact met leraren in het voortgezet onderwijs, en we blijven afhankelijk van hun feedback om relevant te blijven. We zoeken docenten die hun werkpraktijk willen delen, ideeën hebben voor verbeteringen, of die kritisch willen meekijken bij ontwikkeling. Aanmeldingen voor pilot-trajecten worden actief gezocht.",
      cta: { text: "Probeer Corrigo", href: "https://corrigo.nl", external: true },
    },
    {
      num: "03",
      label: "Ouders en leerlingen",
      body: "Voor ouders en leerlingen is Nexus Academy de directe ingang voor persoonlijke begeleiding zonder de prijskaart die er normaal aan hangt. Daarnaast staan we open voor gesprekken met ouder-initiatieven en organisaties die werken aan toegang tot kwalitatief onderwijs voor leerlingen die in het reguliere stelsel onvoldoende ondersteuning krijgen.",
      cta: {
        text: "Begin met Nexus",
        href: "https://nexusacademy.nl",
        external: true,
      },
    },
    {
      num: "04",
      label: "Beleid en onderzoek",
      body: "Onderwijsbouwen is benaderbaar voor stakeholders die werken aan onderwijsbeleid, onderzoek of innovatie op systeemniveau. Wij leveren geen beleid en bemiddelen geen besluitvorming. Wel delen we graag inzicht vanuit onze ontwikkelpraktijk over wat werkt, wat niet werkt, en wat de implicaties zijn van technologische ontwikkelingen voor het onderwijsstelsel.",
      cta: { text: "Neem contact op", href: "/contact", external: false },
    },
    {
      num: "05",
      label: "Partners en investeerders",
      body: "Onderwijsbouwen is een zelfstandige Nederlandse organisatie. Voor strategische samenwerkingen, investeringspartners of mediavragen is contact altijd welkom. We zijn selectief in samenwerkingen, maar we zijn open voor gesprekken die uitgaan van een gedeelde inhoudelijke benadering van het Nederlandse onderwijs.",
      cta: {
        text: "Stuur een mail",
        href: "mailto:contact@onderwijsbouwen.nl",
        external: false,
      },
    },
  ];

export default function DoelgroepenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Doelgroepen", path: "/doelgroepen" },
        ]}
      />
      <SectionHero
        eyebrow="Het ecosysteem"
        digit="04"
        title={
          <>
            Voor wie
            <br />
            we bouwen.
          </>
        }
        lead="Onderwijs is een ecosysteem. Onze initiatieven raken verschillende lagen ervan, en we werken samen met iedereen die in dat systeem positie heeft. Hieronder beschrijven we wie we zoeken en wat we bieden per groep."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">05 / Vijf ingangen</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Vijf groepen.
                <br />
                Eén tafel.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                Per groep noteren we waar we voor benaderbaar zijn en welke
                ingang het meest direct werkt. We werken klein en zorgvuldig:
                een mailtje of een bezoek aan de bijbehorende productsite is
                vrijwel altijd het beste startpunt.
              </p>
            </div>
          </div>

          <ul className="mt-20 divide-y divide-[#1B4D3E] border-y border-[#1B4D3E]">
            {audiences.map((a) => (
              <li key={a.num}>
                <div className="grid grid-cols-1 items-start gap-6 py-12 lg:grid-cols-[260px_1fr_auto] lg:gap-12 lg:py-16">
                  <div className="flex items-baseline gap-4 lg:pt-1">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52]">
                      {a.num}
                    </span>
                    <h3 className="h-display-md text-[#1B4D3E]">
                      {a.label}
                    </h3>
                  </div>
                  <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                    {a.body}
                  </p>
                  <div className="lg:pt-1">
                    {a.cta.external ? (
                      <a
                        href={a.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E] transition-colors hover:text-[#c9a961]"
                      >
                        {a.cta.text}
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          ↗
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={a.cta.href}
                        className="group inline-flex items-center gap-2 whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E] transition-colors hover:text-[#c9a961]"
                      >
                        {a.cta.text}
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Pullquote eyebrow="06 / Geografische focus">
        “Onze huidige focus ligt op Nederland. Sterke fundamenten moeten
        lokaal worden ingericht.”
      </Pullquote>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-28 sm:py-36 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[#5a5a52]">07 / Onze geografische focus</p>
            <h2 className="h-display-md mt-8 text-[#1B4D3E]">
              Nederland eerst.
              <br />
              Daarna verder.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-[19px] leading-[1.7] text-[#0a1a14]">
              Onze huidige focus ligt op Nederland. Op termijn breiden we uit
              naar Vlaanderen en de bredere West-Europese onderwijsmarkt, met
              behoud van de inhoudelijke standaard die we vanuit het
              Nederlandse onderwijs ontwikkelen. Onderwijssystemen verschillen
              wezenlijk per land. Onze aanpak is gebouwd op het uitgangspunt
              dat sterke fundamenten lokaal moeten worden ingericht, en niet
              via uniforme oplossingen kunnen worden uitgerold.
            </p>
          </div>
        </div>
      </section>

      <DarkCta
        eyebrow="08 / Aansluiten"
        title="Past u in een van deze rollen?"
        body="Stuur een mail met wie u bent en wat u voor ogen heeft. Een uitgebreide pitch is daarbij niet nodig, een korte beschrijving volstaat. We reageren binnen twee werkdagen."
        ctaLabel="contact@onderwijsbouwen.nl"
        ctaHref="mailto:contact@onderwijsbouwen.nl"
      />
    </>
  );
}
