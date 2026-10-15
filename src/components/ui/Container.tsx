export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-[1680px] px-[var(--gutter)] ${className}`}>{children}</div>;
}
