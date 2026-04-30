import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "dark" | "ghost-light" | "ghost-dark";

const variants: Record<Variant, string> = {
  primary: "bg-[#c9a961] text-[#1B4D3E] hover:bg-[#b89651]",
  dark: "bg-[#1B4D3E] text-[#f5f1e8] hover:bg-[#14392E]",
  "ghost-light":
    "bg-transparent text-[#f5f1e8] border border-[#f5f1e8]/40 hover:bg-[#f5f1e8] hover:text-[#1B4D3E]",
  "ghost-dark":
    "bg-transparent text-[#1B4D3E] border border-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-[#f5f1e8]",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961] focus-visible:ring-offset-2 focus-visible:ring-offset-current";

type ButtonAsButton = {
  as?: "button";
  variant?: Variant;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type ButtonAsAnchor = {
  as: "a";
  variant?: Variant;
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (props.as === "a") {
    const { as: _as, variant: _v, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
