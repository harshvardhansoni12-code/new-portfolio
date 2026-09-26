"use client";

import { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";

export default function Hero({ onSelectProject }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="space-y-5 sm:space-y-6 pt-2">
      {/* Profile Header */}
      <div className="flex items-center gap-4 sm:gap-5">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-[#D5CCBE] shadow-sm shrink-0 bg-[#E8E0D2]">
          <Image
            src="/samurai.jpg"
            alt={personalInfo.fullName}
            width={80}
            height={80}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2B231D] font-sans">
            {personalInfo.name}
          </h1>
          <p className="font-mono text-xs sm:text-sm text-[#7D7063] mt-0.5">
            {personalInfo.handle}
          </p>
        </div>
      </div>

      {/* Bio Text */}
      <div className="space-y-3.5 sm:space-y-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#4A4036]">
        <p>
          btech in aiml student at{" "}
          <a
            href="#education"
            className="link-underlined font-medium text-[#2E251E]"
          >
            baderia global college of engineering and management
          </a>
          , building responsive web applications and ai tools.
        </p>

        <p>
          creator of{" "}
          <button
            onClick={() => onSelectProject("examinee")}
            className="link-underlined font-medium text-[#2E251E] cursor-pointer"
          >
            examinee
          </button>
          , an ai-powered study and revision platform powered by{" "}
          <span className="text-[#2E251E] font-medium">google gemini api</span>. built{" "}
          <button
            onClick={() => onSelectProject("shrinkster")}
            className="link-underlined font-medium text-[#2E251E] cursor-pointer"
          >
            shrinkster
          </button>{" "}
          for high-speed url shortening and{" "}
          <button
            onClick={() => onSelectProject("chat-mini")}
            className="link-underlined font-medium text-[#2E251E] cursor-pointer"
          >
            chat-mini
          </button>{" "}
          for real-time socket.io room communication.
        </p>

        <p>
          right now i am focused on next.js, react, typescript, node.js, websockets, and ai orchestration workflows. my focus is building clean, intuitive interfaces backed by robust database architectures.
        </p>

        <p>
          what i want to work on next is high-performance real-time infrastructure, ai agent workflows, and full-stack systems where attention to detail and user experience matter.
        </p>
      </div>

      {/* Quick Contact Chips */}
      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-[#6A5E53]">
        <button
          onClick={copyEmailToClipboard}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F2ECE0]/70 hover:bg-[#EAE1D1] border border-[#DDD4C5] transition-colors cursor-pointer"
        >
          <svg className="w-3.5 h-3.5 text-[#857769]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{copiedEmail ? "copied!" : personalInfo.email}</span>
        </button>

        <a
          href={personalInfo.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F2ECE0]/70 hover:bg-[#EAE1D1] border border-[#DDD4C5] transition-colors"
        >
          <svg className="w-3.5 h-3.5 text-[#857769]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span>twitter</span>
        </a>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F2ECE0]/70 hover:bg-[#EAE1D1] border border-[#DDD4C5] transition-colors"
        >
          <svg className="w-3.5 h-3.5 text-[#857769]" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>github</span>
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F2ECE0]/70 hover:bg-[#EAE1D1] border border-[#DDD4C5] transition-colors"
        >
          <svg className="w-3.5 h-3.5 text-[#857769]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span>linkedin</span>
        </a>
      </div>
    </section>
  );
}
