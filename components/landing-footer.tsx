import Link from "next/link";
import {
  COMPANY_LINKS,
  CONTACT_EMAIL,
  FOOTER_LINKS,
  KVK_NUMBER,
  MORE_LINKS,
  NAV_LINKS,
  VESTIGING,
} from "@/lib/constants";

export function LandingFooter() {
  return (
    <footer className="border-t border-[#1B4D3E] bg-[#f5f1e8]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="font-display text-[28px] font-medium leading-none tracking-tight text-[#1B4D3E]">
              onderwijsbouwen
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#5a5a52]">
              Bouwen aan onderwijs.
            </p>
            <p className="mt-8 text-xs leading-relaxed text-[#5a5a52]">
              Vestiging: {VESTIGING}
              <br />
              KVK: {KVK_NUMBER}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-[#1B4D3E]">Navigatie</p>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-baseline gap-3 text-sm text-[#0a1a14] hover:text-[#c9a961]"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5a5a52] group-hover:text-[#c9a961]">
                      {link.num}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-[#1B4D3E]">Initiatieven</p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="https://corrigo.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#0a1a14] hover:text-[#c9a961]"
                >
                  Corrigo ↗
                </a>
              </li>
              <li>
                <a
                  href="https://corrigo.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#5a5a52] hover:text-[#c9a961]"
                >
                  Voor scholen
                </a>
              </li>
              <li>
                <a
                  href="https://corrigo.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#5a5a52] hover:text-[#c9a961]"
                >
                  Pilot aanvragen
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="https://nexusacademy.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#0a1a14] hover:text-[#c9a961]"
                >
                  Nexus Academy ↗
                </a>
              </li>
              <li>
                <a
                  href="https://nexusacademy.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#5a5a52] hover:text-[#c9a961]"
                >
                  Voor leerlingen
                </a>
              </li>
              <li>
                <a
                  href="https://nexusacademy.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#5a5a52] hover:text-[#c9a961]"
                >
                  Direct beginnen
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-[#1B4D3E]">Onderwijsbouwen</p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm font-medium text-[#0a1a14] hover:text-[#c9a961]"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5a5a52] hover:text-[#c9a961]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <ul className="space-y-3 border-t border-[#d4cfc4] pt-3">
                  {FOOTER_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-[#5a5a52] hover:text-[#0a1a14]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-[#1B4D3E]">Meer</p>
            <ul className="mt-6 space-y-3">
              {MORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#0a1a14] hover:text-[#c9a961]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-[#d4cfc4] pt-6 text-xs text-[#5a5a52] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono uppercase tracking-[0.18em]">
            © 2026 Onderwijsbouwen
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Gemaakt in Nederland
          </p>
        </div>
      </div>
    </footer>
  );
}
