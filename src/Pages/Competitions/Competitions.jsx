import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Clock3,
} from "lucide-react";

const competitionsData = [
  {
    id: 1,
    title: "MacBook Pro 16” M3 Max",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    price: "£1.49",
    prize: "£4,100",
    sold: 47,
    badge: "LIVE",
  },
  {
    id: 2,
    title: "£10,000 Cash Prize",
    category: "Cash",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    price: "£0.99",
    prize: "£10,000",
    sold: 38,
    badge: "HOT",
  },
  {
    id: 3,
    title: "Rolex Submariner Date",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop",
    price: "£2.49",
    prize: "£13,000",
    sold: 84,
    badge: "LIMITED",
  },
  {
    id: 4,
    title: "Dubai Luxury Experience",
    category: "Experiences",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    price: "£1.99",
    prize: "£7,000",
    sold: 63,
    badge: "NEW",
  },
  {
    id: 5,
    title: "Win a BMW M4 Competition",
    category: "Vehicles",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    price: "£2.99",
    prize: "£32,000",
    sold: 94,
    badge: "FEATURED",
  },
  {
    id: 6,
    title: "Porsche 911 Carrera S",
    category: "Vehicles",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    price: "£4.99",
    prize: "£120,000",
    sold: 82,
    badge: "TRENDING",
  },
];

const categories = [
  "All Categories",
  "Cars",
  "Tech",
  "Cash",
  "Lifestyle",
  "Experiences",
  "Vehicles",
];

const sortOptions = [
  "Ending Soon",
  "Low Price",
  "High Price",
];

const Competitions = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");
  const [selectedSort, setSelectedSort] =
    useState("Ending Soon");

  const filteredCompetitions = useMemo(() => {
    let data = [...competitionsData];

    // Search
    if (search) {
      data = data.filter((item) =>
        item.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Category
    if (selectedCategory !== "All Categories") {
      data = data.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Sort
    if (selectedSort === "Low Price") {
      data.sort(
        (a, b) =>
          parseFloat(a.price.replace("£", "")) -
          parseFloat(b.price.replace("£", ""))
      );
    }

    if (selectedSort === "High Price") {
      data.sort(
        (a, b) =>
          parseFloat(b.price.replace("£", "")) -
          parseFloat(a.price.replace("£", ""))
      );
    }

    return data;
  }, [search, selectedCategory, selectedSort]);

  return (
    <section className="bg-[#02161d] min-h-screen py-10 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Live Competitions
          </h1>

          <p className="mt-2 text-gray-400">
            Choose your competition and enter for a chance to win.
          </p>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col gap-4 mb-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-2xl">
            <Search
              size={18}
              className="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2"
            />

            <input
              type="text"
              placeholder="Search competitions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-lg bg-[#041d26] border border-[#123640] text-white placeholder:text-gray-500 outline-none focus:border-[#57f3f0] transition-all"
            />
          </div>

          {/* Sort Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="h-11 px-4 rounded-lg bg-[#57f3f0] text-black font-semibold flex items-center gap-2">
              <SlidersHorizontal size={16} />
              Filters
            </button>

            {sortOptions.map((item) => (
              <button
                key={item}
                onClick={() => setSelectedSort(item)}
                className={`h-11 px-4 rounded-lg border text-sm transition-all ${
                  selectedSort === item
                    ? "bg-[#57f3f0] text-black border-[#57f3f0]"
                    : "border-[#123640] text-white hover:border-[#57f3f0]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 h-10 rounded-lg border text-sm transition-all ${
                selectedCategory === category
                  ? "bg-[#57f3f0] text-black border-[#57f3f0]"
                  : "border-[#123640] text-white hover:border-[#57f3f0]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCompetitions.map((item) => (
            <div
              key={item.id}
              className="bg-[#031c24] border border-[#123640] rounded-2xl overflow-hidden hover:border-[#57f3f0] transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[230px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#57f3f0] text-black text-xs font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Prize */}
                <div className="absolute bottom-4 right-4 bg-[#02161d]/90 backdrop-blur-md px-3 py-1 rounded-full text-[#57f3f0] text-sm font-bold border border-[#1b4b57]">
                  {item.prize}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="mb-2 text-xl font-bold text-white">
                  {item.title}
                </h2>

                <p className="mb-5 text-sm leading-6 text-gray-400">
                  Win this amazing prize today with low-cost
                  entries and live draws.
                </p>

                {/* Progress */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-gray-400">
                      Tickets Sold
                    </span>

                    <span className="text-[#57f3f0] font-semibold">
                      {item.sold}%
                    </span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-[#0d2d38] overflow-hidden">
                    <div
                      className="h-full bg-[#57f3f0]"
                      style={{ width: `${item.sold}%` }}
                    />
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-xs text-gray-400">
                      Entry Price
                    </p>

                    <h3 className="text-2xl font-bold text-white">
                      {item.price}
                    </h3>
                  </div>

                  {/* Countdown */}
                  <div className="flex items-center gap-2">
                    {["00", "00", "00", "00"].map(
                      (time, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 rounded-lg bg-[#041d26] border border-[#123640] flex flex-col items-center justify-center"
                        >
                          <span className="text-sm font-bold text-white">
                            {time}
                          </span>

                          <span className="text-[9px] text-gray-500">
                            {["Days", "Hours", "Min", "Sec"][
                              index
                            ]}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Button */}
                <button className="w-full h-12 mt-6 rounded-xl bg-[#57f3f0] hover:bg-[#45dfdc] transition-all duration-300 text-black font-bold">
                  Enter Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;