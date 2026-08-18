import React from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
function handleScroll(e: React.MouseEvent<HTMLAnchorElement,MouseEvent>,arg1: string): void {
throw new Error('Function not implemented.');
}

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-12 bg-[#030303]">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                
                {/* 1. FAR BACKGROUND: DIAGONAL 3D LAYER */}
                <div className="absolute inset-0 flex items-center justify-center opacity-70">
                    <div className="absolute w-[200vw] h-[200vh]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(55deg) rotateZ(-40deg) scale(1.4)' }}>
                         {/* Solid backdrop planes */}
                         <div className="arch-panel-base arch-panel-dark w-[60%] h-[200%] left-[0%] top-[-50%]"></div>
                         <div className="arch-panel-base arch-panel-amber w-[30%] h-[150%] left-[65%] top-[-20%]"></div>
                         
                         {/* Accent diagonals */}
                         <div className="arch-panel-base arch-panel-gold w-[5%] h-[200%] left-[45%] top-[-50%] opacity-40"></div>
                         <div className="arch-panel-base arch-panel-glass w-[15%] h-[180%] right-[15%] top-[10%] arch-edge-l"></div>
                         <div className="arch-panel-base w-[2%] h-[250%] right-[30%] top-[-40%] arch-edge-r opacity-60"></div>
                    </div>
                </div>

                {/* 2. BACKGROUND: DENSE VERTICAL STRUCTURES */}
                <div className="absolute inset-0 z-0">
                    {/* Far left fill */}
                    <div className="arch-panel-base arch-panel-dark w-[20vw] h-[100vh] left-[0vw] top-[0vh]"></div>
                    <div className="arch-panel-base arch-panel-dark w-[25vw] h-[100vh] right-[0vw] top-[0vh]"></div>
                </div>

                {/* 3. MIDGROUND: LAYERED ARCHITECTURAL PATTERN */}
                {/* --- LEFT ARCHITECTURE --- */}
                <div className="arch-panel-base arch-panel-amber w-[18vw] h-[85vh] left-[2vw] bottom-[-10vh] animate-[arch-float-1_24s_ease-in-out_infinite] z-10">
                    <div className="arch-divider-y right-[30%]"></div>
                    <div className="arch-divider-x top-[35%]"></div>
                    <div className="arch-subdivision top-[40%] bottom-[10%] left-[10%] right-[40%]"></div>
                </div>
                
                <div className="arch-panel-base arch-panel-dark w-[8vw] h-[65vh] left-[15vw] top-[-5vh] arch-edge-l animate-[arch-float-2_28s_ease-in-out_infinite] z-20">
                    <div className="arch-light-travel-y" style={{ animationDelay: '2s' }}></div>
                    <div className="arch-stripes-x opacity-60"></div>
                    <div className="arch-divider-x bottom-[20%]"></div>
                </div>
                
                <div className="arch-panel-base arch-panel-gold w-[12vw] h-[55vh] left-[20vw] bottom-[10vh] animate-[arch-float-3_20s_ease-in-out_infinite] z-10 opacity-70">
                    <div className="arch-subdivision top-[15%] bottom-[15%] left-[15%] right-[15%] bg-[#201405]/50"></div>
                    <div className="arch-divider-y left-[50%]"></div>
                </div>
                
                <div className="arch-panel-base arch-panel-glass w-[5vw] h-[100vh] left-[30vw] top-[-10vh] arch-edge-r animate-[arch-float-4_32s_ease-in-out_infinite] z-30">
                     <div className="arch-divider-x top-[25%]"></div>
                     <div className="arch-divider-x top-[75%]"></div>
                </div>

                <div className="arch-panel-base arch-panel-dark w-[16vw] h-[40vh] left-[5vw] bottom-[-5vh] arch-edge-t arch-edge-amber-r animate-[arch-float-5_26s_ease-in-out_infinite] z-20">
                     <div className="arch-divider-y left-[20%]"></div>
                     <div className="arch-divider-y left-[80%]"></div>
                </div>

                {/* --- RIGHT ARCHITECTURE --- */}
                <div className="arch-panel-base arch-panel-amber w-[22vw] h-[95vh] right-[2vw] top-[-10vh] animate-[arch-float-2_26s_ease-in-out_infinite] z-10">
                    <div className="arch-divider-x top-[20%]"></div>
                    <div className="arch-divider-x top-[60%]"></div>
                    <div className="arch-divider-y left-[30%]"></div>
                    <div className="arch-subdivision top-[25%] bottom-[45%] left-[40%] right-[10%]"></div>
                </div>
                
                <div className="arch-panel-base arch-panel-dark w-[10vw] h-[75vh] right-[18vw] bottom-[-15vh] arch-edge-amber-l animate-[arch-float-1_22s_ease-in-out_infinite] z-20">
                    <div className="arch-light-travel-y" style={{ animationDelay: '5s', left: 'auto', right: '-1px' }}></div>
                    <div className="arch-stripes-x opacity-40"></div>
                </div>
                
                <div className="arch-panel-base arch-panel-gold w-[8vw] h-[60vh] right-[26vw] top-[15vh] animate-[arch-float-3_24s_ease-in-out_infinite] z-10 opacity-60">
                    <div className="arch-divider-y left-[50%]"></div>
                    <div className="arch-subdivision top-[40%] bottom-[10%] left-[15%] right-[15%] bg-[#1a0f05]/80"></div>
                </div>
                
                <div className="arch-panel-base arch-panel-glass w-[4vw] h-[85vh] right-[32vw] bottom-[5vh] arch-edge-l animate-[arch-float-5_21s_ease-in-out_infinite] z-30">
                    <div className="arch-light-travel-y" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="arch-panel-base arch-panel-dark w-[14vw] h-[45vh] right-[10vw] bottom-[0vh] arch-edge-t border-[#3A2108] animate-[arch-float-4_25s_ease-in-out_infinite] z-20">
                     <div className="arch-divider-x top-[15%]"></div>
                     <div className="arch-divider-x top-[35%]"></div>
                </div>
                
                {/* 4. FOREGROUND DEPTH CROPS */}
                <div className="absolute inset-0 z-40 pointer-events-none">
                    <div className="arch-panel-base arch-panel-amber w-[25vw] h-[120vh] left-[-10vw] top-[-10vh] blur-[10px] opacity-95 arch-edge-r z-50 animate-[arch-float-2_35s_ease-in-out_infinite]"></div>
                    <div className="arch-panel-base arch-panel-dark w-[30vw] h-[130vh] right-[-12vw] bottom-[-15vh] blur-[14px] opacity-95 arch-edge-l z-50 animate-[arch-float-1_38s_ease-in-out_infinite]"></div>
                    
                    {/* Floating diagonal accent in foreground */}
                    <div className="arch-panel-base arch-panel-glass w-[6vw] h-[80vh] left-[22vw] bottom-[-35vh] border border-[#F5A900]/30 blur-[4px] animate-[arch-float-3_20s_ease-in-out_infinite] z-50 transform rotate-[15deg]"></div>
                    <div className="arch-panel-base arch-panel-gold w-[3vw] h-[60vh] right-[28vw] top-[-25vh] border border-[#F5A900]/20 blur-[5px] animate-[arch-float-4_24s_ease-in-out_infinite] z-50 transform -rotate-[10deg] opacity-50"></div>
                </div>

                {/* 5. TEXT PROTECTOR VIGNETTE */}
                <div className="absolute inset-0 z-40 pointer-events-none bg-vignette-core"></div>

                {/* Subtle Grid and Noise Overlays */}
                <div className="absolute inset-0 bg-grid opacity-[0.05] z-50 pointer-events-none"></div>
                <div className="absolute inset-0 bg-noise opacity-[0.05] z-50 pointer-events-none"></div>

                {/* 6. BOTTOM ATMOSPHERIC FADE TO SHOWREEL */}
                <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303] z-[60] pointer-events-none"></div>
            </div>

            <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-sm opacity-0 animate-slide-up-elastic">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-blink shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]"></span>
                    <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">Open to work</span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[1px] mb-4 leading-none opacity-0 animate-slide-up-elastic font-['Bricolage_Grotesque']" style={{ animationDelay: '0.1s' }}>
                    Make Your SaaS <span className="text-primary inline-block animate-float">✦</span><br />
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