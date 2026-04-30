import type { Metadata } from "next";
import { SectionHero } from "@/components/section-hero";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Hoe Onderwijsbouwen omgaat met persoonsgegevens. Volledige verklaring volgt.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <SectionHero
        eyebrow="00 / Privacy"
        title={
          <>
            Privacy
            <br />
            verklaring.
          </>
        }
        lead="Onderwijsbouwen werkt aan een definitieve privacyverklaring. Hieronder een korte samenvatting van onze uitgangspunten."
      />

      <section className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
        <div className="mx-auto w-full max-w-3xl px-6 py-28 sm:py-36">
          <div className="space-y-6 text-[17px] leading-[1.6] text-[#1B4D3E]">
            <p>
              Op deze website verwerken we zo min mogelijk persoonsgegevens. We
              gebruiken op dit moment geen analytics, geen tracking-cookies en
              geen advertentie-pixels.
            </p>
            <p>
              Als u contact met ons opneemt via{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-[#1B4D3E] underline underline-offset-2 hover:text-[#c9a961]"
              >
                {CONTACT_EMAIL}
              </a>
              , bewaren we uw bericht en e-mailadres alleen zolang als nodig om
              uw vraag te beantwoorden.
            </p>
            <p>
              De volledige privacyverklaring, inclusief verwijzing naar onze
              productdiensten Corrigo en Nexus Academy, volgt op een later
              moment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
