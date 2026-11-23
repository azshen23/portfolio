import { motion } from "framer-motion";
import pokeball from "/src/assets/images/About/cardPokeball.png";
import redWalking from "/src/assets/images/About/redWalking.gif";

const history = [
  {
    Name: "The University of Michigan",
    Date: "5/2024 - Present",
    Title: "Masters of Applied Data Science",
  },
  {
    Name: "General Motors",
    Date: "1/2024 - Present",
    Title: "Software Engineer",
  },
  {
    Name: "Freelance",
    Date: "12/2022 - Present",
    Title: "Software Consulting",
  },
  {
    Name: "The University of Michigan",
    Date: "9/2019 - 12/2022",
    Title: "B.S. in Engineering in Computer Science",
  },
  {
    Name: "Slalom",
    Date: "6/2022 - 8/2022",
    Title: "Software Engineer Intern",
  },
];

function Bio() {
  return (
    <div className="flex flex-col items-center w-full gap-16 sm:gap-24">
      {/* Intro Dialogue + Interactive Sprite */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 rpg-dialogue relative p-6 sm:p-8">
          <div className="absolute -top-3.5 left-6 rounded-md bg-poke-crimson px-3 py-1 border-2 border-slate-900">
            <span className="pokemonFont text-[10px] sm:text-xs text-white">
              BIO
            </span>
          </div>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-800">
            <p className="pokemonFont text-xs sm:text-sm text-slate-900 leading-relaxed">
              Hi, nice to meet you, I&apos;m Andrew!
            </p>
            <p>
              I&apos;m a 22 year old Full Stack Software Engineer and Consultant
              based in Michigan.
            </p>
            <p>
              I have a passion for creating products that will help people. So,
              if you are interested, feel free to reach out!
            </p>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col items-center justify-center">
          <motion.img
            className="w-32 h-32 sm:w-40 sm:h-40 cursor-grab active:cursor-grabbing drop-shadow-[0_12px_20px_rgba(0,0,0,0.45)]"
            src={redWalking}
            alt="Red walking sprite"
            whileHover={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 360, damping: 16 }}
            drag
            dragConstraints={{
              top: -40,
              left: -40,
              right: 40,
              bottom: 40,
            }}
          />
          <span className="mt-2 text-xs text-slate-400">
            Drag sprite to play
          </span>
        </div>
      </div>

      {/* Relevant Experience History */}
      <div className="w-full max-w-4xl">
        <h2 className="pokemonFont text-xl sm:text-2xl text-white text-center mb-10 sm:mb-12">
          Relevant Experience History
        </h2>

        <div
          className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px
           md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b
           before:from-transparent before:via-slate-500/60 before:to-transparent"
        >
          {history.map((item, index) => (
            <div
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              key={`${item.Name}-${index}`}
            >
              {/* Pokéball Timeline Node */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-900 bg-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <img className="w-7 h-7" src={pokeball} alt="" />
              </div>

              <motion.div
                className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] rpg-panel p-5 transition-colors hover:border-poke-sky/45"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 360, damping: 20 }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-bold text-base sm:text-lg text-white">
                    {item.Name}
                  </h3>
                  <span className="rounded-full bg-poke-gold/15 border border-poke-gold/30 px-2.5 py-0.5 text-xs font-semibold text-poke-gold">
                    {item.Date}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{item.Title}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bio;
