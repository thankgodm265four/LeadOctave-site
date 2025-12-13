import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, X, Calendar, Phone, Mail } from 'lucide-react';

export default function FloatingElements() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showQuickActions, setShowQuickActions] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickActions = [
        { icon: <Calendar className="w-5 h-5" />, label: "Book a Call", href: "/contact", color: "from-blue-500 to-indigo-600" },
        { icon: <Phone className="w-5 h-5" />, label: "Call Us", href: "tel:+1234567890", color: "from-emerald-500 to-teal-600" },
        { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:hello@leadoctave.com", color: "from-purple-500 to-pink-500" }
    ];

    return (
        <>
            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-[#132C4A] to-[#1a3a5c] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-[#132C4A]/50 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6" />
            </button>

            {/* Quick Actions FAB */}
            <div className="fixed bottom-8 left-8 z-50">
                {/* Action Buttons */}
                <div className={`absolute bottom-20 left-0 flex flex-col gap-3 transition-all duration-300 ${showQuickActions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}>
                    {quickActions.map((action, index) => (
                        <a
                            key={index}
                            href={action.href}
                            className={`group flex items-center gap-3 p-3 bg-gradient-to-r ${action.color} rounded-full shadow-lg hover:scale-110 transition-all duration-300`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <span className="text-white">{action.icon}</span>
                            <span className="text-white text-sm font-medium pr-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {action.label}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Main FAB Button */}
                <button
                    onClick={() => setShowQuickActions(!showQuickActions)}
                    className={`w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white rounded-full shadow-2xl shadow-[#D4AF37]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[#D4AF37]/50 ${showQuickActions ? 'rotate-45' : ''
                        }`}
                    aria-label="Quick actions"
                >
                    {showQuickActions ? (
                        <X className="w-7 h-7" />
                    ) : (
                        <MessageCircle className="w-7 h-7" />
                    )}
                </button>

                {/* Pulse Ring */}
                {!showQuickActions && (
                    <div className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-20"></div>
                )}
            </div>

            {/* Progress Bar */}
            <ProgressBar />
        </>
    );
}

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const newProgress = (scrollTop / docHeight) * 100;
            setProgress(newProgress);
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
            <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-400 transition-all duration-100"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
