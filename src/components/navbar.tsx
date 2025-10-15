// app/components/Navbar.tsx
"use client";

import React from "react";
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="relative z-50 w-full max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
      <Link href="/" className="text-xl font-bold">BoH of Harmony</Link>
      <div className="hidden md:flex items-center gap-6 text-slate-300">
        <Link href="/personal" className="hover:text-white transition-colors">Personal</Link>
        <Link href="/business" className="hover:text-white transition-colors">Business</Link>
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
    </nav>
  );
}