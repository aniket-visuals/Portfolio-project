import React from 'react';
import { ArrowRight } from 'lucide-react';

const LongForm: React.FC = () => {
    const ITEMS = [
        {
            videoId: "Kp4lS6bc0j4",
        },
        {
            videoId: "bX7Qd-QNql8",
        },
        {
            videoId: "5bY40eHEHDA",
        },
        {
            videoId: "BWJ0rmvbFqk",
        },
        {
            videoId: "Wq75suUAEEo",
        },
        {
            videoId: "uBb9J_craPA",
        }
        
        
    ];

    return (
        <section className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-5">
                    <span className="w-1 h-1 rounded-full bg-primary inline-block mb-2"></span>
                    <h3 className="text-xl font-bold">Long Form Content</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    {ITEMS.map((item, index) => (
                        <div key={index} className="group hover-trigger">
                            <div className="relative aspect-video glass-panel rounded-lg overflow-hidden mb-2 border border-white/5 transition-colors duration-300 group-hover:border-primary/40">
                                <iframe 
                                    className="w-full h-full" 
                                    src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1`} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <a href="#showreel" className="px-6 py-3 rounded-full text-[10px] font-bold inline-flex items-center gap-2 hover-trigger btn-liquid-secondary">
                        Explore More Edits <ArrowRight className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LongForm;