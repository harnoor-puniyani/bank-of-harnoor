// app/components/Testimonials.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="relative bg-[#030712] text-white py-24 sm:py-32">
      {/* Consistent background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#164e63_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-400">
            Trusted by Innovators
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Our commitment to security and transparency has made us the trusted partner for leaders in the tech industry.
          </p>
        </div>

        {/* Testimonial Card */}
        <motion.div
          className="relative max-w-4xl mx-auto bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Decorative Quote Icon */}
          <Quote className="absolute top-8 left-8 w-16 h-16 text-slate-800" strokeWidth={1} />

          {/* Quote Content */}
          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-light italic text-slate-300">
              "In an industry where security is paramount, Bank of Harmony doesn't just meet the standard—it sets a new one. Their transparent protocol and AI-driven threat analysis give us unparalleled peace of mind. It's the first financial platform that feels like it was built by engineers, for engineers."
            </p>
            
            {/* Author Information */}
            <div className="mt-8 flex items-center gap-4">
              <Image
                src="/avatar-placeholder.jpg" // Note: Add a placeholder image to your `public` folder
                alt="Alex Rivera"
                width={56}
                height={56}
                className="rounded-full border-2 border-slate-700"
              />
              <div>
                <p className="font-bold text-lg text-slate-100">Alex Rivera</p>
                <p className="text-sm text-cyan-400">CTO, Zenith Dynamics</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}