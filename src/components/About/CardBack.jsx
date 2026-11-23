import { motion } from "framer-motion";
import pokeball from "/src/assets/images/About/cardPokeball.png";
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

const techBadges = [
  { name: "Python", logo: pythonLogo },
  { name: "C++", logo: cppLogo },
  { name: "Next.js", logo: nextjsLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "React Native", logo: reactnativeLogo },
  { name: "React", logo: reactLogo },
  { name: "PostgreSQL", logo: postgresLogo },
  { name: "Kotlin", logo: kotlinLogo },
  { name: "Android", logo: androidLogo },
  { name: "Svelte", logo: svelteLogo },
  { name: "Java", logo: javaLogo },
  { name: "Vue", logo: vueLogo },
];

function CardBack() {
  return (
    <div className="h-full w-full overflow-hidden rounded-2xl border-2 border-slate-900 bg-box14 bg-cover bg-center shadow-rpg-lg">
      <div className="h-full w-full bg-slate-950/80 p-5 sm:p-8 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <img src={pokeball} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="pokemonFont text-base sm:text-xl md:text-2xl text-white tracking-wider">
              TECH STACK
            </h2>
          </div>
          <span className="rounded-md bg-poke-sky/20 border border-poke-sky/40 px-2.5 py-1 text-xs font-semibold text-poke-sky">
            12 BADGES
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 my-auto">
          {techBadges.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 360, damping: 18 }}
              className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white/95 p-3 shadow-sm"
            >
              <img
                className="h-9 w-9 sm:h-12 sm:w-12 object-contain"
                src={item.logo}
                alt={item.name}
              />
              <span className="text-[11px] sm:text-xs font-semibold text-slate-800 text-center">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardBack;
