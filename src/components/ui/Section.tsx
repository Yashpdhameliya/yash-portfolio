import { Container } from "./Container";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, index, eyebrow, title, intro, className = "", children }: Props) {
  return (
    <section id={id} className={`scroll-mt-20 py-[clamp(4.5rem,9vw,9rem)] ${className}`}>
      <Container>
        <Reveal>
          <div className="mb-[clamp(2.5rem,5vw,5rem)] max-w-5xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {index} <span className="text-fg-faint">—</span> {eyebrow}
            </p>
            <h2 className="display text-[clamp(2.25rem,1.3rem+3.6vw,5.75rem)] text-fg">{title}</h2>
            {intro ? <p className="mt-5 max-w-3xl text-[clamp(1rem,0.92rem+0.35vw,1.25rem)] leading-relaxed text-fg-muted">{intro}</p> : null}
          </div>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
