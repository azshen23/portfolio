import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import CardFront from "../components/About/CardFront";
import CardBack from "../components/About/CardBack";
import Bio from "../components/About/Bio";

function About() {
  const [isFlipped, setIsFlipped] = useState(true);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
    console.log("hello");
  };

  return (
    <div className="w-full flex flex-col items-center pokemonFont bg-gradient-to-b from-slate-800 to-sky-700 select-none">
      <Header />
      <div className="pt-12"></div>
      <motion.div
        onClick={toggleCard}
        className="border-4 border-black rounded-xl w-4/6 h-[600px] flex flex-col bg-box14 bg-cover pl-2 pt-1 pr-2 hover:cursor-pointer "
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
        className="text-white text-xl font-bold items-center flex flex-col justify-center"
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
      <div className="pt-40"></div>
      <Bio />
    </div>
  );
}

export default About;
