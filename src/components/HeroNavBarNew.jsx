import React, { useState } from 'react';

export default function HeroNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-gradient-to-br from-gray-900 to-gray-950"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=60')`,
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Fixed Navigation Bar - LeadOctave Colors */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">◎</span>
            </div>
            <div className="flex flex-col">
              <span className="text-amber-700 font-bold text-lg tracking-tight">LeadOctave</span>
              <span className="text-slate-600 text-xs font-semibold tracking-wider">From Chaos to Cadence</span>
            </div>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-slate-700 text-sm font-medium hover:text-amber-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-slate-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-amber-600">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-700 text-sm font-medium hover:text-amber-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-end justify-start z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 pb-24 w-full lg:pb-32">
          
          {/* Headline Section */}
          <div className="max-w-2xl">
            
            {/* Small Subheading */}
            <p className="text-amber-400 text-lg md:text-xl font-light mb-3 tracking-wide uppercase">
              From Chaos To Cadence
            </p>

            {/* Main Headline */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8">
              Transform Your<br />
              Business Today
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-lg md:text-xl font-light mb-8 max-w-xl">
              Strategic leadership solutions to bring order to your organization
            </p>

            {/* CTA Button - LeadOctave Colors */}
            <button className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-md shadow-lg transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>

          </div>

        </div>
      </div>

    </div>
  );
}
