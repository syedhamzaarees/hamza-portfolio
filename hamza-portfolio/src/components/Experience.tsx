"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-28">
      <p className="section-eyebrow mb-4">03 / Experience</p>
      <h2 className="mb-16 font-display text-4xl font-bold sm:text-5xl">
        Where I&apos;ve <span className="gradient-text">shipped</span> work
      </h2>

      <div className="relative border-l border-line pl-10">
        {experience.map((job, i) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative mb-14 last:mb-0"
          >
            <span className="absolute -left-[45px] top-1.5 h-4 w-4 rounded-full border-4 border-bg bg-secondary shadow-glow-cyan" />

            <div className="glass rounded-3xl p-8">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-semibold">
                  {job.title}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {job.duration}
                </span>
              </div>
              <p className="mb-5 text-sm text-secondary">{job.company}</p>
              <ul className="space-y-2.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span className="mt-1 text-accent">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
