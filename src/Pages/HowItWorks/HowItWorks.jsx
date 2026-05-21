import React from "react";
import {
  Ticket,
  Trophy,
  Eye,
  ShieldCheck,
  Clock3,
  Gift,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    id: "1",
    icon: <Ticket size={15} strokeWidth={2.2} />,
    title: "Browse & Choose",
    description:
      "Explore our range of luxury competitions. From supercars to cash prizes, find the competition that excites you most.",
  },
  {
    id: "2",
    icon: <Ticket size={15} strokeWidth={2.2} />,
    title: "Pick Your Tickets",
    description:
      "Choose your lucky numbers or let our system auto-generate them. Select how many tickets you want to purchase.",
  },
  {
    id: "3",
    icon: <Eye size={15} strokeWidth={2.2} />,
    title: "Watch the Live Draw",
    description:
      "Every draw is conducted live using a verified random number generator. Complete transparency guaranteed.",
  },
  {
    id: "4",
    icon: <Trophy size={15} strokeWidth={2.2} />,
    title: "Claim Your Prize",
    description:
      "If your number is drawn, we'll contact you immediately. Prizes are delivered directly to winners.",
  },
];

const features = [
  {
    icon: <ShieldCheck size={22} strokeWidth={2.1} />,
    title: "Licensed & Regulated",
    desc: "We operate under strict guidelines to ensure fair play for all.",
  },
  {
    icon: <Clock3 size={22} strokeWidth={2.1} />,
    title: "Regular Draws",
    desc: "New competitions launch weekly with draws held on schedule.",
  },
  {
    icon: <Gift size={22} strokeWidth={2.1} />,
    title: "Real Prizes",
    desc: "Every prize is genuine and delivered to our winners.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-[#020B12] px-4 py-20 text-white">
      
      {/* Glow */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* ================= TOP SECTION ================= */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#57f3f0]">
            Getting Started
          </p>

          <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">
            How It Works
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-relaxed text-gray-300 md:text-sm">
            Entering our competitions is simple, secure, and transparent.
            Here's everything you need to know.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-5 rounded-2xl border border-[#12303a] bg-[#06131b]/80 px-5 py-6 backdrop-blur-sm transition-all duration-300 hover:border-[#57f3f0]/40"
            >
              
              {/* Left Icons */}
              <div className="flex items-center gap-3 pt-1">
                
                {/* Square Icon */}
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1a5a67] bg-[#0a1a22] text-[#57f3f0] shadow-[0_0_12px_rgba(87,243,240,0.08)]">
                  {step.icon}
                </div>

                {/* Number Circle */}
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#1a5a67] bg-[#08141d] text-[11px] font-semibold text-[#57f3f0]">
                  {step.id}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[17px] font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-3xl text-[13px] leading-[1.9] text-gray-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="mt-24 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#57f3f0]">
            Why Choose Us
          </p>

          <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">
            Trust & Transparency
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-relaxed text-gray-300 md:text-sm">
            We're committed to providing the fairest, most transparent
            competition experience.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 mt-14 md:grid-cols-3">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#12303a] bg-[#06131b]/80 px-6 py-8 backdrop-blur-sm transition-all duration-300 hover:border-[#57f3f0]/40"
              >
                <div className="mb-5 flex justify-center text-[#57f3f0]">
                  {item.icon}
                </div>

                <h3 className="text-[16px] font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-[1.8] text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <button className="mx-auto mt-12 flex items-center gap-2 rounded-xl bg-[#57f3f0] px-8 py-3 text-sm font-bold text-black shadow-[0_0_30px_rgba(87,243,240,0.35)] transition-all duration-300 hover:scale-105">
            Start Winning Now
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;