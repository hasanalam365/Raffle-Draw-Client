import React from "react";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

const Winners = () => {
  return (
    <div className="bg-[#020B12] min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-20">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-10 right-0 w-80 h-80 bg-cyan-300/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-6xl text-center">
        
        {/* Top Heading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#57f3f0] uppercase tracking-[3px] text-sm font-semibold"
        >
          Hall Of Fame
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-3 text-4xl font-bold text-white md:text-5xl"
        >
          Our Lucky Winners
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-sm text-gray-300 md:text-base"
        >
          Congratulations to all our winners! Every draw is conducted live and transparently.
        </motion.p>

        {/* Empty State */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center mt-40"
        >
          <div className="w-24 h-24 rounded-full bg-[#08141d] flex items-center justify-center border border-[#112532] shadow-[0_0_40px_rgba(87,243,240,0.08)]">
            <Trophy size={42} className="text-[#1f2f38]" strokeWidth={1.5} />
          </div>

          <p className="mt-6 text-lg text-gray-300">
            No winners yet. Be the first!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Winners;