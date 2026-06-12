import Link from "next/link";
import type { ReactNode } from "react";

type AudienceCta = {
  text: string;
  href: string;
  external: boolean;
};

type AudienceRowProps = {
  num: string;
  label: string;
  body: string;
  cta: AudienceCta;
};

export function AudienceRow({ num, label, body, cta }: AudienceRowProps) {
  const ctaContent = (
    <>
      {cta.text}
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
      >
        {cta.external ? "↗" : "→"}
      </span>
    </>
  );

  const ctaClassName =
    "group inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E] transition-colors hover:text-[#c9a961]";

  return (
    <div className="grid grid-cols-1 items-start gap-6 py-12 lg:gap-8 lg:py-16 xl:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_auto] xl:gap-12">
      <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1 xl:pt-1">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5a52]">
          {num}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1B4D3E]">
          {label}
        </span>
      </div>
      <p className="min-w-0 text-[17px] leading-[1.65] text-[#0a1a14]">{body}</p>
      <div className="shrink-0 xl:pt-1">
        {cta.external ? (
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClassName}
          >
            {ctaContent}
          </a>
        ) : (
          <Link href={cta.href} className={ctaClassName}>
            {ctaContent}
          </Link>
        )}
      </div>
    </div>
  );
}

export function AudienceRowList({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ul className="divide-y divide-[#1B4D3E] border-y border-[#1B4D3E]">
      {children}
    </ul>
  );
}
