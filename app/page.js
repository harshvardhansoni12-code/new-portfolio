"use client";

import { useState, useEffect } from "react";
import PagodaWatermark from "@/components/PagodaWatermark";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import ShortcutsModal from "@/components/ShortcutsModal";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

  // Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;

      const key = e.key.toLowerCase();
      if (key === "h") {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      } else if (key === "p") {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      } else if (key === "s") {
        document
          .getElementById("skills")
          ?.scrollIntoView({ behavior: "smooth" });
      } else if (key === "e") {
        document
          .getElementById("education")
          ?.scrollIntoView({ behavior: "smooth" });
      } else if (key === "r") {
        setIsResumeOpen((prev) => !prev);
      } else if (key === "?") {
        setIsShortcutsOpen((prev) => !prev);
      } else if (key === "escape") {
        setIsResumeOpen(false);
        setIsShortcutsOpen(false);
        setActiveProjectModal(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 py-6 sm:py-10 selection:bg-[#E6DFD4] selection:text-[#201A16]">
      {/* Background Japanese Pagoda Artwork */}
      <PagodaWatermark />

      {/* Top Floating Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      {/* Main Content Container */}
      <main className="w-full max-w-2xl mt-8 sm:mt-12 z-10 space-y-12 sm:space-y-16">
        <Hero onSelectProject={(id) => setActiveProjectModal(id)} />
        <Projects onSelectProject={(id) => setActiveProjectModal(id)} />
        <Skills />
        <Education />
        <Footer
          currentTime={currentTime}
          onOpenShortcuts={() => setIsShortcutsOpen(true)}
        />
      </main>

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
      <ProjectModal
        projectId={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </div>
  );
}
