import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProjectShowcaseGrid() {
    const projects = [
        {
            number: "01",
            title: "Market Navigator Strategy",
            description: "Dive into our portfolio of successful collaborations, where innovation meets implementation. Explore the diverse range of projects we've undertaken, each a testament to our strategic thinking, meticulous planning, and dedication to delivering tangible results.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
            imageAlt: "Two professionals collaborating on strategy",
            layout: "image-left"
        },
        {
            number: "02",
            title: "Digital Landscape",
            description: "Dive into our portfolio of successful collaborations, where innovation meets implementation. Explore the diverse range of projects we've undertaken, each a testament to our strategic thinking, meticulous planning, and dedication to delivering tangible results.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&q=80",
            imageAlt: "Woman working thoughtfully on computer",
            layout: "image-right"
        },
        {
            number: "03",
            title: "Sailing the Digital Seas",
            description: "Dive into our portfolio of successful collaborations, where innovation meets implementation. Explore the diverse range of projects we've undertaken, each a testament to our strategic thinking, meticulous planning, and dedication to delivering tangible results.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop&q=80",
            imageAlt: "Professional woman in modern office setting",
            layout: "image-left"
        }
    ];

    return (
        <div className="w-full bg-white py-20 md:py-32 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-black mb-6 leading-tight">
                        Our Project
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                        Dive into our portfolio of successful collaborations, where innovation meets implementation. Explore the diverse range of projects we've undertaken, each a testament to our strategic thinking, meticulous planning, and dedication to delivering tangible results.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-24 md:space-y-32">
                    {projects.map((project, index) => (
                        <div key={index}>
                            {project.layout === "image-left" ? (
                                // Image Left, Text Right
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                                    {/* Image Column */}
                                    <div className="order-1">
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt}
                                            loading="lazy"
                                            width="600"
                                            height="400"
                                            className="w-full h-auto rounded-2xl shadow-lg object-cover"
                                        />
                                    </div>

                                    {/* Text Column */}
                                    <div className="order-2 space-y-6">
                                        <div className="text-6xl md:text-7xl font-bold text-gray-300">
                                            {project.number}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#05101E]">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            {project.description}
                                        </p>
                                        <a
                                            href="/services/system-design"
                                            className="inline-flex items-center gap-2 text-[#05101E] hover:text-[#D2B48C] font-semibold transition-colors duration-300 group"
                                        >
                                            View project
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                // Text Left, Image Right
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                                    {/* Text Column */}
                                    <div className="order-2 md:order-1 space-y-6">
                                        <div className="text-6xl md:text-7xl font-bold text-gray-300">
                                            {project.number}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#05101E]">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            {project.description}
                                        </p>
                                        <a
                                            href="/services/system-design"
                                            className="inline-flex items-center gap-2 text-[#05101E] hover:text-[#D2B48C] font-semibold transition-colors duration-300 group"
                                        >
                                            View project
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                        </a>
                                    </div>

                                    {/* Image Column */}
                                    <div className="order-1 md:order-2">
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt}
                                            loading="lazy"
                                            width="600"
                                            height="400"
                                            className="w-full h-auto rounded-2xl shadow-lg object-cover"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
