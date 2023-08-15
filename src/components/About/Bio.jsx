import { motion } from "framer-motion";
import pokeball from "/src/assets/images/About/cardPokeball.png";
import redWalking from "/src/assets/images/About/redWalking.gif";

const history = [
  {
    Name: "Freelance",
    Date: "12/2022 - Present",
    Title: "Software Consulting",
  },
  {
    Name: "The University of Michigan",
    Date: "12/2022",
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
    <div className="flex flex-col items-center select-none">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center xl:flex-row xl:pl-64 xl:pr-64">
          <div className="box bg-white p-5 border-4 text-center w-4/5 lg:w-3/4 xl:w-1/2">
            <h1>Hi, nice to meet you, I'm Andrew!</h1>
            <h1 className="pt-10">
              I'm a 22 year old Full Stack Software Engineer and Consultant
              based in Michigan.
            </h1>
            <h1 className="pb-10 pt-10">
              I have a passion for creating products that will help people. So,
              if you are interested, feel free to reach out!
            </h1>
          </div>
          <motion.div className="hidden xl:flex w-1/2 items-center justify-center">
            <motion.img
              className="w-40 h-40 hover:cursor-pointer"
              src={redWalking}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
            />
          </motion.div>
        </div>

        <div className="flex flex-col w-1/2 text-center pt-20 pb-40">
          <h1 className="text-2xl text-white pb-10 pokemonFont">
            Relevant Experience History
          </h1>
          {/* Timeline */}
          <div
            className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px
           md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b 
           before:from-transparent before:via-slate-300 before:to-transparent text-xl"
          >
            {history.map((item, index) => (
              <div
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                key={index}
              >
                {/*Icon*/}
                <img
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500 shadow 
              shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
                  src={pokeball}
                />

                <motion.div
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "`spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">{item.Name}</div>
                    <div className="font-medium text-indigo-500 font-bold">
                      {item.Date}
                    </div>
                  </div>
                  <div className="text-slate-500">{item.Title}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
