"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Linkedin, Github, Send, Check, Loader2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const EMAILJS_SERVICE_ID = "service_nb351rf";
const EMAILJS_TEMPLATE_ID = "template_nyo8cdv";
const EMAILJS_PUBLIC_KEY = "YESmgTh6HUFG7Rd4u";

const contactLinks = [
  { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
  { icon: Github, label: "GitHub", href: personalInfo.github },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      e.currentTarget.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <p className="section-eyebrow mb-4">06 / Contact</p>
      <h2 className="mb-14 font-display text-4xl font-bold sm:text-5xl">
        Let&apos;s <span className="gradient-text">build</span> something
      </h2>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass flex flex-col gap-6 rounded-3xl p-8"
        >
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-sm text-muted transition-colors hover:text-secondary"
            >
              <span className="glass flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-line">
                <Icon size={18} />
              </span>
              {label}
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass flex flex-col gap-5 rounded-3xl p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              required
              name="name"
              type="text"
              placeholder="Your name"
              className="rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-secondary"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Your email"
              className="rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-secondary"
            />
          </div>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell me about the role or project..."
            className="rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-secondary"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary self-start disabled:opacity-60"
          >
            {status === "sending" && (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending...
              </>
            )}
            {status === "sent" && (
              <>
                <Check size={16} /> Sent — I'll reply soon
              </>
            )}
            {(status === "idle" || status === "error") && (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong — please email me directly at{" "}
              {personalInfo.email}.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
