import React from 'react';

export default function StrategyProcessSection() {
    const processCards = [
        {
            letter: 'A',
            label: 'Evaluate Current Processes',
            image: '/image/leader-office.jpg'
        },
        {
            letter: 'B',
            label: 'Implement Streamlined Procedures',
            image: '/image/diverse-team.jpg'
        },
        {
            letter: 'C',
            label: 'Incorporate Automation Solutions',
            image: '/image/staff-analyzing.jpg'
        }
    ];

    return (
        <div className="w-full bg-white py-20 md:py-32 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: Typography (Two-Column Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16">

                    {/* Left Column - Headline */}
                    <div className="flex flex-col justify-start">
                        <p className="text-xs uppercase tracking-widest text-[#D4A259] mb-4 font-bold">
                            About LeadOctave
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#142C4C] leading-tight">
                            Achieving growth relies on taking straightforward & automated measures.
                        </h2>
                    </div>

                    {/* Right Column - Body Text */}
                    <div className="flex flex-col justify-start">
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                            In the ever-changing terrain of business evolution, the relentless pursuit of growth requires a strategic mindset that seamlessly merges simplicity with automation. This subheader delves deep into the complexities inherent in achieving sustained expansion by shedding light on the transformative potential of streamlined processes and systems. It underscores the critical importance of embracing efficiency and innovation in navigating the dynamic challenges of today's marketplace, ultimately paving the way for long-term success and resilience in an increasingly competitive landscape.
                        </p>
                    </div>

                </div>

                {/* Bottom Section: Process Cards (Three-Column Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {processCards.map((card, index) => (
                        <div
                            key={index}
                            className="relative h-96 rounded-xl overflow-hidden group cursor-pointer transform hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl"
                        >
                            {/* Background Image */}
                            <img
                                src={card.image}
                                alt={card.label}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-[#142C4C]/90 transition-all duration-500"></div>

                            {/* Card Content (Bottom Left) */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-3 transform group-hover:translate-x-1 transition-transform duration-300">
                                {/* Step Indicator Box */}
                                <div className="bg-white text-black w-8 h-8 flex items-center justify-center font-bold font-serif text-sm flex-shrink-0 group-hover:bg-[#D4A259] group-hover:scale-110 transition-all duration-300">
                                    {card.letter}
                                </div>

                                {/* Label Text */}
                                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#D4A259] transition-colors duration-300">
                                    {card.label}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
