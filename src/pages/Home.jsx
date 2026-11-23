import { Canvas } from "@react-three/fiber";
import { useState, useMemo } from "react";
import {
  ScrollControls,
  Stars,
  Sparkles,
  Environment,
  Lightformer,
  ContactShadows,
} from "@react-three/drei";
import Pokeball from "../components/Home/Pokeball";
import Steven from "../components/Home/Steven";
import Galaxy from "../components/Home/Galaxy";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.025, delayChildren: 0.02 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 180,
    },
  },
  hidden: {
    opacity: 0,
    y: 4,
  },
};

const dialogueText =
  "Hello! My name is Andrew and I am a Full Stack Software Engineer and Consultant. Check out these links to learn more!";
const words = dialogueText.split("");

const navChoices = [
  { to: "/about", label: "About Me", badge: "TRAINER" },
  { to: "/projects", label: "Projects", badge: "DEX" },
  { to: "/contact", label: "Contact", badge: "MAIL" },
];

export default function Home() {
  const [isZoomed, setZoomed] = useState(false);
  const [isZoomedOut, setZoomedOut] = useState(true);
  const [dialogueFin, setDialogueFin] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  const getZoomed = (zoom) => {
    setZoomed(zoom);
    if (zoom === false) {
      setDialogueFin(false);
      setIsSkipped(false);
    }
  };

  const skip = () => {
    if (!dialogueFin) {
      setIsSkipped(true);
      setDialogueFin(true);
    }
  };

  const getZoomedOut = (zoom) => {
    setZoomedOut(zoom);
  };

  const memoizedWords = useMemo(() => words, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-poke-ink select-none">
      {/* 3D Canvas */}
      <Canvas
        dpr={[1, 1.5]}
        gl={{ powerPreference: "high-performance", antialias: true }}
        camera={{ fov: 50, near: 0.1, far: 200 }}
        className="w-full h-full block"
      >
        <color attach="background" args={["#070b16"]} />
        <fog attach="fog" args={["#070b16", 26, 80]} />

        {/* 3-Point Studio + Space Lighting */}
        <ambientLight intensity={0.45} color="#cbd5e1" />
        <hemisphereLight args={["#93c5fd", "#0f172a", 0.75]} />
        <directionalLight
          position={[4, 6, 5]}
          intensity={2.1}
          color="#fff7ed"
          castShadow
        />
        <directionalLight
          position={[-5, 2, -3]}
          intensity={1.1}
          color="#38bdf8"
        />
        <pointLight
          position={[0, 1.5, 2.5]}
          intensity={1.4}
          distance={9}
          color="#f5b700"
        />

        <Stars
          radius={55}
          depth={35}
          count={2200}
          factor={3.5}
          saturation={0.35}
          fade
          speed={0.5}
        />
        <Sparkles
          count={40}
          scale={5}
          size={2}
          speed={0.3}
          opacity={0.55}
          color="#93c5fd"
        />

        <ScrollControls pages={2} damping={0.12}>
          <Pokeball getZoomed={getZoomed} getZoomedOut={getZoomedOut} />
          <Steven isZoomed={isZoomed} />
          <ContactShadows
            position={[0, 0.01, 0.6]}
            frames={1}
            resolution={256}
            opacity={0.4}
            scale={4}
            blur={2.2}
            far={1.5}
            color="#0f172a"
          />
          <Galaxy />
        </ScrollControls>

        {/* Studio PBR Environment Reflections */}
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 0, 1]}>
            <Lightformer
              form="circle"
              intensity={2.5}
              rotation-x={Math.PI / 2}
              position={[0, 5, -9]}
              scale={4}
              color="#fff7ed"
            />
            <Lightformer
              form="rect"
              intensity={1.5}
              rotation-y={Math.PI / 2}
              position={[-5, 1, -1]}
              scale={[10, 2, 1]}
              color="#38bdf8"
            />
            <Lightformer
              form="rect"
              intensity={1.2}
              rotation-y={-Math.PI / 2}
              position={[10, 1, 0]}
              scale={[10, 2, 1]}
              color="#f5b700"
            />
          </group>
        </Environment>
      </Canvas>

      {/* Top Floating HUD */}
      <header className="pointer-events-none fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
        <Link
          to="/"
          className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-poke-surface/90 border border-slate-400/20 px-3.5 py-1.5 shadow-lg transition hover:border-poke-sky/50"
        >
          <BrandLogo className="h-7 w-7" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase text-slate-200">
            Andrew Shen
          </span>
        </Link>

        <nav
          aria-label="Quick navigation"
          className="pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full bg-poke-surface/80 backdrop-blur-md border border-slate-400/20 p-1.5 shadow-lg"
        >
          {navChoices.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-200 transition hover:bg-poke-crimson hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-poke-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Scroll Prompt when zoomed out */}
      <AnimatePresence>
        {isZoomedOut && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-none fixed bottom-8 sm:bottom-12 left-0 right-0 z-20 flex flex-col items-center gap-3 px-4"
          >
            <div className="flex items-center gap-3 rounded-full bg-poke-surface/85 backdrop-blur-md border border-slate-400/25 px-5 py-2.5 shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-poke-crimson opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-poke-crimson" />
              </span>
              <span className="pokemonFont text-[11px] sm:text-xs tracking-wide text-slate-100">
                Scroll to open Pokéball
              </span>
              <motion.svg
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-4 h-4 text-poke-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RPG Dialogue + Choice Menu when zoomed in */}
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
                {isSkipped ? (
                  <span>{dialogueText}</span>
                ) : (
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    onAnimationComplete={() => setDialogueFin(true)}
                  >
                    {memoizedWords.map((char, index) => (
                      <motion.span variants={child} key={index}>
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Next / Skip indicator */}
              <div className="mt-2 flex items-center justify-between">
                <span className="font-sans text-[11px] font-medium text-slate-500">
                  {dialogueFin
                    ? "Use Arrow keys or WASD to walk around · Choose a destination above"
                    : "Click to skip"}
                </span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-poke-crimson"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
