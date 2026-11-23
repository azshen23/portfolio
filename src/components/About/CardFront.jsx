import { useState, useEffect } from "react";
import pokeball from "/src/assets/images/About/cardPokeball.png";
import pfp from "/src/assets/images/About/pfp.jpg";

function CardFront() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const stopEvent = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = `${currentTime.getHours()}:${String(
    currentTime.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-slate-900 bg-box14 bg-cover bg-center shadow-rpg-lg">
      {/* Contrast scrim so Trainer Card fields remain crisp */}
      <div className="bg-slate-950/65 p-5 sm:p-8">
        {/* Top Trainer Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <img src={pokeball} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="pokemonFont text-base sm:text-xl md:text-2xl text-white tracking-wider">
              TRAINER CARD
            </h2>
            <img src={pokeball} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <span className="rounded-md bg-poke-gold/95 px-2.5 py-1 text-xs font-bold tracking-wider text-slate-950">
            ID No. 00624
          </span>
        </div>

        {/* Main Card Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Stats / Contact Rows */}
          <div className="md:col-span-7 flex flex-col gap-2.5">
            <div className="flex items-center justify-between gap-4 rounded-lg bg-white/95 px-4 py-2.5 text-slate-900 shadow-sm">
              <span className="pokemonFont text-[10px] sm:text-xs text-slate-500">
                NAME
              </span>
              <span className="text-sm sm:text-base font-bold">
                Andrew Shen
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-lg bg-white/95 px-4 py-2.5 text-slate-900 shadow-sm">
              <span className="pokemonFont text-[10px] sm:text-xs text-slate-500">
                PHONE No.
              </span>
              <a
                href="tel:2482503985"
                onClick={stopEvent}
                className="text-sm sm:text-base font-medium hover:text-poke-crimson transition-colors"
              >
                248-250-3985
              </a>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-lg bg-white/95 px-4 py-2.5 text-slate-900 shadow-sm">
              <span className="pokemonFont text-[10px] sm:text-xs text-slate-500">
                EMAIL
              </span>
              <a
                href="mailto:azshen@umich.edu"
                onClick={stopEvent}
                className="text-sm sm:text-base font-semibold hover:text-poke-crimson transition-colors truncate"
              >
                azshen@umich.edu
              </a>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-lg bg-white/95 px-4 py-2.5 text-slate-900 shadow-sm">
              <span className="pokemonFont text-[10px] sm:text-xs text-slate-500">
                GITHUB
              </span>
              <a
                href="https://github.com/azshen23"
                target="_blank"
                rel="noreferrer"
                onClick={stopEvent}
                className="text-sm sm:text-base font-semibold text-poke-blue hover:text-poke-crimson hover:underline transition-colors"
              >
                /azshen23 ↗
              </a>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-lg bg-white/95 px-4 py-2.5 text-slate-900 shadow-sm">
              <span className="pokemonFont text-[10px] sm:text-xs text-slate-500">
                LINKEDIN
              </span>
              <a
                href="https://linkedin.com/in/azshen23"
                target="_blank"
                rel="noreferrer"
                onClick={stopEvent}
                className="text-sm sm:text-base font-semibold text-poke-blue hover:text-poke-crimson hover:underline transition-colors"
              >
                /azshen23 ↗
              </a>
            </div>
          </div>

          {/* Right Portrait */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div className="relative rounded-2xl border-4 border-white/90 bg-slate-900 overflow-hidden w-44 h-44 sm:w-52 sm:h-52 shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={pfp}
                alt="Andrew Shen"
              />
            </div>
          </div>
        </div>

        {/* Bottom Meta Row */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center justify-between rounded-lg bg-white/90 px-4 py-2 text-slate-900">
            <span className="pokemonFont text-[10px] sm:text-xs text-slate-500">
              TIME
            </span>
            <span className="text-sm font-bold tabular-nums">
              {formattedTime}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/90 px-4 py-2 text-slate-900">
            <span className="pokemonFont text-[10px] sm:text-xs text-slate-500">
              ADVENTURE STARTED
            </span>
            <span className="text-sm font-semibold">
              <strong>Jun.</strong> 24, 2001
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
