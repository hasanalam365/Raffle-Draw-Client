import React from "react";
import { ShieldCheck, Heart, Gem } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    id: 1,
    icon: <ShieldCheck size={26} />,
    title: "Transparency",
    description:
      "Every draw is fair and verifiable. We believe in complete openness.",
  },
  {
    id: 2,
    icon: <Gem size={26} />,
    title: "Trust",
    description:
      "Licensed, regulated, and dedicated to delivering premium experiences.",
  },
  {
    id: 3,
    icon: <Heart size={26} />,
    title: "Community",
    description:
      "We’re building a community of dream chasers and competition lovers.",
  },
];

const stats = [
  {
    number: "50,000+",
    label: "Happy Players",
  },
  {
    number: "500+",
    label: "Winners",
  },
  {
    number: "£2M+",
    label: "Prizes Given",
  },
  {
    number: "4.9/5",
    label: "Trust Rating",
  },
];

const About = () => {
  return (
    <div className="bg-[#03131A] text-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-[#57f3f0] uppercase tracking-[4px] text-xs font-semibold mb-2">
            Our Story
          </p>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            About Us
          </h1>

          <p className="max-w-2xl mx-auto text-sm leading-relaxed text-gray-400 md:text-base">
            We are on a mission to make dream prize competitions accessible
            to everyone through fair and transparent experiences.
          </p>
        </motion.div>

        {/* Main Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-[#103844] rounded-2xl p-8 md:p-10 bg-[#051922] shadow-[0_0_40px_rgba(0,255,255,0.03)]"
        >
          <div className="space-y-6 text-sm leading-relaxed text-gray-300 md:text-base">
            <p>
              Founded with a passion for giving everyone a fair shot at winning
              incredible prizes, YOUR BRAND NAME has grown into one of the UK’s
              most trusted competition platforms.
            </p>

            <p>
              We believe that luxury shouldn’t be exclusive. That’s why we offer
              competitions with affordable ticket prices, giving everyone the
              chance to win life-changing cars, cash prizes, tech gadgets, and
              more.
            </p>

            <p>
              Every competition is run with complete transparency. Our live
              draws are conducted using certified random number generators, and
              every result is verifiable.
            </p>

            <p>
              We’re licensed, regulated, and committed to providing the fairest
              competition experience possible.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <p className="text-[#57f3f0] uppercase tracking-[4px] text-xs font-semibold mb-2">
              Our Values
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              What We Stand For
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[#061C25] border border-[#103844] rounded-2xl p-7 text-center hover:border-[#57f3f0]/40 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#57f3f0]/10 flex items-center justify-center text-[#57f3f0] mb-5">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#061C25] border border-[#103844] rounded-2xl py-8 text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#57f3f0] mb-2">
                  {stat.number}
                </h3>

                <p className="text-sm text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;