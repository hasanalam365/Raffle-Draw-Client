// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Competitions", path: "/competitions" },
    { name: "Winners", path: "/winners" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    { name: "Cars", path: "/competitions" },
    { name: "Cash", path: "/competitions" },
    { name: "Luxury Watches", path: "/competitions" },
    { name: "Tech", path: "/competitions" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/10 bg-[#031018] text-white">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 pb-16 border-b gap-14 md:grid-cols-2 lg:grid-cols-4 border-white/10">

          {/* BRAND */}
          <div>
            
            {/* LOGO */}
            <div className="flex items-center gap-3 mb-6">

              <div className="flex items-center justify-center border w-11 h-11 rounded-2xl border-cyan-400/20 bg-cyan-400/10">
                <span className="text-lg font-black text-cyan-300">
                  F
                </span>
              </div>

              <h2 className="text-2xl font-black tracking-wide">
                Faces Draw
              </h2>

            </div>

            {/* DESCRIPTION */}
            <p className="max-w-sm text-[15px] leading-7 text-white/60">
              Premium luxury competitions platform giving you the chance
              to win dream cars, cash prizes, watches & more with fully
              transparent live draws.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">

              {[
                Instagram,
                Facebook,
                Twitter,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="/"
                  className="flex items-center justify-center transition-all duration-300 border w-11 h-11 rounded-xl border-cyan-400/10 bg-white/[0.03] hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:-translate-y-1"
                >
                  <Icon
                    size={18}
                    className="text-cyan-300"
                  />
                </a>
              ))}

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-[0.2em] uppercase text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-[15px] text-white/60 transition hover:text-cyan-300"
                  >
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-[0.2em] uppercase text-white">
              Categories
            </h3>

            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={cat.path}
                    className="group inline-flex items-center gap-2 text-[15px] text-white/60 transition hover:text-cyan-300"
                  >
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-[0.2em] uppercase text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-400/10">
                  <Mail
                    size={18}
                    className="text-cyan-300"
                  />
                </div>

                <div>
                  <p className="mb-1 text-sm text-white/40">
                    Email
                  </p>

                  <p className="text-[15px] text-white/70">
                    demo@email.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-400/10">
                  <Phone
                    size={18}
                    className="text-cyan-300"
                  />
                </div>

                <div>
                  <p className="mb-1 text-sm text-white/40">
                    Phone
                  </p>

                  <p className="text-[15px] text-white/70">
                    +44 123 456 789
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-400/10">
                  <MapPin
                    size={18}
                    className="text-cyan-300"
                  />
                </div>

                <div>
                  <p className="mb-1 text-sm text-white/40">
                    Location
                  </p>

                  <p className="text-[15px] text-white/70">
                    London, United Kingdom
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">

          <p className="text-sm text-white/35">
            © 2026 Faces Draw. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">

            <Link
              to="/privacy-policy"
              className="text-sm transition text-white/50 hover:text-cyan-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-sm transition text-white/50 hover:text-cyan-300"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/refund-policy"
              className="text-sm transition text-white/50 hover:text-cyan-300"
            >
              Refund Policy
            </Link>

          </div>

        </div>

        {/* CREDIT */}
        <div className="pt-6 mt-6 text-center border-t border-white/5">
          <p className="text-xs tracking-wide text-white/25">
            Developed by{" "}
            <span className="font-semibold text-cyan-300">
              Faces Media
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}