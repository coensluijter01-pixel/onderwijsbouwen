import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  children: ReactNode;
  cite?: { label: string; href: string };
};

export function Pullquote({ eyebrow, children, cite }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#1B4D3E] text-[#f5f1e8]">
      <div aria-hidden="true" className="glow-on-deep absolute inset-0 pointer-events-none" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-28 sm:py-36">
        <p className="eyebrow text-[#f5f1e8]/50">{eyebrow}</p>
        <blockquote className="pullquote mt-12 text-[#f5f1e8]">
          {children}
        </blockquote>
        {cite ? (
          <a
            href={cite.href}
            className="eyebrow group mt-12 inline-flex items-center gap-3 text-[#f5f1e8]/50 transition-colors hover:text-[#c9a961]"
          >
            {cite.label}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        ) : null}
      </div>
    </section>
  );
}
