import React, { useState } from 'react';

export default function CompanyStory() {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            headline: "Empowering Growth Through Strategic Excellence: A Decade of Expertise at LeadOctave Consultancy",
            content: [
                "At LeadOctave Consultancy, we believe in the power of strategic thinking and the impact of insightful consulting. With [number] years of experience, we have honed our skills to provide tailored solutions that address the unique challenges of today's dynamic business landscape.",
                "Our commitment goes beyond delivering exceptional services – it extends to building lasting partnerships with our clients. We take pride in being a catalyst for your growth, offering unparalleled expertise across various industries."
            ]
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-white to-gray-50 py-20 md:py-32 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Two-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

                    {/* Left Column - Large Headline */}
                    <div className="flex flex-col justify-start">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#132C4A] leading-tight">
                            {slides[activeSlide].headline}
                        </h2>
                    </div>

                    {/* Right Column - Content */}
                    <div className="flex flex-col justify-center space-y-6">
                        {slides[activeSlide].content.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-gray-600 text-base md:text-lg leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-16">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`transition-all duration-300 rounded-full ${index === activeSlide
                                    ? 'w-3 h-3 bg-[#D4AF37]'
                                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
