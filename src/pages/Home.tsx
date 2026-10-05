import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Globe2 } from "lucide-react";
import coverImage from "../assets/cover.png";
import { stats } from "../data";
import { Reveal } from "../components/Reveal";

export function Home() {
  const navigate = useNavigate();

  return (
    <section className="animate-page relative overflow-hidden bg-ink pt-8 text-white">
      <div className="float-slow absolute -left-32 top-20 h-96 w-96 rounded-full bg-leaf/25 blur-3xl" />
      <div className="pulse-soft absolute right-[-12rem] top-[-8rem] h-[38rem] w-[38rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-8 lg:grid-cols-[1.03fr_.97fr] lg:px-8 lg:pb-28">
        <Reveal className="relative z-10">
          <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            Building a more <span className="text-gold">sustainable</span>{" "}
            future.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            AGAMWE Holdings Company Limited is a Ugandan consultancy firm
            delivering quality and sustainable solutions across water, climate,
            environment, forestry, data, research, M&E and business planning.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => navigate("/services")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-extrabold text-ink transition hover:-translate-y-1"
            >
              Explore capabilities{" "}
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              View our work
            </button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 border-t border-white/10 pt-7 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black">{s.value}</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="relative" delay={120}>
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-leaf/30 to-gold/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 p-2 shadow-2xl">
            <img
              src={coverImage}
              alt="AGAMWE sustainable development portfolio"
              className="h-[520px] w-full rounded-[1.8rem] object-cover object-center"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/15 bg-ink/75 p-5 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-gold">
                Our vision
              </p>
              <p className="mt-2 text-lg font-bold">
                Sustainable Living for Future generations
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="h-1.5 bg-gradient-to-r from-gold via-leaf to-forest" />
    </section>
  );
}
