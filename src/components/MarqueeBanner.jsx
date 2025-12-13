import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MarqueeBanner() {
    const items = [
        "Leadership System Design",
        "Team Alignment",
        "Octave Model™",
        "Trust Building",
        "Sustainable Culture",
        "Executive Coaching",
        "Strategic Planning",
        "High Performance Teams"
    ];

    return (
        <div className="bg-gradient-to-r from-[#132C4A] via-[#1a3a5c] to-[#132C4A] py-4 overflow-hidden relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#132C4A] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#132C4A] to-transparent z-10"></div>

            <div className="flex animate-marquee whitespace-nowrap">
                {[...items, ...items, ...items].map((item, index) => (
                    <div key={index} className="flex items-center mx-8">
                        <Sparkles className="w-4 h-4 text-[#D4AF37] mr-3" />
                        <span className="text-white font-medium tracking-wide">{item}</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}
