import React from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
function handleScroll(e: React.MouseEvent<HTMLAnchorElement,MouseEvent>,arg1: string): void {
throw new Error('Function not implemented.');
}

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-12">
            <div className="absolute inset-0 bg-grid z-0"></div>
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]"></div>

            <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-sm opacity-0 animate-slide-up-elastic">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-blink shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]"></span>
                    <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">Open to work</span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight opacity-0 animate-slide-up-elastic" style={{ animationDelay: '0.1s' }}>
                    Every Great Story <span className="text-primary inline-block animate-float">✦</span><br />
                    <a href="#showreel" className="text-gradient hover-trigger cursor-pointer transition-opacity hover:opacity-80">
                        Deserves a Great Editor.
                    </a>
                </h1>

                <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto leading-relaxed opacity-0 animate-slide-up-elastic" style={{ animationDelay: '0.2s' }}>
                    Clean edits that turn views into clients. High-impact storytelling for creators and brands.
                </p>

                <div className="flex flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-slide-up-elastic" style={{ animationDelay: '0.3s' }}>
                    <a 
                        href="https://calendly.com/ankit121345123/30min?month=2025-12" 
                        className="px-6 py-3 rounded-full text-sm font-bold w-auto hover-trigger btn-liquid-primary"
                    >
                        Book a Call
                    </a>
                    <a 
                        href="#showreel" 
                        onClick={(e) => handleScroll(e, 'contact')}
                        className="px-6 py-3 rounded-full text-sm font-bold w-auto hover-trigger btn-liquid-secondary"
                    >
                        See Portfolio
                    </a>
                </div>

                <div className="flex flex-col items-center gap-2 opacity-0 animate-pop-elastic" style={{ animationDelay: '0.4s' }}>
                    <div className="flex -space-x-2">
                        <img src="https://res.cloudinary.com/df5rgwdng/image/upload/v1774390101/high-1774389960_ehpvh9.jpg" className="w-8 h-8 rounded-full border border-dark" alt="Client" />
                        <img src="https://res.cloudinary.com/df5rgwdng/image/upload/v1774390325/479499375_622414950386874_6207510539453852578_n_ru9tnj.jpg" className="w-8 h-8 rounded-full border border-dark" alt="Client" />
                        <img src="https://res.cloudinary.com/df5rgwdng/image/upload/v1774393227/BzK24ZikXCqyabOzlDt8R9Q5rDA_rohyw4.webp" className="w-8 h-8 rounded-full border border-dark" alt="Client" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                        </div>
                        <span>50+ Happy Customers</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;