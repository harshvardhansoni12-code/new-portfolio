import { skills } from "@/data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="space-y-5 pt-4">
      <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-2 font-mono">
        <h2 className="text-sm font-bold tracking-wider text-[#574C40]">technical skills</h2>
        <span className="text-xs text-[#8A7D70]">stack & tools</span>
      </div>

      <div className="space-y-3 font-mono text-[13.5px] sm:text-[14px]">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2"
          >
            <span className="text-[#2C241E] font-semibold min-w-[120px]">
              {skill.category}
            </span>
            <span className="text-[#887B6E]">//</span>
            <span className="text-[#554A3F]">{skill.items}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
