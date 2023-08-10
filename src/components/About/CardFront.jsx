import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pokeball from "/src/assets/images/About/cardPokeball.png";
import pfp from "/src/assets/images/About/pfp.jpg";

function CardFront({ toggleCard, isFlipped }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const stopEvent = (e) => {
    e.stopPropagation(); // This prevents the div's click event from firing
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); // Update every minute (60000 milliseconds)

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, []);

  const formattedTime = `${currentTime.getHours()}:${String(
    currentTime.getMinutes()
  ).padStart(2, "0")}`;
  return (
    <motion.div
      className="front w-full h-full"
      onClick={toggleCard}
      transition={{ duration: 0.3 }}
      animate={{ rotateY: isFlipped ? 0 : 180 }}
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
            <h1 className="font-light">248-250-3985</h1>
          </div>
          <div className="pt-2"></div>
          <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0">
            <h1>NAME</h1>
            <h1 className="font-bold">Andrew Shen</h1>
          </div>
          <div className="pt-8"></div>
          <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0 ">
            <h1>EMAIL</h1>
            <h1 className="font-bold">azshen@umich.edu</h1>
          </div>
          <div className="pt-8"></div>
          <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0">
            <h1>GITHUB</h1>
            <h1 className="font-bold hover:underline" onClick={stopEvent}>
              <a href="https://github.com/azshen23" target="_blank">
                /azshen23
              </a>
            </h1>
          </div>
          <div className="pt-8"></div>
          <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0">
            <h1>LINKEDIN</h1>
            <h1 className="font-bold hover:underline" onClick={stopEvent}>
              <a href="https://linkedin.com/in/azshen23" target="_blank">
                /azshen23
              </a>
            </h1>
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
          <h1>{formattedTime}</h1>
        </div>
        <div className="pt-2"></div>
        <div className="flex flex-1 flex-row text-2xl border rounded justify-between bg-white bg-opacity-75  p-1 pt-2 pb-0">
          <h1>ADVENTURE STARTED</h1>
          <h1>
            <span className="font-bold">Jun.</span> 24, 2001
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

export default CardFront;
