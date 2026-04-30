import type { ReactNode } from "react";
import { Button } from "@/components/button";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
};

export function DarkCta({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaHref,
  ctaExternal,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#1B4D3E] text-[#f5f1e8]">
      <div aria-hidden="true" className="glow-on-deep absolute inset-0 pointer-events-none" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 sm:py-28">
        {eyebrow ? (
          <p className="eyebrow text-[#f5f1e8]/50">{eyebrow}</p>
        ) : null}
        <h2
          className={`h-display-lg ${eyebrow ? "mt-8" : ""} text-[#f5f1e8]`}
        >
          {title}
        </h2>
        {body ? (
          <p className="mt-8 max-w-2xl text-[19px] leading-[1.55] text-[#f5f1e8]/70">
            {body}
          </p>
        ) : null}
        <div className="mt-12">
          <Button
            as="a"
            variant="primary"
            href={ctaHref}
            {...(ctaExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
