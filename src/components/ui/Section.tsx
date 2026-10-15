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
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${className}`}>
      <Container>
        <Reveal>
          <div className="mb-12 max-w-3xl md:mb-16">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {index} <span className="text-fg-faint">—</span> {eyebrow}
            </p>
            <h2 className="display text-4xl text-fg sm:text-5xl md:text-6xl">{title}</h2>
            {intro ? <p className="mt-5 text-base leading-relaxed text-fg-muted md:text-lg">{intro}</p> : null}
          </div>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
