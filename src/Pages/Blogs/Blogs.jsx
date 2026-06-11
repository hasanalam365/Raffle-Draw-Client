import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    date: "Mar 22, 2024",
    title: "RAC 296 RIDE SPES TRACK RETURN AFTER WINNING SUPER CAR",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    date: "Mar 17, 2024",
    title: "LOTS OF JOY, BUT TWO WINNERS LATE RACE IN A MILLIONAIRE",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    date: "Mar 12, 2024",
    title: "LANCASHIRE CHILD WITH RARE CONDITION TO START LIFE-CHANGING THERAPY",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    date: "Feb 28, 2024",
    title: "GREAT HARWOOD CANCER CHARITY RECEIVES £5000 DONATION",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    date: "Feb 24, 2024",
    title: "ELITE COMPETITION STRENGTHENS EXECUTIVE TEAM",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    date: "Feb 20, 2024",
    title: "ONLINE PRIZE DRAW COMPANY BECOMES GOVERNMENT CHOICE",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    date: "Feb 15, 2024",
    title: "£2,500 DONATION TO LOCAL SCHOOL'S VERY FIRST LIBRARY",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
    date: "Feb 12, 2024",
    title: "PAIRED BY DEMO TEST WINS STRANGE GIVE ME A FREE CAR",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    date: "Feb 10, 2024",
    title: "LOCAL ELECTRICIAN WINS THOUSANDS FOR CHURCH VISIT",
  },
];

const Blogs = () => {
  return (
    <section className="bg-[#050505] py-16">
      <div className="px-4 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black text-white uppercase">
            In The Spotlight
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Real winners. Real stories. Real success across the UK.
          </p>

          <div className="w-24 h-1 mx-auto mt-4 bg-red-600"></div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-8">
          <button className="px-5 py-2 text-sm font-bold text-black bg-white rounded">
            All Posts
          </button>

          <button className="px-5 py-2 text-sm font-bold text-white border rounded bg-zinc-900 border-zinc-700 hover:bg-zinc-800">
            Articles
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="group bg-[#0f0f0f] border border-zinc-800 overflow-hidden hover:border-red-600 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={`${blog.image}?w=800&auto=format&fit=crop`}
                  alt={blog.title}
                  className="object-cover w-full h-56 transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <p className="mb-3 text-xs text-gray-500 uppercase">
                  {blog.date}
                </p>

                <h3 className="text-sm font-extrabold leading-6 text-white uppercase transition group-hover:text-red-500">
                  {blog.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;