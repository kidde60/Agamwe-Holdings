import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logoImage from "../assets/logo.png";

export function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const navItems = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Insights",
    "Contact",
  ];

  const handleNavigate = (item: string) => {
    navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`);
  };

  return (
    <footer className="bg-ink px-5 py-8 text-white lg:px-8 lg:py-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:gap-12 md:grid-cols-[1fr_1.5fr_1fr] mb-6 md:mb-8">
          {/* Brand Section */}
          <div>
            <img
              src={logoImage}
              alt="AGAMWE Holdings Company Limited"
              className="h-12 w-auto rounded-lg bg-white p-1"
            />
            <p className="mt-2 text-xs text-slate-400">
              Sustainable Living for Future generations.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                Pages
              </h3>
              <ul className="space-y-2">
                {navItems.slice(0, 3).map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNavigate(item)}
                      className="text-xs text-slate-400 hover:text-white transition"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                More
              </h3>
              <ul className="space-y-2">
                {navItems.slice(3, 6).map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNavigate(item)}
                      className="text-xs text-slate-400 hover:text-white transition"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                Connect
              </h3>
              <ul className="space-y-2">
                {navItems.slice(6).map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNavigate(item)}
                      className="text-xs text-slate-400 hover:text-white transition"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
              Get in Touch
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:agamweholdings2@gmail.com"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition group"
              >
                <Mail size={14} className="group-hover:text-gold transition" />
                <span>Email us</span>
              </a>
              <a
                href="tel:+256776004552"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition group"
              >
                <Phone size={14} className="group-hover:text-gold transition" />
                <span>+256 776 004 552</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50" />

        {/* Bottom Section */}
        <div className="pt-6 md:pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} AGAMWE Holdings. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => handleNavigate("Home")}
              className="text-xs text-slate-500 hover:text-white transition"
            >
              Privacy
            </button>
            <button
              onClick={() => handleNavigate("Home")}
              className="text-xs text-slate-500 hover:text-white transition"
            >
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
