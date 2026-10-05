import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY_HERE");
  }, []);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          formRef.current,
          "YOUR_PUBLIC_KEY_HERE",
        );
        setSubmitStatus("success");
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
          ref={formRef}
          onSubmit={submit}
          className="rounded-[2rem] bg-white p-7 shadow-soft lg:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field">
              <span>Name</span>
              <input name="user_name" required placeholder="Your name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                name="user_email"
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
            disabled={isSubmitting}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 font-bold text-white transition hover:bg-[#3d7025] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send enquiry"} <Send size={17} />
          </button>

          {submitStatus === "success" && (
            <div className="mt-4 p-4 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-3">
              <CheckCircle className="text-emerald-600" size={20} />
              <p className="text-sm font-semibold text-emerald-700">
                Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3">
              <AlertCircle className="text-red-600" size={20} />
              <p className="text-sm font-semibold text-red-700">
                Something went wrong. Please try again or email us directly.
              </p>
            </div>
          )}

          <p className="mt-3 text-xs text-slate-400">
            Enquiries are routed to agamweholdings2@gmail.com.
          </p>
        </form>
      </Reveal>
    </section>
  );
}
