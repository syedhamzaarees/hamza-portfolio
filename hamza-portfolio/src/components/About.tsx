"use client";

import { motion } from "framer-motion";
import { personalInfo, coreCompetencies } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-eyebrow mb-4"
      >
        01 / About
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mb-14 font-display text-4xl font-bold sm:text-5xl"
      >
        Infrastructure with a{" "}
        <span className="gradient-text">security-first</span> mindset
      </motion.h2>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-10"
        >
          <p className="text-lg leading-8 text-muted">
            {personalInfo.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-8 sm:p-10"
        >
          <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-secondary">
            Core Competencies
          </h3>
          <ul className="space-y-3">
            {coreCompetencies.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
