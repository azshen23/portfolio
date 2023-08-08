import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Pokeball from "./components/Pokeball";
import Steven from "./components/Steven";
import Galaxy from "./components/Galaxy";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isZoomed, setZoomed] = useState(false);
  const words =
    "Hello! My name is Andrew and I am a Full Stack Software Engineer and Consultant. Check out these links to learn more!".split(
      ""
    );
  const getZoomed = (zoom) => {
    setZoomed(zoom);
  };

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

  return (
    <div className="absolute w-full h-full">
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
            className="box absolute bottom-10 left-0 right-0 font-2xl m-auto"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <motion.div variants={container} initial="hidden" animate="visible">
              {words.map((word, index) => (
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
      </AnimatePresence>
    </div>
  );
}

export default App;
