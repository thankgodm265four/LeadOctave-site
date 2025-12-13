import React from 'react';
import {
    ArrowRight,
    Fingerprint,
    Target,
    Handshake,
    Clock,
    GitMerge,
    MessageSquare,
    ClipboardCheck,
    Leaf,
    Sparkles,
    Quote,
    CheckCircle,
    XCircle,
    Zap,
    RefreshCcw,
    TrendingUp
} from 'lucide-react';

export default function OctaveModel() {
    const pillars = [
        {
            number: "01",
            title: "Identity",
            description: "Know who you are as a leader, so your actions align with vision and values.",
            icon: <Fingerprint className="w-6 h-6" />,
            color: "from-blue-500 to-indigo-600"
        },
        {
            number: "02",
            title: "Clarity",
            description: "Ensure every team member understands roles, responsibilities, and outcomes.",
            icon: <Target className="w-6 h-6" />,
            color: "from-emerald-500 to-teal-600"
        },
        {
            number: "03",
            title: "Trust",
            description: "Build credibility and warmth that fosters engagement and collaboration.",
            icon: <Handshake className="w-6 h-6" />,
            color: "from-[#D4AF37] to-amber-500"
        },
        {
            number: "04",
            title: "Rhythm",
            description: "Create predictable processes and cadences for meetings, feedback, and execution.",
            icon: <Clock className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500"
        },
        {
            number: "05",
            title: "Alignment",
            description: "Synchronize team goals, priorities, and individual contributions.",
            icon: <GitMerge className="w-6 h-6" />,
            color: "from-rose-500 to-orange-500"
        },
        {
            number: "06",
            title: "Communication",
            description: "Deliver clear, structured, and purposeful messages across all levels.",
            icon: <MessageSquare className="w-6 h-6" />,
            color: "from-cyan-500 to-blue-500"
        },
        {
            number: "07",
            title: "Accountability",
            description: "Establish ownership, metrics, and follow-up mechanisms that drive results.",
            icon: <ClipboardCheck className="w-6 h-6" />,
            color: "from-violet-500 to-purple-600"
        },
        {
            number: "08",
            title: "Sustainability",
            description: "Design leadership and culture that endure beyond personalities or crises.",
            icon: <Leaf className="w-6 h-6" />,
            color: "from-green-500 to-emerald-600"
        }
    ];

    const testimonials = [
        {
            quote: "The Octave Model™ transformed our leadership rhythm in just 6 weeks. We now operate with unprecedented clarity.",
            author: "Sarah Chen",
            role: "CEO, TechVision Inc"
        },
        {
            quote: "Teams finally operate in alignment; execution is faster and clearer. This framework changed everything.",
            author: "Marcus Williams",
            role: "COO, GlobalScale Partners"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-gradient-to-br from-[#0a1628] via-[#132C4A] to-[#1a3a5c] overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    {/* Floating Orbs */}
                    <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

                    {/* Octave Lines - Like Piano Keys */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="flex gap-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-48 bg-gradient-to-b from-white/10 to-white/5 rounded-lg animate-pulse"
                                    style={{
                                        animationDelay: `${i * 0.15}s`,
                                        height: `${120 + (i % 3) * 30}px`
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full border border-[#D4AF37]/30 mb-10 animate-fadeIn">
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-sm text-white font-bold uppercase tracking-wider">The Framework</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.05] mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        The Octave Model™ <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#e8c547] to-[#D4AF37] animate-shimmer bg-[length:200%_100%]">Leadership in Rhythm</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        Eight measurable pillars that transform chaos into clarity, and leaders into <span className="text-[#D4AF37] font-semibold">systems architects</span>.
                    </p>

                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 hover:scale-105 animate-fadeIn"
                        style={{ animationDelay: '0.6s' }}
                    >
                        Start Your Octave Journey
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                        <div className="w-8 h-14 rounded-full border-2 border-white/30 flex justify-center pt-2">
                            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction / Problem Statement */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                        Most organizations struggle not because of talent, but because leadership is <span className="font-bold text-red-500">improvised, fragmented, or inconsistent</span>. Teams lose focus, decisions get delayed, and culture breaks down.
                    </p>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                        <span className="font-bold text-[#132C4A]">The Octave Model™</span> provides a repeatable, structured framework to design leadership that <span className="text-[#D4AF37] font-bold">scales and endures</span>. Each pillar addresses a critical dimension of organizational clarity and performance.
                    </p>
                </div>
            </section>

            {/* The 8 Pillars Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#132C4A]/5 to-transparent rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#132C4A]/5 rounded-full mb-6">
                            <span className="text-sm font-bold text-[#132C4A] uppercase tracking-wider">The Framework</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#132C4A] mb-6">
                            The 8 Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">Leadership</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Each pillar is designed to address a critical dimension of organizational clarity and sustainable performance.
                        </p>
                    </div>

                    {/* Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((pillar, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                            >
                                {/* Gradient Border on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}></div>
                                <div className="absolute inset-[2px] bg-white rounded-[calc(1.5rem-2px)]"></div>

                                {/* Content */}
                                <div className="relative z-10 p-8">
                                    {/* Number */}
                                    <span className="text-6xl font-bold text-gray-100 group-hover:text-gray-200/50 transition-colors absolute top-4 right-4">{pillar.number}</span>

                                    {/* Icon */}
                                    <div className={`w-14 h-14 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        {pillar.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-[#132C4A] mb-3 font-serif">{pillar.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{pillar.description}</p>

                                    <a href="/services/system-design" className="inline-flex items-center gap-2 text-sm font-bold text-[#132C4A] group-hover:text-[#D4AF37] transition-colors">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before → After Visualization */}
            <section className="py-24 px-6 bg-[#132C4A] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <span className="text-sm font-bold text-white/90 uppercase tracking-wider">Transformation</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                            From <span className="text-red-400">Chaos</span> to <span className="text-[#D4AF37]">Cadence</span>
                        </h2>
                    </div>

                    {/* Comparison Grid */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-4">
                        {/* Before Column */}
                        <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-3xl p-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                                    <XCircle className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Before</h3>
                            </div>
                            <div className="space-y-5">
                                {[
                                    "Fragmented teams working in silos",
                                    "Unclear decision-making processes",
                                    "Inconsistent leadership behaviors",
                                    "Culture dependent on personalities",
                                    "Reactive problem-solving"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></div>
                                        <p className="text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Arrow in Middle (Desktop) */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-amber-500 rounded-full flex items-center justify-center shadow-2xl">
                                <ArrowRight className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        {/* After Column */}
                        <div className="bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/20 rounded-3xl p-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">After</h3>
                            </div>
                            <div className="space-y-5">
                                {[
                                    "Aligned teams with shared purpose",
                                    "Predictable execution and delivery",
                                    "Sustainable leadership systems",
                                    "Culture anchored in frameworks",
                                    "Proactive strategic leadership"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2.5 flex-shrink-0"></div>
                                        <p className="text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Works */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                            <Zap className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">The Advantage</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#132C4A] mb-4">
                            Why It <span className="text-emerald-500">Works</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#132C4A] mb-4">Systemic</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Leadership becomes predictable and teachable. No more relying on individual heroics.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <RefreshCcw className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#132C4A] mb-4">Repeatable</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Frameworks that can be implemented across teams and organizations consistently.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#132C4A] mb-4">Scalable</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Works in small startups and large enterprises alike. Grows with your organization.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <a
                            href="/contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#132C4A] to-[#1a3a5c] text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                        >
                            Take the Octave Diagnostic
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-6">
                            <Quote className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">Testimonials</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#132C4A]">
                            Trusted Results
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative">
                                <Quote className="w-12 h-12 text-[#D4AF37]/20 absolute top-8 right-8" />
                                <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#132C4A] to-[#1a3a5c] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#132C4A]">{testimonial.author}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-32 px-6 bg-gradient-to-br from-[#D4AF37] via-[#c9a430] to-[#b8962e] relative overflow-hidden">
                {/* Animated Octave Lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                    {/* Harmonic Lines */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                            key={i}
                            className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"
                            style={{
                                top: `${10 + i * 10}%`,
                                left: '-50%',
                                transform: `rotate(${-8 + i * 2}deg)`,
                                animationDelay: `${i * 0.2}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                        Ready to Design Your <br />Leadership System?
                    </h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Begin your journey with the Octave Model™ and transform how your organization leads.
                    </p>
                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-4 px-14 py-6 bg-white text-[#132C4A] font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 hover:scale-105"
                    >
                        Start Your Octave Journey
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </a>
                </div>
            </section>
        </div>
    );
}
