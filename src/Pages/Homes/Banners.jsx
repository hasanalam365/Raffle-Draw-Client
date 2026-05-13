import React from "react";
import { ArrowRight } from "lucide-react";

const Banners = () => {
  return (
    <section className="relative overflow-hidden bg-[#021019] text-white min-h-screen">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#0cf2ff15,transparent_40%)]"></div>

        <img
          src="/bg-car.png"
          alt="Luxury Car"
          className="absolute right-0 top-0 h-full w-[55%] object-cover opacity-10"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20">
        
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            {/* LIVE BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full border-cyan-400/20 bg-cyan-400/5 backdrop-blur-md">
              
              <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></div>

              <span className="text-xs font-semibold tracking-wide uppercase text-cyan-300">
                LIVE DRAW
              </span>

              <span className="text-sm text-white/70">
                — 1,247 players online
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-[55px] md:text-[82px] font-black leading-[0.92] tracking-tight">
              Win Luxury Prizes
              <br />

              <span className="text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text">
                for Less
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="max-w-[560px] mt-8 text-xl leading-9 text-white/70">
              Enter competitions from just 49p for the chance to win cars,
              cash, holidays & more. Fully transparent, fair draws with
              instant results.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button className="flex items-center gap-3 px-8 py-4 text-sm font-bold text-black transition-all duration-300 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-400 hover:scale-105">
                View Competitions
                <ArrowRight size={18} />
              </button>

              <button className="px-8 py-4 text-sm font-semibold transition-all duration-300 border rounded-2xl border-cyan-400/20 bg-white/[0.02] hover:bg-white/[0.05]">
                🎰 Free Spin
              </button>

            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-12 mt-14">

              <div>
                <h3 className="text-4xl font-black text-cyan-300">
                  50,000+
                </h3>

                <p className="mt-1 text-sm text-white/50">
                  Winners
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-300">
                  £2M+
                </h3>

                <p className="mt-1 text-sm text-white/50">
                  Prizes Given
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-300">
                  4.9★
                </h3>

                <p className="mt-1 text-sm text-white/50">
                  Rating
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-[420px] rounded-[30px] border border-cyan-400/20 bg-[#071720]/80 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(34,211,238,0.08)]">

              {/* TIMER */}
              <div>
                <p className="mb-4 text-xs tracking-[0.25em] uppercase text-white/40">
                  Featured Draw Closes In
                </p>

                <div className="flex gap-3">

                  {[
                    { number: "01", label: "Days" },
                    { number: "17", label: "Hrs" },
                    { number: "59", label: "Min" },
                    { number: "55", label: "Sec" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      
                      <div className="flex items-center justify-center w-14 h-14 font-black rounded-xl bg-cyan-400/10 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        {item.number}
                      </div>

                      <p className="mt-2 text-[10px] uppercase tracking-widest text-white/40">
                        {item.label}
                      </p>

                    </div>
                  ))}

                </div>
              </div>

              {/* IMAGE BOX */}
              <div className="flex items-center justify-center h-[220px] mt-8 rounded-3xl border border-cyan-400/10 bg-[#031018] overflow-hidden">

                <img
                  src="/lambo.png"
                  alt="Lamborghini"
                  className="object-contain w-[85%] hover:scale-105 transition duration-500"
                />

              </div>

              {/* INFO */}
              <div className="mt-6">

                <h2 className="text-2xl font-bold">
                  Lamborghini Huracán EVO
                </h2>

                <p className="mt-2 text-sm text-white/45">
                  Worth £200,000 + £5,000 cash alternative
                </p>

              </div>

              {/* PROGRESS */}
              <div className="mt-6">

                <div className="flex items-center justify-between mb-2 text-xs">
                  <span className="text-white/40">
                    4,120 sold
                  </span>

                  <span className="font-semibold text-red-400">
                    82% filled
                  </span>
                </div>

                <div className="w-full h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="w-[82%] h-full rounded-full bg-gradient-to-r from-red-400 to-orange-300"></div>
                </div>

              </div>

              {/* BOTTOM */}
              <div className="flex items-end justify-between mt-8">

                <div>
                  <p className="text-sm text-white/40">
                    From just
                  </p>

                  <h1 className="text-5xl font-black text-cyan-300">
                    £2.99
                  </h1>
                </div>

                <button className="px-8 py-4 text-sm font-bold text-black transition-all duration-300 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-400 hover:scale-105">
                  Enter Now
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Banners;