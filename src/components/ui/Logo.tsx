import { useId } from "react";
import { brand } from "@/data/profile";

/**
 * Brand mark: two code brackets "< >" that together form a diamond, with a small
 * amber core. Left bracket deep teal, right bracket light teal — reads as a
 * developer mark at any size. On hover (parent `.group`) the brackets ease apart.
 */
export function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className={`shrink-0 overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id={`${id}-l`} x1="4" y1="6" x2="18" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0b5f59" />
          <stop offset="1" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id={`${id}-r`} x1="22" y1="6" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#0f766e" />
        </linearGradient>
      </defs>
      {/* left bracket  < */}
      <path
        d="M16.5 6 6 20l10.5 14"
        stroke={`url(#${id}-l)`}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-500 ease-out group-hover:-translate-x-[1.5px]"
      />
      {/* right bracket  > */}
      <path
        d="M23.5 6 34 20 23.5 34"
        stroke={`url(#${id}-r)`}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-500 ease-out group-hover:translate-x-[1.5px]"
      />
      {/* core */}
      <path
        d="M20 15.8 24.2 20 20 24.2 15.8 20Z"
        fill="#f59e0b"
        strokeLinejoin="round"
        className="transition-transform duration-500 ease-out group-hover:scale-125"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </svg>
  );
}

/** Mark + two-tone wordmark (e.g. "Yash" + "Dev"). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={30} />
      <span className="text-[19px] font-bold leading-none tracking-[-0.02em] text-fg">
        {brand.word}
        <span className="text-accent">{brand.accent}</span>
      </span>
    </span>
  );
}
