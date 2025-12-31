// app/components/ThreeDVault.tsx
"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { useScroll } from "framer-motion";
import { MathUtils, Object3D } from "three";
import { Scale } from "lucide-react";

// This component loads and controls the 3D model
function Model() {
  // This line assumes your model is named 'vault.glb' and is in the 'public' folder.
  const { scene } = useGLTF("/models/simple_safe.glb");
  const { scrollYProgress } = useScroll();

  // This reference will hold the door part of the model once we find it.
  const doorRef = useRef<Object3D>(null);

  // This useFrame hook runs 60 times per second, creating the animation.
  useFrame(() => {
    // If we haven't found the door yet, try to find it.
    if (!doorRef.current) {
      // ##################################################################
      // ## THIS IS THE LINE YOU MUST CHANGE                             ##
      // ##################################################################
      const doorNode = scene.getObjectByName("Safe1_Door"); // <-- EDIT THIS NAME //objexct_8

      if (doorNode) {
        console.log("Found the door:", doorNode.name); // A log to confirm it works
        doorRef.current = doorNode;
      }
    }

    // If we have found the door, animate its rotation based on scroll progress.
    if (doorRef.current) {
      // Maps the scroll value (0 to 1) to a rotation angle (0 to -120 degrees).
      const targetRotation = MathUtils.lerp(-0.5, -1.57, scrollYProgress.get());
      doorRef.current.rotation.z = targetRotation;
    }
  });

  // 'primitive' renders the entire 3D model scene.
  return <primitive object={scene} />;
}

export function ThreeDVault() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [-20, 80, 140], fov: 50, scale: 10 }}>
        {/* Adds realistic lighting to the scene. */}
        <Environment preset="city" />


        {/* Adds some basic lights. */}
        <ambientLight intensity={1} />
        <directionalLight position={[-10, 1, 10]} intensity={1} />

        {/* Renders our 3D model component. */}
        <Model />

        {/* Allows you to drag and rotate the model with your mouse (for testing). */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
