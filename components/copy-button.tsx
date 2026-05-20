"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Props = {
  text: string;
  label?: string;
};

export function CopyButton({ text, label = "Kopiëren" }: Props) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 border border-[#1B4D3E]/30 bg-transparent px-3.5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4D3E] transition-colors hover:bg-[#1B4D3E] hover:text-[#f5f1e8]"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
          Gekopieerd
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          {label}
        </>
      )}
    </button>
  );
}
