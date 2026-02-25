import React, { useEffect } from 'react';

const Showreel: React.FC = () => {
    useEffect(() => {
        return () => document.body.classList.remove('iframe-hover');
    }, []);

    const handleMouseEnter = () => document.body.classList.add('iframe-hover');
    const handleMouseLeave = () => document.body.classList.remove('iframe-hover');

    return (
        <section id="showreel" className="py-10 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6">
                    <span className="w-1 h-1 rounded-full bg-primary inline-block mb-2"></span>
                    <h2 className="text-xl font-bold mb-1">Showreel</h2>
                    <p className="text-[10px] text-gray-400">A glimpse of my creative journey in motion.</p>
                </div>

                <div 
                    className="relative aspect-video glass-panel rounded-lg overflow-hidden mb-4 border border-white/10 group hover-trigger"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <iframe 
                        className="w-full h-full" 
                        src="https://www.youtube.com/embed/6x5xtNhOts0?si=hKwu72Obof6q7sjP" 
                        title="Showreel" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    >
                    </iframe>
                </div>

                <div className="flex justify-center mt-2">
                    <div className="flex flex-wrap justify-center gap-2 text-[8px] font-bold tracking-widest text-primary uppercase">
                        <span>Video Editing</span>
                        <span className="text-gray-600">|</span>
                        <span>Motion Designing</span>
                        <span className="text-gray-600">|</span>
                        <span>Storytelling</span>
                        <span className="text-gray-600">|</span>
                        <span>Colourgrading</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showreel;