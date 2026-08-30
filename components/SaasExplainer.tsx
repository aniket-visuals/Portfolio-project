import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface VideoItem {
    videoId: string;
    title: string;
    description: string;
    projectUrl: string;
}

const VideoCard: React.FC<{ item: VideoItem }> = ({ item }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="group hover-trigger flex flex-col gap-3">
            <div className="relative aspect-video glass-panel rounded-lg overflow-hidden border border-white/5 transition-colors duration-300 group-hover:border-primary/40 bg-black">
                {!isPlaying ? (
                    <div 
                        className="absolute inset-0 cursor-pointer group/play"
                        onClick={() => setIsPlaying(true)}
                    >
                        <img 
                            src={`https://i.ytimg.com/vi/${item.videoId}/maxresdefault.jpg`}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/play:scale-105"
                            onError={(e) => {
                                // Fallback to lower res if maxres doesn't exist
                                (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`;
                            }}
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover/play:bg-black/20">
                            <div className="w-16 h-12 bg-black/80 rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover/play:bg-red-600 group-hover/play:scale-110">
                                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ) : (
                    <iframe 
                        className="w-full h-full absolute inset-0" 
                        src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1&controls=0`} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                )}
            </div>
            
            <div className="flex items-start justify-between px-1">
                <div className="flex flex-col text-left mr-4">
                    <h4 className="text-white font-semibold text-sm md:text-base">{item.title}</h4>
                    <p className="text-gray-400 text-xs md:text-sm mt-0.5 line-clamp-1">{item.description}</p>
                </div>
                <a 
                    href={item.projectUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-medium whitespace-nowrap group/link mt-0.5"
                >
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    See Project Details
                </a>
            </div>
        </div>
    );
};

const SaasExplainer: React.FC = () => {
    const ITEMS = [
        {
            videoId: "XfL5m4GHs3Y",
            title: "Cooveb Launch Video",
            description: "AI-powered hotel discovery platform",
            projectUrl: "https://www.behance.net/gallery/254802257/Cooveb-AI-Powered-Hotel-Discovery-SaaS-Launch-Video"
        },
        {
            videoId: "nZ_tsvCeFfI",
            title: "Saas recreation video",
            description: "practice project",
            projectUrl: "#"
        },
        {
            videoId: "K6rswtPW66c",
            title: "OmniTool launch video",
            description: "After effects all in one tool",
            projectUrl: "#"
        },
        {
            videoId: "6AeKDHvQLrM",
            title: "Google flow",
            description: "practice project",
            projectUrl: "#"
        }
    ];

    return (
        <section id="saas-explainer" className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-5">
                    <span className="w-1 h-1 rounded-full bg-primary inline-block mb-2"></span>
                    <h3 className="text-2xl md:text-3xl font-bold font-['Bricolage_Grotesque']">SaaS Explainer Videos</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-8">
                    {ITEMS.map((item, index) => (
                        <VideoCard key={index} item={item} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#showreel" className="px-6 py-3 rounded-full text-[10px] font-bold inline-flex items-center gap-2 hover-trigger btn-liquid-secondary">
                        Explore More Edits <ArrowRight className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SaasExplainer;
