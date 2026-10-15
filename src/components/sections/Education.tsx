import { GraduationCap, Languages } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { education, person } from "@/data/profile";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 pt-[var(--section-y)]">
      <Container>
        <Reveal>
          <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
            <div className="flex gap-5 rounded-card border border-line bg-bg-elev p-6">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong dark:text-accent">
                <GraduationCap size={20} />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint">Education</p>
                <h3 className="mt-1 text-lg font-semibold text-fg">{education.degree}</h3>
                <p className="mt-0.5 text-sm text-fg-muted">
                  {education.university} · {education.college}
                </p>
                <p className="mt-2 font-mono text-xs text-fg-muted">
                  {education.year} · {education.grade}
                </p>
              </div>
            </div>
            <div className="flex gap-5 rounded-card border border-line bg-bg-elev p-6">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-soft text-amber">
                <Languages size={20} />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint">Languages</p>
                <h3 className="mt-1 text-lg font-semibold text-fg">{person.languages.join(" · ")}</h3>
                <p className="mt-0.5 text-sm text-fg-muted">Comfortable working with international clients and teams.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
