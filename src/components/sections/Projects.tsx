import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { projects, sections, type Project } from "@/data/profile";

function BrowserFrame({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg-soft">
      <div className="flex items-center gap-2 border-b border-line bg-bg-elev px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="ml-2 flex-1 truncate rounded-md bg-bg-soft px-2 py-0.5 font-mono text-[10px] text-fg-faint">
          {project.domain}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name}, ${project.kind}`}
            fill
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
            className="shot object-cover object-top"
          />
        ) : (
          <Cover project={project} />
        )}
      </div>
    </div>
  );
}

/** Designed cover for projects that are private or not publicly reachable. */
function Cover({ project }: { project: Project }) {
  return (
    <div className="dot-grid relative flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-soft via-bg-soft to-amber-soft">
      <div className="text-center">
        <p className="display text-6xl text-accent md:text-7xl">{project.name.charAt(0)}</p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">{project.domain}</p>
      </div>
    </div>
  );
}

type Layout = "card" | "wide" | "wide-reverse";

function Card({ project, layout = "card", label }: { project: Project; layout?: Layout; label?: string }) {
  const wide = layout !== "card";
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block h-full rounded-card border border-line bg-bg-elev p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_28px_60px_-36px_rgba(0,0,0,0.4)] ${
        wide ? "md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:p-5" : ""
      } ${layout === "wide-reverse" ? "md:grid-cols-[0.9fr_1.1fr]" : ""}`}
    >
      <div className={layout === "wide-reverse" ? "md:order-2" : ""}>
        <BrowserFrame project={project} />
      </div>

      <div className={`flex h-full flex-col p-3 pt-5 ${wide ? "md:justify-center md:p-2" : ""} ${layout === "wide-reverse" ? "md:order-1" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            {label ? <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{label}</p> : null}
            <h3 className={`font-semibold text-fg ${wide ? "text-2xl md:text-3xl" : "text-lg"}`}>{project.name}</h3>
            <p className="mt-0.5 text-sm text-fg-muted">{project.kind}</p>
          </div>
          <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-fg-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white dark:group-hover:text-[#0e0f10]">
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">{project.summary}</p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Chip tone="accent">{project.role}</Chip>
          {project.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </div>
    </a>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  // Last project closes the section as a wide card (image on the right) so the grid never leaves an orphan.
  const closing = rest.length % 2 === 1 ? rest[rest.length - 1] : undefined;
  const grid = closing ? rest.slice(0, -1) : rest;

  return (
    <Section
      id="projects"
      index="03"
      eyebrow={sections.projects.eyebrow}
      title={
        <>
          {sections.projects.title} <span className="italic text-accent">{sections.projects.accent}</span>
        </>
      }
      intro={sections.projects.intro}
    >
      <div className="grid gap-5 md:gap-6">
        {featured.map((p, i) => (
          <Reveal key={p.slug}>
            <Card project={p} layout={i % 2 === 0 ? "wide" : "wide-reverse"} label="Featured" />
          </Reveal>
        ))}
        <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
          {grid.map((p, i) => (
            <Reveal key={p.slug} delay={0.06 * (i % 2)}>
              <Card project={p} />
            </Reveal>
          ))}
        </div>
        {closing ? (
          <Reveal>
            <Card project={closing} layout="wide-reverse" />
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
