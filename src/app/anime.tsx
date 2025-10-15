"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const tokens = ["$", "₿", "€", "£", "¥", "Ξ"];

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start","end start"] });
  // Orbit plane tilts as you leave hero
  const tiltX = useTransform(scrollYProgress, [0, 1], ["0deg", "55deg"]);
  const tiltY = useTransform(scrollYProgress, [0, 1], ["0deg", "-25deg"]);
  const sphereScale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

  const [paused, setPaused] = useState(false);

  return (
    <section ref={ref} className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid opacity-[0.18]" />
      <div className="absolute inset-0 bg-radial from-primary/20 via-background to-background" />
      {/* Glow */}
      <div className="absolute -z-10 w-[40rem] h-[40rem] rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />

      <motion.div
        style={{ perspective: 1600, scale: sphereScale }}
        className="relative w-full max-w-4xl flex flex-col items-center gap-10 px-6"
      >
        <div className="text-center space-y-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-primary to-primary/60 text-transparent bg-clip-text"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Bank of Harmony
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Unified traditional & digital assets. Real‑time FX, intelligent allocation, seamless yield.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Button size="lg">Open Account</Button>
            <Button size="lg" variant="outline">View Dashboard</Button>
          </motion.div>
        </div>

        {/* Orbit construct */}
        <motion.div
            className="relative w-[380px] h-[380px] select-none"
            style={{ rotateX: tiltX, rotateY: tiltY }}
          >
          {/* Core sphere */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-primary/10 to-background border border-primary/20 shadow-[0_0_80px_-10px_hsl(var(--primary))] backdrop-blur-md flex items-center justify-center">
            <motion.span
              className="text-4xl font-semibold text-primary"
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              BoH
            </motion.span>
          </div>

          {/* Orbit ring */}
          <motion.ul
            className="absolute inset-0 list-none m-0 p-0"
            animate={ paused ? { } : { rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 26 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {tokens.map((t, i) => {
              const angle = (i / tokens.length) * Math.PI * 2;
              const radius = 170;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.li
                  key={t}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-xl w-14 h-14 rounded-full flex items-center justify-center shadow-inner bg-background/70 backdrop-blur border border-primary/30"
                  style={{ x, y }}
                  whileHover={{ scale: 1.2, rotateY: 15 }}
                >
                  {t}
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Floating KPI cards */}
          <FloatingCard styleClass="left-[-6rem] top-[45%]" label="APY" value="4.8%" />
          <FloatingCard styleClass="right-[-6rem] top-[25%]" label="FX USD/EUR" value="0.93" />
          <FloatingCard styleClass="right-[-5rem] bottom-[10%]" label="Crypto Mix" value="32%" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 text-xs text-muted-foreground">Scroll to explore allocations ↓</div>
    </section>
  );
}

function FloatingCard({ label, value, styleClass }: { label: string; value: string; styleClass: string }) {
  return (
    <motion.div
      className={`absolute ${styleClass} w-32 rounded-xl border border-primary/30 bg-background/60 backdrop-blur px-3 py-2 flex flex-col gap-0.5 text-xs`}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    >
      <span className="text-muted-foreground">{label}</span>
      <span className="text-primary font-semibold">{value}</span>
    </motion.div>
  );
}