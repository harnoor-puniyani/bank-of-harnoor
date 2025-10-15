// app/components/RealisticVault.tsx
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function RealisticVault() {
  const { scrollYProgress } = useScroll();

  const animationRange = [0, 0.25];
  const lockWheelRotate = useTransform(scrollYProgress, animationRange, [0, 720]);
  const doorRotateY = useTransform(scrollYProgress, animationRange, [0, -110]);
  const doorTranslateX = useTransform(scrollYProgress, animationRange, [0, 20]);
  const innerGlowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // ## CHANGE 1: Increased door thickness for a heavier look ##
  const doorThickness = 40; // Was 20, now it's much thicker

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-slate-900 perspective-1000">
      {/* Container for the entire vault including the base */}
      <div 
        className="relative w-72 h-96" // Taller to accommodate the base
        style={{ transform: "rotateY(-15deg) rotateX(10deg)" }}
      >
        {/* Main Vault Box (positioned at the top) */}
        <div className="relative w-full h-[75%]">
            {/* Vault Body */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-800 rounded-xl border-4 border-slate-700 flex items-center justify-center">
              {/* ## CHANGE 2: Creating the Inset Interior ## */}
              <div className="absolute inset-2 bg-slate-900 rounded-md flex items-center justify-center">
                <ShieldCheck className="text-slate-700/50" size={100} strokeWidth={1} />
                <motion.div
                    style={{ opacity: innerGlowOpacity }}
                    className="absolute inset-0 bg-gradient-radial from-amber-500/20 to-transparent rounded-md filter blur-lg"
                />
              </div>
            </div>

            {/* Vault Door Container */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full transform-style-preserve-3d"
              style={{
                rotateY: doorRotateY,
                translateX: doorTranslateX,
                transformOrigin: "left center",
                perspective: '1000px'
              }}
            >
              {/* Door Front Face */}
              <div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl border-4 border-slate-600 flex items-center justify-center backface-hidden"
                style={{ transform: `translateZ(${doorThickness / 2}px)` }} 
              >
                <motion.div 
                  className="relative w-32 h-32 flex items-center justify-center"
                  style={{ rotate: lockWheelRotate }}
                >
                  <div className="absolute w-full h-full bg-slate-500 rounded-full shadow-inner border-2 border-slate-600" />
                  <div className="absolute w-2 h-10 bg-slate-600 rounded-full top-[-15px]" />
                  <div className="absolute w-2 h-10 bg-slate-600 rounded-full bottom-[-15px]" />
                  <div className="absolute w-10 h-2 bg-slate-600 rounded-full left-[-15px]" />
                  <div className="absolute w-10 h-2 bg-slate-600 rounded-full right-[-15px]" />
                  <div className="absolute w-8 h-8 bg-slate-800 rounded-full border-2 border-amber-400" />
                </motion.div>
              </div>

              {/* Door Side (Thickness) */}
              <div 
                className="absolute top-0 left-0 h-full bg-slate-600 border-r-2 border-slate-500 shadow-inner rounded-l-xl backface-hidden"
                style={{ 
                    width: `${doorThickness}px`,
                    transform: `rotateY(90deg) translateZ(${doorThickness / 2}px)`
                }}
              />
            </motion.div>
        </div>
        
        {/* ## CHANGE 3: The Solid Base ## */}
        <div className="absolute bottom-0 left-[-5%] w-[110%] h-[25%] bg-slate-800 rounded-lg border-2 border-slate-700 shadow-lg"/>
      </div>
    </section>
  );
}