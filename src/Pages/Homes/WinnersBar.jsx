import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const WinnersBar = () => {
  const winners = [
    {
      name: "Sarah K.",
      prize: "£10,000 Cash",
      value: "(£10,000)",
    },
    {
      name: "Mike R.",
      prize: "Rolex Submariner",
      value: "(£12,500)",
    },
    {
      name: "Emma L.",
      prize: 'MacBook Pro 16"',
      value: "(£3,500)",
    },
    {
      name: "David W.",
      prize: "Porsche 911",
      value: "(£95,000)",
    },
    {
      name: "Lisa P.",
      prize: "£5,000 Cash",
      value: "(£5,000)",
    },
    {
      name: "Chris T.",
      prize: "BMW M4 Competition",
      value: "(£78,000)",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-cyan-400/10 bg-[#031018] py-3">
      
      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#031018] to-transparent"></div>

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#031018] to-transparent"></div>

      {/* MARQUEE */}
      <motion.div
        className="flex items-center w-max whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {[...winners, ...winners].map((winner, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-8"
          >
            
            {/* ICON */}
            <div className="flex items-center justify-center border rounded-full h-7 w-7 border-cyan-400/20 bg-cyan-400/10">
              <Trophy
                size={14}
                className="text-cyan-300"
              />
            </div>

            {/* TEXT */}
            <p className="text-sm tracking-wide text-white/70">
              <span className="font-semibold text-white">
                {winner.name}
              </span>{" "}
              won{" "}
              <span className="font-semibold text-cyan-300">
                {winner.prize}
              </span>{" "}
              <span className="text-white/40">
                {winner.value}
              </span>
            </p>

          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default WinnersBar;