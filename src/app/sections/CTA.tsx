// app/components/CTA.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative bg-[#030712] py-24 sm:py-32">
      {/* This creates a soft glowing effect from the top */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-900 to-transparent opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-400">
            Ready to Secure Your Future?
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Join the new era of digital finance. Open an account with Bank of Harnoor and experience the pinnacle of security and transparency in just a few minutes.
          </p>
          
          {/* Call to Action Button */}
          <div className="mt-10">
            <motion.button 
              className="bg-cyan-500 text-black font-bold rounded-full px-8 py-4 text-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Initiate Secure Onboarding
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}