import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import CardFront from "../components/About/CardFront";
import CardBack from "../components/About/CardBack";
import Bio from "../components/About/Bio";
import ScreenWrapper from "../components/ScreenWrapper";

function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <ScreenWrapper>
      <Header />

      <section className="pt-10 sm:pt-14 flex flex-col items-center">
        {/* Page Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="pokemonFont text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
            Trainer Profile
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Click the Trainer Card below to flip between contact details and my
            core tech stack.
          </p>
        </div>

        {/* 3D Flippable Trainer Card */}
        <div className="w-full max-w-4xl perspective-1200">
          <motion.div
            onClick={toggleCard}
            role="button"
            tabIndex={0}
            aria-label={
              isFlipped
                ? "Trainer Card back showing Tech Stack. Click to flip to front."
                : "Trainer Card front showing profile. Click to flip to Tech Stack."
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCard();
              }
            }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.55, type: "spring", stiffness: 200, damping: 24 }}
            whileHover={{ y: -4 }}
            className="relative w-full preserve-3d cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-poke-gold"
          >
            {/* Front Face */}
            <div className="front w-full">
              <CardFront />
            </div>

            {/* Back Face */}
            <div
              className="back absolute inset-0 w-full h-full"
              style={{ transform: "rotateY(180deg)" }}
            >
              <CardBack />
            </div>
          </motion.div>
        </div>

        {/* Flip Control Hint */}
        <button
          type="button"
          onClick={toggleCard}
          className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-poke-surface border border-slate-400/25 px-5 py-2 text-xs sm:text-sm font-medium text-slate-200 hover:border-poke-gold/60 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-poke-gold"
        >
          <svg
            className="w-4 h-4 text-poke-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>
            {isFlipped ? "Show Trainer Card Front" : "Flip for Tech Stack"}
          </span>
        </button>

        {/* Bio & Experience Timeline */}
        <div className="w-full pt-16 sm:pt-24">
          <Bio />
        </div>
      </section>
    </ScreenWrapper>
  );
}

export default About;
