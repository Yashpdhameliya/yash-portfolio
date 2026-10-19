"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Project } from "@/data/profile";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectFrame } from "@/components/ui/ProjectFrame";
import { ProjectModal } from "./ProjectModal";

/*
 * Compact, scannable project cards, all the same shape so rows line up.
 * 8 projects + 1 closing card = 3 rows of 3 on desktop; on two columns the
 * closing card spans both. Full details open in a modal instead of making the page long.
 */
function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const featured = Boolean(project.featured);
  const shownTech = project.tech.slice(0, 2);
  const extra = project.tech.length - shownTech.length;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-card border bg-bg-elev p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_28px_60px_-36px_rgba(0,0,0,0.4)] has-[button:focus-visible]:border-accent has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-accent/40 ${
        featured ? "border-accent/30" : "border-line"
      }`}
    >
      <ProjectFrame project={project} sizes="(min-width: 1280px) 420px, (min-width: 640px) 45vw, 100vw" />

      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-fg">
            {/* Stretched button: the whole card is clickable, but stays valid, accessible HTML. */}
            <button
              type="button"
              onClick={onOpen}
              aria-haspopup="dialog"
              className="text-left outline-none after:absolute after:inset-0 after:content-['']"
            >
              {project.name}
            </button>
          </h3>
          {featured ? (
            <span className="mt-1 shrink-0 rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-accent-strong dark:text-accent">
              Featured
            </span>
          ) : null}
        </div>
        <p className="mt-0.5 text-sm text-fg-muted">{project.kind}</p>

        <p className="mt-3 line-clamp-3 text-[14.5px] leading-relaxed text-fg-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <Chip tone="accent">{project.role}</Chip>
          {shownTech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
          {extra > 0 ? <Chip>+{extra}</Chip> : null}
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent">
          View details
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}

function ClosingCard() {
  return (
    <a
      href="#contact"
      className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-card border border-accent/30 bg-gradient-to-br from-accent-soft via-bg-elev to-amber-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_28px_60px_-36px_rgba(0,0,0,0.4)] sm:p-8"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-bg-elev text-accent">
        <MessageCircle size={20} />
      </span>
      <div className="relative">
        <h3 className="display text-3xl text-fg sm:text-4xl">
          Have a project <span className="italic text-accent">in mind?</span>
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-fg-muted">
          I plan, build and ship web and mobile products. Tell me what you need.
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Get in touch
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const navigate = (next: number) => {
    setDirection(next > (active ?? 0) ? 1 : -1);
    setActive(next);
  };

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 md:gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={0.05 * (i % 3)}>
            <ProjectCard
              project={p}
              onOpen={() => {
                setDirection(1);
                setActive(i);
              }}
            />
          </Reveal>
        ))}
        <Reveal delay={0.05} className="sm:col-span-2 xl:col-span-1">
          <ClosingCard />
        </Reveal>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <ProjectModal
            key="project-modal"
            projects={projects}
            index={active}
            direction={direction}
            onClose={() => setActive(null)}
            onNavigate={navigate}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
