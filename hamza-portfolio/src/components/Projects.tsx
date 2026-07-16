"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <p className="section-eyebrow mb-4">04 / Projects</p>
      <h2 className="mb-16 font-display text-4xl font-bold sm:text-5xl">
        Selected <span className="gradient-text">work</span>
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="glass group flex flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">
              {project.type}
            </span>

            <h3 className="mt-3 font-display text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-4 flex-1 text-sm leading-6 text-muted">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-3 py-1 text-xs text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
