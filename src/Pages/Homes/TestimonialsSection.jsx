import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: `"Couldn't believe it when I won the BMW! The whole process was transparent and professional. Best competition site out there."`,
    name: "James M.",
    won: "BMW M4 Competition",
  },
  {
    id: 2,
    text: `"Won £10,000 cash on my third entry! The live draw was so exciting to watch. Highly recommend to everyone."`,
    name: "Sarah K.",
    won: "£10,000 Cash",
  },
  {
    id: 3,
    text: `"The odds here are actually fair compared to other sites. I've won twice already! The team is very responsive."`,
    name: "David R.",
    won: "MacBook Pro",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#02161d] py-20 px-5">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#57f3f0] uppercase tracking-[3px] text-sm font-semibold mb-3">
            Testimonials
          </p>

          <h2 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            What Our Winners Say
          </h2>

          <p className="text-base text-gray-300 md:text-lg">
            Real reviews from real winners. Join thousands of happy players.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#031c24] border border-[#0d3b47] rounded-2xl p-8 hover:border-[#57f3f0] transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote
                size={38}
                className="text-[#57f3f0] opacity-70 mb-6"
              />

              {/* Review */}
              <p className="text-gray-300 leading-8 text-[15px] mb-6 min-h-[120px]">
                {item.text}
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className="text-lg text-yellow-400"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-[#16343d] pt-5 flex items-center gap-4">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full bg-[#0c3944] flex items-center justify-center text-[#57f3f0] font-bold">
                  {item.name.charAt(0)}
                </div>

                {/* User Info */}
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="text-[#57f3f0] text-xs mt-1">
                    Won: {item.won}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;