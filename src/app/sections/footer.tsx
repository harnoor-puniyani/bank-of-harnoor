// app/components/Footer.tsx
"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold text-white">Bank of Harnoor</h2>
            <p className="mt-2 text-sm">
              Engineering the future of secure digital finance.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-slate-200">Products</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Personal Accounts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Banking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Transfers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-200">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-200">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; 2025 Bank of Harnoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}