import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  cta?: ReactNode;
  digit?: string;
  size?: "tall" | "compact";
};

export function SectionHero({
  eyebrow,
  title,
  lead,
  cta,
  digit,
  size = "compact",
}: Props) {
  const tall = size === "tall";
  const heightClass = tall
    ? "min-h-[90vh] py-32 sm:py-40"
    : "min-h-[60vh] py-28 sm:py-32";
  const titleClass = tall ? "h-display-xl" : "h-display-lg";

  return (
    <section
      className={`relative overflow-hidden bg-[#1B4D3E] text-[#f5f1e8] ${heightClass}`}
    >
      <div aria-hidden="true" className="glow-on-deep absolute inset-0 pointer-events-none" />

      <span
        aria-hidden="true"
        className="absolute left-0 top-20 sm:top-24 h-[3px] w-20 bg-[#c9a961] z-10"
      />

      {digit ? (
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute right-[-2rem] top-1/2 hidden -translate-y-1/2 select-none text-[28rem] font-medium leading-none text-[#f5f1e8]/[0.04] lg:block"
          style={{ fontVariationSettings: "'opsz' 144" }}
        >
          {digit}
        </span>
      ) : null}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6">
        <p className="eyebrow text-[#f5f1e8]/60">{eyebrow}</p>
        <h1 className={`${titleClass} mt-8 max-w-5xl text-[#f5f1e8]`}>{title}</h1>
        {lead ? (
          <p className="mt-12 max-w-xl text-[19px] leading-[1.55] text-[#f5f1e8]/70">
            {lead}
          </p>
        ) : null}
        {cta ? (
          <div className="mt-14 flex w-full max-w-3xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            {cta}
          </div>
        ) : null}
      </div>
    </section>
  );
}
