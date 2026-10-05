import React from "react";
import { CheckCircle2, Globe2 } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <>
      <section className="animate-page scroll-mt-24 px-5 py-8 lg:px-8">
        <Reveal className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">About AGAMWE</p>
            <h2 className="section-title">
              Local knowledge, technical depth and a sustainability lens.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">
              AGAMWE provides consultancy services to the private sector, public
              sector, NGOs and development agencies. The company's experience
              includes socio-economic research, business management, climate
              change mitigation and adaptation, forestry, environmental
              management, carbon credits, business planning, capacity building
              and data management.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-mist p-6">
                <CheckCircle2 className="text-forest" />
                <p className="mt-5 text-xs font-black uppercase tracking-widest text-forest">
                  Mission
                </p>
                <h3 className="mt-2 text-xl font-extrabold">
                  Quality + sustainable solutions
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  To be the leading firm offering quality and sustainable
                  solutions to our clients.
                </p>
              </div>
              <div className="rounded-3xl bg-[#fff8e9] p-6">
                <CheckCircle2 className="text-gold" />
                <p className="mt-5 text-xs font-black uppercase tracking-widest text-[#a06a00]">
                  Clients
                </p>
                <h3 className="mt-2 text-xl font-extrabold">Across sectors</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Local governments, public enterprises, private enterprises,
                  NGOs and individuals.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-8 lg:px-8 mb-18">
        <Reveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[2rem] bg-ink p-8 text-white lg:p-12">
            <p className="text-xs font-black uppercase tracking-[.18em] text-gold">
              Where we are going
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              From Uganda to a wider African footprint.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              AGAMWE currently focuses mainly on Uganda and is seeking to expand
              its services across Sub-Saharan Africa.
            </p>
            <div className="mt-9 flex items-center gap-3 text-sm font-bold text-emerald-200">
              <Globe2 size={19} /> Uganda → Sub-Saharan Africa
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft lg:p-10">
            <p className="eyebrow">Why engage AGAMWE</p>
            <div className="mt-7 space-y-5">
              {[
                "Multi-sector consultancy capability",
                "Experience with public-sector and development assignments",
                "Evidence-led research and data work",
                "Sustainability at the centre of our service offer",
              ].map((x) => (
                <div key={x} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-forest"
                    size={20}
                  />
                  <p className="font-semibold text-slate-700">{x}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
