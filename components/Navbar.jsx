"use client";

export default function Navbar({ onOpenResume, onOpenShortcuts }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="hidden sm:block sticky top-4 z-40 w-full max-w-2xl">
      <nav className="bg-[#FAF7F2]/85 backdrop-blur-md border border-[#E5DEC3] rounded-2xl sm:rounded-full px-3 sm:px-5 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex items-center justify-between gap-1 sm:gap-3 text-[13px] sm:text-[14px] font-mono text-[#5A4F44]">
        <div className="flex items-center gap-1 sm:gap-2.5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => scrollTo("home")}
            className="px-2.5 py-1 rounded hover:text-[#1A1410] hover:bg-[#EFE8DC]/60 transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer"
          >
            <span className="text-[#998C7E] font-mono">[h]</span>
            <span className="font-sans font-medium">home</span>
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className="px-2.5 py-1 rounded hover:text-[#1A1410] hover:bg-[#EFE8DC]/60 transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer"
          >
            <span className="text-[#998C7E] font-mono">[p]</span>
            <span className="font-sans font-medium">projects</span>
          </button>

          <button
            onClick={() => scrollTo("skills")}
            className="px-2.5 py-1 rounded hover:text-[#1A1410] hover:bg-[#EFE8DC]/60 transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer"
          >
            <span className="text-[#998C7E] font-mono">[s]</span>
            <span className="font-sans font-medium">skills</span>
          </button>

          <button
            onClick={() => scrollTo("education")}
            className="px-2.5 py-1 rounded hover:text-[#1A1410] hover:bg-[#EFE8DC]/60 transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer"
          >
            <span className="text-[#998C7E] font-mono">[e]</span>
            <span className="font-sans font-medium">education</span>
          </button>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onOpenResume}
            className="border border-[#D4CBBF] hover:border-[#9A8D7E] bg-[#FDFBF7] hover:bg-[#F3ECE0] px-2.5 sm:px-3 py-1 rounded-xl text-[#3E342B] transition-all flex items-center gap-1 font-mono text-[12px] sm:text-[13px] shadow-[0_1px_2px_rgba(0,0,0,0.03)] cursor-pointer"
          >
            <span className="text-[#8E8072]">[r]</span>
            <span className="font-sans font-medium">resume</span>
          </button>

          <button
            onClick={onOpenShortcuts}
            title="Keyboard shortcuts (?)"
            className="p-1 text-[#9E9082] hover:text-[#2E251E] transition-colors rounded cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
              <path strokeWidth="1.8" d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
