import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Website enquiry from ${data.get("name") || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nOrganisation: ${data.get("organisation") || "Not provided"}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:agamweholdings2@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="animate-page scroll-mt-24 border-t bg-slate-50 px-5 py-8 lg:px-8">
      <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Let's work together</p>
          <h2 className="section-title">Start a conversation.</h2>
          <p className="mt-5 max-w-xl leading-7 text-slate-600">
            Tell us what you are working on and where you need technical
            support.
          </p>
          <div className="mt-9 space-y-5">
            <a
              href="mailto:agamweholdings2@gmail.com"
              className="flex items-center gap-4"
            >
              <span className="rounded-xl bg-white p-3 text-forest shadow-sm">
                <Mail size={19} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email
                </span>
                <span className="font-semibold">agamweholdings2@gmail.com</span>
              </span>
            </a>
            <a href="tel:+256776004552" className="flex items-center gap-4">
              <span className="rounded-xl bg-white p-3 text-forest shadow-sm">
                <Phone size={19} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Phone
                </span>
                <span className="font-semibold">
                  +256 776 004 552 / +256 782 920 714
                </span>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="rounded-xl bg-white p-3 text-forest shadow-sm">
                <MapPin size={19} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Office
                </span>
                <span className="font-semibold">
                  Plot 40, Bunyoyi Drive, Bugolobi, Kampala, Uganda
                </span>
              </span>
            </div>
          </div>
        </div>
        <form
          onSubmit={submit}
          className="rounded-[2rem] bg-white p-7 shadow-soft lg:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field">
              <span>Name</span>
              <input name="name" required placeholder="Your name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                name="email"
                required
                type="email"
                placeholder="you@organisation.com"
              />
            </label>
          </div>
          <label className="field mt-5">
            <span>Organisation</span>
            <input
              name="organisation"
              placeholder="Organisation / institution"
            />
          </label>
          <label className="field mt-5">
            <span>Message</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us briefly about your project or requirement..."
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 font-bold text-white transition hover:bg-[#3d7025]"
          >
            Send enquiry <Send size={17} />
          </button>
          {sent && (
            <p className="mt-3 text-sm font-semibold text-forest">
              Your email client should open with the enquiry ready to send.
            </p>
          )}
          <p className="mt-3 text-xs text-slate-400">
            Enquiries are routed to agamweholdings2@gmail.com.
          </p>
        </form>
      </Reveal>
    </section>
  );
}
