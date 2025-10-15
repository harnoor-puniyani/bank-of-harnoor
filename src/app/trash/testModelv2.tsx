// app/components/ThreeDVault.tsx
"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import { MathUtils } from 'three';

function Model() {
  const { scene } = useGLTF('/models/simple_safe.glb'); 
  const { scrollYProgress } = useScroll();
  const doorRef = useRef<any>(null);

  useFrame((state, delta) => { // 'delta' is the time since the last frame
    if (!doorRef.current) {
      const doorNode = scene.getObjectByName('Safe1_Door');
      if (doorNode) {
        doorRef.current = doorNode;
      }
    }
    
    if (doorRef.current) {
      // Calculate the rotation we WANT to be at based on the scroll
      const targetRotation = MathUtils.lerp(-0.5, -1.57, scrollYProgress.get());

      // ## CHANGE 1: SMOOTHER ANIMATION ##
      // Instead of instantly setting the rotation, we'll smoothly move the current rotation
      // towards the target rotation. The 'delta * 5' controls the smoothing speed.
      doorRef.current.rotation.z = MathUtils.lerp(
        doorRef.current.rotation.z, 
        targetRotation, 
        delta * 5 
      );
    }
  });

  return <primitive object={scene} />;
}

export function ThreeDVault() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [-20, 40, 100], fov: 60 }}>
        {/* Adds a more neutral, professional lighting environment */}
        <Environment preset="studio" />

        {/* Adds some basic lights for highlights */}
        <ambientLight intensity={0.3} />
        {/* A key light from the front-right */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* A subtle fill light from the top */}
        <directionalLight position={[0, 10, 0]} intensity={0.3} />
        {/* A rim light from the back-left to create highlights on the edges */}
        <spotLight position={[-10, 10, -15]} intensity={0.5} angle={0.3} penumbra={1} />
        
        <Model />

        {/* Kept for testing, but you might want to disable it for the final version */}
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
    </div>
  );
}