export function Chip({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "accent" }) {
  const styles =
    tone === "accent"
      ? "border-accent/30 bg-accent-soft text-accent-strong dark:text-accent"
      : "border-line bg-bg-elev text-fg-muted";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none tracking-wide ${styles}`}
    >
      {children}
    </span>
  );
}
