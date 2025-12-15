import React, { useState, useRef } from 'react';
import { Play, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoShowcase() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRef = useRef(null);
    const videos = [
        {
            title: "The Octave Model™ Explained",
            description: "Discover how our 8-pillar framework transforms chaotic organizations into high-performing teams.",
            thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop&q=80",
            duration: "4:32"
        },
        {
            title: "Client Success Story: TechVision",
            description: "How TechVision achieved 93% leadership clarity improvement in just 6 weeks.",
            thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop&q=80",
            duration: "6:15"
        },
        {
            title: "Building Sustainable Leadership",
            description: "Learn the key principles behind creating leadership systems that endure.",
            thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=450&fit=crop&q=80",
            duration: "8:47"
        }
    ];

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
        setIsPlaying(false);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
        setIsPlaying(false);
    };

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-[#C19A6B]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#05101E]/5 rounded-full mb-6">
                        <Play className="w-4 h-4 text-[#05101E]" />
                        <span className="text-sm font-bold text-[#05101E] uppercase tracking-wider">Video Showcase</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#05101E] mb-6">
                        See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C19A6B] to-amber-500">Transformation</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Watch how organizations are revolutionizing their leadership with the LeadOctave approach.
                    </p>
                </div>

                {/* Video Player */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Video */}
                    <div className="lg:w-2/3">
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
                            {/* Video/Thumbnail */}
                            <img
                                src={videos[currentVideo].thumbnail}
                                alt={videos[currentVideo].title}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            {/* Play Button */}
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="absolute inset-0 flex items-center justify-center group"
                            >
                                <div className={`w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C19A6B] ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                                    <Play className="w-8 h-8 text-[#05101E] ml-1 group-hover:text-white transition-colors" fill="currentColor" />
                                </div>
                            </button>

                            {/* Video Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-4">
                                    <Play className="w-3 h-3" fill="white" />
                                    {videos[currentVideo].duration}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">{videos[currentVideo].title}</h3>
                                <p className="text-gray-300">{videos[currentVideo].description}</p>
                            </div>

                            {/* Controls */}
                            <div className="absolute bottom-8 right-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                >
                                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                </button>
                                <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                                    <Maximize className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevVideo}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextVideo}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Video List */}
                    <div className="lg:w-1/3 space-y-4">
                        {videos.map((video, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentVideo(index);
                                    setIsPlaying(false);
                                }}
                                className={`w-full flex gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${currentVideo === index
                                    ? 'bg-gradient-to-r from-[#05101E] to-[#0A1F3D] shadow-xl'
                                    : 'bg-white hover:bg-gray-50 border border-gray-100'
                                    }`}
                            >
                                {/* Thumbnail */}
                                <div className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className={`absolute inset-0 flex items-center justify-center ${currentVideo === index ? 'bg-[#C19A6B]/80' : 'bg-black/40'}`}>
                                        <Play className="w-4 h-4 text-white" fill="white" />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <h4 className={`font-bold text-sm mb-1 truncate ${currentVideo === index ? 'text-white' : 'text-[#05101E]'}`}>
                                        {video.title}
                                    </h4>
                                    <p className={`text-xs ${currentVideo === index ? 'text-gray-300' : 'text-gray-500'}`}>
                                        {video.duration}
                                    </p>
                                </div>
                            </button>
                        ))}

                        {/* View All Link */}
                        <a
                            href="#videos"
                            className="block text-center py-4 text-[#C19A6B] font-bold hover:underline"
                        >
                            View All Videos →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
