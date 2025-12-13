import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-[#1e3a5f] to-[#0f1f3d] shadow-lg z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/image/leadoctave-logo.png" alt="LeadOctave" className="h-12 md:h-14" />
        </div>
        <nav className="flex gap-8 items-center">
          <a href="/services" className="text-sm text-white hover:text-[#d4a574] transition">Services</a>
          <a href="/project" className="text-sm text-white hover:text-[#d4a574] transition">Project</a>
          <a href="/pricing" className="text-sm text-white hover:text-[#d4a574] transition">Pricing</a>
          <a href="/career" className="text-sm text-white hover:text-[#d4a574] transition">Career</a>
          <a href="/about" className="text-sm text-white hover:text-[#d4a574] transition">About</a>
          <a href="/contact" className="text-sm text-white hover:text-[#d4a574] transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
