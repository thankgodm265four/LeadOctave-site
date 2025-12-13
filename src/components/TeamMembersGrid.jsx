import React from 'react';

export default function TeamMembersGrid() {
    const teamMembers = [
        {
            name: 'Marcus Thompson',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces'
        },
        {
            name: 'Sarah Johnson',
            role: 'Chief Strategy Officer',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=faces'
        },
        {
            name: 'David Chen',
            role: 'Head of Operations',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=faces'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Innovation Director',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=faces'
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-[#132C4A]">
                    Team Members
                </h2>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer"
                        >
                            {/* Card Container with Hover Effects */}
                            <div className="transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out rounded-2xl p-4 bg-white border border-transparent hover:border-[#D4AF37]/20">

                                {/* Member Image */}
                                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Subtle overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#132C4A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Member Details */}
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-[#132C4A] mb-1 group-hover:text-[#D4AF37] transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm group-hover:text-[#132C4A] transition-colors duration-300 font-medium">
                                        {member.role}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
