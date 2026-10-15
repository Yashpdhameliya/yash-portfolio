import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LocalTime, Year } from "@/components/ui/LocalTime";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { person, socials } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-10 text-sm text-fg-muted md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-fg">
            © <Year /> {person.name}
          </p>
          <p>
            {person.location} · <LocalTime timeZone={person.timeZone} />
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg-muted transition-colors hover:border-accent hover:text-accent"
            >
              <SocialIcon name={s.icon} size={17} />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-fg text-bg transition-colors hover:bg-accent hover:text-white dark:hover:text-[#0e0f10]"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </Container>
      <Container className="pb-8">
        <p className="font-mono text-[11px] text-fg-faint">Designed & built with Next.js, Tailwind CSS and Motion. Deployed on Vercel.</p>
      </Container>
    </footer>
  );
}
