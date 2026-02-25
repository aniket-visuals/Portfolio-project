import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('.hover-trigger')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    return (
        <div 
            ref={cursorRef} 
            className={`custom-cursor fixed top-0 left-0 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out hidden md:block
                ${isHovering 
                ? 'w-8 h-8 bg-primary/40 backdrop-blur-[2px] shadow-[0_0_20px_rgba(252,182,50,0.4)]' 
                : 'w-3.5 h-3.5 bg-primary shadow-[0_0_10px_rgba(252,182,50,0.6)]'
                }`}
        />
    );
};

export default CustomCursor;