import { useState, useEffect } from 'react';

// Translation Dictionary
export const translations = {
    en: {
        nav: {
            home: 'Home',
            service: 'Service',
            model: 'Model',
            founder: 'Founder',
            about: 'About',
            contact: 'Contact',
            getScore: 'Get Your Octave Score'
        },
        hero: {
            badge: 'Transform Your Leadership Today',
            title: 'Build Leadership That',
            titleHighlight: 'Lasts Beyond You',
            subtitle: 'LeadOctave helps leaders, teams, and organizations move from chaos to cadence through trust, clear systems, and sustainable leadership practices.',
            ctaPrimary: 'Get Your Octave Score',
            ctaSecondary: 'Explore the LeadOctave Framework',
            stats: '500+ Leaders',
            statsSub: 'Transformed their organizations'
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            service: 'Servicios',
            model: 'Modelo',
            founder: 'Fundador',
            about: 'Nosotros',
            contact: 'Contacto',
            getScore: 'Obtén tu Puntaje'
        },
        hero: {
            badge: 'Transforma tu Liderazgo Hoy',
            title: 'Construye un Liderazgo que',
            titleHighlight: 'Perdure Más Allá de Ti',
            subtitle: 'LeadOctave ayuda a líderes, equipos y organizaciones a pasar del caos a la cadencia a través de la confianza, sistemas claros y prácticas de liderazgo sostenibles.',
            ctaPrimary: 'Obtén tu Puntaje Octave',
            ctaSecondary: 'Explora el Marco LeadOctave',
            stats: '500+ Líderes',
            statsSub: 'Transformaron sus organizaciones'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            service: 'Services',
            model: 'Modèle',
            founder: 'Fondateur',
            about: 'À Propos',
            contact: 'Contact',
            getScore: 'Obtenez votre Score'
        },
        hero: {
            badge: 'Transformez votre Leadership Aujourd\'hui',
            title: 'Bâtissez un Leadership qui',
            titleHighlight: 'Dure Au-delà de Vous',
            subtitle: 'LeadOctave aide les dirigeants, les équipes et les organisations à passer du chaos à la cadence grâce à la confiance, des systèmes clairs et des pratiques de leadership durables.',
            ctaPrimary: 'Obtenez votre Score Octave',
            ctaSecondary: 'Découvrez le Cadre LeadOctave',
            stats: '500+ Dirigeants',
            statsSub: 'Ont transformé leurs organisations'
        }
    },
    de: {
        nav: {
            home: 'Startseite',
            service: 'Leistungen',
            model: 'Modell',
            founder: 'Gründer',
            about: 'Über Uns',
            contact: 'Kontakt',
            getScore: 'Holen Sie sich Ihren Score'
        },
        hero: {
            badge: 'Transformieren Sie Ihre Führung Heute',
            title: 'Bauen Sie Führung, die',
            titleHighlight: 'Über Sie Hinaus Bestand Hat',
            subtitle: 'LeadOctave hilft Führungskräften, Teams und Organisationen, durch Vertrauen, klare Systeme und nachhaltige Führungspraktiken vom Chaos zum Rhythmus zu gelangen.',
            ctaPrimary: 'Holen Sie sich Ihren Octave Score',
            ctaSecondary: 'Entdecken Sie das LeadOctave Framework',
            stats: '500+ Führungskräfte',
            statsSub: 'Haben ihre Organisationen transformiert'
        }
    }
};

// Event for language changes
const LANGUAGE_EVENT = 'language-change';

export const getLanguage = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('language') || 'en';
    }
    return 'en';
};

export const setLanguage = (lang) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('language', lang);
        window.dispatchEvent(new CustomEvent(LANGUAGE_EVENT, { detail: lang }));
    }
};

// Hook for React components
export const useLanguage = () => {
    const [language, setLangState] = useState('en');

    useEffect(() => {
        // Initialize
        setLangState(getLanguage());

        // Listen for changes
        const handleLanguageChange = (e) => {
            setLangState(e.detail);
        };

        window.addEventListener(LANGUAGE_EVENT, handleLanguageChange);
        return () => window.removeEventListener(LANGUAGE_EVENT, handleLanguageChange);
    }, []);

    return {
        language,
        setLanguage,
        t: translations[language] || translations['en']
    };
};
