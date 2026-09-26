import { projects } from "@/data/portfolioData";

export default function ProjectModal({ projectId, onClose }) {
  if (!projectId) return null;

  const proj = projects.find((p) => p.id === projectId);
  if (!proj) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1410]/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] border border-[#DDD4C5] w-full max-w-xl rounded-2xl p-6 sm:p-8 shadow-2xl space-y-4 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8C7F72] hover:text-[#2A221B] p-1.5 rounded-lg hover:bg-[#EFE8DC] cursor-pointer"
        >
          ✕
        </button>

        <div className="space-y-1 border-b border-[#E5DEC3] pb-3">
          <h3 className="text-xl font-bold text-[#2A211B] font-sans capitalize">
            {proj.title}
          </h3>
          <p className="font-mono text-xs text-[#7B6D5E]">// {proj.subtitle}</p>
        </div>

        <div className="space-y-3 text-[14.5px] text-[#4A4036] leading-relaxed">
          <p>{proj.description}</p>
          <p className="text-xs sm:text-sm text-[#5C5044] bg-[#F2ECE0] p-3 rounded-xl border border-[#DDD4C5]">
            {proj.details}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#7A6D5F]">
          {proj.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-[#EAE2D3] rounded border border-[#D5CAB9]">
              #{t}
            </span>
          ))}
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-[#E5DEC3] font-mono text-xs">
          <div className="flex gap-3">
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underlined font-semibold text-[#2E251E]"
            >
              github repo &rarr;
            </a>
            <a
              href={proj.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underlined font-semibold text-[#2E251E]"
            >
              live deployment &rarr;
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#382E25] text-[#FAF7F2] cursor-pointer"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
