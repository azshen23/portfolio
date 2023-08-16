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
      className="back w-full h-full items-center flex flex-col pt-8 pl-10 pr-10 pb-8 lg:pb-0"
    >
      <div className="flex flex-col font-bold w-full items-center">
        <h1 className="flex flex-col w-full text-center md:text-2xl pb-5">
          TECH STACK
        </h1>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 w-full justify-items-center">
          {logos.map((link, index) => (
            <motion.div
              class="w-16 lg:w-24"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img className="w-full h-full svg" src={link} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default CardBack;
