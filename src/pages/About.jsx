import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import CardFront from "../components/About/CardFront";
import CardBack from "../components/About/CardBack";
import Bio from "../components/About/Bio";
import ScreenWrapper from "../components/ScreenWrapper";

function About() {
  const [isFlipped, setIsFlipped] = useState(true);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
    console.log("hello");
  };

  return (
    <div className="w-full flex bg-gradient-to-b from-slate-800 to-sky-700 select-none justify-center">
      <ScreenWrapper>
        <div className="w-full flex flex-col">
          <Header />
          <div className="pt-12"></div>
          <div className="flex flex-col w-full items-center">
            <motion.div
              onClick={toggleCard}
              className="border-4 border-black rounded-xl w-[90%] md:w-5/6 lg:w-4/6 lg:h-[600px] flex flex-col bg-box14 bg-cover pl-2 pt-1 pr-2 
          hover:cursor-pointer pokemonFont text-sm lg:text-lg xl:text-2xl"
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              animate={{ rotateY: isFlipped ? 0 : 180 }}
            >
              <motion.div className="w-full h-full">
                <motion.div
                  className="w-full h-full"
                  transition={{ duration: 0.3 }}
                  animate={{ rotateY: isFlipped ? 0 : 180 }}
                >
                  {isFlipped ? (
                    <CardFront toggleCard={toggleCard} isFlipped={isFlipped} />
                  ) : (
                    <CardBack isFlipped={isFlipped} />
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="pt-10"></div>
            <motion.h1
              className="text-white text-xl font-bold items-center flex flex-col justify-center pokemonFont"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              Click!
            </motion.h1>
            <div className="pt-20 lg:pt-40"></div>
            <Bio />
          </div>
        </div>
      </ScreenWrapper>
    </div>
  );
}

export default About;
