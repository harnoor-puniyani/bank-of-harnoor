"use client";
import React,{useEffect,useRef} from "react";
import { motion ,useScroll} from "framer-motion";
import { useGLTF, Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { ThreeDVault } from "./testModel";
import { section } from "framer-motion/client";
import { MathUtils, Color, Mesh } from 'three'; 
import { ChevronDown } from 'lucide-react';
import { Navbar } from "@/components/navbar";
export function LandingZonw() {
  return (
    <section
      className="flex items-center min-h-screen bg-background max-w-7xl"
      id="heroo"
    >
      <motion.div
        className=" text-primary flex flex-col items-center *:mx-auto my-5 *:m-1 *:text-center *:p-2"
        initial={{ opacity: 0.1, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "backIn", duration: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-foreground">
          {" "}
          Bank of Harmony (BoH)
        </h1>
        <p className="flex-inline text-lg">
          Welcome to a new era of digital banking. At BoH, your security is our
          priority. We leverage cutting-edge technology to ensure your
          transactions are safe, your data is private, and your peace of mind is
          guaranteed.
        </p>
      </motion.div>
      <motion.div className="flex items-center w-2/3 justify-center m-auto relative right-1 mr-0 top-0 sticky ">
        <ThreeDVault />
      </motion.div>
    </section>
  );
}

export function SecuritySection() {
  return (
    <section
      className="flex min-h-screen items-center bg-background text-primary *:text-center"
      id="secs"
    >
      <motion.div className="flex flex-col w-full gap-2">
        <h1 className="text-4xl font-bold text-foreground">Security</h1>
        <div className="flex flex-row mx-auto">
          <div className="h-[10vh]">
            {/* <ThreeDVault /> */}
            <p className="p-10 flex-inline text-left">
              lets talk about the security of the bank, we not only accept the
              raw cash or the liquid money, but we also help keep secure in the
              bonds stocks etc. How do we exactly do that - Yes you allegedly
              transfer all your assets under the name of the bank. And we give
              you equivalent share of the bank and as the shareholder, your
              assets will be only sanctioned from you. Note that if someone
              misues or you yourself trusted asset movement could not blame the
              bank in any scenario.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// app/components/TransparentSecurityHero.tsx

// --- Helper Component for the Circuit Background ---
function CircuitBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#00BFFF" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}


// --- 3D Model Component ---
function Model() {
  const { scene } = useGLTF('/models/simple_safe.glb'); 
  const { scrollYProgress } = useScroll();
  const doorRef = useRef<any>(null);

  useEffect(() => {
    const newColor = new Color("#111827"); // A very dark, near-black color
    scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.material.color = newColor;
        object.material.metalness = 0.8;
        object.material.roughness = 0.3;
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (!doorRef.current) {
      const doorNode = scene.getObjectByName('Safe1_Door');
      if (doorNode) doorRef.current = doorNode;
    }
    if (doorRef.current) {
      const targetRotation = MathUtils.lerp(-0.5, -1.57, scrollYProgress.get());
      doorRef.current.rotation.z = MathUtils.lerp(
        doorRef.current.rotation.z, targetRotation, delta * 5
      );
    }
  });

  return <primitive object={scene} />;
}


// --- Main Hero Component ---
export function TransparentSecurityHero() {
  return (
    <section className="relative w-full h-screen bg-[#0A0F1A] text-white overflow-hidden sticky top-0">
      {/* Layer 1: Circuit Background */}
      <CircuitBackground />

      {/* Layer 2: 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 10, 80], fov: 45 }}>
          <Environment preset="night" />
          <ambientLight intensity={0.2} />
          {/* ## NEW: The Blue Glow from Inside the Vault ## */}
          <pointLight color="#00BFFF" position={[0, 0, 15]} intensity={5} distance={100} />
          <Model />
        </Canvas>
      </div>
      
      {/* Layer 3: UI Overlay */}
      <div className="relative z-20 w-full h-full flex flex-col max-w-7xl mx-auto px-8 py-6">
        {/* Navbar */}
        <Navbar />
        {/* <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold">BoH of Harmony</h1>
          <div className="hidden md:flex items-center gap-6 text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Personal</a>
            <a href="#" className="hover:text-white transition-colors">Business</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </nav> */}
        
        {/* Main Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-wider uppercase">
              Transparent
              <br />
              Security
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Bank of Harmony: Future-Proofing
              <br/>
              Your Digital Finances.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Prompt */}
        <motion.div 
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-xs font-semibold tracking-widest text-slate-400">SCROLL TO LOCK IN PROTECTION</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
