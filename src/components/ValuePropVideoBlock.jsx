import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function ValuePropVideoBlock() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="w-full bg-white py-20 md:py-32 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-[#05101E] leading-tight mb-16 md:mb-20 max-w-4xl mx-auto">
                    Achieving growth relies on taking straightforward & automated measures.
                </h2>

                {/* Video Block */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">

                    {/* Background Image/Video Thumbnail */}
                    <img
                        src="/image/diverse-team.jpg"
                        alt="Professional team collaboration"
                        loading="lazy"
                        width="1200"
                        height="800"
                        className="w-full h-full object-cover"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300 hover:bg-gray-50"
                            aria-label="Play video"
                        >
                            {/* Play Icon */}
                            <Play className="w-8 h-8 md:w-10 md:h-10 text-black ml-1 fill-black" />
                        </button>
                    </div>

                </div>

                {/* Optional: Video Modal */}
                {isPlaying && (
                    <div
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={() => setIsPlaying(false)}
                    >
                        <div className="relative w-full max-w-6xl aspect-video">
                            <button
                                onClick={() => setIsPlaying(false)}
                                className="absolute -top-12 right-0 text-white hover:text-[#D2B48C] transition-colors"
                                aria-label="Close video"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Replace with actual video embed */}
                            <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                                <p className="text-white text-xl">Video player would go here</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
