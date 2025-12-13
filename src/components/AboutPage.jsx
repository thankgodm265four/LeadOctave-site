import React from 'react';
import {
    ArrowRight,
    Target,
    Heart,
    Lightbulb,
    Users,
    Award,
    CheckCircle,
    Sparkles,
    Globe,
    Shield,
    Settings,
    Leaf,
    Quote,
    TrendingUp,
    Clock,
    Zap
} from 'lucide-react';

export default function AboutPage() {
    const impactMetrics = [
        { icon: <Target className="w-6 h-6" />, label: "Clearer Expectations", desc: "& Accountability" },
        { icon: <Users className="w-6 h-6" />, label: "Cohesive Teams", desc: "& Alignment" },
        { icon: <Zap className="w-6 h-6" />, label: "Faster Execution", desc: "Predictable Results" },
        { icon: <TrendingUp className="w-6 h-6" />, label: "Scalable Culture", desc: "Beyond Founders" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-gradient-to-br from-[#0a1628] via-[#132C4A] to-[#1a3a5c] overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    {/* Floating Orbs */}
                    <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

                    {/* Animated Octave Lines */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                            key={i}
                            className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"
                            style={{
                                top: `${10 + i * 10}%`,
                                left: '-50%',
                                transform: `rotate(${-8 + i * 2}deg)`,
                                animationDelay: `${i * 0.3}s`
                            }}
                        ></div>
                    ))}

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-10 animate-fadeIn">
                        <Globe className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-sm text-white font-bold uppercase tracking-wider">About LeadOctave</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.05] mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        Leadership Is a System, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#e8c547] to-[#D4AF37] animate-shimmer bg-[length:200%_100%]">Not a Gift</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        At LeadOctave, we move individuals, teams, and organizations from <span className="text-red-400 font-semibold">chaos</span> to <span className="text-[#D4AF37] font-semibold">cadence</span> by designing leadership structures that endure.
                    </p>

                    <a
                        href="/model"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 hover:scale-105 animate-fadeIn"
                        style={{ animationDelay: '0.6s' }}
                    >
                        <Sparkles className="w-5 h-5" />
                        Discover the Octave Model™
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

            {/* Our Purpose Section */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#132C4A]/5 rounded-full mb-6">
                            <Target className="w-4 h-4 text-[#132C4A]" />
                            <span className="text-sm font-bold text-[#132C4A] uppercase tracking-wider">Our Purpose</span>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 md:p-14 border border-gray-100 shadow-xl relative overflow-hidden">
                        {/* Decorative Element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-[100px]"></div>

                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                            Every organization faces complexity: <span className="font-bold text-red-500">unclear roles</span>, <span className="font-bold text-red-500">misaligned teams</span>, <span className="font-bold text-red-500">slow execution</span>, and culture that cannot scale.
                        </p>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                            Most leaders think the problem lies with talent—but the truth is deeper: <span className="font-bold text-[#132C4A]">leadership itself is often improvised, inconsistent, and unstructured</span>.
                        </p>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                            <span className="text-[#D4AF37] font-bold">LeadOctave exists to solve this.</span> We engineer leadership ecosystems that are <span className="font-bold">repeatable</span>, <span className="font-bold">scalable</span>, and <span className="font-bold">sustainable</span>—so high-performing teams and leaders thrive, no matter the challenge.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy - Trust, Systems, Sustainability */}
            <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-6">
                            <Heart className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">Our Philosophy</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#132C4A] mb-6">
                            Trust, Systems, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">Sustainability</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Trust */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="absolute inset-[2px] bg-white rounded-[calc(1.5rem-2px)] group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50"></div>
                            <div className="relative z-10 p-10 text-center">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Shield className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#132C4A] mb-4 font-serif">Trust</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    People follow <span className="font-bold text-blue-600">clarity, not charisma</span>. We create leadership environments where credibility, integrity, and warmth guide decision-making.
                                </p>
                            </div>
                        </div>

                        {/* Systems */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-amber-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="absolute inset-[2px] bg-white rounded-[calc(1.5rem-2px)] group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-amber-50"></div>
                            <div className="relative z-10 p-10 text-center">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D4AF37] to-amber-500 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Settings className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#132C4A] mb-4 font-serif">Systems</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    <span className="font-bold text-[#D4AF37]">Chaos is not inevitable.</span> We turn leadership into a structured, teachable framework that empowers teams and strengthens execution.
                                </p>
                            </div>
                        </div>

                        {/* Sustainability */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="absolute inset-[2px] bg-white rounded-[calc(1.5rem-2px)] group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-emerald-50"></div>
                            <div className="relative z-10 p-10 text-center">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Leaf className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#132C4A] mb-4 font-serif">Sustainability</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Growth is only meaningful if it <span className="font-bold text-emerald-600">survives pressure</span>. We help organizations build cultures that endure beyond personalities, crises, and seasons.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-24 px-6 bg-[#132C4A] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                {/* Floating Orbs */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                            <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-sm font-bold text-white uppercase tracking-wider">Our Origin Story</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                            Where It All <span className="text-[#D4AF37]">Began</span>
                        </h2>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-14">
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            LeadOctave began with one observation: <span className="text-white font-bold">Where leadership is structured, culture thrives. Where leadership is improvised, chaos follows.</span>
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Joshua Tolofari saw talented teams underperform not because of people, but because the systems guiding them were weak or missing entirely. He began designing frameworks for individuals, then teams, then entire organizations.
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Those frameworks became the <span className="text-[#D4AF37] font-bold">Octave Model™</span>, a leadership system based on eight pillars that bring clarity, alignment, and sustainable performance.
                        </p>
                    </div>

                    {/* Quote */}
                    <div className="mt-12 text-center">
                        <Quote className="w-12 h-12 text-[#D4AF37]/30 mx-auto mb-4" />
                        <blockquote className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed mb-4">
                            "Leadership has rhythm. And when you find that rhythm, everything changes."
                        </blockquote>
                        <p className="text-[#D4AF37] font-bold text-lg">— Joshua Tolofari</p>
                    </div>
                </div>
            </section>

            {/* Our Impact */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                            <Award className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Our Impact</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#132C4A] mb-6">
                            Organizations That Adopt LeadOctave <span className="text-emerald-500">Experience</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {impactMetrics.map((metric, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    {metric.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#132C4A] mb-1">{metric.label}</h3>
                                <p className="text-gray-500">{metric.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-[#132C4A] to-[#1a3a5c] rounded-3xl p-10 text-center">
                        <p className="text-xl text-white leading-relaxed">
                            We don't just advise leaders. We <span className="text-[#D4AF37] font-bold">design their leadership architecture</span> so their vision becomes reality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why LeadOctave Works */}
            <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                                <Zap className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Why It Works</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#132C4A] mb-8 leading-tight">
                                Infrastructure Over <span className="text-purple-500">Inspiration</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Unlike traditional leadership coaches, we focus on <span className="font-bold text-[#132C4A]">infrastructure over inspiration</span>.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Growth is not about scaling personalities—it's about <span className="font-bold text-[#132C4A]">scaling systems</span>. When the system works, leaders and teams flourish naturally.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Systems that work without you in the room",
                                    "Frameworks your successors can inherit",
                                    "Culture that survives any crisis"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-1">
                                    <div className="bg-white rounded-[calc(1.5rem-4px)] p-8">
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                                <span className="text-gray-400">Traditional Coaching</span>
                                            </div>
                                            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full w-1/3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
                                            </div>
                                            <p className="text-sm text-gray-500">Dependent on personalities</p>
                                        </div>

                                        <div className="my-8 border-t border-gray-100"></div>

                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
                                                <span className="text-[#132C4A] font-bold">LeadOctave Approach</span>
                                            </div>
                                            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full w-full bg-gradient-to-r from-[#D4AF37] to-emerald-500 rounded-full"></div>
                                            </div>
                                            <p className="text-sm text-emerald-600 font-medium">Built on scalable systems</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-32 px-6 bg-gradient-to-br from-[#D4AF37] via-[#c9a430] to-[#b8962e] relative overflow-hidden">
                {/* Animated Background */}
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
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-10">
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-sm text-white font-bold uppercase tracking-wider">Take the Next Step</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                        Ready to Move From <br />Chaos to Cadence?
                    </h2>

                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Discover how the Octave Model™ can transform your leadership and create systems that endure.
                    </p>

                    <a
                        href="/model"
                        className="group inline-flex items-center gap-4 px-14 py-6 bg-white text-[#132C4A] font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 hover:scale-105"
                    >
                        <Sparkles className="w-6 h-6" />
                        Explore the Octave Model™
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </a>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 opacity-80">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-white" />
                            <span className="text-white/90 text-sm">8 Pillars of Excellence</span>
                        </div>
                        <div className="w-1 h-1 bg-white/50 rounded-full hidden sm:block"></div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-white" />
                            <span className="text-white/90 text-sm">Proven Framework</span>
                        </div>
                        <div className="w-1 h-1 bg-white/50 rounded-full hidden sm:block"></div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-white" />
                            <span className="text-white/90 text-sm">Sustainable Results</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
