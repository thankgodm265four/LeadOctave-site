import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

export default function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const announcements = [
        { text: "🎯 New: Take the Free Octave Diagnostic", link: "/contact", highlight: "Free Assessment" },
        { text: "📚 Joshua's new framework guide is now available", link: "/contact", highlight: "Download Now" },
        { text: "🎤 Limited spots for Q1 2025 keynote bookings", link: "/contact", highlight: "Book Now" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % announcements.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [announcements.length]);

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-[#D4AF37] via-[#c9a430] to-[#D4AF37] py-2.5 px-4 relative overflow-hidden">
            {/* Animated Shine Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                    background: 'linear-gradient(90deg, transparent, white, transparent)',
                    animation: 'shine 3s ease-in-out infinite',
                    transform: 'skewX(-20deg)'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 relative z-10">
                <Sparkles className="w-4 h-4 text-white animate-pulse" />

                <a
                    href={announcements[currentIndex].link}
                    className="flex items-center gap-3 text-white text-sm font-medium hover:underline transition-all"
                >
                    <span>{announcements[currentIndex].text}</span>
                    <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold">
                        {announcements[currentIndex].highlight}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                </a>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close announcement"
                >
                    <X className="w-4 h-4 text-white" />
                </button>
            </div>

            {/* Progress Dots */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 flex gap-1">
                {announcements.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${currentIndex === index ? 'bg-white' : 'bg-white/30'
                            }`}
                    />
                ))}
            </div>

            <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
      `}</style>
        </div>
    );
}
