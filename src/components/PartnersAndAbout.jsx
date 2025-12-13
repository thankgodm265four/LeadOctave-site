import React from 'react';

export default function PartnersAndAbout() {
  // Sample partner logos - replace with your actual logo URLs
  const partnerLogos = [
    { id: 1, name: 'Partner 1', url: 'https://via.placeholder.com/120x60?text=Logo+1' },
    { id: 2, name: 'Partner 2', url: 'https://via.placeholder.com/120x60?text=Logo+2' },
    { id: 3, name: 'Partner 3', url: 'https://via.placeholder.com/120x60?text=Logo+3' },
    { id: 4, name: 'Partner 4', url: 'https://via.placeholder.com/120x60?text=Logo+4' },
    { id: 5, name: 'Partner 5', url: 'https://via.placeholder.com/120x60?text=Logo+5' }
  ];

  return (
    <div className="w-full">

      {/* ============ PARTNERS BANNER ============ */}
      <div className="flex flex-col md:flex-row w-full min-h-96">

        {/* Left Box - Dark Background with Text */}
        <div className="w-full md:w-[30%] bg-[#132C4A] flex flex-col justify-center p-10 md:p-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-semibold">
            Our Trusted Partners
          </p>
          <h2 className="text-white text-2xl md:text-3xl font-serif font-medium leading-snug">
            The Brands We Work<br />
            With And Believe In Us
          </h2>
        </div>

        {/* Right Box - Light Gray Background with Logos */}
        <div className="w-full md:w-[70%] bg-gray-100 flex items-center justify-center p-10 md:p-16">
          <div className="flex flex-wrap gap-8 md:gap-12 justify-around items-center w-full">
            {partnerLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  className="h-12 md:h-16 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
