import React from 'react';
import { Handshake, Settings, Sprout, ArrowRight } from 'lucide-react';

export default function PillarsSection() {
    const pillars = [
        {
            title: "Trust",
            description: "People follow clarity, not charisma. We create environments where credibility and integrity guide action.",
            icon: <Handshake className="w-8 h-8" />,
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            title: "Systems",
            description: "Chaos is avoidable. We turn leadership into repeatable frameworks that empower teams.",
            icon: <Settings className="w-8 h-8" />,
            gradient: "from-[#D4AF37] to-amber-500"
        },
        {
            title: "Sustainability",
            description: "Growth only matters if it endures. We help organizations build leadership cultures that last.",
            icon: <Sprout className="w-8 h-8" />,
            gradient: "from-emerald-500 to-teal-600"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-32 px-6 md:px-16 relative overflow-hidden" id="framework">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#132C4A]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#132C4A]/5 rounded-full mb-6">
                        <span className="text-sm font-bold text-[#132C4A] uppercase tracking-wider">Our Foundation</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#132C4A] mb-6 leading-tight">
                        Leadership Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">Three Pillars</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        The LeadOctave framework is anchored in three timeless principles that drive sustainable leadership excellence.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-3 overflow-hidden"
                        >
                            {/* Gradient Border on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                            <div className="absolute inset-[2px] bg-white rounded-3xl"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className={`w-20 h-20 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    {pillar.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-[#132C4A] mb-4 font-serif group-hover:text-[#D4AF37] transition-colors duration-300">
                                    {pillar.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                    {pillar.description}
                                </p>

                                <a href="#" className="inline-flex items-center gap-2 text-[#132C4A] font-bold group-hover:text-[#D4AF37] transition-colors">
                                    Learn more
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
