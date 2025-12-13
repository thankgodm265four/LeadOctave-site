import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

export default function FounderTeaser() {
    return (
        <div className="w-full bg-gradient-to-b from-white to-gray-50 py-32 px-6 md:px-16 overflow-hidden relative">

            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Main Image */}
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop&q=80"
                                    alt="Joshua Tolofari"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border-2 border-[#D4AF37]/20 rounded-3xl -z-10"></div>
                            <div className="absolute -inset-8 border border-[#132C4A]/10 rounded-3xl -z-20"></div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-amber-500 rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                            <Quote className="w-10 h-10 text-white" />
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                            <p className="text-3xl font-bold text-[#132C4A]">15+</p>
                            <p className="text-gray-500 text-sm">Years Experience</p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#132C4A]/5 rounded-full mb-6">
                            <span className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">The Founder</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#132C4A] mb-8">
                            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">Joshua Tolofari</span>
                        </h2>

                        <blockquote className="relative text-2xl md:text-3xl font-serif italic text-gray-700 leading-relaxed mb-8 pl-8 border-l-4 border-[#D4AF37]">
                            <span className="absolute -left-2 -top-4 text-6xl text-[#D4AF37]/20 font-serif">"</span>
                            I help leaders move from chaos to cadence through structures of trust, clarity, and sustainable execution.
                        </blockquote>

                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            With over 15 years of experience in organizational development and strategic leadership, Joshua has helped countless executives and teams find their rhythm and achieve sustainable growth. His approach combines proven frameworks with personalized strategies.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/founder"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#132C4A] to-[#1a3a5c] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Learn More About Joshua
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-white border-2 border-[#132C4A] text-[#132C4A] px-8 py-4 rounded-xl font-bold hover:bg-[#132C4A] hover:text-white transition-all duration-300"
                            >
                                Book a Conversation
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
