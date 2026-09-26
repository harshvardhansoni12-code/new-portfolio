import { personalInfo, projects, education, skills } from "@/data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1410]/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FAF7F2] border border-[#DDD4C5] w-full max-w-3xl rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8C7F72] hover:text-[#2A221B] p-1.5 rounded-lg hover:bg-[#EFE8DC] transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#E5DEC3] pb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#2A211B] font-sans tracking-tight">
            {personalInfo.fullName}
          </h3>
          <p className="font-mono text-xs sm:text-sm text-[#736658] mt-1 flex flex-wrap gap-x-3 gap-y-1">
            <span>{personalInfo.phone}</span>
            <span>·</span>
            <span>{personalInfo.email}</span>
            <span>·</span>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="link-underlined">
              Twitter
            </a>
            <span>·</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link-underlined">
              LinkedIn
            </a>
            <span>·</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link-underlined">
              GitHub
            </a>
          </p>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-6 text-sm text-[#453B31]">
          {/* Projects Section */}
          <div className="space-y-4">
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-[#736556] border-b border-[#ECE4D8] pb-1">
              Projects
            </h4>

            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-[#2A211B]">{proj.title}</span>
                  <span className="font-mono text-xs text-[#827568] flex gap-2">
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underlined text-[#2E251E]"
                    >
                      Live
                    </a>
                    <span>·</span>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underlined text-[#2E251E]"
                    >
                      Code
                    </a>
                  </span>
                </div>
                <div className="font-mono text-xs text-[#706355]">
                  Tech Stack: {proj.tags.join(", ")}
                </div>
                <p className="text-xs sm:text-sm text-[#50443A] leading-relaxed">
                  {proj.details}
                </p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-[#736556] border-b border-[#ECE4D8] pb-1">
              Education
            </h4>
            <div className="flex justify-between items-baseline">
              <div>
                <div className="font-bold text-[#2A211B] uppercase">{education.institution}</div>
                <div className="text-xs text-[#75675A]">{education.degree}</div>
              </div>
              <span className="font-mono text-xs text-[#827568]">{education.graduation}</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-[#736556] border-b border-[#ECE4D8] pb-1">
              Technical Skills
            </h4>
            <div className="font-mono text-xs space-y-1 text-[#4F4338]">
              {skills.map((s) => (
                <div key={s.category}>
                  <strong className="text-[#2A211B] capitalize">{s.category}:</strong> {s.items}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E5DEC3] font-mono text-xs">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg bg-[#ECE5D8] hover:bg-[#DFD6C7] text-[#342B23] transition-colors cursor-pointer"
          >
            print / save as pdf
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#382E25] hover:bg-[#201913] text-[#FAF7F2] transition-colors cursor-pointer"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
