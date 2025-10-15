// app/components/RectangularVault.tsx
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function RectangularVault() {
  const { scrollYProgress } = useScroll();

  const animationRange = [0, 0.25];
  const lockWheelRotate = useTransform(scrollYProgress, animationRange, [0, 720]);
  const doorRotateY = useTransform(scrollYProgress, animationRange, [0, -110]);
  const doorTranslateX = useTransform(scrollYProgress, animationRange, [0, 20]);
  const innerGlowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Define the thickness of the door
  const doorThickness = 20; // 20px thickness

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-slate-900 perspective-1000">
      <div className="relative w-72 h-80">
        
        {/* Vault Body (Rectangular) */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-slate-800 rounded-xl border-4 border-slate-700 shadow-xl flex items-center justify-center"
        >
          <ShieldCheck className="text-slate-700/50" size={120} strokeWidth={1} />
          <motion.div
            style={{ opacity: innerGlowOpacity }}
            className="absolute inset-0 bg-gradient-radial from-amber-500/20 to-transparent rounded-xl filter blur-lg"
          />
        </div>

        {/* Vault Door - Now this is a CONTAINER for the actual door faces */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full transform-style-preserve-3d" // Crucial for nested 3D transforms
          style={{
            rotateY: doorRotateY,
            translateX: doorTranslateX,
            transformOrigin: "left center", // Hinge now at the left center for better thickness effect
            // We need to apply 'perspective' here as well, otherwise child elements won't see the 3D space
            perspective: '1000px'
          }}
        >
          {/* Front Face of the Vault Door */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl border-4 border-slate-600 shadow-2xl flex items-center justify-center backface-hidden" // backface-hidden prevents reversed content
            // Push the front face out by half the thickness
            style={{ transform: `translateZ(${doorThickness / 2}px)` }} 
          >
            {/* Rotating Lock Wheel Mechanism */}
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

          {/* Side (Thickness) of the Vault Door */}
          <div 
            className="absolute top-0 left-0 h-full bg-slate-600 border-r-2 border-slate-500 shadow-inner rounded-l-xl backface-hidden"
            // Set width to doorThickness, then rotate and translate it to form the side
            style={{ 
                width: `${doorThickness}px`,
                transform: `rotateY(90deg) translateZ(${doorThickness / 2}px)`
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}