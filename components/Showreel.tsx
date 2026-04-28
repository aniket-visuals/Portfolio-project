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
                    <video 
                        className="w-full h-full object-cover" 
                        src="https://res.cloudinary.com/df5rgwdng/video/upload/q_auto/f_auto/v1776586624/Final_with_song_snk1yv.mov" 
                        title="Showreel" 
                        controls
                        playsInline
                        loop
                        poster="https://res.cloudinary.com/df5rgwdng/image/upload/v1777381527/Screenshot_2026-04-28_183440_obu1sw.png"
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noplaybackrate"
                    >
                    </video>
                </div>

                <div className="flex justify-center mt-2">
                    <div className="flex flex-wrap justify-center gap-2 text-[8px] font-bold tracking-widest text-primary uppercase">
                        <span>Video Editing</span>
                        <span className="text-gray-600">|</span>
                        <span>Motion Graphics</span>
                        <span className="text-gray-600">|</span>
                        <span>Saas Video</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showreel;