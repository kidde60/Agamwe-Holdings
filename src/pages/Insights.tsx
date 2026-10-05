import React from "react";
import { gallery } from "../data";
import { Reveal } from "../components/Reveal";

export function Insights() {
  return (
    <section className="animate-page scroll-mt-24 bg-[#f7faf5] px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Our work in focus</p>
            <h2 className="section-title">
              A visual snapshot of AGAMWE's focus areas.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              The imagery below is drawn from the supplied company profile and
              reflects the sectors and capabilities described by AGAMWE.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid auto-rows-[180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-3xl ${
                i === 0 || i === 3 ? "lg:row-span-2 lg:h-[380px]" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-14">
                <p className="text-sm font-bold text-white">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
