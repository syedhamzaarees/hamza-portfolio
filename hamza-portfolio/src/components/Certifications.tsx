"use client";

import { motion } from "framer-motion";
import { certifications, education } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-7xl px-6 py-28">
      <p className="section-eyebrow mb-4">05 / Education</p>
      <h2 className="mb-14 font-display text-4xl font-bold sm:text-5xl">
        Education &amp; <span className="gradient-text">certifications</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="font-display text-lg font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-secondary">{item.issuer}</p>
            <p className="mt-1 text-xs text-muted">{item.year}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted">
        {education.degree} — {education.institution}, {education.year}
      </p>
    </section>
  );
}
