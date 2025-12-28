import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

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
        { label: 'Project', href: '/project' },
        { label: 'Team', href: '/team' },
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
            : 'bg-[#05101E]'
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
                                        ? 'bg-[#05101E] text-white shadow-lg'
                                        : 'bg-white text-[#05101E] shadow-lg'
                                    : isScrolled
                                        ? 'text-[#05101E] hover:bg-gray-200'
                                        : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Language and CTA removed */}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className={isScrolled ? 'text-[#05101E]' : 'text-white'} size={28} />
                        ) : (
                            <Menu className={isScrolled ? 'text-[#05101E]' : 'text-white'} size={28} />
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
                                    ? 'bg-[#05101E] text-white'
                                    : 'text-[#05101E] hover:bg-gray-100'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}

                    </div>
                </div>
            )}
        </nav>
    );
}
