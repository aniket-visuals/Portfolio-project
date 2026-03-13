import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VIDEOS = [
            "FV-ZXEiSnnY",
            "7az8YM4ctZs", 
            "UnFHAvSdYgg",
            "F1CLBnEOFrA", 
            "uPm4uIP1jCU",
            "c4xT5L6v7rU",
            "c4xT5L6v7rU"
];

const DISPLAY_ITEMS = [...VIDEOS, ...VIDEOS, ...VIDEOS];

const ShortFormCarousel: React.FC = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Initialize in the middle of the generated list for infinite scroll effect
    const videoCount = VIDEOS.length;
    const currentIndexRef = useRef(Math.floor(DISPLAY_ITEMS.length / 2));
    
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
            const overlay = item.querySelector('.overlay-dim') as HTMLElement;
            const iframe = item.querySelector('iframe') as HTMLElement;

            let scale = 0.85;
            let zIndex = 0;
            let dimOpacity = 0.6;
            let isFocused = false;

            if (dist < 300) {
                const factor = 1 - (dist / 300);
                scale = 0.85 + (Math.pow(factor, 1.5) * 0.45);
                zIndex = Math.round(factor * 20);
                dimOpacity = 0.6 - (factor * 0.8);
                if (dimOpacity < 0) dimOpacity = 0;

                if (factor > 0.8) {
                    isFocused = true;
                }
            }

            item.style.transform = `scale(${scale})`;
            item.style.zIndex = zIndex.toString();
            
            if (isFocused) {
                item.style.borderColor = 'rgba(252, 182, 50, 0.5)';
                item.style.boxShadow = '0 10px 40px rgba(0,0,0,0.5)';
                if (iframe) iframe.style.pointerEvents = 'auto';
            } else {
                item.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                item.style.boxShadow = 'none';
                if (iframe) iframe.style.pointerEvents = 'none';
            }

            if (overlay) {
                overlay.style.backgroundColor = `rgba(0, 0, 0, ${dimOpacity})`;
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

        trackRef.current.style.transition = animate ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" : "none";
        trackRef.current.style.transform = `translateX(${newTranslateX}px)`;
    }, []);

    const handleTransitionEnd = useCallback(() => {
        isAnimatingRef.current = false;

        let snappedIndex = currentIndexRef.current;
        let needsSnap = false;
        
        // Dynamic snapping logic based on VIDEOS length
        const totalItems = DISPLAY_ITEMS.length;
        const singleSetCount = VIDEOS.length;

        // If we've scrolled into the 3rd set (repetition), snap back to 2nd set
        if (currentIndexRef.current >= 2 * singleSetCount) {
            snappedIndex = currentIndexRef.current - singleSetCount;
            needsSnap = true;
        } 
        // If we've scrolled into the 1st set, snap forward to 2nd set
        else if (currentIndexRef.current < singleSetCount) {
            snappedIndex = currentIndexRef.current + singleSetCount;
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
                
                if (!currentItem) return;

                const centerOffset = (containerWidth / 2) - (itemWidth / 2);
                const newTranslateX = -(currentItem.offsetLeft - centerOffset);
                
                trackRef.current.style.transform = `translateX(${newTranslateX}px)`;
                
                // Force reflow
                void trackRef.current.offsetWidth;
                updateVisuals();
            }
        }
    }, [updateVisuals]);

    const moveScroll = (direction: 'prev' | 'next') => {
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
        }, 550); 
    };

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
        <section className="py-14 px-4 bg-white/5 relative overflow-hidden">
            {/* Top Rainbow Glow Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-transparent opacity-80 shadow-[0_0_15px_rgba(252,182,50,0.5)]"></div>

            <div className="max-w-6xl mx-auto relative group">
                <div className="flex items-end justify-between mb-8 px-4">
                    <div>
                        <h3 className="text-xl font-bold mb-1">Short Form Edits</h3>
                        <p className="text-xs text-gray-400">TikToks, Reels, and Shorts designed to retain.</p>
                    </div>
                </div>

                <button 
                    onClick={() => moveScroll('prev')}
                    className="absolute left-4 md:left-[calc(50%-280px)] top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover-trigger btn-liquid-icon hover:scale-110 group/btn"
                >
                    <ChevronLeft className="w-6 h-6 stroke-[3] group-hover/btn:text-primary transition-colors" />
                </button>
                
                <button 
                    onClick={() => moveScroll('next')}
                    className="absolute right-4 md:right-[calc(50%-280px)] top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover-trigger btn-liquid-icon hover:scale-110 group/btn"
                >
                    <ChevronRight className="w-6 h-6 stroke-[3] group-hover/btn:text-primary transition-colors" />
                </button>

                <div ref={containerRef} className="relative w-full overflow-hidden mask-gradient py-32">
                    <div 
                        ref={trackRef} 
                        onTransitionEnd={handleTransitionEnd}
                        className="flex items-center will-change-transform"
                    >
                        {DISPLAY_ITEMS.map((videoId, i) => (
                            <div 
                                key={i} 
                                className="flex-shrink-0 w-[180px] md:w-[200px] -ml-12 aspect-[9/16] glass-panel rounded-2xl overflow-hidden relative group origin-center border border-white/5"
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=0&playsinline=1&loop=1&playlist=${videoId}`}
                                    className="w-full h-full object-cover pointer-events-none"
                                    title={`Short ${i}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <div className="absolute inset-0 bg-black/60 pointer-events-none overlay-dim transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-6">
                    <a href="#showreel" className="px-6 py-3 rounded-full text-[10px] font-bold inline-flex items-center gap-2 hover-trigger btn-liquid-secondary">
                        Explore More Edits <ChevronRight className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Bottom Rainbow Glow Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-transparent opacity-80 shadow-[0_0_15px_rgba(252,182,50,0.5)]"></div>
        </section>
    );
};

export default ShortFormCarousel;