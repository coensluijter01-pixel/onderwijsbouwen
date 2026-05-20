// TODO @gebruiker: laat deze privacyverklaring vóór go-live nakijken door een juridisch geschoolde
// persoon. De inhoud is geschreven op basis van de huidige verwerkingen (geen analytics,
// geen tracking cookies, alleen serverlogs via hosting en mailverkeer via contact@onderwijsbouwen.nl)
// en moet worden geverifieerd tegen de werkelijke situatie bij elke significante wijziging
// in de site, hosting, formulieren of tooling.

import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { SectionHero } from "@/components/section-hero";
import { CONTACT_EMAIL, KVK_NUMBER, VESTIGING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Hoe Onderwijsbouwen omgaat met persoonsgegevens van bezoekers van onderwijsbouwen.nl.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
    title: "Privacyverklaring | Onderwijsbouwen",
    description:
      "Hoe Onderwijsbouwen omgaat met persoonsgegevens van bezoekers van onderwijsbouwen.nl.",
  },
};

const LAATSTE_UPDATE = "20 mei 2026";

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Privacyverklaring", path: "/privacy" },
        ]}
      />
      <SectionHero
        eyebrow="10 / Privacyverklaring"
        digit="10"
        title={
          <>
            Privacy
            <br />
            verklaring.
          </>
        }
        lead={
          <>
            Hoe Onderwijsbouwen omgaat met persoonsgegevens van bezoekers van
            deze website. Voor product-specifieke privacyinformatie en
            verwerkersovereenkomsten verwijzen wij naar de pagina{" "}
            <Link
              href="/veiligheid"
              className="font-semibold text-[#f5f1e8] underline underline-offset-4 hover:text-[#c9a961]"
            >
              Veiligheid
            </Link>
            .
          </>
        }
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-3xl px-6 pt-16 sm:pt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52]">
            Laatste update: {LAATSTE_UPDATE}
          </p>
        </div>

        <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
          <article className="space-y-16 text-[17px] leading-[1.75] text-[#0a1a14]">
            <section>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                Verwerkingsverantwoordelijke
              </h2>
              <p className="mt-6">
                Onderwijsbouwen is verwerkingsverantwoordelijke voor de
                gegevensverwerking op deze website. Wij zijn ingeschreven bij
                de Kamer van Koophandel onder nummer {KVK_NUMBER} en gevestigd
                in {VESTIGING}.
              </p>
              <dl className="mt-8 grid grid-cols-1 gap-3 border-l-2 border-[#c9a961] pl-5 text-[15px] text-[#1B4D3E] sm:grid-cols-2 sm:gap-x-12">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5a5a52]">
                    E-mail
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="underline-offset-4 hover:text-[#c9a961] hover:underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5a5a52]">
                    KvK
                  </dt>
                  <dd className="mt-1">{KVK_NUMBER}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5a5a52]">
                    Vestiging
                  </dt>
                  <dd className="mt-1">{VESTIGING}</dd>
                </div>
              </dl>
            </section>

            <section>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                Welke gegevens wij verzamelen
              </h2>
              <p className="mt-6">
                Wanneer je deze website bezoekt, verwerken wij beperkt
                persoonsgegevens. Hieronder beschrijven wij per categorie
                welke gegevens wij verzamelen, op welke grondslag, en hoe lang
                wij ze bewaren.
              </p>

              <h3 className="mt-10 font-display text-[clamp(1.125rem,2vw,1.375rem)] font-medium leading-snug tracking-tight text-[#1B4D3E]">
                Serverlogs
              </h3>
              <p className="mt-4">
                Onze hostingpartner verwerkt standaard serverlogs voor de
                levering van de website. Dit omvat het IP-adres, het
                opgevraagde URL-pad, een tijdstempel en informatie over de
                browser. Deze gegevens worden gebruikt voor het waarborgen van
                de werking en beveiliging van de website. Grondslag:
                gerechtvaardigd belang. Bewaartermijn: korter dan dertig
                dagen.
              </p>

              <h3 className="mt-10 font-display text-[clamp(1.125rem,2vw,1.375rem)] font-medium leading-snug tracking-tight text-[#1B4D3E]">
                Analytics
              </h3>
              <p className="mt-4">
                Op dit moment gebruikt onderwijsbouwen.nl geen analytics-
                of meetinstrumenten. Wij plaatsen geen tellers, geen pixels en
                geen statistiekensoftware. Als dit in de toekomst wijzigt,
                passen wij deze verklaring aan en vermelden wij de gebruikte
                tool, de grondslag en de bewaartermijn.
              </p>

              <h3 className="mt-10 font-display text-[clamp(1.125rem,2vw,1.375rem)] font-medium leading-snug tracking-tight text-[#1B4D3E]">
                Contactaanvragen
              </h3>
              <p className="mt-4">
                Wanneer je ons mailt op{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  {CONTACT_EMAIL}
                </a>
                , verwerken wij de inhoud van je bericht, je e-mailadres en
                eventuele andere gegevens die je deelt. Wij gebruiken deze
                gegevens om jouw vraag of verzoek af te handelen. Grondslag:
                uitvoering van een overeenkomst of gerechtvaardigd belang.
                Bewaartermijn: zo lang als nodig voor de afhandeling, in
                beginsel maximaal twee jaar.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                Cookies
              </h2>
              <p className="mt-6">
                Deze website plaatst geen tracking cookies van derden en
                gebruikt geen profileringstechnieken. Er worden ook geen
                functionele cookies geplaatst voor sessiebeheer of voorkeuren,
                omdat de site geen ingelogde functionaliteit bevat. Als dit
                in de toekomst wijzigt, vermelden wij dat op deze pagina en
                zorgen wij voor passende toestemming waar de wet dat
                voorschrijft.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                Met wie wij gegevens delen
              </h2>
              <p className="mt-6">
                Onderwijsbouwen deelt persoonsgegevens niet met derden voor
                commerciële doeleinden. Voor de uitvoering van onze website
                schakelen wij sub-verwerkers in, zoals hostingleveranciers.
                Een actueel overzicht van onze sub-verwerkers staat op de
                pagina{" "}
                <Link
                  href="/veiligheid"
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  Veiligheid
                </Link>
                . Wij hebben met deze partijen verwerkersovereenkomsten
                gesloten en zien toe op een passend beschermingsniveau, ook
                waar gegevens buiten de Europese Economische Ruimte worden
                verwerkt.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                Jouw rechten
              </h2>
              <p className="mt-6">
                Je hebt op grond van de Algemene verordening
                gegevensbescherming (AVG) een aantal rechten met betrekking
                tot je persoonsgegevens. Je kunt ons vragen om inzage in de
                gegevens die wij over jou verwerken, om correctie of
                aanvulling, om verwijdering, om beperking van de verwerking,
                om bezwaar tegen de verwerking en om overdracht van je
                gegevens in een gestructureerd formaat.
              </p>
              <p className="mt-6">
                Een verzoek doe je via een mail aan{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  {CONTACT_EMAIL}
                </a>
                . Wij reageren binnen één maand. Ben je het niet eens met onze
                afhandeling, dan kun je een klacht indienen bij de Autoriteit
                Persoonsgegevens.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                Beveiliging
              </h2>
              <p className="mt-6">
                Wij nemen passende technische en organisatorische maatregelen
                om persoonsgegevens te beveiligen tegen verlies of
                onrechtmatige verwerking. Voor een gedetailleerd overzicht van
                onze beveiligingsmaatregelen, sub-verwerkers en
                continuïteitsaanpak verwijzen wij naar de pagina{" "}
                <Link
                  href="/veiligheid"
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  Veiligheid
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                Wijzigingen in deze verklaring
              </h2>
              <p className="mt-6">
                Deze privacyverklaring kan van tijd tot tijd worden aangepast
                als wijzigingen in onze diensten of de wet- en regelgeving
                daartoe aanleiding geven. De meest actuele versie staat altijd
                op deze pagina. De datum van laatste wijziging staat bovenaan
                vermeld.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight tracking-tight text-[#1B4D3E]">
                Contact
              </h2>
              <p className="mt-6">
                Voor vragen over deze privacyverklaring of over de verwerking
                van jouw persoonsgegevens kun je contact opnemen via{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#c9a961]"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
