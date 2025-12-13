import React from 'react';

export default function ClientLogos() {
    // Placeholder logos - in production, replace with actual client logos
    const clients = [
        { name: "TechVision", color: "from-blue-500 to-indigo-600" },
        { name: "GlobalScale", color: "from-emerald-500 to-teal-600" },
        { name: "Innovate Inc", color: "from-purple-500 to-pink-500" },
        { name: "Summit Group", color: "from-[#D4AF37] to-amber-500" },
        { name: "Apex Partners", color: "from-rose-500 to-orange-500" },
        { name: "Horizon Co", color: "from-cyan-500 to-blue-500" }
    ];

    return (
        <section className="py-16 px-6 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Trusted By</p>
                    <h3 className="text-2xl font-serif font-bold text-[#132C4A]">
                        Industry-Leading Organizations
                    </h3>
                </div>

                {/* Logo Grid */}
                <div className="relative">
                    {/* Gradient Fade Effects */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                    {/* Scrolling Logos */}
                    <div className="flex items-center gap-12 overflow-hidden">
                        <div className="flex items-center gap-12 animate-scroll">
                            {[...clients, ...clients].map((client, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 group"
                                >
                                    <div className={`px-10 py-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-transparent transition-all duration-300 relative overflow-hidden`}>
                                        {/* Gradient background on hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${client.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                        {/* Logo placeholder */}
                                        <div className="relative z-10 flex items-center gap-3">
                                            <div className={`w-10 h-10 bg-gradient-to-br ${client.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                                                {client.name.charAt(0)}
                                            </div>
                                            <span className="font-bold text-gray-700 whitespace-nowrap">{client.name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { number: "100+", label: "Organizations Served" },
                        { number: "500+", label: "Leaders Trained" },
                        { number: "15+", label: "Years Experience" },
                        { number: "98%", label: "Client Satisfaction" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">{stat.number}</p>
                            <p className="text-gray-600 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
