// app/components/BusinessHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export function BusinessHero() {
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
          Financial Architecture for Business
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Powering your enterprise with secure, scalable, and intelligent financial solutions. Integrate our powerful banking API and manage your corporate assets with unparalleled confidence.
        </p>
      </motion.div>
    </section>
  );
}