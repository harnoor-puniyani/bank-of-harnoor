// app/components/Hero.tsx
"use client";

import React from "react";
// import { motion } from "framer-motion";
import { ShieldCheck, Lock, Fingerprint } from "lucide-react";
// import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { ShieldCheck, Lock } from "lucide-react";
import { RectangularVault } from "./vault";
import { RealisticVault } from "./shield";
// import { ThreeDVault } from "./testModel";


// Variants for staggering the text animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time delay between each child animating in
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl min-h-screen mx-auto p-8 gap-10">

        {/* Left Side: Content - Now with staggered animations */}
        <motion.div
          className="flex flex-col w-full gap-y-8 md:w-1/2 text-center md:text-left "
          variants={containerVariants} // Apply parent variants
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl text-amber-400 font-bold leading-tight"
            variants={itemVariants} // Apply child variants
          >
            Bank of Hanroor (BoH)
          </motion.h1>
          <motion.p
            className="text-lg text-slate-300"
            variants={itemVariants} // Apply child variants
          >
            Welcome to a new era of digital banking. At BoH, your security is our priority. We leverage cutting-edge technology to ensure your transactions are safe, your data is private, and your peace of mind is guaranteed.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants} // Apply child variants
          >
            {/* NEW: Buttons are now motion components with hover/tap effects */}
            <motion.button
              className="bg-amber-400 text-slate-900 font-bold rounded-full px-6 py-3 transition-colors duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "#FBBF24" }}
              whileTap={{ scale: 0.95 }}
            >
              Open Secure Account
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-slate-600 text-slate-300 font-bold rounded-full px-6 py-3 transition-colors duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "#1E293B" }}
              whileTap={{ scale: 0.95 }}
            >
              Log In
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center p-8 w-full"
        >
           {/* <div className="h-[20vh]" />  */}
      <div className="items-center w-full right-10 flex">
        {/* <ThreeDVault/> */}
      </div>
            
       {/* This empty div also adds scrollable space */}
         {/* <div className="h-[10vh]" /> */}

        </motion.div>
      </div>
    </section>
  );
}

// app/components/Hero.tsx
// app/components/Hero.tsx
// "use client";

// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ShieldCheck, Lock } from "lucide-react";
// import { RectangularVault } from "./vault";
// import { RealisticVault } from "./shield";
// import { ThreeDVault } from "./testModel";
// import {ThreeDVault} from "./testModelv2"

// Variants for staggering the text animation
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// export function Hero() {
//   return(
//     <main>
//       {/* This empty div makes the page scrollable so the animation can trigger */}
//       <div className="h-[20vh] bg-slate-900" /> 
      
//       <ThreeDVault />
      
//       {/* This empty div also adds scrollable space */}
//       <div className="h-[10vh] bg-slate-900" />
//     </main>
//   )
// }
