"use client";

import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';

export default function HomePages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#103766] to-[#288cfa] text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            className="w-8 h-8 rounded-full bg-[#2E865F] shadow-lg"
          />
          <h1 className="text-xl font-bold">Bank of Harnoor</h1>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm">
          <a href="#" className="hover:text-[#C6F4D6]">Personal</a>
          <a href="#" className="hover:text-[#C6F4D6]">Business</a>
          <a href="#" className="hover:text-[#C6F4D6]">PFM Tools</a>
          <a href="#" className="hover:text-[#C6F4D6]">Security</a>
        </nav>
        <div className="space-x-3">
          <Button variant="outline">Login</Button>
          <Button variant="default" className="bg-[#2E865F] hover:bg-[#38a169]">Sign Up</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Your Finances. Simplified. Secure. Smart.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl opacity-90 mb-10"
        >
          Experience the next generation of digital banking — built with trust, innovation, and your growth in mind.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-x-4"
        >
          <button className="bg-[#2E865F] px-6 py-3 rounded-full font-semibold text-white shadow-md hover:scale-105 transition">
            Open an Account
          </button>
          <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#103766] transition">
            Explore Features
          </button>
        </motion.div>

        {/* Animated Scene */}
        <div className="relative mt-16 w-full h-64 md:h-80 flex justify-center items-end overflow-hidden">
          {/* Building Animation */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="relative w-40 h-56 bg-white rounded-t-xl shadow-2xl flex flex-col justify-end p-4"
          >
            <div className="absolute inset-x-0 top-0 h-6 bg-[#2E865F] rounded-t-xl"></div>
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Animated Coin */}
          <motion.div
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: [0, -40, 0], opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatType: 'mirror' }}
            className="absolute right-1/3 bottom-12 w-16 h-16 bg-yellow-400 rounded-full shadow-lg border-4 border-yellow-300"
          >
            <div className="flex items-center justify-center h-full text-[#103766] font-bold text-lg">₹</div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-[#0A1929]">
        <p>© 2025 Bank of Harnoor. Built with security and innovation on Microsoft Azure.</p>
      </footer>
    </div>
  );
}
