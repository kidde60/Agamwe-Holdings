import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { services } from "../data";
import { Reveal } from "../components/Reveal";

export function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="animate-page scroll-mt-24 bg-mist px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Our capabilities</p>
            <h2 className="section-title">
              Technical expertise for complex development challenges.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.title}
                  onClick={() => setActiveService(i)}
                  className={`group rounded-3xl border p-6 text-left transition ${
                    activeService === i
                      ? "border-forest bg-white shadow-soft"
                      : "border-slate-200 bg-white/60 hover:-translate-y-1 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                        activeService === i
                          ? "bg-forest text-white"
                          : "bg-mist text-forest"
                      }`}
                    >
                      <Icon size={21} />
                    </div>
                    <ChevronRight
                      size={18}
                      className={`transition ${
                        activeService === i
                          ? "translate-x-1 text-forest"
                          : "text-slate-300 group-hover:text-forest"
                      }`}
                    />
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-widest text-slate-400">
                    {service.short}
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.text}
                  </p>
                </button>
              );
            })}
          </div>
          <div className="rounded-[2rem] bg-ink p-8 text-white lg:sticky lg:top-28 lg:h-fit lg:p-10">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">
              Capability spotlight
            </p>
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-ink">
              {React.createElement(services[activeService].icon, {
                size: 27,
              })}
            </div>
            <h3 className="mt-7 text-3xl font-black leading-tight">
              {services[activeService].title}
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              {services[activeService].text}
            </p>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-200">
                Integrated approach
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Research, evidence, field experience and clear information
                brought together to support better decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
