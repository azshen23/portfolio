import { Canvas } from "@react-three/fiber";
import { useState, useCallback, memo } from "react";
import {
  ScrollControls,
  Stars,
  Environment,
  Lightformer,
  ContactShadows,
} from "@react-three/drei";
import Pokeball from "../components/Home/Pokeball";
import Steven from "../components/Home/Steven";
import Galaxy from "../components/Home/Galaxy";
import DialogueHUD from "../components/Home/DialogueHUD";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";

const navChoices = [
  { to: "/about", label: "About Me" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

// Memoized so <Environment> never re-renders its 6-face cubemap after mount
const StudioEnvironment = memo(function StudioEnvironment() {
  return (
    <Environment resolution={64} frames={1}>
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
  );
});

export default function Home() {
  const [isZoomed, setZoomed] = useState(false);
  const [isZoomedOut, setZoomedOut] = useState(true);

  const getZoomed = useCallback((zoom) => {
    setZoomed(zoom);
  }, []);

  const getZoomedOut = useCallback((zoom) => {
    setZoomedOut(zoom);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-poke-ink select-none">
      {/* 3D Canvas */}
      <Canvas
        dpr={[1, 1.25]}
        gl={{ powerPreference: "high-performance", antialias: true }}
        camera={{ fov: 50, near: 0.1, far: 200 }}
        className="w-full h-full block"
      >
        <color attach="background" args={["#070b16"]} />
        <fog attach="fog" args={["#070b16", 26, 80]} />

        {/* 3-Point Studio + Space Lighting */}
        <ambientLight intensity={0.55} color="#cbd5e1" />
        <hemisphereLight args={["#93c5fd", "#0f172a", 0.75]} />
        <directionalLight
          position={[4, 6, 5]}
          intensity={2.0}
          color="#fff7ed"
        />
        <directionalLight
          position={[-5, 2, -3]}
          intensity={1.0}
          color="#38bdf8"
        />

        <Stars
          radius={55}
          depth={35}
          count={700}
          factor={3.5}
          saturation={0.35}
          fade={false}
          speed={0}
        />

        <ScrollControls pages={2} damping={0.12}>
          <Pokeball getZoomed={getZoomed} getZoomedOut={getZoomedOut} />
          <Steven isZoomed={isZoomed} visible={isZoomed} />
          <ContactShadows
            position={[0, 0.01, 0.6]}
            frames={1}
            resolution={128}
            opacity={0.4}
            scale={4}
            blur={2.2}
            far={1.5}
            color="#0f172a"
          />
          <Galaxy visible={!isZoomed} />
        </ScrollControls>

        <StudioEnvironment />
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
          className="pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full bg-poke-surface/90 border border-slate-400/20 p-1.5 shadow-lg"
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
            <div className="flex items-center gap-3 rounded-full bg-poke-surface/90 border border-slate-400/25 px-5 py-2.5 shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-poke-crimson opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-poke-crimson" />
              </span>
              <span className="pokemonFont text-[11px] sm:text-xs tracking-wide text-slate-100">
                Scroll to open Pokéball
              </span>
              <svg
                className="w-4 h-4 text-poke-gold animate-bounce"
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
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Isolated Dialogue HUD so typing never re-renders Canvas */}
      <DialogueHUD isZoomed={isZoomed} />
    </div>
  );
}
