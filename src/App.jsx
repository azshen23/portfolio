import { Canvas } from "@react-three/fiber";
import { useState, useMemo } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Pokeball from "./components/Pokeball";
import Steven from "./components/Steven";
import Galaxy from "./components/Galaxy";
import { motion, AnimatePresence } from "framer-motion";
import twinleafTheme from "/sound/twinleafTown.mp3";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.02 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const words =
  "Hello! My name is Andrew and I am a Full Stack Software Engineer and Consultant. Check out these links to learn more!".split(
    ""
  );

function App() {
  const [isZoomed, setZoomed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [dialogueFin, setDialogueFin] = useState(false);

  const getZoomed = (zoom) => {
    setZoomed(zoom);
    if (zoom == false) {
      setDialogueFin(false);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const memoizedWords = useMemo(() => words, []);
  return (
    <div className="absolute w-full h-full">
      <audio
        src={twinleafTheme}
        controls={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
      />

      <Canvas className="canvas bg-gray-800 w-full h-full absolute">
        <ScrollControls pages={2}>
          <ambientLight intensity={2} />

          <Pokeball getZoomed={getZoomed} />
          <Steven />
          <Galaxy />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableRotate={false}
          />
        </ScrollControls>
      </Canvas>
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="box absolute bottom-10 left-0 right-0 text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl md:m-auto
            rounded-md pt-6 lg:pt-8 pr-8 pl-2 sm:pl-0 md:pl-8 sm:w-full md:w-3/5 sm:h-60 md:h-56 bg-white 
            xl:leading-8 2xl:leading-10 border-8 border-white"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              onAnimationComplete={() => {
                setDialogueFin(true);
              }}
            >
              {memoizedWords.map((word, index) => (
                <motion.span
                  variants={child}
                  key={index}
                  style={{ marginRight: "3px" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.i
              animate={{ y: 10 }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
            ></motion.i>
          </motion.div>
        )}
        {dialogueFin && isZoomed && (
          <motion.div
            className="box absolute bottom-72 md:right-40 lg:right-64 xl:right-96 lg:text-lg xl:text-xl m-auto 
            rounded-md md:pt-6 lg:pt-7 xl:pt-8 pr-8 pl-8 lg:w-1/4 xl:w-1/5 2xl:w-1/6 h-1/4 bg-white leading-9 
            border-8 border-white"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <h1 className="hover:underline">About Me</h1>
            <h1 className="hover:underline">Projects</h1>
            <h1 className="hover:underline">Contact Me</h1>
            <h1 className="hover:underline">Services</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
