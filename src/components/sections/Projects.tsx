import { Section } from "@/components/ui/Section";
import { projects, sections } from "@/data/profile";
import { ProjectsGrid } from "./ProjectsGrid";

export function Projects() {
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
      <ProjectsGrid projects={projects} />
    </Section>
  );
}
