import React from "react";
import {
  Clock3,
  Ticket,
  ArrowRight,
} from "lucide-react";

const competitions = [
  {
    id: 1,
    title: "MacBook Pro M5 Max",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    price: "£1.49",
    tickets: "£3,800",
    sold: 84,
    category: "LIMITED",
  },
  {
    id: 2,
    title: "£10,000 Cash Prize",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop",
    price: "£0.99",
    tickets: "£10,000",
    sold: 63,
    category: "CASH",
  },
  {
    id: 3,
    title: "Rolex Submariner Date",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop",
    price: "£2.49",
    tickets: "£17,200",
    sold: 91,
    category: "LUXURY",
  },
  {
    id: 4,
    title: "Dubai Luxury Experience",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    price: "£1.99",
    tickets: "£9,800",
    sold: 56,
    category: "TRAVEL",
  },
  {
    id: 5,
    title: "Win a BMW M4 Competition",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    price: "£2.99",
    tickets: "£17,000",
    sold: 48,
    category: "FEATURED",
  },
  {
    id: 6,
    title: "Porsche 911 Carrera S",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    price: "£4.99",
    tickets: "£37,000",
    sold: 87,
    category: "SUPER CAR",
  },
];

const FeaturesCompetetion = () => {
  return (
    <section className="bg-[#04131d] py-20 px-4 md:px-8">
      {/* heading */}
      <div className="text-center mb-14">
        <p className="text-[#57f3f0] uppercase tracking-[4px] text-xs font-semibold mb-2">
          Live Competitions
        </p>

        <h2 className="mb-4 text-3xl font-black text-white md:text-5xl">
          Win Something Incredible
        </h2>

        <p className="max-w-2xl mx-auto text-sm text-gray-400 md:text-base">
          Browse our current competitions and enter for your chance
          to win luxury prizes at unbeatable prices.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl">
        {competitions.map((item) => (
          <div
            key={item.id}
            className="bg-[#081c27] border border-[#123040] rounded-2xl overflow-hidden group hover:border-[#57f3f0]/40 transition-all duration-300 hover:-translate-y-1"
          >
            {/* image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-[240px] w-full object-cover group-hover:scale-105 transition-all duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#04131d] via-transparent to-transparent"></div>

              {/* category */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#57f3f0] text-black text-[10px] font-bold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* price tag */}
              <div className="absolute bottom-4 right-4 bg-[#57f3f0] text-black font-bold px-3 py-1 rounded-lg text-sm">
                {item.tickets}
              </div>
            </div>

            {/* content */}
            <div className="p-5">
              <h3 className="mb-2 text-xl font-bold text-white line-clamp-1">
                {item.title}
              </h3>

              <p className="mb-4 text-sm text-gray-400">
                Enter now for your chance to win this amazing prize.
              </p>

              {/* progress */}
              <div className="mb-5">
                <div className="flex justify-between mb-2 text-xs">
                  <span className="text-gray-400">Sold</span>
                  <span className="text-[#57f3f0] font-semibold">
                    {item.sold}%
                  </span>
                </div>

                <div className="w-full h-2 bg-[#102836] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#57f3f0] rounded-full"
                    style={{ width: `${item.sold}%` }}
                  ></div>
                </div>
              </div>

              {/* countdown */}
              <div className="grid grid-cols-4 gap-2 mb-5">
                {[
                  { label: "Days", value: "00" },
                  { label: "Hours", value: "00" },
                  { label: "Mins", value: "00" },
                  { label: "Secs", value: "00" },
                ].map((time, i) => (
                  <div
                    key={i}
                    className="bg-[#06151f] border border-[#102836] rounded-xl py-3 text-center"
                  >
                    <h4 className="text-lg font-bold text-white">
                      {time.value}
                    </h4>
                    <p className="text-gray-500 text-[10px] uppercase">
                      {time.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* footer */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="mb-1 text-xs text-gray-400">
                    Entry Price
                  </p>

                  <h3 className="text-2xl font-black text-white">
                    {item.price}
                  </h3>
                </div>

                <button className="bg-[#57f3f0] hover:bg-[#45d8d5] transition-all text-black font-bold px-5 py-3 rounded-xl flex items-center gap-2">
                  Enter
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesCompetetion;