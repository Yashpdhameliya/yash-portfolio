"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { experience } from "@/data/profile";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title={
        <>
          Nearly five years of <span className="italic text-accent">shipping real products.</span>
        </>
      }
    >
      <ol ref={ref} className="relative">
        {/* Rail */}
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-line md:left-[calc(11rem+7px)]" aria-hidden />
        <motion.div
          className="absolute left-[7px] top-2 w-px origin-top bg-accent md:left-[calc(11rem+7px)]"
          style={{ height: "calc(100% - 8px)", scaleY: reduce ? 1 : progress }}
          aria-hidden
        />

        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={0.05 * i} className="relative pb-14 pl-9 last:pb-0 md:grid md:grid-cols-[11rem_1fr] md:gap-8 md:pl-0">
            {/* Dot */}
            <span
              className={`absolute left-0 top-2 inline-flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 bg-bg md:left-[11rem] ${
                job.end === null ? "border-accent" : "border-line-strong"
              }`}
              aria-hidden
            >
              {job.end === null ? <span className="h-[5px] w-[5px] rounded-full bg-accent" /> : null}
            </span>

            <div className="mb-3 md:mb-0 md:pr-6">
              <p className="font-mono text-xs text-fg-muted md:pt-1.5">{job.period}</p>
              <p className="mt-1 font-mono text-[11px] text-fg-faint">{job.location}</p>
            </div>

            <div className="md:pl-8">
              <h3 className="text-xl font-semibold text-fg md:text-2xl">{job.role}</h3>
              <p className="mt-1 text-[15px] text-fg-muted">
                {job.company}
                {job.note ? <span className="block text-sm text-fg-faint sm:inline sm:before:content-['_·_']">{job.note}</span> : null}
              </p>
              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-fg-muted">
                    <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
