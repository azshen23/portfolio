import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pokeball from "/src/assets/images/cardPokeball.png";
import pfp from "/src/assets/images/pfp.jpg";

function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
    console.log("hello");
  };

  return (
    <div className="h-screen w-full flex flex-col items-center pt-20 pokemonFont">
      <AnimatePresence>
        {isFlipped ? (
          <motion.div
            onClick={toggleCard}
            className="border-4 border-black rounded-xl w-4/6 h-[600px] flex flex-col bg-box14 bg-cover pl-2 pt-1 pr-2 hover:cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          ></motion.div>
        ) : (
          <motion.div
            className="border-4 border-black rounded-xl w-4/6 h-[600px] flex flex-col bg-box14 bg-cover pl-2 pt-1 pr-2 hover:cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={toggleCard}
          >
            <div className="flex flex-row items-center pt-5">
              <div className="w-10 pb-2">
                <img src={pokeball} object-fit="contain"></img>
              </div>
              <h1 className="text-4xl font-bold text-white pl-1 pr-1 pt-2">
                TRAINER CARD
              </h1>
              <div className="w-10 pb-2">
                <img src={pokeball} object-fit="contain"></img>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col w-3/5">
                <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0">
                  <h1>PHONENo.</h1>
                  <h1 className="font-light">2482503985</h1>
                </div>
                <div className="pt-2"></div>
                <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0">
                  <h1>NAME</h1>
                  <h1>Andrew Shen</h1>
                </div>
                <div className="pt-8"></div>
                <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0">
                  <h1>MONEY</h1>
                  <h1>234234</h1>
                </div>
                <div className="pt-8"></div>
                <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0">
                  <h1>POKEDEX</h1>
                  <h1>477</h1>
                </div>
                <div className="pt-8"></div>
                <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0">
                  <h1>SCORE</h1>
                  <h1>12321</h1>
                </div>
              </div>
              <div className="w-2/5 flex flex-col items-center">
                <div>
                  <h1 className="text-yellow-200 text-5xl pb-8">★ ★ ★ ★</h1>
                </div>
                <div className="border rounded-xl overflow-hidden w-56">
                  <img className="w-full h-full " src={pfp} />
                </div>
              </div>
            </div>
            <div className="pt-12"></div>
            <div className="">
              <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0">
                <h1>TIME</h1>
                <h1>50:58</h1>
              </div>
              <div className="pt-2"></div>
              <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0">
                <h1>ADVENTURE STARTED</h1>
                <h1>Jun. 24, 2001</h1>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default About;
