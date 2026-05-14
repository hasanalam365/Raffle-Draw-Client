import React from "react";
import {
  Ticket,
  Sparkles,
  ShieldCheck,
  Trophy,
} from "lucide-react";

const steps = [
  {
    id: "1",
    title: "Choose Competition",
    description:
      "Browse our live competitions and pick your prize.",
    icon: <Ticket size={26} strokeWidth={2.3} />,
  },
  {
    id: "2",
    title: "Get Your Tickets",
    description:
      "Select your lucky numbers or let us auto-generate them.",
    icon: <Sparkles size={26} strokeWidth={2.3} />,
  },
  {
    id: "3",
    title: "Secure Payment",
    description:
      "Pay securely via Stripe or PayPal. Your entry is confirmed instantly.",
    icon: <ShieldCheck size={26} strokeWidth={2.3} />,
  },
  {
    id: "4",
    title: "Win Big",
    description:
      "Watch the live draw and see if you're the lucky winner!",
    icon: <Trophy size={26} strokeWidth={2.3} />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#04131d] py-20 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* heading */}
        <div className="text-center mb-14">
          <p className="text-[#57f3f0] uppercase tracking-[4px] text-xs font-semibold mb-3">
            Simple Process
          </p>

          <h2 className="mb-4 text-3xl font-black text-white md:text-5xl">
            How It Works
          </h2>

          <p className="max-w-2xl mx-auto text-sm text-gray-400 md:text-base">
            Entering our competitions is quick, easy,
            and completely transparent.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#071923] border border-[#123040] rounded-2xl px-7 py-10 text-center hover:border-[#57f3f0]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* icon */}
              <div className="flex justify-center mb-5">
                <div className="relative">
                  {/* icon box */}
                  <div className="w-[58px] h-[58px] rounded-2xl border border-[#1f4659] bg-[#081c27] flex items-center justify-center text-[#57f3f0]">
                    {step.icon}
                  </div>

                  {/* number */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0c2532] border border-[#1f4659] text-[#57f3f0] text-[11px] font-bold flex items-center justify-center">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* content */}
              <h3 className="mt-5 mb-3 text-lg font-bold text-white">
                {step.title}
              </h3>

              <p className="text-sm leading-7 text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;