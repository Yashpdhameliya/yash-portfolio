import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/profile";

export function Stats() {
  return (
    <section aria-label="Highlights" className="md:landscape:pt-[calc(var(--section-y)*0.5)]">
      <Container>
        <Reveal>
          <ul className="grid grid-cols-2 overflow-hidden rounded-card border border-line bg-bg-elev md:grid-cols-4">
            {stats.map((s, i) => (
              <li
                key={s.label}
                className={`flex flex-col gap-1 p-6 md:p-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                  i >= 2 ? "border-t border-line md:border-t-0" : ""
                } ${i >= 2 ? "md:border-l" : ""}`}
              >
                <span className="display text-4xl text-fg md:text-5xl">
                  <Counter value={s.value} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
                </span>
                <span className="text-sm font-medium text-fg">{s.label}</span>
                <span className="font-mono text-[11px] text-fg-faint">{s.note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
