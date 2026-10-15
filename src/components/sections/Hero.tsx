"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { person, site, socials } from "@/data/profile";

const EASE = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const wordUp = {
  hidden: { y: "110%", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: EASE } },
};
const fadeUp = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

function Words({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.06em] align-bottom">
          <motion.span className="inline-block" variants={wordUp}>
            {w}
          </motion.span>
          {i < text.split(" ").length - 1 ? <span className="inline-block">&nbsp;</span> : null}
        </span>
      ))}
    </span>
  );
}

export function Hero() {

  return (
    <section id="home" className="relative overflow-hidden pt-[clamp(7rem,12vw,12rem)] pb-[clamp(3.5rem,6vw,7rem)]">
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="glow pointer-events-none absolute left-1/2 top-[-120px] -z-10 h-[640px] w-[1000px] -translate-x-1/2"
        aria-hidden
      />

      <Container>
        <motion.div
          className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-10 lg:gap-16"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Copy */}
          <div>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-elev/70 px-3.5 py-1.5 text-xs font-medium text-fg-muted backdrop-blur">
              <span className="relative inline-flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {person.availability}
            </motion.div>

            <h1 className="display text-[clamp(2.6rem,0.8rem+4.6vw,6.5rem)] leading-[0.95] text-fg">
              <Words text={person.name} />
              <br />
              <Words text="Team Lead &" className="text-fg-muted" />{" "}
              <Words text="Full-Stack Developer." className="italic text-accent" />
            </h1>

            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-[clamp(1rem,0.92rem+0.4vw,1.3rem)] leading-relaxed text-fg-muted">
              {person.pitch}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <ButtonLink href="#projects" variant="primary">
                  View projects <ArrowDown size={15} className="transition-transform group-hover/btn:translate-y-0.5" />
                </ButtonLink>
              </Magnetic>
              <Magnetic>
                <ButtonLink href={site.resumePath} download={site.resumeFileName} variant="secondary">
                  Download resume <Download size={15} />
                </ButtonLink>
              </Magnetic>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-fg-muted">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <SocialIcon name={s.icon} size={16} />
                  <span className="font-mono text-xs">{s.handle}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div variants={fadeUp} className="relative mx-auto mt-4 w-full max-w-[340px] md:mt-0 md:max-w-[min(100%,600px)] md:justify-self-end">
            <div className="pointer-events-none absolute -inset-10 -z-10" aria-hidden>
              <div className="animate-float absolute left-[10%] top-[8%] h-56 w-56 rounded-full bg-accent/25 blur-3xl" />
              <div className="animate-float-slow absolute bottom-[6%] right-[4%] h-64 w-64 rounded-full bg-amber/20 blur-3xl" />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-bg-soft shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
              <Image
                src={person.photo}
                alt={`${person.name}, ${person.role}`}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 380px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-black/5 dark:ring-white/5" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
              className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-line bg-bg-elev/90 p-4 shadow-lg backdrop-blur md:-left-8 md:right-auto md:w-[290px]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint">Currently</p>
              <p className="mt-1 text-sm font-medium text-fg">{person.currently.title}</p>
              <p className="text-sm text-fg-muted">@ {person.currently.company}</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-fg-muted">
                <MapPin size={12} /> {person.location}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
