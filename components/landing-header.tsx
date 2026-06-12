"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { EXTERNAL_INITIATIVES, NAV_LINKS } from "@/lib/constants";

export function LandingHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled && !open;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const wordmarkColor = onDark ? "text-[#f5f1e8]" : "text-[#f5f1e8]";
  const navTextDefault = onDark ? "text-[#f5f1e8]/60" : "text-[#f5f1e8]/65";
  const navTextHover = "hover:text-[#f5f1e8]";
  const navTextActive = "text-[#f5f1e8]";
  const pillIdle = "border-[#f5f1e8]/30 text-[#f5f1e8]/85";
  const headerBg = onDark
    ? "bg-transparent"
    : "bg-[#1B4D3E]/90 backdrop-blur-md border-b border-[#f5f1e8]/15";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className={`font-display text-base font-medium tracking-tight transition-colors ${wordmarkColor}`}
        >
          onderwijsbouwen
        </Link>

        <div className="hidden min-w-0 items-center gap-6 lg:flex xl:gap-8">
          <nav className="flex min-w-0 items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              const num = link.num;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-mono text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${
                    active ? navTextActive : `${navTextDefault} ${navTextHover}`
                  }`}
                >
                  <span className="opacity-60">{num}</span>{" "}
                  <span>{link.label}</span>
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#c9a961]"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            {EXTERNAL_INITIATIVES.map((ext) => (
              <a
                key={ext.href}
                href={ext.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 whitespace-nowrap border px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] transition-colors xl:px-3.5 xl:text-[11px] xl:tracking-[0.18em] ${pillIdle} ${ext.hover}`}
              >
                {ext.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-[#f5f1e8] transition-colors lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#f5f1e8]/15 bg-[#1B4D3E] lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              const num = link.num;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 border-b border-[#f5f1e8]/15 py-4 ${
                    active ? "text-[#f5f1e8]" : "text-[#f5f1e8]/65"
                  }`}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-60">
                    {num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mx-auto w-full max-w-6xl px-6 pb-6 pt-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f5f1e8]/60">
              Naar onze initiatieven
            </p>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {EXTERNAL_INITIATIVES.map((ext) => (
                <a
                  key={ext.href}
                  href={ext.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-between border border-[#f5f1e8]/30 px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#f5f1e8] transition-colors ${ext.hover}`}
                >
                  {ext.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
