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
      
      {/* ============ PART 1: PARTNERS BANNER ============ */}
      <div className="flex flex-col md:flex-row w-full min-h-96">
        
        {/* Left Box - LeadOctave Navy Background with Text */}
        <div className="w-full md:w-[30%] bg-slate-900 flex flex-col justify-center p-10 md:p-16">
          <p className="text-xs uppercase tracking-widest text-amber-500 mb-3 font-semibold">
            Our Trusted Partner
          </p>
          <h2 className="text-white text-2xl md:text-3xl font-serif font-medium leading-snug">
            The Brands We Work<br />
            With And Believe In us
          </h2>
        </div>

        {/* Right Box - Light Background with Logos */}
        <div className="w-full md:w-[70%] bg-gray-50 flex items-center justify-center p-10 md:p-16">
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center items-center w-full">
            {partnerLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-12 md:h-16 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ============ PART 2: ABOUT SECTION ============ */}
      <div className="w-full bg-white py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Left Column - Typography */}
          <div className="flex flex-col justify-start">
            <p className="text-xs uppercase tracking-widest text-amber-600 mb-6 font-semibold">
              About LeadOctave
            </p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Achieving growth relies on taking straightforward & automated measures.
            </h3>
          </div>

          {/* Right Column - Descriptive Text */}
          <div className="flex flex-col justify-start">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              In the ever-changing terrain of business evolution, the relentless pursuit of growth requires a strategic mindset that seamlessly merges simplicity with automation. This subheader delves deep into the complexities inherent in achieving sustained expansion by shedding light on the transformative potential of streamlined processes and systems. It underscores the critical importance of embracing efficiency and innovation in navigating the dynamic challenges of today's marketplace, ultimately paving the way for long-term success and resilience in an increasingly competitive landscape.
            </p>
          </div>

        </div>
      </div>

      {/* ============ CTA SECTION ============ */}
      <div className="w-full bg-gradient-to-r from-slate-900 to-slate-800 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Join us on the journey from chaos to cadence and unlock your organization's full potential.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-10 py-3 rounded-md shadow-lg transition-all duration-200 transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>

    </div>
  );
}
