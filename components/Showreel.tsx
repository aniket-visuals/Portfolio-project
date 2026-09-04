import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

const Showreel: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <section id="showreel" className="py-10 px-4 relative mt-16 md:mt-24">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6">
                    <span className="w-1 h-1 rounded-full bg-primary inline-block mb-2"></span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-0 font-['Bricolage_Grotesque']">Showreel</h2>
                    <p className="text-xs md:text-sm text-gray-400">A glimpse of my creative journey in motion.</p>
                </div>

                <div className="relative aspect-video glass-panel rounded-lg overflow-hidden mb-4 border border-white/10 group hover-trigger">
                    <video 
                        ref={videoRef}
                        className="w-full h-full object-cover" 
                        src="https://res.cloudinary.com/df5rgwdng/video/upload/v1779121920/Day_14_l26n53.mp4" 
                        title="Showreel" 
                        controls
                        playsInline
                        loop
                        poster="https://res.cloudinary.com/df5rgwdng/image/upload/v1777381527/Screenshot_2026-04-28_183440_obu1sw.png"
                        disablePictureInPicture
                        controlsList="nodownload noplaybackrate"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    >
                    </video>
                    
                    <div 
                        className="absolute inset-x-0 top-0 h-[75%] cursor-pointer z-10"
                        onClick={togglePlay}
                    />
                    
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none transition-opacity duration-300 z-20">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(252,182,50,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-8 h-8 text-black fill-current" />
                            </div>
                        </div>
                    )}
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