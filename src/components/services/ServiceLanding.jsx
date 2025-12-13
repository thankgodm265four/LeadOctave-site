import React from 'react';
import { ArrowRight, Layers, Users, BookOpen, Mic, Sparkles, Star, CheckCircle, Zap } from 'lucide-react';

export default function ServiceLanding() {
    const services = [
        {
            title: "Leadership System Design",
            headline: "Design Your Leadership Operating System",
            description: "Transform leadership into repeatable, scalable frameworks that drive clarity and execution.",
            icon: <Layers className="w-8 h-8" />,
            link: "/services/system-design",
            cta: "Book Your Pilot",
            gradient: "from-blue-500 to-indigo-600",
            bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
        },
        {
            title: "Team Alignment & Culture",
            headline: "Turn Teams into Synchronized Units",
            description: "Align roles, responsibilities, and culture for consistent high performance.",
            icon: <Users className="w-8 h-8" />,
            link: "/services/team-alignment",
            cta: "Book a Team Audit",
            gradient: "from-emerald-500 to-teal-600",
            bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
        },
        {
            title: "Training & Workshops",
            headline: "Shift How Leaders Think & Act",
            description: "Practical frameworks from the Octave Model™ delivered to your team.",
            icon: <BookOpen className="w-8 h-8" />,
            link: "/services/training",
            cta: "Book Training",
            gradient: "from-[#D4AF37] to-amber-500",
            bgImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80"
        },
        {
            title: "Speaking & Strategy",
            headline: "Spark Clarity, Courage & Momentum",
            description: "Keynotes and workshops that move organizations from insight to action.",
            icon: <Mic className="w-8 h-8" />,
            link: "/services/speaking",
            cta: "Invite Joshua",
            gradient: "from-purple-500 to-pink-500",
            bgImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop&q=80"
        }
    ];

    const stats = [
        { number: "500+", label: "Leaders Transformed" },
        { number: "93%", label: "Success Rate" },
        { number: "50+", label: "Organizations Served" },
        { number: "15+", label: "Years Experience" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-gradient-to-br from-[#0a1628] via-[#132C4A] to-[#1a3a5c] overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    {/* Gradient Orbs */}
                    <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}></div>

                    {/* Octave Lines */}
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div
                            key={i}
                            className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"
                            style={{
                                top: `${10 + i * 12}%`,
                                left: '-50%',
                                transform: `rotate(${-8 + i * 2}deg)`,
                                animationDelay: `${i * 0.3}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-10 animate-fadeIn">
                        <div className="flex -space-x-1">
                            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white/20"></div>
                            <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white/20"></div>
                            <div className="w-6 h-6 rounded-full bg-[#D4AF37] border-2 border-white/20"></div>
                            <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white/20"></div>
                        </div>
                        <span className="text-sm text-white/90 font-semibold">4 Transformative Services</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.05] mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        How We Transform <br />
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#e8c547] to-[#D4AF37] animate-shimmer bg-[length:200%_100%]">Leadership</span>
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#D4AF37]/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                                <path d="M0,6 Q50,0 100,6 T200,6" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        Comprehensive solutions designed to move your organization from <span className="text-white font-semibold">friction to flow</span>, building leaders who create <span className="text-[#D4AF37] font-semibold">lasting impact</span>.
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">{stat.number}</p>
                                <p className="text-sm text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-8 h-14 rounded-full border-2 border-white/30 flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#132C4A]/5 to-transparent rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#132C4A]/5 rounded-full mb-6">
                            <Zap className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-sm font-bold text-[#132C4A] uppercase tracking-wider">Choose Your Path</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#132C4A] mb-6">
                            Select the Service That Fits
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Each service is designed to address specific leadership challenges and create measurable results.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                    <img src={service.bgImage} alt="" className="w-full h-full object-cover" />
                                </div>

                                {/* Gradient Border Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[2rem]`}></div>
                                <div className="absolute inset-[3px] bg-white rounded-[calc(2rem-3px)] group-hover:bg-white/98"></div>

                                {/* Content */}
                                <div className="relative z-10 p-10 md:p-12">
                                    {/* Header Row */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            {service.icon}
                                        </div>
                                        <span className="text-8xl font-bold text-gray-100 group-hover:text-gray-200/50 transition-colors font-serif leading-none">0{index + 1}</span>
                                    </div>

                                    {/* Label */}
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${service.gradient} bg-opacity-10 rounded-full mb-4`}>
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{service.title}</span>
                                    </div>

                                    {/* Headline */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#132C4A] mb-4 font-serif group-hover:text-[#132C4A] transition-colors leading-tight">
                                        {service.headline}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex items-center gap-6 mb-8 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                                            <span>Custom Tailored</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star className="w-4 h-4 text-[#D4AF37]" />
                                            <span>Premium Support</span>
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href={service.link}
                                            className="inline-flex items-center gap-2 text-[#132C4A] font-bold group-hover:text-[#D4AF37] transition-colors"
                                        >
                                            Learn More
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                        <a
                                            href="#contact"
                                            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} rounded-xl text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                                        >
                                            {service.cta}
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6 bg-[#132C4A] relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-sm font-bold text-white/90 uppercase tracking-wider">Our Process</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16">
                        How We Work With You
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "We understand your challenges" },
                            { step: "02", title: "Design", desc: "Custom frameworks created" },
                            { step: "03", title: "Deliver", desc: "Implementation & training" },
                            { step: "04", title: "Sustain", desc: "Ongoing support & refinement" }
                        ].map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                                    <span className="text-5xl font-bold text-[#D4AF37]/30 mb-4 block">{item.step}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 bg-gradient-to-br from-[#D4AF37] via-[#c9a430] to-[#b8962e] relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"
                            style={{ top: `${15 + i * 15}%`, left: '-50%', transform: `rotate(${-8 + i * 3}deg)`, animationDelay: `${i * 0.3}s` }}
                        ></div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-10">
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-sm text-white font-bold uppercase tracking-wider">Start Your Journey</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                        Not Sure Where to Start?
                    </h2>

                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Take the Octave Diagnostic to discover which leadership system needs the most attention and get a personalized recommendation.
                    </p>

                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-4 px-14 py-6 bg-white text-[#132C4A] font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 hover:scale-105"
                    >
                        Start Your Octave Diagnostic
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </a>

                    {/* Trust Indicator */}
                    <div className="mt-12 flex items-center justify-center gap-6 opacity-80">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-white" />
                            <span className="text-white/90 text-sm">Free Assessment</span>
                        </div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-white" />
                            <span className="text-white/90 text-sm">Personalized Results</span>
                        </div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-white" />
                            <span className="text-white/90 text-sm">Action Plan Included</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
