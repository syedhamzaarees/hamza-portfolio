"use client";

import { TypeAnimation } from "react-type-animation";

export default function Terminal() {
  return (
    <div className="glass w-full max-w-md rounded-2xl border border-line shadow-glow">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 font-mono text-xs text-muted">
          hamza@infra:~
        </span>
      </div>

      <div className="min-h-[220px] px-5 py-5 font-mono text-sm leading-7 text-ink">
        <p className="text-accent">$ whoami</p>
        <TypeAnimation
          sequence={[
            600,
            "syed-hamza-arees\n> role: devops / devsecops engineer\n> focus: linux · aws · ci-cd · zero-trust\n> status: open to work",
            2000,
          ]}
          speed={70}
          cursor
          style={{ whiteSpace: "pre-line", display: "block" }}
          repeat={0}
        />
      </div>
    </div>
  );
}
