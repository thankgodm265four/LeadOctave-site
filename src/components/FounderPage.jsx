import React from 'react';
import {
    ArrowRight,
    Quote,
    Award,
    BookOpen,
    Users,
    Mic,
    Sparkles,
    CheckCircle,
    Linkedin,
    Twitter,
    Mail,
    Target,
    Lightbulb,
    Settings,
    Clock,
    TrendingUp,
    Play
} from 'lucide-react';

export default function FounderPage() {
    const speakingTopics = [
        { icon: <Settings className="w-6 h-6" />, title: "Leadership System Design", desc: "Building scalable frameworks for organizational clarity" },
        { icon: <Users className="w-6 h-6" />, title: "Team Alignment & Culture", desc: "Creating cohesive teams that execute with precision" },
        { icon: <BookOpen className="w-6 h-6" />, title: "Leadership Training & Workshops", desc: "Practical frameworks your leaders can apply immediately" },
        { icon: <Clock className="w-6 h-6" />, title: "Organizational Rhythm & Cadence", desc: "Predictable processes that drive consistent results" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Strategic Leadership", desc: "High-performance leadership for ambitious organizations" },
        { icon: <Target className="w-6 h-6" />, title: "Executive Coaching", desc: "One-on-one guidance for senior leaders" }
    ];

    const clientLogos = [
        { name: "TechVision", initial: "T" },
        { name: "GlobalScale", initial: "G" },
        { name: "Summit Group", initial: "S" },
        { name: "Horizon Co", initial: "H" },
        { name: "Apex Partners", initial: "A" },
        { name: "Innovate Inc", initial: "I" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Full Bleed */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#142C4C] to-[#1a3a5c]">
                    {/* Octave Lines Background */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                            key={i}
                            className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"
                            style={{
                                top: `${10 + i * 10}%`,
                                left: '-50%',
                                transform: `rotate(${-8 + i * 2}deg)`
                            }}
                        ></div>
                    ))}
                    <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4A259]/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left Content */}
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A259]/20 backdrop-blur-sm rounded-full border border-[#D4A259]/30 mb-8">
                                <Sparkles className="w-4 h-4 text-[#D4A259]" />
                                <span className="text-sm text-white font-semibold">The Founder</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
                                A Systems Thinker Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A259] to-amber-400">Builds Leaders</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                                I help leaders move from chaos to cadence through structures of <span className="text-[#D4A259] font-semibold">trust</span>, <span className="text-[#D4A259] font-semibold">clarity</span>, and <span className="text-[#D4A259] font-semibold">sustainable execution</span>.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4A259] to-[#c9a430] text-white font-bold rounded-xl transition-all duration-300 shadow-2xl shadow-[#D4A259]/30 hover:shadow-[#D4A259]/50 hover:scale-105"
                                >
                                    Invite Joshua
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="/services/speaking"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
                                >
                                    <Mic className="w-5 h-5" />
                                    Book Keynote
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 mt-10 justify-center lg:justify-start">
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-[#D4A259] transition-colors duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-[#D4A259] transition-colors duration-300">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-[#D4A259] transition-colors duration-300">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Right - Portrait */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative max-w-md mx-auto">
                                {/* Main Image */}
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/image/hero-black-professional.png"
                                        alt="Joshua Tolofari"
                                        className="w-full h-full object-cover object-top"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#142C4C]/80 via-transparent to-transparent"></div>
                                </div>

                                {/* Decorative Frames */}
                                <div className="absolute -inset-4 border-2 border-[#D4A259]/30 rounded-3xl -z-10"></div>
                                <div className="absolute -inset-8 border border-white/10 rounded-3xl -z-20"></div>

                                {/* Quote Badge */}
                                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#D4A259] to-amber-500 rounded-2xl flex items-center justify-center shadow-xl rotate-12 animate-float">
                                    <Quote className="w-8 h-8 text-white" />
                                </div>

                                {/* Name Card */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
                                    <p className="text-2xl font-bold text-[#142C4C]">Joshua Tolofari</p>
                                    <p className="text-gray-500">Founder & Leadership Architect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-8 h-14 rounded-full border-2 border-white/30 flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Founder Story - 3 Block Narrative */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A259]/5 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#142C4C]/5 rounded-full mb-6">
                            <BookOpen className="w-4 h-4 text-[#142C4C]" />
                            <span className="text-sm font-bold text-[#142C4C] uppercase tracking-wider">The Journey</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#142C4C]">
                            From <span className="text-red-500">Chaos</span> to <span className="text-[#D4A259]">Cadence</span>
                        </h2>
                    </div>

                    {/* Three Blocks */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Block 1: The Problem */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="absolute inset-[2px] bg-white rounded-[calc(1.5rem-2px)]"></div>
                            <div className="relative z-10 p-8">
                                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl font-bold text-red-500">01</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#142C4C] mb-4">The Problem</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Many leaders rely on intuition and improvisation. Teams often fail not because of talent, but because leadership systems are unclear or inconsistent.
                                </p>
                            </div>
                        </div>

                        {/* Block 2: The Insight */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="absolute inset-[2px] bg-white rounded-[calc(1.5rem-2px)]"></div>
                            <div className="relative z-10 p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl font-bold text-blue-500">02</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#142C4C] mb-4">The Insight</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Joshua recognized that structure, rhythm, and alignment—not personality or charisma—determine organizational performance.
                                </p>
                            </div>
                        </div>

                        {/* Block 3: The System */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A259] to-amber-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="absolute inset-[2px] bg-white rounded-[calc(1.5rem-2px)]"></div>
                            <div className="relative z-10 p-8">
                                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl font-bold text-[#D4A259]">03</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#142C4C] mb-4">The System</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    He developed the Octave Model™, an 8-pillar framework that transforms chaos into clarity, enabling leaders and teams to operate predictably.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-16 text-center">
                        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#142C4C] to-[#1a3a5c] rounded-3xl p-10 relative overflow-hidden">
                            <Quote className="absolute top-4 left-4 w-20 h-20 text-white/5" />
                            <blockquote className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed mb-6 relative z-10">
                                "Leadership has rhythm. And when you find that rhythm, everything changes."
                            </blockquote>
                            <p className="text-[#D4A259] font-bold text-lg">— Joshua Tolofari</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A259]/10 rounded-full mb-6">
                                <Lightbulb className="w-4 h-4 text-[#D4A259]" />
                                <span className="text-sm font-bold text-[#D4A259] uppercase tracking-wider">Philosophy</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#142C4C] mb-8 leading-tight">
                                Leadership Is Not a Gift. <br />
                                <span className="text-[#D4A259]">It's a System.</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Leaders succeed only when supported by clear systems, trust, and alignment. Charisma fades. Personality is inconsistent. But systems? Systems scale.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Joshua works with founders, executives, and teams to design leadership ecosystems that endure beyond personalities or crises—frameworks that work even when the leader isn't in the room.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    <span className="text-gray-700 font-medium">Systems-First Approach</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    <span className="text-gray-700 font-medium">Sustainable Results</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    <span className="text-gray-700 font-medium">Built to Last</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="relative">
                                <img
                                    src="/image/leader-office.jpg"
                                    alt="Leadership in action"
                                    className="w-full rounded-3xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#D4A259] to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                                    <div className="text-center text-white">
                                        <p className="text-3xl font-bold">15+</p>
                                        <p className="text-sm">Years</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speaking Topics */}
            <section id="speaking" className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                            <Mic className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Speaking & Expertise</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#142C4C] mb-6">
                            Speaking & Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Conversations</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Joshua delivers keynotes and workshops that move organizations from insight to action.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {speakingTopics.map((topic, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    {topic.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#142C4C] mb-3">{topic.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{topic.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="/contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                        >
                            <Mic className="w-5 h-5" />
                            Invite Joshua to Speak
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Press / Media Section */}
            <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#142C4C]/5 rounded-full mb-6">
                            <Award className="w-4 h-4 text-[#142C4C]" />
                            <span className="text-sm font-bold text-[#142C4C] uppercase tracking-wider">Trust & Credibility</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#142C4C]">
                            Trusted by Leaders and <span className="text-[#D4A259]">Organizations</span>
                        </h2>
                    </div>

                    {/* Client Logos */}
                    <div className="flex flex-wrap justify-center gap-6 mb-16">
                        {clientLogos.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#D4A259]/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-[#142C4C] to-[#1a3a5c] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                    {client.initial}
                                </div>
                                <span className="font-bold text-gray-700">{client.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Video Testimonial Preview */}
                    <div className="max-w-3xl mx-auto">
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                            <img
                                src="/image/diverse-team.jpg"
                                alt="Client testimonials"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#D4A259] transition-all duration-300">
                                    <Play className="w-8 h-8 text-[#142C4C] ml-1 group-hover:text-white" fill="currentColor" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white text-xl font-bold">Watch: Client Success Stories</p>
                                <p className="text-gray-300">See how organizations have transformed with LeadOctave</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section id="contact" className="py-32 px-6 bg-gradient-to-br from-[#D4A259] via-[#c9a430] to-[#b8962e] relative overflow-hidden">
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
                        <span className="text-sm text-white font-bold uppercase tracking-wider">Ready to Transform?</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                        Ready to Move From <br />Chaos to Cadence?
                    </h2>

                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Let's start a conversation about how we can transform your leadership systems and create lasting impact.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-[#142C4C] font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 hover:scale-105"
                        >
                            Book a Clarity Session
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </a>
                        <a
                            href="/services/speaking"
                            className="group inline-flex items-center gap-4 px-12 py-6 bg-transparent border-2 border-white text-white font-bold text-xl rounded-2xl transition-all duration-300 hover:bg-white hover:text-[#142C4C]"
                        >
                            <Mic className="w-6 h-6" />
                            Book a Keynote
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex items-center justify-center gap-6 opacity-80">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-white" />
                            <span className="text-white/90 text-sm">Free Consultation</span>
                        </div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-white" />
                            <span className="text-white/90 text-sm">Custom Solutions</span>
                        </div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-white" />
                            <span className="text-white/90 text-sm">Guaranteed Results</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
