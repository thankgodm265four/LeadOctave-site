import React from 'react';
import {
    Zap,
    Shield,
    Target,
    Clock,
    TrendingUp,
    Users,
    CheckCircle,
    ArrowRight,
    Sparkles
} from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Clarity First",
            description: "Every team member knows their role, responsibilities, and expected outcomes.",
            color: "from-blue-500 to-indigo-600"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Built on Trust",
            description: "Leadership frameworks that foster engagement, collaboration, and credibility.",
            color: "from-emerald-500 to-teal-600"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Predictable Rhythm",
            description: "Consistent processes and cadences for meetings, feedback, and execution.",
            color: "from-[#D4AF37] to-amber-500"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Team Alignment",
            description: "Synchronized goals, priorities, and contributions across all team members.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Scalable Systems",
            description: "Frameworks that grow with your organization from startup to enterprise.",
            color: "from-rose-500 to-orange-500"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Sustainable Results",
            description: "Leadership that endures beyond personalities or crises.",
            color: "from-cyan-500 to-blue-500"
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">Why LeadOctave</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#132C4A] mb-6">
                        The Leadership System <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">Advantage</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Transform your organization with frameworks designed for lasting impact and measurable results.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Icon */}
                            <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-[#132C4A] mb-3 group-hover:text-[#D4AF37] transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {feature.description}
                            </p>

                            {/* Checkmarks */}
                            <div className="flex items-center gap-2 text-sm text-emerald-500">
                                <CheckCircle className="w-4 h-4" />
                                <span>Proven methodology</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <a
                        href="/model"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#132C4A] to-[#1a3a5c] text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        Explore the Octave Model™
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
