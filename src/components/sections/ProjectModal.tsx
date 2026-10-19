"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Lock, X } from "lucide-react";
import type { Project } from "@/data/profile";
import { Chip } from "@/components/ui/Chip";
import { ProjectFrame } from "@/components/ui/ProjectFrame";

type Props = {
  projects: Project[];
  index: number;
  direction: 1 | -1;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

/** Full details of one project: opens from a card, closes with Esc / backdrop / X, arrows move between projects. */
export function ProjectModal({ projects, index, direction, onClose, onNavigate }: Props) {
  const project = projects[index];
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = projects.length;

  const go = (step: 1 | -1) => onNavigate((index + step + count) % count);

  // Lock page scroll, move focus into the dialog, and hand focus back on close.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      opener?.focus?.();
    };
  }, []);

  // Keyboard: Esc closes, arrows navigate, Tab stays inside the dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key === "ArrowRight") return go(1);
      if (e.key === "ArrowLeft") return go(-1);
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Start each project at the top of the dialog.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [index]);

  const titleId = `project-title-${project.slug}`;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92svh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl border border-line bg-bg shadow-[0_40px_120px_-30px_rgba(0,0,0,0.55)] sm:max-h-[88svh] sm:rounded-3xl"
        initial={{ opacity: 0, y: 48, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 320, damping: 34 }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-line bg-bg/90 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-muted transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next project"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-muted transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight size={17} />
            </button>
            <span className="ml-2 font-mono text-xs text-fg-faint">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-muted transition-colors hover:border-accent hover:text-accent"
          >
            <X size={17} />
          </button>
        </div>

        {/* Content */}
        <div ref={scrollRef} className="overflow-y-auto overscroll-contain">
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8"
          >
            <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
              <ProjectFrame project={project} sizes="(min-width: 1024px) 560px, 100vw" />

              <div>
                {project.featured ? (
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Featured</p>
                ) : null}
                <h3 id={titleId} className="display text-4xl text-fg sm:text-5xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-fg-muted">{project.kind}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip tone="accent">{project.role}</Chip>
                </div>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn mt-6 inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-white dark:hover:text-[#0e0f10]"
                  >
                    Visit {project.domain}
                    <ArrowUpRight size={15} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </a>
                ) : (
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg-elev px-4 py-2.5 text-sm text-fg-muted">
                    <Lock size={14} /> Private platform, employee access only
                  </p>
                )}
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-fg-muted sm:text-base">{project.summary}</p>

            {project.features?.length ? (
              <div className="mt-8 border-t border-line pt-7">
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">What I built</p>
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                  {project.features.map((f) => (
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
            ) : project.highlights?.length ? (
              <div className="mt-8 border-t border-line pt-7">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">Highlights</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-[14px] leading-relaxed text-fg-muted">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-8 border-t border-line pt-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">Tech</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
