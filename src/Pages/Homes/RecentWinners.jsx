import React from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const winners = [
  {
    id: 1,
    name: "Danny Cook",
    date: "April 29, 2026",
    prize: "The £1.5 Million Bundle",
    description:
      "#1 won a £1.5 million prize... now my son is set up for life. Danny Cook, 29, from Brentwood...",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
    ],
  },
  {
    id: 2,
    name: "Ashley Jaques",
    date: "March 30, 2026",
    prize: "£1.4 Million Dream Home Bundle",
    description:
      "Ashley from Hinckley, Leicester has just won our £1.4 Million Dream Home Bundle and £100,000 cash...",
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    ],
  },
  {
    id: 3,
    name: "Nathan Conway",
    date: "February 28, 2026",
    prize: "£1 Million Vault",
    description:
      "Still can't quite believe this one... Nathan Conway came down to the Elite headquarters...",
    images: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
    ],
  },
  {
    id: 4,
    name: "Sarah Morgan",
    date: "January 18, 2026",
    prize: "Range Rover Sport",
    description:
      "Sarah collected her dream car after winning our exclusive luxury vehicle draw.",
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
      "https://images.unsplash.com/photo-1502164980785-f8aa41d53611?q=80&w=800",
    ],
  },
];

const RecentWinners = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#57f3f0]/10 blur-[140px]" />

      <div className="relative px-4 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">

          <div>
            <span className="inline-flex px-5 py-2 text-sm font-bold tracking-wider text-white uppercase border border-white rounded-lg">
              OUR TOP WINNERS
            </span>
          </div>

          <div className="hidden gap-3 md:flex">

            <button className="winner-prev flex h-12 w-12 items-center justify-center rounded-lg border border-[#57f3f0] text-[#57f3f0] transition hover:bg-[#57f3f0] hover:text-black">
              <ChevronLeft size={22} />
            </button>

            <button className="winner-next flex h-12 w-12 items-center justify-center rounded-lg border border-[#57f3f0] text-[#57f3f0] transition hover:bg-[#57f3f0] hover:text-black">
              <ChevronRight size={22} />
            </button>

          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".winner-prev",
            nextEl: ".winner-next",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {winners.map((winner) => (
            <SwiperSlide key={winner.id}>
              <div className="overflow-hidden rounded-2xl border border-[#1737d4] bg-[#1737d4] transition-all duration-300 hover:-translate-y-1">

                {/* Top Info */}
                <div className="p-4">

                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-white">
                      {winner.name}
                    </h3>

                    <span className="text-xs text-white/70">
                      {winner.date}
                    </span>
                  </div>

                  <div className="inline-block rounded bg-[#57f3f0] px-3 py-1 text-sm font-bold text-black">
                    {winner.prize}
                  </div>

                  <p className="mt-3 text-sm font-medium text-white line-clamp-3">
                    {winner.description}
                  </p>

                  <button className="mt-3 text-sm font-bold text-white transition hover:text-[#57f3f0]">
                    read more...
                  </button>
                </div>

                {/* Images */}
                <div className="grid grid-cols-2">

                  <img
                    src={winner.images[0]}
                    alt={winner.name}
                    className="h-[220px] w-full object-cover"
                  />

                  <img
                    src={winner.images[1]}
                    alt={winner.name}
                    className="h-[220px] w-full object-cover"
                  />

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Buttons */}
        <div className="flex justify-center gap-3 mt-6 md:hidden">

          <button className="winner-prev flex h-12 w-12 items-center justify-center rounded-lg border border-[#57f3f0] text-[#57f3f0]">
            <ChevronLeft size={22} />
          </button>

          <button className="winner-next flex h-12 w-12 items-center justify-center rounded-lg border border-[#57f3f0] text-[#57f3f0]">
            <ChevronRight size={22} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default RecentWinners;