import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/qLpnZBPB/lam.jpg",
    title: "2025 VW T7 Campervan",
    subtitle: "£25,000 Cash Alternative",
    price: "£0.99",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    title: "Win £101,000 Tax Free Cash",
    subtitle: "Live Draw This Week",
    price: "£0.49",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    title: "Cash & Bullion Wheel",
    subtitle: "Instant Win Game",
    price: "£0.25",
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    title: "Lamborghini Huracán EVO",
    subtitle: "£200,000 Prize",
    price: "£2.99",
  },
];

const Banners = () => {
  return (
    <section className="py-6 overflow-hidden bg-black">

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        centeredSlides
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="competitionSwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative overflow-hidden rounded-2xl group h-[550px]">

              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* live badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
                  LIVE DRAW
                </span>
              </div>

              {/* content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">

                <h2 className="mb-2 text-3xl font-black text-white">
                  {slide.title}
                </h2>

                <p className="mb-5 text-white/70">
                  {slide.subtitle}
                </p>

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs text-white/50">
                      Tickets From
                    </p>

                    <h3 className="text-4xl font-black text-cyan-300">
                      {slide.price}
                    </h3>
                  </div>

                  <button className="px-6 py-3 font-bold text-black transition rounded-xl bg-cyan-300 hover:scale-105">
                    Enter Now
                  </button>

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Banners;