import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-bg hover:bg-accent hover:text-white dark:hover:text-[#0e0f10] shadow-[0_1px_0_rgba(0,0,0,0.05)]",
  secondary:
    "border border-line-strong bg-bg-elev text-fg hover:border-accent hover:text-accent",
  ghost: "text-fg-muted hover:text-fg",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
