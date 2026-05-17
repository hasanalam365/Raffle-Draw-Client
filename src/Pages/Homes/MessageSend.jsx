import React from "react";
import { Mail, ArrowRight } from "lucide-react";

const MessageSend = () => {
  return (
    <section className="bg-[#02161d] py-24 px-5 overflow-hidden">
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Glow Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-[#57f3f0]/10 blur-3xl rounded-full" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="w-14 h-14 mx-auto rounded-xl border border-[#1b4b57] bg-[#06242d] flex items-center justify-center mb-8">
            <Mail className="text-[#57f3f0]" size={26} />
          </div>

          {/* Heading */}
          <h2 className="mb-5 text-4xl font-extrabold text-white md:text-5xl">
            Never Miss a Draw
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto mb-10 text-sm leading-7 text-gray-300 md:text-base">
            Subscribe to get notified about new competitions, exclusive deals,
            and winner announcements.
          </p>

          {/* Form */}
          <form className="flex flex-col items-center justify-center max-w-xl gap-4 mx-auto sm:flex-row">
            {/* Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 h-14 px-5 rounded-xl bg-[#06242d] border border-[#123640] text-white placeholder:text-gray-500 outline-none focus:border-[#57f3f0] transition-all duration-300"
            />

            {/* Button */}
            <button
              type="submit"
              className="h-14 px-8 rounded-xl bg-[#57f3f0] hover:bg-[#45dfdc] transition-all duration-300 text-black font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              Subscribe
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Bottom Text */}
          <p className="mt-5 text-xs text-gray-500">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessageSend;