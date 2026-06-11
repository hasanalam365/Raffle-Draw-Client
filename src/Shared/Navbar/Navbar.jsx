import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  User,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [moreOpen, setMoreOpen] =
    useState(false);

  const [mobileMoreOpen, setMobileMoreOpen] =
    useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Competitions",
      path: "/competitions",
    },
    { name: "Winners", path: "/winners" },
    {
      name: "How It Works",
      path: "/how-it-works",
    },
  ];

  const moreLinks = [
    { name: "About", path: "/about-us" },
    { name: "Gift Cards", path: "/gift-cards" },
   
    { name: "Blogs", path: "/blogs" },
    {
      name: "Terms & Conditions",
      path: "/terms",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-xl bg-[#071317]/90 border-white/10">
      <div className="px-5 mx-auto max-w-7xl lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex items-center justify-center w-10 h-10 border rounded-xl border-cyan-400/30 bg-cyan-400/10">
              <img
                src="DEMOLOGO"
                alt="Logo"
                className="object-contain w-6 h-6"
              />
            </div>

            <h1 className="text-lg font-semibold tracking-wide text-white uppercase">
              Faces Draw
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="items-center hidden gap-2 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-400/15 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* MORE DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() =>
                setMoreOpen(true)
              }
              onMouseLeave={() =>
                setMoreOpen(false)
              }
            >
              <button className="flex items-center gap-1 px-5 py-2.5 rounded-full text-[13px] font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all">
                More
                <ChevronDown size={16} />
              </button>

              <div
                className={`absolute top-full left-0 mt-3 w-60 rounded-2xl border border-white/10 bg-[#0c1d22] backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 ${
                  moreOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {moreLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="block px-5 py-3 text-sm transition-all text-white/75 hover:text-cyan-300 hover:bg-white/5"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="items-center hidden gap-5 lg:flex">
            <button className="px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 rounded-full bg-cyan-300 hover:bg-cyan-200 hover:scale-105">
              Enter Now
            </button>

            <button className="text-white/70 hover:text-white">
              <User
                size={18}
                strokeWidth={2}
              />
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            className="text-white lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t lg:hidden bg-[#071317] border-white/10">
          <div className="flex flex-col px-6 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm transition-all ${
                    isActive
                      ? "bg-cyan-400/15 text-cyan-300"
                      : "text-white/75 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* MOBILE MORE */}
            <button
              onClick={() =>
                setMobileMoreOpen(
                  !mobileMoreOpen
                )
              }
              className="flex items-center justify-between px-4 py-3 text-sm rounded-xl text-white/75 hover:text-white hover:bg-white/5"
            >
              More
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  mobileMoreOpen
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {mobileMoreOpen && (
              <div className="pl-4 mt-2 space-y-1">
                {moreLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className="block px-4 py-2 text-sm rounded-lg text-white/65 hover:text-cyan-300 hover:bg-white/5"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}

            <button className="w-full py-3 mt-5 text-sm font-semibold text-black transition rounded-full bg-cyan-300 hover:bg-cyan-200">
              Enter Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}