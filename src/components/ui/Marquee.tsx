export function Marquee({ items }: { items: readonly string[] }) {
  const row = (ariaHidden: boolean) => (
    <ul aria-hidden={ariaHidden} className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10 whitespace-nowrap font-serif text-2xl text-fg-muted md:text-3xl">
          {item}
          <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
