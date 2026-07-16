import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#030712",
        surface: "#0B1220",
        card: "#0F172A",
        primary: "#3B82F6",
        secondary: "#22D3EE",
        accent: "#10B981",
        ink: "#E5E9F0",
        muted: "#8B96A8",
        line: "rgba(148,163,184,0.14)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.25)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.25)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "scale(1) rotate(0deg) translate(0,0)" },
          "100%": { transform: "scale(1.15) rotate(8deg) translate(20px,-10px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        aurora: "aurora 22s ease-in-out infinite alternate",
        blink: "blink 1s step-start infinite",
        "fade-up": "fade-up 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
