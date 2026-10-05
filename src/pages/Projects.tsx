import React from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  BadgeDollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data";
import { Reveal } from "../components/Reveal";

export function Projects() {
  return (
    <section className="scroll-mt-24 px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Selected experience</p>
          <h2 className="section-title max-w-4xl">
            Evidence of work across climate, data, waste and public-sector
            assignments.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Explore selected assignments documented in AGAMWE's company
            materials, including the NAMA Biogas MRV framework, SIRGE data
            uptake and Uganda's BUR2 review.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-60 overflow-hidden bg-mist">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-ink backdrop-blur">
                    {p.year}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-gold">
                      {p.client}
                    </p>
                    <h3 className="mt-2 text-xl font-black leading-tight">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-7 text-slate-600">
                    {p.description}
                  </p>
                  <div className="mt-5 grid gap-2 text-xs font-bold text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={14} className="text-forest" /> {p.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={14} className="text-forest" />{" "}
                      {p.year}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <BadgeDollarSign size={14} className="text-forest" />{" "}
                      Approx. {p.value}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-mist px-3 py-1.5 text-xs font-bold text-forest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-black text-forest hover:gap-3"
                  >
                    View case study <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
