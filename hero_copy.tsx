import React from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-12 bg-[#030303]">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#030303]">
                {/* 1. WARM ATMOSPHERIC GRADIENT (UPPER-MIDDLE) */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(45,30,15,0.4)_0%,transparent_100%)]"></div>
                
                {/* 2. DISTANT PARTICLES / STARS */}
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[20%] left-[15%] blur-[0.5px] animate-pulse"></div>
                    <div className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full top-[35%] left-[80%] opacity-50"></div>
                    <div className="absolute w-[3px] h-[3px] bg-[#F5A900] rounded-full top-[10%] left-[60%] opacity-30 blur-[1px]"></div>
                    <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[45%] left-[25%] opacity-60"></div>
                    <div className="absolute w-[2px] h-[2px] bg-[#F5A900] rounded-full top-[25%] left-[40%] opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute w-[1px] h-[1px] bg-white rounded-full top-[55%] left-[75%] opacity-70"></div>
                    <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[15%] left-[90%] opacity-40 blur-[0.5px]"></div>
                    <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[30%] left-[5%] opacity-30"></div>
                </div>

                {/* 3. DIMENSIONAL HORIZON ARC (LOWER-MIDDLE) */}
                <div className="absolute left-1/2 top-[75%] w-[200vw] h-[200vw] md:w-[150vw] md:h-[150vw] -translate-x-1/2 rounded-[50%] border-t border-[#F5A900]/50 shadow-[0_-20px_80px_rgba(245,169,0,0.4)] bg-[#030303] overflow-hidden">
                    {/* Intense glow at the peak of the arc */}
                    <div className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-[50%] md:w-[40%] h-[6px] bg-[#F5A900]/80 blur-[15px]"></div>
                    <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-[30%] md:w-[20%] h-[3px] bg-[#FFC555] blur-[5px]"></div>
                </div>

                {/* 4. FILM GRAIN / NOISE */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

                {/* 5. VIGNETTE & PROTECTOR */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,3,0.5)_100%)] pointer-events-none"></div>

                {/* 6. BOTTOM ATMOSPHERIC FADE TO SHOWREEL */}
                <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303] z-[60] pointer-events-none"></div>
            </div>

            <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto pb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-sm opacity-0 animate-slide-up-elastic">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-blink shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]"></span>
                    <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">Open to work</span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[1px] mb-4 leading-none opacity-0 animate-slide-up-elastic font-['Bricolage_Grotesque']" style={{ animationDelay: '0.1s' }}>
                    <span className="relative inline-block">
                        Make Your SaaS
                        <span className="absolute -right-[1.1em] top-0 text-primary animate-float">✦</span>
                    </span>
                    <br />
                    <a href="#showreel" className="text-gradient hover-trigger cursor-pointer transition-opacity hover:opacity-80 font-['Bricolage_Grotesque']">
                        Impossible to Ignore
                    </a>
                </h1>

                <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto leading-relaxed opacity-0 animate-slide-up-elastic" style={{ animationDelay: '0.2s' }}>
                    I create motion graphics, SaaS videos, VSLs, and business content that turn complex ideas into engaging stories.
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
            </div>
            
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-pop-elastic z-20" style={{ animationDelay: '0.4s' }}>
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
        </section>
    );
};

export default Hero;