import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "", delay = "0s" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div 
            ref={ref} 
            className={`${className} ${isVisible ? 'animate-slide-up-elastic opacity-100' : 'opacity-0'}`} 
            style={{ animationDelay: delay }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;