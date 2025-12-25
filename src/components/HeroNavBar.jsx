import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight, Sparkles, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export default function HeroNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Detect current page
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') {
      return activePath === '/';
    }
    return activePath.startsWith(href);
  };

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.service, href: '/service' },
    { label: t.nav.model, href: '/project' },
    { label: t.nav.founder, href: '/team' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.contact, href: '/contact' }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0a1628]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#05101E] to-[#0A1F3D] animate-gradient"></div>

      {/* Hero Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop&q=80')`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Animated Octave Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#C19A6B]/30 to-transparent top-[20%] -left-1/2 transform -rotate-6 animate-pulse"></div>
        <div className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent top-[35%] -left-1/2 transform -rotate-3 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#C19A6B]/20 to-transparent top-[50%] -left-1/2 transform -rotate-1 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent top-[65%] -left-1/2 transform rotate-2 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#C19A6B]/20 to-transparent top-[80%] -left-1/2 transform rotate-4 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#C19A6B]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#05101E]/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>

      {/* Navigation Bar */}
      <nav className={`${isScrolled ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className={`flex justify-between items-center rounded-2xl px-8 py-4 transition-all duration-500 ${isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-black/10'
            : 'bg-white/5 backdrop-blur-xl border border-white/10'
            }`}>

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
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden group ${isActive(link.href)
                    ? isScrolled
                      ? 'bg-gradient-to-r from-[#05101E] to-[#0A1F3D] text-white shadow-lg'
                      : 'bg-white/20 text-white backdrop-blur-sm'
                    : isScrolled
                      ? 'text-[#05101E] hover:bg-gray-100'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive(link.href) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C19A6B]/20 to-transparent opacity-50"></div>
                  )}
                </a>
              ))}
            </div>

            {/* Right Side - Language & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${isScrolled
                    ? 'text-[#05101E] hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase">{currentLang.code}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-slideDown">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${language === lang.code ? 'text-[#C19A6B] font-bold bg-[#C19A6B]/5' : 'text-gray-700'
                          }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </span>
                        {language === lang.code && <Check className="w-3 h-3" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Primary CTA Button */}
              <a
                href="/contact"
                className="group relative px-7 py-3 bg-gradient-to-r from-[#C19A6B] to-[#A07855] text-white rounded-xl text-sm font-bold transition-all duration-300 shadow-lg shadow-[#C19A6B]/25 hover:shadow-xl hover:shadow-[#C19A6B]/40 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {t.nav.getScore}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#A07855] to-[#C19A6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
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
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl lg:hidden animate-slideDown">
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`px-5 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${isActive(link.href)
                    ? 'bg-gradient-to-r from-[#05101E] to-[#0A1F3D] text-white'
                    : 'text-[#05101E] hover:bg-gray-100'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Language Selector */}
              <div className="px-5 py-4 border-t border-gray-100 mt-2">
                <p className="text-sm text-gray-500 mb-3">Select Language</p>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`px-3 py-2 rounded-lg text-sm border ${language === lang.code
                        ? 'bg-[#C19A6B] text-white border-[#C19A6B]'
                        : 'bg-white text-gray-600 border-gray-200'
                        }`}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="/contact"
                className="mt-4 text-center bg-gradient-to-r from-[#C19A6B] to-[#A07855] text-white py-4 rounded-xl font-bold shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.getScore}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-start max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-[#C19A6B]" />
            <span className="text-sm text-white/90 font-medium">{t.hero.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.05] mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {t.hero.title} <br />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C19A6B] via-[#D2B48C] to-[#C19A6B] animate-shimmer bg-[length:200%_100%]">{t.hero.titleHighlight}</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <a
              href="#score"
              className="group relative px-10 py-5 bg-gradient-to-r from-[#C19A6B] to-[#A07855] text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl shadow-[#C19A6B]/30 hover:shadow-[#C19A6B]/50 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#framework"
              className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white hover:text-[#05101E] transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t.hero.ctaSecondary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Indicators - Removed */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
