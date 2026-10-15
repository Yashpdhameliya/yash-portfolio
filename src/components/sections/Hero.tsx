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
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span className="inline-block" variants={wordUp}>
            {w}
          </motion.span>
          {i < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
        </span>
      ))}
    </span>
  );
}

/*
 * Sizing notes — the hero fills exactly one screen on tablets, laptops and desktops
 * (min-height: 100svh on landscape screens: laptops, desktops, landscape tablets). Type and the portrait are sized against BOTH viewport width
 * and height (min(vw, svh)), so short laptop screens shrink everything to fit instead
 * of pushing the buttons below the fold.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 md:landscape:min-h-[100svh] md:landscape:pt-[calc(72px+3svh)] md:landscape:pb-[6svh]"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="glow pointer-events-none absolute left-1/2 top-[-120px] -z-10 h-[640px] w-[min(1000px,160vw)] -translate-x-1/2"
        aria-hidden
      />

      <Container className="flex flex-1 items-center">
        <motion.div
          className="grid w-full items-center gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-[clamp(2.5rem,5vw,7rem)]"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Copy */}
          <div className="min-w-0">
            <motion.div
              variants={fadeUp}
              className="mb-[clamp(1.25rem,3svh,2rem)] inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-elev/70 px-3.5 py-1.5 text-xs font-medium text-fg-muted backdrop-blur"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {person.availability}
            </motion.div>

            <h1 className="text-fg">
              <span className="display block whitespace-nowrap text-[clamp(2.9rem,min(6.4vw,11.5svh),8rem)] leading-[0.95]">
                <Words text={person.name} />
              </span>
              <span className="display mt-[clamp(0.5rem,1.5svh,1rem)] block text-[clamp(1.6rem,min(3.1vw,5.6svh),3.75rem)] leading-[1.05] text-fg-muted">
                <Words text="Team Lead &" /> <Words text="Full-Stack Developer." className="italic text-accent" />
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-[clamp(1.25rem,3.5svh,2.25rem)] max-w-[38rem] text-[clamp(1rem,0.9rem+0.35vw,1.2rem)] leading-relaxed text-fg-muted"
            >
              {person.pitch}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-[clamp(1.5rem,4svh,2.5rem)] flex flex-wrap items-center gap-3">
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

            <motion.div
              variants={fadeUp}
              className="mt-[clamp(1.5rem,4svh,2.5rem)] flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-fg-muted"
            >
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

          {/* Portrait — width follows the smaller of screen width/height, height follows 4:5 */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-[min(78vw,340px)] md:mx-0 md:w-[min(32vw,48svh,480px)] md:justify-self-end"
          >
            <div className="pointer-events-none absolute -inset-10 -z-10" aria-hidden>
              <div className="animate-float absolute left-[10%] top-[8%] h-[60%] w-[60%] rounded-full bg-accent/25 blur-3xl" />
              <div className="animate-float-slow absolute bottom-[6%] right-[4%] h-[65%] w-[65%] rounded-full bg-amber/20 blur-3xl" />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[clamp(20px,2vw,28px)] border border-line bg-bg-soft shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
              <Image
                src={person.photo}
                alt={`${person.name}, ${person.role}`}
                fill
                priority
                sizes="(min-width: 768px) min(32vw, 480px), 340px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-black/5 dark:ring-white/5" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
              className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-line bg-bg-elev/90 p-3.5 shadow-lg backdrop-blur md:-left-10 md:right-auto md:w-[min(270px,80%)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint">Currently</p>
              <p className="mt-1 text-sm font-medium text-fg">{person.currently.title}</p>
              <p className="text-sm text-fg-muted">@ {person.currently.company}</p>
              <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-fg-muted">
                <MapPin size={12} /> {person.location}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll cue — only where the hero is full-height and the screen is tall enough */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="group absolute bottom-[2.5svh] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-fg-faint transition-colors hover:text-accent md:landscape:[@media(min-height:760px)]:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="relative h-9 w-[22px] rounded-full border border-current">
          <span className="animate-scroll-dot absolute left-1/2 top-2 h-1.5 w-1 -translate-x-1/2 rounded-full bg-current" />
        </span>
      </motion.a>
    </section>
  );
}
