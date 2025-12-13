import React from 'react';
import { Layers, Users, BookOpen, Mic, ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesGrid() {
    const services = [
        {
            title: "Leadership System Design",
            description: "Build frameworks for predictable performance. We architect the systems that allow your leadership to scale without chaos.",
            icon: <Layers className="w-7 h-7" />,
            link: "/services/system-design",
            accent: "from-blue-500 to-indigo-600"
        },
        {
            title: "Team Alignment & Culture",
            description: "Turn fragmented teams into synchronized units. We align your people around a shared vision and operational rhythm.",
            icon: <Users className="w-7 h-7" />,
            link: "/services/team-alignment",
            accent: "from-emerald-500 to-teal-600"
        },
        {
            title: "Training & Workshops",
            description: "Shift how leaders think and act. Immersive learning experiences that drive behavioral change and skill acquisition.",
            icon: <BookOpen className="w-7 h-7" />,
            link: "/services/training",
            accent: "from-[#D4AF37] to-amber-500"
        },
        {
            title: "Speaking & Strategy",
            description: "Keynotes and workshops that spark clarity and momentum. Strategic conversations that unblock growth.",
            icon: <Mic className="w-7 h-7" />,
            link: "/services/speaking",
            accent: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white py-32 px-6 md:px-16 relative overflow-hidden" id="services">

            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#132C4A]/10 to-transparent rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#132C4A]/5 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-sm font-bold text-[#132C4A] uppercase tracking-wider">Our Services</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#132C4A] mb-6">
                            How We Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">Leadership</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Comprehensive solutions designed to move your organization from friction to flow, building leaders who create lasting impact.
                        </p>
                    </div>

                    <a href="/service" className="hidden lg:flex items-center gap-3 px-6 py-3 bg-[#132C4A] text-white rounded-xl font-bold hover:bg-[#D4AF37] transition-all duration-300 group shadow-lg">
                        View All Services
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                            <div className="absolute inset-[2px] bg-white rounded-3xl group-hover:bg-white/95 transition-all duration-300"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-8">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.accent} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        {service.icon}
                                    </div>
                                    <span className="text-6xl font-bold text-gray-100 group-hover:text-gray-200/50 transition-colors">0{index + 1}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-[#132C4A] mb-4 font-serif group-hover:text-[#132C4A] transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                    {service.description}
                                </p>

                                <div className="flex gap-4">
                                    <a
                                        href={service.link}
                                        className="inline-flex items-center gap-2 text-[#132C4A] font-bold group-hover:text-[#D4AF37] transition-colors"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#132C4A]/10 rounded-lg text-[#132C4A] font-bold hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Link */}
                <div className="mt-12 text-center lg:hidden">
                    <a href="/service" className="inline-flex items-center gap-2 px-8 py-4 bg-[#132C4A] text-white rounded-xl font-bold hover:bg-[#D4AF37] transition-colors shadow-lg">
                        View All Services
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </div>
    );
}
