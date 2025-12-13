import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles, ChevronDown } from 'lucide-react';

export default function ServiceNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePath, setActivePath] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Detect current page
        if (typeof window !== 'undefined') {
            setActivePath(window.location.pathname);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Service', href: '/service' },
        { label: 'Model', href: '/model' },
        { label: 'Founder', href: '/founder' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
    ];

    const isActive = (href) => {
        if (href === '/') {
            return activePath === '/';
        }
        return activePath.startsWith(href);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-white shadow-2xl shadow-black/10'
            : 'bg-[#132C4A]'
            }`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <a href="/" className="flex items-center group">
                        <img
                            src="/image/leadoctave-logo.png"
                            alt="LeadOctave"
                            className={`h-10 md:h-12 transition-all duration-500 group-hover:scale-105 ${isScrolled ? '' : 'brightness-0 invert'
                                }`}
                        />
                    </a>

                    {/* Centered Navigation Links */}
                    <div className={`hidden lg:flex items-center gap-1 rounded-full px-2 py-1 ${isScrolled ? 'bg-gray-100' : 'bg-black/20'}`}>
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive(link.href)
                                    ? isScrolled
                                        ? 'bg-[#132C4A] text-white shadow-lg'
                                        : 'bg-white text-[#132C4A] shadow-lg'
                                    : isScrolled
                                        ? 'text-[#132C4A] hover:bg-gray-200'
                                        : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${isScrolled
                            ? 'text-[#132C4A] hover:bg-gray-100'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                            }`}>
                            <Globe className="w-4 h-4" />
                            <span className="text-sm font-medium">EN</span>
                            <ChevronDown className="w-3 h-3" />
                        </button>

                        <a
                            href="/contact"
                            className="group relative px-7 py-3 bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white rounded-xl text-sm font-bold transition-all duration-300 shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/50 hover:scale-105 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                Get Your Octave Score
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#c9a430] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className={isScrolled ? 'text-[#132C4A]' : 'text-white'} size={28} />
                        ) : (
                            <Menu className={isScrolled ? 'text-[#132C4A]' : 'text-white'} size={28} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-2xl lg:hidden animate-slideDown">
                    <div className="flex flex-col p-6 gap-2">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={`px-5 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${isActive(link.href)
                                    ? 'bg-[#132C4A] text-white'
                                    : 'text-[#132C4A] hover:bg-gray-100'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="/contact"
                            className="mt-4 text-center bg-gradient-to-r from-[#D4AF37] to-[#c9a430] text-white py-4 rounded-xl font-bold shadow-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Your Octave Score
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
