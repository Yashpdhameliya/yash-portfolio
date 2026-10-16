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

function ArrowLink({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.name} (${project.domain})`}
      className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-fg-muted transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white group-hover:border-accent dark:hover:text-[#0e0f10]"
    >
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function Features({ features }: { features: NonNullable<Project["features"]> }) {
  const cols = features.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <div className="mt-6 border-t border-line px-3 pt-6 md:mt-8 md:px-2 md:pt-8">
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">What I built</p>
      <div className={`grid gap-x-8 gap-y-7 sm:grid-cols-2 ${cols}`}>
        {features.map((f) => (
          <div key={f.title}>
            <h4 className="flex items-center gap-2 text-[13px] font-semibold text-fg">
              <span className="h-px w-4 bg-accent" aria-hidden />
              {f.title}
            </h4>
            <ul className="mt-2.5 space-y-1.5">
              {f.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-[13.5px] leading-relaxed text-fg-muted">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ project, layout = "card", label }: { project: Project; layout?: Layout; label?: string }) {
  const wide = layout !== "card";
  const reverse = layout === "wide-reverse";
  const features = wide && project.features?.length ? project.features : null;
  return (
    <article
      className={`group h-full rounded-card border border-line bg-bg-elev p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_28px_60px_-36px_rgba(0,0,0,0.4)] ${
        wide ? "md:p-5" : ""
      }`}
    >
      <div
        className={
          wide ? `md:grid md:gap-8 ${reverse ? "md:grid-cols-[0.9fr_1.1fr]" : "md:grid-cols-[1.1fr_0.9fr]"}` : ""
        }
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden
          className={`block ${reverse ? "md:order-2" : ""}`}
        >
          <BrowserFrame project={project} />
        </a>

        <div className={`flex h-full flex-col p-3 pt-5 ${wide ? "md:justify-center md:p-2" : ""} ${reverse ? "md:order-1" : ""}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              {label ? <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{label}</p> : null}
              <h3 className={`font-semibold text-fg ${wide ? "text-2xl md:text-3xl" : "text-lg"}`}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  {project.name}
                </a>
              </h3>
              <p className="mt-0.5 text-sm text-fg-muted">{project.kind}</p>
            </div>
            <ArrowLink project={project} />
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">{project.summary}</p>

          {!features && project.highlights?.length ? (
            <ul className="mt-4 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Chip tone="accent">{project.role}</Chip>
            {project.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>
      </div>

      {features ? <Features features={features} /> : null}
    </article>
  );
}

export function Projects() {
  // Walk the list in order: featured projects become full-width cards (alternating
  // image side); the regular ones between them are grouped into two-column rows.
  type Block = { kind: "wide"; project: Project; reverse: boolean } | { kind: "grid"; items: Project[] };
  const blocks: Block[] = [];
  let wideCount = 0;
  for (const p of projects) {
    if (p.featured) {
      blocks.push({ kind: "wide", project: p, reverse: wideCount++ % 2 === 1 });
    } else {
      const last = blocks[blocks.length - 1];
      if (last?.kind === "grid") last.items.push(p);
      else blocks.push({ kind: "grid", items: [p] });
    }
  }
  // A lone card at the very end closes the section as a wide card instead of leaving a gap.
  const end = blocks[blocks.length - 1];
  if (end?.kind === "grid" && end.items.length % 2 === 1) {
    const lone = end.items.pop()!;
    blocks.push({ kind: "wide", project: lone, reverse: wideCount++ % 2 === 1 });
  }

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
        {blocks.map((b, i) =>
          b.kind === "wide" ? (
            <Reveal key={b.project.slug}>
              <Card project={b.project} layout={b.reverse ? "wide-reverse" : "wide"} label={b.project.featured ? "Featured" : undefined} />
            </Reveal>
          ) : b.items.length ? (
            <div key={`grid-${i}`} className="grid gap-5 sm:grid-cols-2 md:gap-6">
              {b.items.map((p, j) => (
                <Reveal key={p.slug} delay={0.06 * (j % 2)}>
                  <Card project={p} />
                </Reveal>
              ))}
            </div>
          ) : null,
        )}
      </div>
    </Section>
  );
}
