import Image from "next/image";
import type { Project } from "@/data/profile";

/** Browser-style frame with the project screenshot (or a designed cover when there is none). */
export function ProjectFrame({ project, sizes }: { project: Project; sizes: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg-soft">
      <div className="flex items-center gap-2 border-b border-line bg-bg-elev px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="ml-2 flex-1 truncate rounded-md bg-bg-soft px-2 py-0.5 font-mono text-[10px] text-fg-faint">
          {project.domain ?? "Private platform"}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name}, ${project.kind}`}
            fill
            sizes={sizes}
            className="shot object-cover object-top"
          />
        ) : (
          <div className="dot-grid flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-soft via-bg-soft to-amber-soft">
            <p className="display text-6xl text-accent md:text-7xl">{project.name.charAt(0)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
