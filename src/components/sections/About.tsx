import { BrainCircuit, Cloud, Code2, Layers, Sparkles, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about, sections } from "@/data/profile";

const icons = { layers: Layers, code: Code2, cloud: Cloud, users: Users, sparkles: Sparkles, brain: BrainCircuit } as const;

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow={sections.about.eyebrow}
      title={
        <>
          {sections.about.title} <span className="italic text-accent">{sections.about.accent}</span>
        </>
      }
    >
      <div className="grid gap-[var(--heading-gap)]">
        <Reveal className="max-w-3xl space-y-5 text-base leading-relaxed text-fg-muted md:text-[17px]">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.strengths.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal as="li" key={s.title} delay={0.06 * (i % 3)}>
                <div className="group h-full rounded-card border border-line bg-bg-elev p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_18px_40px_-28px_rgba(0,0,0,0.35)]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-strong transition-colors group-hover:bg-accent group-hover:text-white dark:text-accent dark:group-hover:text-[#0e0f10]">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold text-fg">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
