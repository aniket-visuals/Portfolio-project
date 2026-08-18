import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

const ShortVideoItem = ({ videoUrl, index }: { videoUrl: string, index: number }) => {
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
        <div className="group hover-trigger relative aspect-[9/16] glass-panel rounded-lg overflow-hidden border border-white/5 transition-colors duration-300 group-hover:border-primary/40">
            <video 
                ref={videoRef}
                className="w-full h-full object-cover" 
                src={videoUrl} 
                title={`Short ${index}`} 
                controls
                playsInline
                loop
                poster={videoUrl.replace(/\.[^.]+$/, '.jpg')}
                disablePictureInPicture
                controlsList="nodownload noplaybackrate"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            ></video>
            
            {/* Overlay over the top 75% to allow click-to-pause without interfering with native controls at the bottom */}
            <div 
                className="absolute inset-x-0 top-0 h-[75%] cursor-pointer z-10"
                onClick={togglePlay}
            />

            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none transition-opacity duration-300 z-20">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(252,182,50,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-black fill-current" />
                    </div>
                </div>
            )}
        </div>
    );
};

const ShortForm: React.FC = () => {
    const VIDEOS = [
        "https://res.cloudinary.com/df5rgwdng/video/upload/v1777380889/Day_10_v3_mzaoyp.mp4",
        "https://res.cloudinary.com/df5rgwdng/video/upload/v1776639696/nov_1st_kdsol2.mov",
        "https://res.cloudinary.com/df5rgwdng/video/upload/v1777373390/new_reel_complete_nndljp.mp4",
        "https://res.cloudinary.com/df5rgwdng/video/upload/v1777372859/4k30fpsdd_z9kuho.mp4"
    ];

    return (
        <section id="short-form" className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-5">
                    <span className="w-1 h-1 rounded-full bg-primary inline-block mb-2"></span>
                    <h3 className="text-2xl md:text-3xl font-bold font-['Bricolage_Grotesque']">Short Form Content</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {VIDEOS.map((videoUrl, index) => (
                        <ShortVideoItem key={index} videoUrl={videoUrl} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShortForm;
