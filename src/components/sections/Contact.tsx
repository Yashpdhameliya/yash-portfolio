import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { person, site, socials } from "@/data/profile";

export function Contact() {
  const links = socials.filter((s) => s.icon !== "mail");
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      <div className="glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2" aria-hidden />
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              05 <span className="text-fg-faint">—</span> Contact
            </p>
            <h2 className="display text-5xl text-fg sm:text-6xl md:text-7xl">
              Let&apos;s build something <span className="italic text-accent">together.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
              I&apos;m looking for a full-time role where I can lead a team and own the technical direction of a product.
              If that sounds like your team, I&apos;d love to talk.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CopyEmail email={person.email} />
              <a
                href={site.resumePath}
                download={site.resumeFileName}
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-white dark:hover:text-[#0e0f10]"
              >
                Download resume <Download size={15} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-fg-muted">
              {links.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <SocialIcon name={s.icon} size={16} />
                  {s.label}
                  <ArrowUpRight size={14} className="opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              ))}
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} /> {person.location}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
