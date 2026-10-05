import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { teamMembers } from "../data";
import { Reveal } from "../components/Reveal";

export function Team() {
  return (
    <section className="scroll-mt-24 px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Project team</p>
          <h2 className="section-title max-w-4xl">
            A multidisciplinary team built for complex development assignments.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            The updated company information identifies professionals across
            management, programme delivery, business development, IT, quantity
            surveying, statistics, natural resources, MRV and civil engineering.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 60}>
              <article className="group h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-[#79ad45] text-xl font-black text-white shadow-lg shadow-forest/20 transition duration-500 group-hover:rotate-3 group-hover:scale-105">
                  {member.initials}
                </div>
                <h3 className="mt-6 text-lg font-extrabold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-bold leading-6 text-forest">
                  {member.title}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-[2rem] bg-ink p-8 text-white lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[.2em] text-gold">
                  Team capability
                </p>
                <h3 className="mt-4 text-3xl font-black sm:text-4xl">
                  Technical depth that connects evidence to implementation.
                </h3>
                <p className="mt-5 leading-7 text-slate-300">
                  AGAMWE's team combines economic, environmental, programme
                  management, data, engineering and business development
                  perspectives.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-extrabold text-ink transition hover:-translate-y-1"
              >
                Work with the team <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
