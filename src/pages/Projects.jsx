import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import nuocalBW from "/src/assets/images/projects/bw/nuocal-bw.png";
import nuocalColor from "/src/assets/images/projects/color/nuocal-color.png";
import rainingBW from "/src/assets/images/projects/bw/raining-bw.png";
import connectBW from "/src/assets/images/projects/bw/connect-bw.png";
import rainingColor from "/src/assets/images/projects/color/raining-color.svg";
import connectColor from "/src/assets/images/projects/color/connect-color.jpg";
import ScreenWrapper from "../components/ScreenWrapper";

const allProjects = [
  {
    id: "genshin-krillion",
    dexNumber: "001",
    title: "Genshin Krillion",
    link: "https://genshinkrillion.com/",
    monogram: "KRIL",
    subtitle: "Abyssal Trivia Dive",
    accentColor: "#38BDF8",
    description:
      "Daily Genshin Impact rarity-trivia game where naming rarer valid answers plunges Furina's Hat deeper before the 25-second timer runs out.",
    tags: ["All", "React", "TypeScript", "AI / Gemini"],
  },
  {
    id: "cdcheck",
    dexNumber: "002",
    title: "CDcheck",
    link: "https://cdcheck.lol/",
    monogram: "CD",
    subtitle: "Daily LoL Cooldown Game",
    accentColor: "#C8AA6E",
    description:
      "Daily League of Legends ability cooldown challenge & Endless Arcade mode powered by live Riot Data Dragon patch data, Bun, and React.",
    tags: ["All", "React", "TypeScript"],
  },
  {
    id: "divewithive",
    dexNumber: "003",
    title: "Dive with IVE",
    link: "https://divewithive.com",
    repoLink: "https://github.com/azshen23/divewithive",
    monogram: "DIVE",
    subtitle: "AI Media Aggregator",
    accentColor: "#38BDF8",
    description:
      "Autonomous AI-curated news & media aggregator for IVE powered by Google Gemini 2.5 Flash, Cloudflare CDN, and Backblaze B2.",
    tags: ["All", "React", "TypeScript", "AI / Gemini"],
  },
  {
    id: "kpopduel",
    dexNumber: "004",
    title: "KpopDuel",
    link: "https://github.com/azshen23/KpopDuel",
    repoLink: "https://github.com/azshen23/KpopDuelBE",
    repoLabel: "Server ↗",
    monogram: "DUEL",
    subtitle: "1v1 Real-Time Game",
    accentColor: "#E3350D",
    description:
      "Real-time 1v1 K-pop audio snippet battle game with WebSocket matchmaking, 5-round sessions, and a Bun/Express/Socket.io backend.",
    tags: ["All", "React-Native", "TypeScript", "NodeJS/Express"],
  },
  {
    id: "nei",
    dexNumber: "005",
    title: "Nutrition Education Initiative",
    link: "https://nutrition-education-initiative.vercel.app",
    repoLink: "https://github.com/azshen23/Nutrition-Education-Initiative",
    monogram: "NEI",
    subtitle: "Health & Research Org",
    accentColor: "#22C55E",
    description:
      "Web platform for a medical-student-led organization delivering free nutrition education and research for rural high school students.",
    tags: ["All", "Svelte", "TypeScript"],
  },
  {
    id: "raining",
    dexNumber: "006",
    title: "Raining Consulting",
    link: "https://raining.dev",
    logoColor: rainingColor,
    logoBW: rainingBW,
    accentColor: "#F5B700",
    description:
      "Raining.dev is a full-stack web application where I run my personal software consulting business.",
    tags: ["All", "React", "PostgreSQL", "NodeJS/Express"],
  },
  {
    id: "nuocal",
    dexNumber: "007",
    title: "nuocal",
    link: "https://github.com/azshen23/nuocal-app",
    logoColor: nuocalColor,
    logoBW: nuocalBW,
    accentColor: "#818CF8",
    description:
      "Nuocal is a full-stack cross platform mobile application that allows users to write down their daily thoughts to share and vent with others.",
    tags: ["All", "React-Native", "PostgreSQL", "NodeJS/Express"],
  },
  {
    id: "connect",
    dexNumber: "008",
    title: "Connect",
    link: "https://github.com/azshen23/Connect",
    logoColor: connectColor,
    logoBW: connectBW,
    accentColor: "#38BDF8",
    description:
      "Connect is a full-stack Android application aimed to allow nearby users to connect and create relationships.",
    tags: ["All", "Android", "Firebase"],
  },
];

const allTechnologies = [
  "All",
  "React",
  "React-Native",
  "TypeScript",
  "Svelte",
  "AI / Gemini",
  "NodeJS/Express",
  "PostgreSQL",
  "Firebase",
  "Android",
];

function Projects() {
  const [curSelectedTech, setCurSelectedTech] = useState("All");

  const projects =
    curSelectedTech === "All"
      ? allProjects
      : allProjects.filter((project) =>
          project.tags.includes(curSelectedTech)
        );

  return (
    <ScreenWrapper>
      <Header />

      <section className="pt-10 sm:pt-14 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="pokemonFont text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
            Project Dex
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Filter by technology or explore full-stack web, mobile, and AI
            products from my GitHub.
          </p>
        </div>

        {/* Technology Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter projects by technology"
          className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12"
        >
          {allTechnologies.map((technology) => {
            const isSelected = technology === curSelectedTech;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setCurSelectedTech(technology)}
                key={technology}
                className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-poke-gold ${
                  isSelected
                    ? "bg-poke-crimson text-white shadow-md"
                    : "bg-poke-surface/80 text-slate-300 border border-slate-400/20 hover:border-slate-300/40 hover:text-white"
                }`}
              >
                {technology}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group rpg-panel overflow-hidden flex flex-col justify-between transition-colors hover:border-poke-sky/50"
              >
                {/* Unified Dark Pokédex Screen Stage */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="relative h-52 sm:h-60 w-full flex items-center justify-center p-6 overflow-hidden border-b border-slate-400/15 bg-gradient-to-br from-[#0F172A] via-[#15223D] to-[#0B1020]"
                >
                  {/* Subtle Accent Glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-60"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${project.accentColor}33, transparent 68%)`,
                    }}
                  />

                  {/* Dex Number & Status Dot */}
                  <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between">
                    <span className="pokemonFont text-[10px] text-slate-400">
                      No.{project.dexNumber}
                    </span>
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: project.accentColor }}
                    />
                  </div>

                  {/* Uniform Centered Showcase Plaque */}
                  <div className="relative z-10 flex items-center justify-center w-52 h-28 sm:w-60 sm:h-32 rounded-2xl bg-slate-50/95 border border-white/80 px-6 py-4 shadow-lg transition-transform duration-300 group-hover:scale-105">
                    {project.logoBW ? (
                      <>
                        <img
                          src={project.logoBW}
                          alt={`${project.title} monochrome logo`}
                          className="max-h-20 max-w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <img
                          src={project.logoColor}
                          alt={`${project.title} color logo`}
                          className="absolute max-h-20 max-w-[80%] object-contain opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                        />
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center gap-1.5">
                        <span className="pokemonFont text-xl sm:text-2xl text-slate-900 tracking-wider">
                          {project.monogram}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          {project.subtitle}
                        </span>
                      </div>
                    )}
                  </div>
                </a>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h2 className="pokemonFont text-sm sm:text-base text-white leading-snug">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-3 shrink-0">
                        {project.repoLink && (
                          <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
                          >
                            {project.repoLabel || "GitHub ↗"}
                          </a>
                        )}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold text-poke-sky hover:text-poke-gold transition-colors"
                        >
                          View ↗
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-400/15">
                    {project.tags
                      .filter((t) => t !== "All")
                      .map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-poke-elevated border border-slate-400/20 px-2.5 py-1 text-xs font-medium text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </ScreenWrapper>
  );
}

export default Projects;
