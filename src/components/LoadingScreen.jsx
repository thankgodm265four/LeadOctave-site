import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        // Hide loading screen after content loads
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`fixed inset-0 z-[9999] bg-gradient-to-br from-[#0a1628] via-[#132C4A] to-[#1a3a5c] flex items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Octave Lines */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                        key={i}
                        className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"
                        style={{
                            top: `${10 + i * 10}%`,
                            left: '-50%',
                            transform: `rotate(${-8 + i * 2}deg)`,
                            animationDelay: `${i * 0.1}s`
                        }}
                    ></div>
                ))}

                {/* Floating Orbs */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 text-center">
                {/* Logo */}
                <div className="mb-8">
                    <img
                        src="/image/leadoctave-logo.png"
                        alt="LeadOctave"
                        className="h-16 md:h-20 mx-auto brightness-0 invert animate-pulse"
                    />
                </div>

                {/* Loading Bar */}
                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                    <div
                        className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-400 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                </div>

                {/* Loading Text */}
                <p className="text-white/60 text-sm tracking-widest uppercase">
                    Building Leadership Systems...
                </p>

                {/* Animated Dots */}
                <div className="flex justify-center gap-2 mt-4">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
