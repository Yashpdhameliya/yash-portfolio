import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { coreSkills, marqueeTech, sections, skillGroups } from "@/data/profile";

const core = new Set<string>(coreSkills);

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

      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={0.04 * (i % 4)}>
            <h3 className="mb-3 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-fg">
              <span className="h-px w-5 bg-accent" aria-hidden />
              {g.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className={`rounded-lg border px-2.5 py-1.5 text-[13px] transition-colors ${
                    core.has(item)
                      ? "border-accent/40 bg-accent-soft font-medium text-accent-strong dark:text-accent"
                      : "border-line bg-bg-elev text-fg-muted hover:border-accent/50 hover:text-fg"
                  }`}
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
