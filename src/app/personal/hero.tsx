// app/components/PersonalHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export function PersonalHero() {
  return (
    <section className="relative bg-[#0A0F1A] text-white pt-16 pb-24 sm:pt-20 sm:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#164e63_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-400">
          Personal Banking, Evolved
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Secure, intelligent, and designed for your digital life. Discover the accounts and tools engineered to protect and grow your wealth.
        </p>
      </motion.div>
    </section>
  );
}