import React, { useEffect } from "react";

import {
  Trophy,
  Quote,
  Star,
} from "lucide-react";

import {
  motion,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";

const winners = [
  {
    id: 1,
    name: "Hasan Alam",
    prize: "£10,000 Cash",
    amount: "£10,000",
    type: "Live Draw",
  },
  {
    id: 2,
    name: "Hasan Alam",
    prize: "BMW M4 Competition",
    amount: "£75,000",
    type: "Live Draw",
  },
  {
    id: 3,
    name: "Emily R.",
    prize: "iPhone 15 Pro Max",
    amount: "£1,199",
    type: "Instant Win",
  },
  {
    id: 4,
    name: "Sarah M.",
    prize: "Range Rover Sport",
    amount: "£65,000",
    type: "Live Draw",
  },
];


// COUNT ANIMATION COMPONENT
const CountAmount = ({ amount }) => {
  const numericValue = Number(
    amount.replace(/[^0-9]/g, "")
  );

  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) =>
      `£${Math.floor(latest).toLocaleString()}`
  );

  useEffect(() => {
    const controls = animate(
      count,
      numericValue,
      {
        duration: 2,
        ease: "easeOut",
      }
    );

    return controls.stop;
  }, []);

  return <motion.span>{rounded}</motion.span>;
};

const RecentWinners = () => {
  return (
    <section className="relative overflow-hidden border-t border-cyan-400/10 bg-[#031018] py-20 px-4 md:px-8 text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[160px] rounded-full"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-300 uppercase tracking-[4px] text-xs font-semibold mb-3">
            Real People, Real Prizes
          </p>

          <h2 className="mb-5 text-4xl font-black text-white md:text-6xl">
            Recent{" "}
            <span className="text-cyan-300">
              Winners
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm text-white/60 md:text-base">
            Join thousands of winners who've changed
            their lives with Faces Draw
          </p>
        </motion.div>

        {/* winners cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {winners.map((winner, index) => (
            <motion.div
              key={winner.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/[0.03] px-6 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30"
            >

              {/* card glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_70%)] group-hover:opacity-100"></div>

              {/* quote */}
              <Quote
                size={32}
                className="absolute top-5 right-5 text-cyan-400/10"
              />

              {/* trophy */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative z-10 flex justify-center mb-5"
              >
                <div className="flex items-center justify-center w-[68px] h-[68px] rounded-2xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                  <Trophy
                    size={30}
                    className="text-cyan-300"
                  />
                </div>
              </motion.div>

              {/* name */}
              <h3 className="relative z-10 text-xl font-black text-white">
                {winner.name}
              </h3>

              {/* prize */}
              <p className="relative z-10 mt-2 text-sm font-semibold text-cyan-300">
                {winner.prize}
              </p>

              {/* amount with count animation */}
              <motion.h2
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
                viewport={{ once: true }}
                className="relative z-10 mt-4 text-5xl font-black text-white"
              >
                <CountAmount amount={winner.amount} />
              </motion.h2>

              {/* stars */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                }}
                viewport={{ once: true }}
                className="relative z-10 flex justify-center gap-1 mt-5"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay:
                        0.45 +
                        i * 0.05 +
                        index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <Star
                      size={15}
                      fill="#67e8f9"
                      className="text-cyan-300"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* divider */}
              <div className="relative z-10 w-full h-[1px] bg-white/10 my-6"></div>

              {/* type */}
              <p className="relative z-10 text-xs uppercase tracking-[2px] text-white/40">
                {winner.type}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default RecentWinners;