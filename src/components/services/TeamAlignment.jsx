import React from 'react';
import { ArrowRight, CheckCircle, Users, AlertTriangle, Target, Sparkles, Star, Zap, Heart } from 'lucide-react';

export default function TeamAlignment() {
    const solutions = [
        {
            title: "Team Diagnostics & Gap Analysis",
            desc: "Identify what's working and what's breaking down across your teams."
        },
        {
            title: "Accountability & Feedback Structures",
            desc: "Build systems that foster ownership and continuous improvement."
        },
        {
            title: "Culture Mapping & Values Reinforcement",
            desc: "Align behaviors with your organization's core values."
        }
    ];

    const outcomes = [
        { title: "Cohesive Teams", desc: "United around shared goals and values" },
        { title: "Higher Engagement", desc: "Increased productivity and retention" },
        { title: "Scalable Culture", desc: "Values that grow with your organization" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-gradient-to-br from-[#0a1628] via-[#132C4A] to-[#1a3a5c] overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}></div>

                    {/* Octave Lines */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            style={{ top: `${15 + i * 15}%`, left: '-50%', transform: `rotate(${-5 + i * 2}deg)` }}
                        ></div>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left Content */}
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-8">
                                <Users className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm text-white/90 font-semibold">Team Alignment & Culture</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-8">
                                Turn Teams into <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Synchronized Units</span>
                            </h1>

                            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                                Align roles, responsibilities, and culture for consistent high performance across your entire organization.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
                                >
                                    Book a Team Audit
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#learn"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
                                >
                                    Learn More
                                </a>
                            </div>

                            {/* Trust Row */}
                            <div className="mt-12 flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white/20"></div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-400">Trusted by 50+ teams worldwide</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 rounded-2xl p-6 text-center">
                                        <p className="text-4xl font-bold text-emerald-400 mb-2">87%</p>
                                        <p className="text-sm text-gray-400">Team Alignment</p>
                                    </div>
                                    <div className="bg-white/10 rounded-2xl p-6 text-center">
                                        <p className="text-4xl font-bold text-teal-400 mb-2">3x</p>
                                        <p className="text-sm text-gray-400">Faster Decisions</p>
                                    </div>
                                    <div className="bg-white/10 rounded-2xl p-6 text-center">
                                        <p className="text-4xl font-bold text-[#D4AF37] mb-2">92%</p>
                                        <p className="text-sm text-gray-400">Employee Engagement</p>
                                    </div>
                                    <div className="bg-white/10 rounded-2xl p-6 text-center">
                                        <p className="text-4xl font-bold text-pink-400 mb-2">45%</p>
                                        <p className="text-sm text-gray-400">Reduced Turnover</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                                <Heart className="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
                                <AlertTriangle className="w-4 h-4 text-red-500" />
                                <span className="text-sm font-bold text-red-600 uppercase tracking-wider">The Problem</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#132C4A] mb-6 leading-tight">
                                Teams Working in <span className="text-red-500">Silos</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Teams often work in silos. Misalignment leads to missed deadlines, friction, and disengagement. Without intentional culture design, even talented teams underperform and top performers leave.
                            </p>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    <span>67% feel disconnected</span>
                                </div>
                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4" />
                                    <span>40% productivity loss</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                                <h3 className="text-lg font-bold text-[#132C4A] mb-6">Common Symptoms</h3>
                                <div className="space-y-5">
                                    {[
                                        "Siloed departments with poor communication",
                                        "Missed deadlines and deliverables",
                                        "Friction between team members",
                                        "Low engagement and high turnover",
                                        "Unclear cultural expectations"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 group">
                                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500 transition-colors">
                                                <div className="w-2 h-2 bg-red-500 rounded-full group-hover:bg-white transition-colors"></div>
                                            </div>
                                            <p className="text-gray-600">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Our Solution</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#132C4A] mb-6">
                            Culture & Alignment <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Programs</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            LeadOctave delivers culture and alignment programs that transform how teams operate and collaborate.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                <div className="absolute inset-[2px] bg-white rounded-[calc(1.5rem-2px)] group-hover:bg-white"></div>

                                <div className="relative z-10 p-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <span className="text-2xl font-bold text-white">0{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#132C4A] mb-3">{solution.title}</h3>
                                    <p className="text-gray-600">{solution.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcome Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                            <Target className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">The Outcome</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#132C4A] mb-6">
                            What You'll <span className="text-emerald-500">Achieve</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {outcomes.map((outcome, index) => (
                            <div key={index} className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                                </div>
                                <h3 className="text-xl font-bold text-[#132C4A] mb-3">{outcome.title}</h3>
                                <p className="text-gray-600">{outcome.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-32 px-6 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            style={{ top: `${15 + i * 15}%`, left: '-50%', transform: `rotate(${-5 + i * 2}deg)` }}
                        ></div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                        Ready for Teams That <br />Operate in Harmony?
                    </h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Start with a Team Audit and discover how alignment transforms performance.
                    </p>
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-4 px-14 py-6 bg-white text-emerald-600 font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 hover:scale-105"
                    >
                        Schedule Your Team Audit
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </a>
                </div>
            </section>
        </div>
    );
}
