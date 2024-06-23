import { Canvas } from "@react-three/fiber";
import { useState, useMemo } from "react";
import { ScrollControls } from "@react-three/drei";
import Pokeball from "../components/Home/Pokeball";
import Steven from "../components/Home/Steven";
import Galaxy from "../components/Home/Galaxy";
import ScreenWrapper from "../components/ScreenWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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

export default function Home() {
  const [isZoomed, setZoomed] = useState(false);
  const [isZoomedOut, setZoomedOut] = useState(true);
  const [dialogueFin, setDialogueFin] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  const getZoomed = (zoom) => {
    setZoomed(zoom);
    if (zoom == false) {
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
    <div className="absolute w-full h-full">
      <Canvas className="canvas bg-gray-800 w-full h-full absolute">
        <ScrollControls pages={2}>
          <ambientLight intensity={2} />

          <Pokeball getZoomed={getZoomed} getZoomedOut={getZoomedOut} />
          <Steven />
          <Galaxy />
        </ScrollControls>
      </Canvas>
      <ScreenWrapper>
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              className="box pokemonFont absolute bottom-10 left-0 right-0 text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl m-auto
            rounded-md pt-6 lg:pt-8 pb-6 lg:pb-10 pr-2 lg:pr-8 pl-2 lg:pl-8 sm:w-full md:w-3/5 bg-white 
            xl:leading-8 2xl:leading-10 border-8 border-white select-none"
              onClick={skip}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
            >
              {isSkipped ? (
                <div>
                  Hello! My name is Andrew and I am a Full Stack Software
                  Engineer and Consultant. Check out these links to learn more!
                </div>
              ) : (
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
              )}

              <motion.i
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              ></motion.i>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {dialogueFin && isZoomed && (
            <motion.div
              className="box pokemonFont absolute bottom-72 md:right-40 lg:right-64 xl:right-84 lg:text-lg xl:text-xl m-auto 
            rounded-md pr-8 pl-8 pt-4 pb-4 lg:w-1/4 xl:w-1/5 2xl:w-1/6 bg-white xl:leading-8 2xl:leading-10
            border-8 border-white select-none"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
            >
              <h1 className="hover:underline">
                <Link to={`about`}>About Me</Link>
              </h1>
              <h1 className="hover:underline">
                <Link to={`projects`}>Projects</Link>
              </h1>
              <h1 className="hover:underline">
                <Link to={`contact`}>Contact</Link>
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </ScreenWrapper>
      {isZoomedOut && (
        <div className="absolute xs:bottom-10 bottom-32 w-full flex flex-col justify-center items-center">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-red-500 mb-2"
            />
          </div>
          <motion.h1
            className="text-red-500 text-lg font-bold mt-1"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            Scroll
          </motion.h1>
        </div>
      )}
    </div>
  );
}
