import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/logo.png";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Team",
    "Insights",
    "Contact",
  ];

  const handleNavigate = (item: string) => {
    navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`);
    setMenuOpen(false);
  };

  const isActive = (item: string) => {
    const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
    return location.pathname === path;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <button
          onClick={() => handleNavigate("Home")}
          className="flex items-center"
          aria-label="AGAMWE home"
        >
          <img
            src={logoImage}
            alt="AGAMWE Holdings Company Limited"
            className="h-12 w-auto object-contain"
          />
        </button>
        <nav className="nav-desktop items-center nav-gap md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavigate(item)}
              className={`nav-item nav-item-${item.toLowerCase()} ${
                isActive(item) ? "active" : ""
              }`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => handleNavigate("Contact")}
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-forest/20 transition hover:-translate-y-0.5 hover:bg-[#3d7025]"
          >
            Partner with us
          </button>
        </nav>
        <button
          className="rounded-xl p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className={`rounded-xl px-3 py-3 text-left font-semibold transition ${
                  isActive(item)
                    ? "bg-mist text-forest"
                    : "text-slate-700 hover:bg-mist"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
