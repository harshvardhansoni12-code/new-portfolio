import { education } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="space-y-4 pt-4">
      <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-2 font-mono">
        <h2 className="text-sm font-bold tracking-wider text-[#574C40]">education</h2>
        <span className="text-xs text-[#8A7D70]">academic</span>
      </div>

      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div className="font-mono text-[14px] sm:text-[14.5px] font-semibold text-[#2D251F]">
            {education.institution}
          </div>
          <div className="font-mono text-xs text-[#8E8072] shrink-0">
            {education.graduation}
          </div>
        </div>
        <div className="font-mono text-xs text-[#7B6E60]">
          {education.degree}
        </div>
        <p className="text-[13.5px] text-[#5A4F44] leading-relaxed">
          coursework: {education.coursework}
        </p>
      </div>
    </section>
  );
}
