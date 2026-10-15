import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { contact, person, site, socials } from "@/data/profile";

export function Contact() {
  const profiles = socials.filter((s) => s.external);
  const { city, region, postalCode, country } = person.address;

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-[var(--section-y)]">
      <div
        className="glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[min(1100px,140vw)] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />
      <Container>
        <div className="grid grid-cols-1 items-center gap-[var(--heading-gap)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-[clamp(3rem,6vw,8rem)] [&>*]:min-w-0">
          {/* Pitch */}
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              05 <span className="text-fg-faint">—</span> {contact.eyebrow}
            </p>
            <h2 className="display text-[clamp(2.25rem,1.3rem+3.6vw,5.75rem)] text-fg">
              {contact.title} <span className="italic text-accent">{contact.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-xl text-[clamp(1rem,0.92rem+0.4vw,1.3rem)] leading-relaxed text-fg-muted">
              {contact.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CopyEmail email={person.email} />
              <a
                href={site.resumePath}
                download={site.resumeFileName}
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-white dark:hover:text-[#0e0f10]"
              >
                Download resume <Download size={15} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-fg-muted">
              {profiles.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <SocialIcon name={s.icon} size={16} />
                  {s.label}
                  <ArrowUpRight
                    size={14}
                    className="opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Direct contact cards */}
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 [&>*]:min-w-0">
            {contact.methods.map((m, i) => (
              <Reveal as="li" key={m.label} delay={0.07 * i}>
                <a
                  href={m.href}
                  target={m.external ? "_blank" : undefined}
                  rel={m.external ? "noopener noreferrer" : undefined}
                  className="group flex h-full items-center gap-4 rounded-card border border-line bg-bg-elev/80 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_18px_40px_-28px_rgba(0,0,0,0.35)] sm:p-5"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong transition-colors group-hover:bg-accent group-hover:text-white dark:text-accent dark:group-hover:text-[#0e0f10]">
                    <SocialIcon name={m.icon} size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint">{m.label}</span>
                    <span className="mt-0.5 block truncate text-[15px] font-medium text-fg">{m.value}</span>
                    <span className="mt-0.5 block text-xs text-fg-muted">{m.hint}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-fg-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </Reveal>
            ))}

            <Reveal as="li" delay={0.07 * contact.methods.length}>
              <div className="flex h-full items-center gap-4 rounded-card border border-line bg-bg-elev/80 p-4 backdrop-blur sm:p-5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-soft text-amber">
                  <MapPin size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint">Location</span>
                  <span className="mt-0.5 block text-[15px] font-medium text-fg">
                    {city}, {region} {postalCode}
                  </span>
                  <span className="mt-0.5 block text-xs text-fg-muted">{country}</span>
                </span>
              </div>
            </Reveal>
          </ul>
        </div>
      </Container>
    </section>
  );
}
