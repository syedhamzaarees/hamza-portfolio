"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-28">
      <p className="section-eyebrow mb-4">02 / Stack</p>
      <h2 className="mb-14 font-display text-4xl font-bold sm:text-5xl">
        Tools I run in <span className="gradient-text">production</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-secondary">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-secondary/60 hover:text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
