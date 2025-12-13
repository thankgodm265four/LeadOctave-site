import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23374151" width="1200" height="800"/><circle cx="800" cy="300" r="200" fill="%234B5563" opacity="0.3"/><path d="M 0 400 Q 300 300 600 400 T 1200 400" stroke="%236B7280" stroke-width="2" fill="none" opacity="0.2"/></svg>')`
        }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 h-full flex items-center justify-start">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="text-gray-300 text-lg mb-2 font-light">Strategy & Innovation</p>
            <h1 className="text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
              Your Partner in<br/>Strategic Excellence
            </h1>
            <p className="text-gray-300 text-lg mb-8 font-light max-w-xl">
              We deliver tailored strategies and innovative solutions to drive your business forward.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 items-center">
              <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 rounded transition">
                Get started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded transition">
                Buy Template
              </button>
            </div>

            {/* Made in Framer badge */}
            <div className="mt-12 flex items-center gap-2 text-gray-400">
              <span className="text-sm">Made in Framer</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-r from-lime-500 to-transparent opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
}
