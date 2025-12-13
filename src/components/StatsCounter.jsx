import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

export default function StatsCounter() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        {
            icon: <Users className="w-8 h-8" />,
            value: 500,
            suffix: "+",
            label: "Leaders Transformed",
            color: "from-blue-500 to-indigo-600"
        },
        {
            icon: <Award className="w-8 h-8" />,
            value: 93,
            suffix: "%",
            label: "Success Rate",
            color: "from-[#D4AF37] to-amber-500"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            value: 50,
            suffix: "+",
            label: "Organizations Served",
            color: "from-emerald-500 to-teal-600"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            value: 15,
            suffix: "+",
            label: "Years of Impact",
            color: "from-purple-500 to-pink-500"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 px-6 bg-[#132C4A] relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                {stat.icon}
                            </div>

                            {/* Animated Counter */}
                            <div className="mb-2">
                                <AnimatedNumber
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    isVisible={isVisible}
                                    delay={index * 200}
                                />
                            </div>

                            {/* Label */}
                            <p className="text-gray-400 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AnimatedNumber({ value, suffix, isVisible, delay }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        const timeout = setTimeout(() => {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }, delay);

        return () => clearTimeout(timeout);
    }, [isVisible, value, delay]);

    return (
        <span className="text-5xl md:text-6xl font-bold text-white">
            {count}{suffix}
        </span>
    );
}
