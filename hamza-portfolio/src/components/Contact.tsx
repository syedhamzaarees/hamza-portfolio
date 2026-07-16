"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, Check } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const contactLinks = [
  { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
  { icon: Github, label: "GitHub", href: personalInfo.github },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  // NOTE: wire this up to EmailJS (or any form backend) before going live.
  // See README.md — "Connecting the contact form" for the 3-step setup.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
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
              type="text"
              placeholder="Your name"
              className="rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-secondary"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              className="rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-secondary"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="Tell me about the role or project..."
            className="rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-secondary"
          />
          <button type="submit" className="btn-primary self-start">
            {status === "sent" ? (
              <>
                <Check size={16} /> Sent
              </>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
