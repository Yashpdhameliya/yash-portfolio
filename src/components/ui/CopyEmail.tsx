"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="group inline-flex items-center gap-3 rounded-full border border-line-strong bg-bg-elev px-5 py-3 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
    >
      <span>{email}</span>
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-bg-soft text-fg-muted transition-colors group-hover:text-accent">
        {copied ? <Check size={13} /> : <Copy size={13} />}
      </span>
      <span className="sr-only">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
