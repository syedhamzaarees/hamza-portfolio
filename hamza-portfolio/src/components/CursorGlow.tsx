"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!pos) return null;

  return (
    <div
      style={{ left: pos.x - 180, top: pos.y - 180 }}
      className="pointer-events-none fixed z-0 hidden h-[360px] w-[360px] rounded-full bg-primary/10 blur-[110px] transition-transform duration-200 ease-out md:block"
      aria-hidden="true"
    />
  );
}
