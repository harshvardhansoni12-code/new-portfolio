"use client";

import { projects } from "@/data/portfolioData";

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="space-y-6 pt-4">
      <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-2 font-mono">
        <h2 className="text-sm font-bold tracking-wider text-[#574C40]">projects</h2>
        <span className="text-xs text-[#8A7D70]">selected works</span>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <article key={project.id} className="space-y-2 group">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div className="font-mono text-[14.5px] sm:text-[15px] font-semibold text-[#302720]">
                <span className="text-[#201915]">{project.title}</span>{" "}
                <span className="text-[#877A6C] font-normal">// {project.subtitle}</span>
              </div>
              <div className="font-mono text-xs text-[#8F8274] shrink-0 sm:text-right">
                {project.tags.slice(0, 4).join(" · ")}
              </div>
            </div>

            <p className="text-[14px] leading-relaxed text-[#564B41]">
              {project.description}
            </p>

            <div className="flex items-center gap-3 pt-1 font-mono text-xs text-[#7B6E60]">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1F1915] underline decoration-[#C2B7A8] hover:decoration-[#45392F] underline-offset-2"
              >
                code &rarr;
              </a>
              <span className="text-[#CFC6B8]">·</span>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1F1915] underline decoration-[#C2B7A8] hover:decoration-[#45392F] underline-offset-2"
              >
                live &rarr;
              </a>
              <span className="text-[#CFC6B8]">·</span>
              <button
                onClick={() => onSelectProject(project.id)}
                className="hover:text-[#1F1915] underline decoration-[#C2B7A8] hover:decoration-[#45392F] underline-offset-2 cursor-pointer"
              >
                details &rarr;
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
