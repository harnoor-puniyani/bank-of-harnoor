// app/components/AccountTiers.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const tiers = [
  {
    name: "Quantum Core",
    description: "For seamless, everyday digital banking with foundational security.",
    features: ["AI Threat Monitoring", "Global Wallet Access", "24/7 Support Channel"],
    isPopular: false,
  },
  {
    name: "Zenith Plus",
    description: "Enhanced features for active investors and savers seeking growth.",
    features: ["All Core Features", "AI Financial Advisor", "Higher Yield Savings", "Priority Support"],
    isPopular: true,
  },
  {
    name: "Apex Private",
    description: "Exclusive services and dedicated management for private clients.",
    features: ["All Plus Features", "Dedicated Wealth Manager", "Exclusive Market Access", "Custom Security Protocols"],
    isPopular: false,
  },
];

export function AccountTiers() {
  return (
    <section className="bg-[#030712] text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm transition-all duration-300 ${tier.isPopular ? 'border-cyan-500 scale-105' : 'hover:border-slate-700'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tier.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-100">{tier.name}</h3>
              <p className="mt-2 text-slate-400">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full mt-8 font-bold py-3 rounded-full ${tier.isPopular ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                Open Account
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}