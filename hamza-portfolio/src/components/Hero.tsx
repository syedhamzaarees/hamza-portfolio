"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ArrowDown, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo, roles } from "@/data/portfolio";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow mb-5">Hi, I&apos;m</p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Syed Hamza
            <br />
            <span className="gradient-text">Arees</span>
          </h1>

          <div className="mt-6 h-10 font-mono text-xl text-secondary sm:text-2xl">
            <TypeAnimation
              sequence={roles.flatMap((r) => [r, 1800])}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-xl text-lg text-muted">
            {personalInfo.heroTagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download Resume
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="btn-secondary"
            >
              <Phone size={16} />
              Call Me
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ borderColor: "rgba(37,211,102,0.35)", color: "#25D366" }}
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-secondary"
            >
              <Github size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-secondary"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-muted transition-colors hover:text-secondary"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] border border-line p-2">
              <Image
                src="/profile.jpg"
                width={420}
                height={500}
                alt="Portrait of Syed Hamza Arees"
                className="rounded-[1.6rem] object-cover"
                priority
              />
            </div>
          </div>

          <Terminal />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted sm:flex"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
