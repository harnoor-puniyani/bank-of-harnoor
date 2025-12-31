// app/components/Features.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, Globe } from "lucide-react";



// Define the type for a single feature
type IconProps = {
    className?: string;
  };

type Feature = {
  icon: React.ElementType<IconProps>;
  title: string;
  description: string;
};



// An array of our features with high-tech descriptions
const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Quantum-Resistant Encryption",
    description:
      "Your data is secured with next-generation cryptographic algorithms designed to withstand future threats.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Threat Analysis",
    description:
      "Our system proactively monitors for anomalies, neutralizing potential security risks before they can impact you.",
  },
  {
    icon: Globe,
    title: "Decentralized Global Ledger",
    description:
      "Experience unmatched transaction integrity and transparency on a secure, distributed network accessible worldwide.",
  },
];

// Animation variants for the container to orchestrate the card animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will animate each card 0.2s after the previous one
    },
  },
};

// Animation variants for each individual feature card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  return (
    <section className="relative bg-[#030712] text-white py-24 sm:py-32">
      {/* Subtle background grid to continue the theme */}
      <div className="absolute inset-0 bg-[radial-gradient(#164e63_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-400">
            A New Paradigm of Security
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            {"We've engineered our platform from the ground up to provide institutional-grade security for every user."}
          </p>
        </div>

        {/* Features Grid Container with Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Triggers animation when the element enters the viewport
          viewport={{ once: true, amount: 0.2 }} // Animation runs once, triggers at 20% visibility
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-cyan-500 transition-colors duration-300"
              variants={cardVariants}
            >
              <div className="mb-6">
                <feature.icon className="w-10 h-10 text-cyan-40"/>
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