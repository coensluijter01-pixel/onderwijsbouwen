import type { Metadata } from "next";
import Link from "next/link";
import { DarkCta } from "@/components/dark-cta";
import { Pullquote } from "@/components/pullquote";
import { SectionHero } from "@/components/section-hero";

export const metadata: Metadata = {
  title: "Onderwijs onder druk",
  description:
    "Drie krachten zetten het Nederlandse onderwijs onder druk: lerarentekort, AI-disruptie en kansenongelijkheid. Onderwijsbouwen werkt aan structurele antwoorden.",
  alternates: { canonical: "/onderwijsontwikkeling" },
  openGraph: {
    url: "/onderwijsontwikkeling",
    title: "Onderwijs onder druk | Onderwijsbouwen",
    description:
      "Drie krachten zetten het Nederlandse onderwijs onder druk: lerarentekort, AI-disruptie en kansenongelijkheid. Onderwijsbouwen werkt aan structurele antwoorden.",
  },
};

export default function OnderwijsontwikkelingPage() {
  return (
    <>
      <SectionHero
        eyebrow="Visie"
        digit="01"
        title={
          <>
            Onderwijs
            <br />
            onder druk.
          </>
        }
        lead="Het Nederlandse onderwijs staat aan de vooravond van een fundamentele herinrichting. Dat klinkt zwaar, en dat is het ook, maar het is geen retorische opening. De drie krachten die hieronder worden beschreven, staan niet los van elkaar en lossen zichzelf niet op. Ze vragen om een doordachte respons op systeemniveau, en dat is waar Onderwijsbouwen aan werkt."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#5a5a52]">02 / De analyse</p>
              <h2 className="h-display-lg mt-8 text-[#1B4D3E]">
                Drie krachten die elkaar versterken.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <div className="space-y-6 text-[17px] leading-[1.7] text-[#0a1a14]">
                <p>
                  Wie de afgelopen tien jaar heeft gevolgd, herkent het
                  patroon. Het lerarentekort verschijnt niet meer alleen in
                  incidentele berichten over invaldagen, het is een
                  terugkerend onderdeel van elke begroting en elk schooljaar.
                  Tegelijkertijd verandert wat er van het onderwijs verwacht
                  wordt: digitale geletterdheid, persoonlijke vaardigheden,
                  omgaan met technologie die vorig jaar nog niet bestond. En
                  ondanks twintig jaar beleidsinspanning blijft de
                  thuissituatie van een leerling een van de sterkste
                  voorspellers van zijn schoolprestaties.
                </p>
                <p>
                  Deze drie ontwikkelingen lijken op het eerste gezicht
                  onafhankelijk, maar ze versterken elkaar in de praktijk. Een
                  tekort aan docenten betekent meer werkdruk voor de leraren
                  die er wel zijn, wat hun vermogen om individuele leerlingen
                  op te vangen verkleint, wat de kansenongelijkheid voor de
                  meest kwetsbare leerlingen vergroot. Een veranderende
                  digitale werkelijkheid vraagt om begeleiding die scholen op
                  dit moment vaak niet kunnen leveren, wat opnieuw uitkomt bij
                  dezelfde groep leerlingen die het al moeilijker had.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pullquote eyebrow="03 / De diagnose">
        “Op deze drie ontwikkelingen zijn geen losse antwoorden mogelijk. Ze
        vragen om een herinrichting van delen van het systeem.”
      </Pullquote>

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-28 sm:py-36 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[#5a5a52]">04 / Wat dit vraagt</p>
            <h2 className="h-display-md mt-8 text-[#1B4D3E]">
              Niet als denktank.
              <br />
              In concrete interventies.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <div className="space-y-6 text-[19px] leading-[1.65] text-[#0a1a14]">
              <p>
                Een betere lerarenopleiding lost het tekort niet op zolang
                werkdruk de oorzaak van uitval is. Meer bijles bestrijdt
                kansenongelijkheid niet zolang die bijles alleen toegankelijk
                is voor wie het kan betalen. Meer technologie in scholen helpt
                niet als de begeleiding bij het gebruik daarvan ontbreekt.
              </p>
              <p>
                Wat het wel vraagt is een herinrichting van delen van het
                systeem. Niet door bestaande structuren overhoop te halen,
                maar door technologie en kennis te ontwikkelen die de
                bestaande structuren ondersteunen. Tools die docenten tijd
                teruggeven die ze in lesgeven kunnen investeren. Begeleiding
                die voor elke leerling toegankelijk is, niet alleen voor wie
                het kan betalen. Inzicht in het systeem voor wie
                verantwoordelijkheid heeft over de inrichting ervan.
              </p>
              <p className="text-[#5a5a52]">
                Onderwijsbouwen werkt aan dat herontwerp. Niet als denktank,
                maar in concrete initiatieven die in het onderwijs zelf
                gebruikt worden. De eerste twee zijn Corrigo en Nexus Academy.
                Meer volgt.
              </p>
            </div>
            <Link
              href="/initiatieven"
              className="group mt-12 inline-flex items-center gap-2 text-sm font-semibold text-[#1B4D3E] transition-colors hover:text-[#c9a961]"
            >
              Bekijk onze initiatieven
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
        eyebrow="05 / Verder praten"
        title="Werkt u aan onderwijsbeleid of -onderzoek?"
        body="We delen graag wat we in de praktijk leren. Geen white papers, wel directe gesprekken met stakeholders die werken aan de inrichting van het Nederlandse onderwijs. Een korte introductie per mail is voldoende om te bepalen of er een gesprek in zit."
        ctaLabel="Neem contact op"
        ctaHref="/contact"
      />
    </>
  );
}
