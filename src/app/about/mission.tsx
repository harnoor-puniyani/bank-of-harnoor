// app/components/OurMission.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Combine } from "lucide-react";

export function OurMission() {
  return (
    <section className="bg-[#030712] text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Philosophy</h2>
            <p className="text-slate-400 mb-4">
              We are a team of engineers, cryptographers, and financial experts who believe that traditional banking has not kept pace with technology. The financial system should not be a black box.
            </p>
            <p className="text-slate-400">
              Our mission is to build a financial institution on a foundation of verifiable security and radical transparency. By leveraging AI-driven threat analysis and decentralized ledger technology, we provide a banking experience that is not only safer but also smarter and more efficient.
            </p>
          </motion.div>

          {/* Right Side: Visual Element */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute w-full h-full bg-slate-900 rounded-full opacity-50" />
              <div className="absolute w-3/4 h-3/4 bg-slate-800 rounded-full opacity-70" />
              <Combine className="relative w-24 h-24 text-cyan-400" strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}