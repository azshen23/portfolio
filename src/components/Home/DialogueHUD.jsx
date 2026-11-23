import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const dialogueText =
  "Hello! My name is Andrew and I am a Full Stack Software Engineer and Consultant. Check out these links to learn more!";

const navChoices = [
  { to: "/about", label: "About Me", badge: "TRAINER" },
  { to: "/projects", label: "Projects", badge: "DEX" },
  { to: "/contact", label: "Contact", badge: "MAIL" },
];

export default function DialogueHUD({ isZoomed }) {
  const [typedCount, setTypedCount] = useState(0);
  const dialogueFin = typedCount >= dialogueText.length;

  useEffect(() => {
    if (!isZoomed) {
      setTypedCount(0);
      return;
    }

    const timer = setInterval(() => {
      setTypedCount((c) => {
        if (c + 2 >= dialogueText.length) {
          clearInterval(timer);
          return dialogueText.length;
        }
        return c + 2;
      });
    }, 28);

    return () => clearInterval(timer);
  }, [isZoomed]);

  const skip = () => {
    if (!dialogueFin) {
      setTypedCount(dialogueText.length);
    }
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 sm:bottom-8 z-30 mx-auto max-w-4xl px-4 flex flex-col items-end gap-3">
      <AnimatePresence>
        {dialogueFin && isZoomed && (
          <motion.nav
            aria-label="Route choices"
            className="pointer-events-auto rpg-dialogue w-full sm:w-64 p-3 sm:p-4"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <ul className="flex flex-col gap-1.5">
              {navChoices.map((choice) => (
                <li key={choice.to}>
                  <Link
                    to={choice.to}
                    className="group flex items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm pokemonFont text-slate-900 transition hover:bg-poke-ink hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-poke-crimson"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-poke-crimson opacity-0 group-hover:opacity-100 transition-opacity">
                        ▶
                      </span>
                      <span>{choice.label}</span>
                    </span>
                    <span className="font-sans text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 group-hover:bg-poke-crimson group-hover:text-white transition-colors">
                      {choice.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            onClick={skip}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") skip();
            }}
            className="pointer-events-auto rpg-dialogue relative w-full px-5 py-5 sm:px-7 sm:py-6 cursor-pointer"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
          >
            {/* Speaker Nameplate */}
            <div className="absolute -top-3.5 left-5 flex items-center gap-2 rounded-md bg-poke-crimson px-3 py-1 border-2 border-slate-900 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-poke-gold" />
              <span className="pokemonFont text-[10px] sm:text-xs text-white tracking-wide">
                ANDREW
              </span>
            </div>

            <div className="pokemonFont text-xs sm:text-sm md:text-base leading-relaxed sm:leading-loose text-slate-900 pr-6">
              <span>{dialogueText.slice(0, typedCount)}</span>
            </div>

            {/* Next / Skip indicator */}
            <div className="mt-2 flex items-center justify-between">
              <span className="font-sans text-[11px] font-medium text-slate-500">
                {dialogueFin
                  ? "Use Arrow keys or WASD to walk around · Choose a destination above"
                  : "Click to skip"}
              </span>
              <span className="inline-block w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-poke-crimson animate-bounce" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
