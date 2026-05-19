import { motion } from "framer-motion";
import cppLogo from "/src/assets/images/About/logos/cppLogo.svg";
import pythonLogo from "/src/assets/images/About/logos/pythonLogo.svg";
import javascriptLogo from "/src/assets/images/About/logos/javascriptLogo.svg";
import reactLogo from "/src/assets/images/About/logos/reactLogo.svg";
import javaLogo from "/src/assets/images/About/logos/javaLogo.svg";
import postgresLogo from "/src/assets/images/About/logos/postgresLogo.svg";
import kotlinLogo from "/src/assets/images/About/logos/kotlinLogo.svg";
import androidLogo from "/src/assets/images/About/logos/androidLogo.svg";
import reactnativeLogo from "/src/assets/images/About/logos/reactnativeLogo.svg";
import nextjsLogo from "/src/assets/images/About/logos/nextjsLogo.svg";
import svelteLogo from "/src/assets/images/About/logos/svelteLogo.svg";
import vueLogo from "/src/assets/images/About/logos/vueLogo.svg";

const logos = [
  pythonLogo,
  cppLogo,
  nextjsLogo,
  javascriptLogo,
  reactnativeLogo,
  reactLogo,
  postgresLogo,
  kotlinLogo,
  androidLogo,
  svelteLogo,
  javaLogo,
  vueLogo,
];

function CardBack({ isFlipped }) {
  return (
    <motion.div
      initial={{ rotateY: 180 }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      className="back w-full h-full items-center flex flex-col pt-8 px-12 md:px-16 pb-12 overflow-y-auto"
    >
      <div className="flex flex-col font-bold w-full items-center max-w-full">
        <h1 className="flex flex-col w-full text-center md:text-2xl pb-5 shadow-sm">
          TECH STACK
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full justify-items-center items-center">
          {logos.map((link, index) => (
            <motion.div
              className="w-14 md:w-20 lg:w-24 flex items-center justify-center p-2 bg-white/60 rounded-xl backdrop-blur-md shadow-sm border border-white/40"
              key={index}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img className="w-full h-full object-contain svg" src={link} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default CardBack;
