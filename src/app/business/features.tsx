// app/components/BusinessFeatures.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Code, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automated Treasury Management",
    description: "Optimize your cash flow and liquidity with our AI-driven treasury tools, automating payments, and managing FX risk.",
  },
  {
    icon: Code,
    title: "Full Banking API Suite",
    description: "Embed our secure banking services directly into your own platforms and workflows for seamless financial operations.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics & Reporting",
    description: "Gain critical insights into your company's financial health with a fully customizable, real-time analytics dashboard.",
  },
];

export function BusinessFeatures() {
  return (
    <section className="bg-[#030712] text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-cyan-500 transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="mb-6">
                <feature.icon className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-100">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}