import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ClosingCTA() {
    return (
        <div className="w-full relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#c9a430] to-[#b8962e]"></div>

            {/* Animated Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Octave Lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                        key={i}
                        className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"
                        style={{
                            top: `${10 + i * 14}%`,
                            left: '-50%',
                            transform: `rotate(${-8 + i * 3}deg)`,
                            animationDelay: `${i * 0.3}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Floating Orbs */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#132C4A]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

            <div className="relative z-10 py-32 md:py-40 px-6">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-10">
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-sm text-white font-bold uppercase tracking-wider">Take the Next Step</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-10 leading-tight drop-shadow-lg">
                        Your Leadership <br />
                        <span className="text-[#132C4A]">Deserves a System</span>
                    </h2>

                    <p className="text-xl text-white/90 mb-14 max-w-2xl mx-auto leading-relaxed">
                        Stop navigating leadership challenges without a compass. Get the clarity, structure, and sustainable practices your organization needs.
                    </p>

                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-4 bg-white text-[#132C4A] px-14 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
                    >
                        <span className="relative z-10">Begin Your Clarity Path</span>
                        <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#132C4A] to-[#1a3a5c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 text-white font-bold transition-opacity duration-300">
                            Begin Your Clarity Path
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </span>
                    </a>

                    {/* Trust Indicator */}
                    <div className="mt-16 flex items-center justify-center gap-6 opacity-80">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                            <span className="text-white/90 text-sm">Free Consultation</span>
                        </div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <span className="text-white/90 text-sm">Personalized Approach</span>
                        </div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                            <span className="text-white/90 text-sm">Proven Results</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
