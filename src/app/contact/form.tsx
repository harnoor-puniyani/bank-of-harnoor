// app/components/ContactForm.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <section className="relative bg-[#0A0F1A] text-white py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#164e63_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      
      <div className="relative max-w-2xl mx-auto px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-400">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Have a question or a proposal? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()} // Prevents actual form submission for this demo
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full bg-slate-900/50 border border-slate-800 rounded-md py-3 px-4 text-white placeholder-slate-500 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Alex Rivera"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full bg-slate-900/50 border border-slate-800 rounded-md py-3 px-4 text-white placeholder-slate-500 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full bg-slate-900/50 border border-slate-800 rounded-md py-3 px-4 text-white placeholder-slate-500 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-cyan-500 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}