import React, { useEffect, useState } from 'react';

export default function CursorEffect() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on desktop
        if (window.matchMedia('(pointer: coarse)').matches) {
            return;
        }

        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const updatePointer = (e) => {
            const target = e.target;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';
            setIsPointer(isClickable);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        document.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseover', updatePointer);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseover', updatePointer);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    // Don't render on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            {/* Main Cursor */}
            <div
                className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    left: position.x,
                    top: position.y,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`
                }}
            >
                <div className={`w-4 h-4 bg-white rounded-full transition-all duration-200 ${isPointer ? 'scale-150' : ''}`}></div>
            </div>

            {/* Trailing Cursor */}
            <div
                className={`fixed pointer-events-none z-[9998] transition-all duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <div className={`w-10 h-10 border border-[#D4AF37]/50 rounded-full transition-all duration-300 ${isPointer ? 'scale-150 border-[#D4AF37]' : ''}`}></div>
            </div>

            {/* Hide default cursor */}
            <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
        </>
    );
}
