import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Play } from 'lucide-react';

export default function MultiViewTestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    const testimonials = [
        {
            quote: "The Octave Model™ transformed our leadership rhythm in just 6 weeks. We now operate with unprecedented clarity and our teams are finally aligned.",
            author: "Sarah Chen",
            role: "CEO",
            company: "TechVision Inc",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
            rating: 5,
            result: "93% Clarity Improvement"
        },
        {
            quote: "Teams finally operate in alignment; execution is faster and clearer. Joshua's framework created a fundamental shift in how we lead.",
            author: "Marcus Williams",
            role: "COO",
            company: "GlobalScale Partners",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
            rating: 5,
            result: "2.5x Faster Execution"
        },
        {
            quote: "We went from constant firefighting to predictable, sustainable leadership. The systems we built with LeadOctave will outlast all of us.",
            author: "Jennifer Park",
            role: "VP of Operations",
            company: "Horizon Enterprises",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80",
            rating: 5,
            result: "70% Reduction in Conflicts"
        },
        {
            quote: "Joshua doesn't just consult—he builds. The frameworks he created for our team are now core to how we operate every single day.",
            author: "David Rodriguez",
            role: "Founder & CEO",
            company: "Apex Innovations",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
            rating: 5,
            result: "Culture Transformed"
        },
        {
            quote: "The best investment we made this year was working with LeadOctave. Our leadership team is now operating on an entirely different level.",
            author: "Amanda Foster",
            role: "Chief People Officer",
            company: "Summit Group",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80",
            rating: 5,
            result: "Employee Satisfaction +45%"
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Changed from 6000 to 5000 for faster transitions

        return () => clearInterval(timer);
    }, [isAutoPlaying, testimonials.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[#C19A6B]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C19A6B]/10 rounded-full mb-6 animate-pulse">
                        <Quote className="w-4 h-4 text-[#C19A6B]" />
                        <span className="text-sm font-bold text-[#C19A6B] uppercase tracking-wider">Client Success Stories</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#05101E] mb-6">
                        What Leaders <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C19A6B] to-amber-500">Say</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Real results from real leaders who have transformed their organizations with LeadOctave.
                    </p>
                </div>

                {/* Main Testimonial Card */}
                <div
                    className="relative max-w-4xl mx-auto"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="bg-gradient-to-br from-[#05101E] to-[#0A1F3D] rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center transition-all duration-700 ease-in-out">
                        {/* Quote Icon */}
                        <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5" />

                        {/* Result Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C19A6B] rounded-full mb-8">
                            <Star className="w-4 h-4 text-white" fill="white" />
                            <span className="text-sm font-bold text-white">{testimonials[currentIndex].result}</span>
                        </div>

                        {/* Quote */}
                        <blockquote className="text-2xl md:text-3xl text-white font-serif leading-relaxed mb-10">
                            "{testimonials[currentIndex].quote}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].author}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-[#C19A6B]"
                                />
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#C19A6B] rounded-full flex items-center justify-center">
                                    <Star className="w-3 h-3 text-white" fill="white" />
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">{testimonials[currentIndex].author}</p>
                                <p className="text-gray-400">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="absolute bottom-10 right-10 flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className="w-5 h-5 text-[#C19A6B]"
                                    fill="#C19A6B"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-[#05101E] hover:bg-[#C19A6B] hover:text-white transition-all duration-300 hover:scale-110 z-20"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-[#05101E] hover:bg-[#C19A6B] hover:text-white transition-all duration-300 hover:scale-110 z-20"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex justify-center gap-4 mt-12">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`relative transition-all duration-300 ${currentIndex === index
                                ? 'scale-110'
                                : 'opacity-50 hover:opacity-100'
                                }`}
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className={`w-12 h-12 rounded-full object-cover border-2 transition-colors ${currentIndex === index ? 'border-[#C19A6B]' : 'border-gray-200'
                                    }`}
                            />
                            {currentIndex === index && (
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#C19A6B] rounded-full"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="h-1 rounded-full transition-all duration-300 overflow-hidden bg-gray-200"
                            style={{ width: currentIndex === index ? '48px' : '16px' }}
                        >
                            <div
                                className={`h-full bg-gradient-to-r from-[#C19A6B] to-amber-500 transition-all duration-300 ${currentIndex === index ? 'w-full' : 'w-0'
                                    }`}
                                style={{
                                    animation: currentIndex === index && isAutoPlaying ? 'progress 5s linear' : 'none'
                                }}
                            />
                        </button>
                    ))}
                </div>

                {/* Auto-play Toggle */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${isAutoPlaying
                            ? 'bg-gradient-to-r from-[#C19A6B] to-amber-500 text-white'
                            : 'bg-white text-gray-700 border-2 border-gray-300'
                            }`}
                    >
                        <Play className={`w-4 h-4 ${isAutoPlaying ? 'animate-pulse' : ''}`} fill={isAutoPlaying ? 'white' : 'currentColor'} />
                        {isAutoPlaying ? 'Auto-Playing Stories' : 'Play Stories'}
                    </button>
                </div>
            </div>

            <style jsx>{`
        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
        </section>
    );
}
