import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  CalendarDays,
  BadgeDollarSign,
} from "lucide-react";
import { projects } from "../data";
import { Reveal } from "../components/Reveal";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="px-5 py-8 text-center">
        <h1 className="text-4xl font-black">Project not found</h1>
        <Link
          to="/projects"
          className="mt-5 inline-block font-bold text-forest"
        >
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-forest"
        >
          <ArrowLeft size={16} /> All projects
        </Link>
        <Reveal className="mt-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-ink text-white">
            <div className="grid lg:grid-cols-[1fr_.85fr]">
              <div className="p-8 lg:p-12">
                <p className="text-xs font-black uppercase tracking-[.2em] text-gold">
                  {project.client}
                </p>
                <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div>
                    <CalendarDays size={17} className="text-gold" />
                    <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                      Period
                    </p>
                    <p className="font-bold">{project.year}</p>
                  </div>
                  <div>
                    <MapPin size={17} className="text-gold" />
                    <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                      Location
                    </p>
                    <p className="font-bold">{project.location}</p>
                  </div>
                  <div>
                    <BadgeDollarSign size={17} className="text-gold" />
                    <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                      Value
                    </p>
                    <p className="font-bold">{project.value}</p>
                  </div>
                </div>
              </div>
              <div className="min-h-[360px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal>
            <p className="eyebrow">Assignment deliverables</p>
            <h2 className="mt-3 text-3xl font-black">
              What the engagement covered
            </h2>
            <div className="mt-7 space-y-4">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-forest"
                    size={20}
                  />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-mist p-8">
              <p className="eyebrow">Related capabilities</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-4 py-2 text-sm font-bold text-forest shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-7 text-sm leading-7 text-slate-600">
                This case study is presented from the information supplied in
                AGAMWE's company materials. Detailed outcomes are shown only
                where documented.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex rounded-full bg-forest px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
              >
                Discuss a similar assignment
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
