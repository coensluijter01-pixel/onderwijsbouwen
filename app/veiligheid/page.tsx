import type { Metadata } from "next";
import { DarkCta } from "@/components/dark-cta";
import { SectionHero } from "@/components/section-hero";

export const metadata: Metadata = {
  title: "Veiligheid en privacy",
  description:
    "Onderwijsbouwen werkt volgens de privacy-standaarden van het Nederlandse onderwijs, met aansluitingen bij Kennisnet, SIVON, Privacyconvenant Onderwijs en Edu-V.",
  alternates: { canonical: "/veiligheid" },
  openGraph: {
    url: "/veiligheid",
    title: "Veiligheid en privacy | Onderwijsbouwen",
    description:
      "Onderwijsbouwen werkt volgens de privacy-standaarden van het Nederlandse onderwijs, met aansluitingen bij Kennisnet, SIVON, Privacyconvenant Onderwijs en Edu-V.",
  },
};

const affiliations = [
  {
    name: "Kennisnet Entree Federatie",
    body: "De landelijke standaard voor veilige toegang tot leermiddelen via de school-identiteit van leerlingen en docenten. Aansluiting betekent dat scholen onze tools kunnen ontsluiten via hun bestaande identity provider, zonder dat wij wachtwoorden of identiteitsdata opslaan die buiten de school horen.",
  },
  {
    name: "SIVON",
    body: "De inkoop- en samenwerkingscoöperatie van het Nederlandse funderend onderwijs. Via SIVON werken we binnen de raamwerken die scholen zelf hebben afgesproken voor leveranciersbeoordeling, inkoopvoorwaarden en risicobeheer.",
  },
  {
    name: "Privacyconvenant Onderwijs",
    body: "De brancheafspraak tussen scholen en leveranciers van digitale onderwijsmiddelen over zorgvuldige omgang met persoonsgegevens. Onze verwerkersovereenkomsten zijn opgezet binnen de modelovereenkomst van het convenant, met de bijbehorende bijlagen voor categorieën persoonsgegevens, bewaartermijnen en sub-verwerkers.",
  },
  {
    name: "Edu-V",
    body: "De gezamenlijke Nederlandse standaard voor uitwisseling van onderwijsgegevens tussen scholen en leveranciers. We bouwen onze koppelingen langs deze standaard, zodat scholen niet vastzitten aan een specifieke leverancier en data-uitwisseling consistent blijft over het ecosysteem.",
  },
];

const subprocessors = [
  {
    vendor: "Supabase",
    function: "Database en authenticatie",
    location: "EU (Frankfurt)",
    basis: "EU-AVG, ISO 27001",
  },
  {
    vendor: "Vercel",
    function: "Hosting en levering",
    location: "EU en VS",
    basis: "Standaard contractuele bepalingen",
  },
  {
    vendor: "Anthropic",
    function: "AI-modellen (Claude)",
    location: "VS",
    basis: "Standaard contractuele bepalingen, geen training op klantdata",
  },
  {
    vendor: "OpenAI",
    function: "AI-modellen",
    location: "VS",
    basis: "Standaard contractuele bepalingen, geen training op klantdata",
  },
  {
    vendor: "Resend",
    function: "Transactionele mail",
    location: "EU",
    basis: "EU-AVG",
  },
  {
    vendor: "Stripe",
    function: "Betalingen",
    location: "EU/VS",
    basis: "PCI-DSS, EU-AVG",
  },
];

export default function VeiligheidPage() {
  return (
    <>
      <SectionHero
        eyebrow="02 / Veiligheid"
        digit="02"
        title={
          <>
            Privacy is geen feature.
            <br />
            Het is een uitgangspunt.
          </>
        }
        lead="Onderwijsbouwen werkt binnen de Nederlandse standaarden voor onderwijsdata, met sub-verwerkers die voldoen aan de strenge eisen van het Privacyconvenant Onderwijs."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">03 / Onze aansluitingen</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Binnen de structuren
                <br />
                van het onderwijs.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                We bouwen niet bovenop ad-hoc afspraken, maar binnen de
                bestaande raamwerken van het Nederlandse onderwijs. Hieronder
                staan de vier aansluitingen die bepalen hoe we werken,
                inclusief wat dat in de praktijk betekent voor scholen die met
                ons in zee gaan.
              </p>
            </div>
          </div>

          <div className="mt-20 divide-y divide-[#1B4D3E] border-y border-[#1B4D3E]">
            {affiliations.map((a) => (
              <article
                key={a.name}
                className="grid grid-cols-1 gap-8 py-14 lg:grid-cols-12 lg:gap-12 lg:py-16"
              >
                <div className="lg:col-span-4">
                  <h3 className="h-display-md text-[#1B4D3E]">{a.name}</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                    {a.body}
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
              <p className="eyebrow text-[#5a5a52]">04 / Sub-verwerkers</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Wie verwerkt
                <br />
                wat, waar.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] leading-[1.7] text-[#0a1a14]">
                Hieronder een actueel overzicht van de leveranciers die wij
                inschakelen voor de uitvoering van onze diensten. Per
                leverancier vermelden we de functie, vestigingsplaats en
                relevante certificeringen.
              </p>
            </div>
          </div>

          <div className="mt-20 overflow-x-auto border-y border-[#1B4D3E]">
            <table className="w-full min-w-[760px] border-collapse text-left text-[15px] text-[#0a1a14]">
              <thead>
                <tr className="border-b border-[#1B4D3E] bg-[#1B4D3E]/[0.04]">
                  <th className="px-6 py-5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E]">
                    Leverancier
                  </th>
                  <th className="px-6 py-5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E]">
                    Functie
                  </th>
                  <th className="px-6 py-5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E]">
                    Locatie
                  </th>
                  <th className="px-6 py-5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E]">
                    Grondslag
                  </th>
                </tr>
              </thead>
              <tbody>
                {subprocessors.map((sp, idx) => (
                  <tr
                    key={sp.vendor}
                    className={
                      idx < subprocessors.length - 1
                        ? "border-b border-[#1B4D3E]/20"
                        : ""
                    }
                  >
                    <td className="px-6 py-5 font-semibold text-[#1B4D3E]">
                      {sp.vendor}
                    </td>
                    <td className="px-6 py-5">{sp.function}</td>
                    <td className="px-6 py-5">{sp.location}</td>
                    <td className="px-6 py-5">{sp.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 max-w-3xl text-[15px] leading-[1.7] text-[#5a5a52]">
            Deze lijst wordt bijgewerkt bij elke wijziging. Het is mogelijk dat
            een specifiek product (Corrigo, Nexus) niet alle bovenstaande
            sub-verwerkers gebruikt. Zie de productspecifieke
            verwerkersovereenkomst voor het exacte overzicht per dienst.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">
                05 / Datalocatie en bewaartermijnen
              </p>
              <h2 className="h-display-md mt-8 text-[#1B4D3E]">
                EU-first,
                <br />
                met heldere uitzonderingen.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <div className="space-y-6 text-[17px] leading-[1.7] text-[#0a1a14]">
                <p>
                  Onze hoofdopslag staat in de EU. Persoonsgegevens van
                  scholen, docenten en leerlingen worden primair opgeslagen in
                  EU-rekencentra, met versleuteling in opslag en tijdens
                  transport. Verwerking buiten de EU vindt alleen plaats voor
                  AI-modelaanroepen waarvoor op dit moment geen volwaardig
                  Europees alternatief beschikbaar is, en altijd onder
                  standaard contractuele bepalingen die training op klantdata
                  uitsluiten.
                </p>
                <p>
                  Bewaartermijnen verschillen per type data: account- en
                  identiteitsgegevens lopen mee met het schooljaar waarin de
                  dienst actief is, transactiedata en logs hebben kortere
                  termijnen, en data die voor analytische doelen wordt
                  bewaard, wordt geanonimiseerd of geaggregeerd. De
                  productspecifieke verwerkersovereenkomst bevat de exacte
                  termijnen per dataset.
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
              <p className="eyebrow text-[#5a5a52]">06 / Continuïteit</p>
              <h2 className="h-display-md mt-8 text-[#1B4D3E]">
                Wat als wij
                <br />
                er morgen niet meer zijn.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <div className="space-y-6 text-[17px] leading-[1.7] text-[#0a1a14]">
                <p>
                  Backups van klantdata worden dagelijks gemaakt en versleuteld
                  bewaard in EU-rekencentra, met retentie die voldoet aan de
                  eisen van het Privacyconvenant Onderwijs. Hersteltests vinden
                  periodiek plaats. Bij een verstoring van onze dienstverlening
                  hebben scholen toegang tot een exportroute van hun eigen
                  data, zonder lock-in.
                </p>
                <p>
                  In het scenario dat Onderwijsbouwen ophoudt te bestaan,
                  geldt een afgesproken uittredingsprocedure: scholen krijgen
                  een redelijke termijn voor data-export in een open formaat,
                  en waar mogelijk faciliteren we overdracht naar een
                  opvolgende leverancier of een collectieve voorziening via
                  SIVON. Voor security-vragen, incidenten of meldingen is{" "}
                  <a
                    href="mailto:contact@onderwijsbouwen.nl"
                    className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                  >
                    contact@onderwijsbouwen.nl
                  </a>{" "}
                  het centrale aanspreekpunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DarkCta
        eyebrow="07 / Specifieke vragen"
        title="DPIA, VOO of een security-rapport?"
        body="Voor productspecifieke verwerkersovereenkomsten, security-rapporten of input op een Data Protection Impact Assessment nemen we graag contact op."
        ctaLabel="contact@onderwijsbouwen.nl"
        ctaHref="mailto:contact@onderwijsbouwen.nl"
      />
    </>
  );
}
