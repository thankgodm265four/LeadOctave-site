import React from 'react';
import { Quote } from 'lucide-react';

export default function QuoteSection() {
    return (
        <div className="w-full bg-white py-20 md:py-32 px-6 md:px-16">
            <div className="max-w-5xl mx-auto">

                {/* Quote Container */}
                <div className="relative flex items-center justify-center">

                    {/* Left Quote Mark */}
                    <div className="absolute left-0 md:left-[-80px] top-0">
                        <Quote className="w-16 h-16 md:w-20 md:h-20 text-[#22c55e] fill-[#22c55e] opacity-90" />
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-center px-8 md:px-16">
                        <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#132C4A] leading-tight">
                            We don't just navigate business complexities; we architect transformative solutions. Our commitment goes beyond consultancy
                        </p>
                    </blockquote>

                    {/* Right Quote Mark */}
                    <div className="absolute right-0 md:right-[-80px] bottom-0 transform rotate-180">
                        <Quote className="w-16 h-16 md:w-20 md:h-20 text-[#22c55e] fill-[#22c55e] opacity-90" />
                    </div>

                </div>

            </div>
        </div>
    );
}
