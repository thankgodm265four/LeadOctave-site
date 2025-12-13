import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function PromiseSection() {
    return (
        <div className="w-full bg-[#0a1628] py-32 md:py-40 px-6 relative overflow-hidden">

            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#132C4A] to-[#0a1628]"></div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }}></div>

            {/* Floating Orbs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

            {/* Octave Lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div
                        key={i}
                        className="absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        style={{
                            top: `${15 + i * 15}%`,
                            left: '-25%',
                            transform: `rotate(${-5 + i * 2}deg)`
                        }}
                    ></div>
                ))}
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-10">
                    <Zap className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-sm text-white/90 font-bold uppercase tracking-wider">The LeadOctave Promise</span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-10 leading-[1.1]">
                    Leadership Isn't Talent. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#e8c547] to-[#D4AF37]">It's Architecture.</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-300 mb-14 leading-relaxed max-w-3xl mx-auto">
                    Most teams underperform not because of people—they fail because leadership systems are unclear. LeadOctave engineers leadership ecosystems that align people, streamline execution, and create lasting impact.
                </p>

                <a
                    href="#diagnostic"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/50 hover:scale-105 relative overflow-hidden"
                >
                    <span className="relative z-10">Start the Octave Diagnostic</span>
                    <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                {/* Stats Row */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/10">
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">93%</p>
                        <p className="text-gray-400">Leadership Clarity Improvement</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">2.5x</p>
                        <p className="text-gray-400">Team Performance Increase</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">85%</p>
                        <p className="text-gray-400">Sustainable Growth Rate</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
