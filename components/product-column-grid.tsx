import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ProductColumnGridProps = {
  children: ReactNode;
};

export function ProductColumnGrid({ children }: ProductColumnGridProps) {
  return (
    <div className="grid grid-cols-1 items-stretch md:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
}

function columnBorderClass(index: number, total: number) {
  if (total === 3 && index === 0) {
    return "border-b border-[#1B4D3E] md:border-b-0 md:border-r";
  }
  if (total === 3 && index === 1) {
    return "border-b border-[#1B4D3E] md:border-b-0";
  }
  if (total === 3 && index === 2) {
    return "md:border-t xl:border-t-0 xl:border-l border-[#1B4D3E]";
  }
  return index < total - 1 ? "border-b border-[#1B4D3E]" : "";
}

type ProductColumnItemProps = {
  index: number;
  total: number;
  as?: "a" | "article";
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "className" | "children">;

const itemBase = "flex h-full min-w-0 flex-col p-8 sm:p-10 xl:p-12";

export function ProductColumnItem({
  index,
  total,
  as: Tag = "article",
  className = "",
  children,
  ...rest
}: ProductColumnItemProps) {
  const classes =
    `${itemBase} ${columnBorderClass(index, total)} ${className}`.trim();

  if (Tag === "a") {
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return <article className={classes}>{children}</article>;
}
