import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
    { quote: "Honestly, it was a really great experience. I received every edit on time, and the editing skills he possesses are excellent.", author: "Smith Roy", role: "Agency Owner", image: "https://res.cloudinary.com/df5rgwdng/image/upload/v1774390466/cropped_circle_image_ef9hgz.png" },
    { quote: "Loved the edit—so smooth and well-crafted! The attention to detail was amazing, and the quick turnaround made it even better. Great job!.", author: "Lars", role: "Youtube Entrepreneur", image: "https://res.cloudinary.com/df5rgwdng/image/upload/v1774393227/Ot4ZqEfYu9Zq4jV4JtSjGVRMtlQ_rc35l3.avif" },
    { quote: "Incredible work! This is exactly what I was looking for. The quality is insane, and the fast delivery makes it even more impressive. Amazing job, mate!", author: "Carlo Smolders", role: "Youtuber & Creator", image: "https://res.cloudinary.com/df5rgwdng/image/upload/v1774393227/BzK24ZikXCqyabOzlDt8R9Q5rDA_rohyw4.webp" },
    { quote: "The video was edited exceptionally well, with great attention to detail. I’m also impressed by the fast turnaround—fantastic work!", author: "Rayan", role: "Channel Manager", image: "https://res.cloudinary.com/df5rgwdng/image/upload/v1774393227/faggCnasOmNAlEJrLlZ3YysFNU_vfosyt.webp" },
    { quote: "You really delivered on this one—super impressive work! The smooth animations and well-timed keyframes look fantastic.", author: "Yash", role: "Youtuber & Channel owner", image: "https://res.cloudinary.com/df5rgwdng/image/upload/v1774393227/EEtfmg54ZFMMO7x2dNCrqf88_psm2mi.webp" },
    { quote: "Excellent work. He made the edits exactly as I expected and delivered everything on time. Really happy with the final result.", author: "Jordan Lee", role: "Content Creator", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" }
];

const DISPLAY_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

const Testimonials: React.FC = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const currentIndexRef = useRef(9); 
    const isAnimatingRef = useRef(false);
    const animationFrameRef = useRef(0);

    const updateVisuals = useCallback(() => {
        if (!containerRef.current || !trackRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        const items = Array.from(trackRef.current.children) as HTMLElement[];

        items.forEach((item) => {
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.left + itemRect.width / 2;
            const dist = Math.abs(containerCenter - itemCenter);

            let scale = 0.85;
            let zIndex = 0;
            let opacity = 0.5;
            let isFocused = false;

            if (dist < 350) {
                const factor = 1 - (dist / 350);
                scale = 0.85 + (Math.pow(factor, 1.5) * 0.25);
                zIndex = Math.round(factor * 20);
                opacity = 0.5 + (factor * 0.5);

                if (factor > 0.8) {
                    isFocused = true;
                }
            }

            item.style.transform = `scale(${scale}) translateZ(0)`;
            item.style.zIndex = zIndex.toString();
            item.style.opacity = opacity.toString();
            item.style.backfaceVisibility = 'hidden';
            item.style.WebkitBackfaceVisibility = 'hidden';
            item.style.outline = '1px solid transparent'; // Force anti-aliasing
            
            if (isFocused) {
                item.style.borderColor = 'rgba(252, 182, 50, 0.5)';
                item.style.boxShadow = '0 10px 40px rgba(0,0,0,0.5)';
                item.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'; 
            } else {
                item.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                item.style.boxShadow = 'none';
                item.style.backgroundColor = 'rgba(20, 20, 20, 0.6)'; 
            }
        });
    }, []);

    const updateTrackPosition = useCallback((animate = true) => {
        if (!trackRef.current || !containerRef.current) return;
        
        const items = Array.from(trackRef.current.children) as HTMLElement[];
        if (items.length < 2) return;

        const itemWidth = items[0].offsetWidth;
        const containerWidth = containerRef.current.offsetWidth;
        const currentItem = items[currentIndexRef.current];
        
        const centerOffset = (containerWidth / 2) - (itemWidth / 2);
        if (!currentItem) return;

        const newTranslateX = -(currentItem.offsetLeft - centerOffset);

        trackRef.current.style.transition = animate ? "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)" : "none";
        trackRef.current.style.transform = `translateX(${newTranslateX}px)`;
    }, []);

    const handleTransitionEnd = useCallback((e?: React.TransitionEvent) => {
        if (e && e.target !== trackRef.current) return;
        isAnimatingRef.current = false;

        let snappedIndex = currentIndexRef.current;
        let needsSnap = false;

        if (currentIndexRef.current >= 12) {
            snappedIndex = currentIndexRef.current - 6;
            needsSnap = true;
        } else if (currentIndexRef.current <= 5) {
            snappedIndex = currentIndexRef.current + 6;
            needsSnap = true;
        }

        if (needsSnap) {
            currentIndexRef.current = snappedIndex;
            
            if (trackRef.current && containerRef.current) {
                trackRef.current.style.transition = 'none';
                
                const items = Array.from(trackRef.current.children) as HTMLElement[];
                const itemWidth = items[0].offsetWidth;
                const containerWidth = containerRef.current.offsetWidth;
                const currentItem = items[snappedIndex];
                const centerOffset = (containerWidth / 2) - (itemWidth / 2);
                const newTranslateX = -(currentItem.offsetLeft - centerOffset);
                
                trackRef.current.style.transform = `translateX(${newTranslateX}px)`;
                void trackRef.current.offsetWidth;
                updateVisuals();
            }
        }
    }, [updateVisuals]);

    const moveScroll = useCallback((direction: 'prev' | 'next') => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;

        if (direction === 'next') {
            currentIndexRef.current++;
        } else {
            currentIndexRef.current--;
        }
        
        updateTrackPosition(true);

        setTimeout(() => {
            if (isAnimatingRef.current) {
                handleTransitionEnd(); 
            }
        }, 750);
    }, [updateTrackPosition, handleTransitionEnd]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current && !containerRef.current.matches(':hover')) {
                moveScroll('next');
            }
        }, 3500);

        return () => clearInterval(interval);
    }, [moveScroll]);

    useEffect(() => {
        const loop = () => {
            updateVisuals();
            animationFrameRef.current = requestAnimationFrame(loop);
        };

        animationFrameRef.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animationFrameRef.current);
    }, [updateVisuals]);

    useEffect(() => {
        const handleResize = () => {
            updateTrackPosition(false);
        };
        
        window.addEventListener('resize', handleResize);
        const timer = setTimeout(() => updateTrackPosition(false), 50);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, [updateTrackPosition]);

    return (
        <section id="testimonials" className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto group">
                <div className="text-center mb-12">
                    <span className="w-1 h-1 rounded-full bg-primary inline-block mb-2"></span>
                    <h2 className="text-2xl font-bold">Client Love</h2>
                </div>

                <div className="relative">
                    <button 
                        onClick={() => moveScroll('prev')}
                        className="absolute left-4 md:left-[calc(50%-210px)] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover-trigger btn-liquid-icon hover:scale-110 group/btn"
                    >
                        <ChevronLeft className="w-5 h-5 stroke-[3] group-hover/btn:text-primary transition-colors" />
                    </button>
                    
                    <button 
                        onClick={() => moveScroll('next')}
                        className="absolute right-4 md:right-[calc(50%-210px)] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover-trigger btn-liquid-icon hover:scale-110 group/btn"
                    >
                        <ChevronRight className="w-5 h-5 stroke-[3] group-hover/btn:text-primary transition-colors" />
                    </button>

                    <div ref={containerRef} className="relative w-full overflow-hidden mask-gradient py-10">
                        <div 
                            ref={trackRef} 
                            onTransitionEnd={handleTransitionEnd}
                            className="flex items-center will-change-transform"
                        >
                            {DISPLAY_ITEMS.map((t, i) => (
                                <div 
                                    key={i} 
                                    className="flex-shrink-0 w-[250px] md:w-[300px] -ml-6 p-6 glass-panel rounded-2xl relative group origin-center border border-white/5 flex flex-col justify-between min-h-[200px] will-change-transform overflow-hidden"
                                >
                                    <div>
                                        <div className="flex text-primary mb-3 text-[10px] tracking-widest">★★★★★</div>
                                        <p className="text-gray-200 italic mb-6 text-xs leading-relaxed font-light">"{t.quote}"</p>
                                    </div>
                                    <div className="flex items-center gap-3 mt-auto border-t border-white/5 pt-4">
                                        {t.image ? (
                                            <img src={t.image} alt={t.author} className="w-8 h-8 rounded-full border border-white/10 object-cover" referrerPolicy="no-referrer" />
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center text-[10px] font-bold text-gray-400 border border-white/10">
                                                {t.author.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <p className="font-bold text-white text-xs">{t.author}</p>
                                            <p className="text-[9px] text-primary uppercase tracking-wider">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;