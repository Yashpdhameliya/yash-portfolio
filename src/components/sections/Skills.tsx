import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { marqueeTech, sections, skillGroups } from "@/data/profile";

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow={sections.skills.eyebrow}
      title={
        <>
          {sections.skills.title} <span className="italic text-accent">{sections.skills.accent}</span>
        </>
      }
      intro={sections.skills.intro}
    >
      <Reveal>
        <div className="-mx-[var(--gutter)] border-y border-line">
          <Marquee items={marqueeTech} />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={0.05 * (i % 3)}>
            <h3 className="mb-3 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-fg">
              <span className="h-px w-5 bg-accent" aria-hidden />
              {g.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-bg-elev px-2.5 py-1.5 text-[13px] text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
