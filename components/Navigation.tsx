import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-0">
            {/* Split container for Logo Box and Nav Bar */}
            <div className="w-full md:w-fit mx-auto flex items-center justify-between md:justify-center gap-3 opacity-0 animate-slide-down-elastic">
                
                {/* 1. Special Box for Logo */}
                <div className="nav-liquid w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 cursor-pointer hover-trigger z-50 overflow-hidden p-[3px]">
                    <a href="#" className="block w-full h-full rounded-full overflow-hidden">
                        {/* Replace the src below with your actual logo image URL */}
                        <img 
                            src="https://t3.ftcdn.net/jpg/11/99/27/32/360_F_1199273267_rh54i5McYeAg5cImGhkDbkz94y4qYKty.jpg" 
                            alt="Logo" 
                            className="w-full h-full object-cover" 
                        />
                    </a>
                </div>

                {/* 2. Main Navigation Bar (Contains Links + Button) */}
                <div className="nav-liquid w-14 md:w-auto md:flex-1 h-14 rounded-full p-0 md:py-1.5 md:pl-4 md:pr-3 flex items-center justify-center md:justify-start md:gap-5 relative z-50 transition-all duration-300">
                    
                    {/* Desktop: Navigation Links */}
                    <div className="hidden md:flex items-center space-x-5 text-[10px] uppercase tracking-wider font-semibold text-gray-300">
                        <a href="#showreel" onClick={(e) => handleScroll(e, 'showreel')} className="hover:text-primary transition-colors hover-trigger">Portfolio</a>
                        <a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className="hover:text-primary transition-colors hover-trigger">Testimonials</a>
                        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-primary transition-colors hover-trigger">Project Request</a>
                    </div>

                    {/* Mobile: Menu Button Only */}
                    <div className="md:hidden flex items-center justify-center w-full h-full">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="text-white hover-trigger transition-transform active:scale-95 flex items-center justify-center w-full h-full"
                            aria-label="Menu"
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200">
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                    <line x1="9" y1="3" x2="9" y2="21" />
                                    <path d="M6 9h.01" />
                                    <path d="M6 12h.01" />
                                    <path d="M6 15h.01" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* READY Button - Now Nested Inside the Glass Pill */}
                    <div className="hidden md:block">
                        <a 
                            href="https://calendly.com/ankit121345123/30min?month=2025-12" 
                            className="h-8 px-4 rounded-full flex items-center justify-center text-[9px] font-bold tracking-widest hover-trigger btn-liquid-primary transition-transform hover:scale-105"
                        >
                            READY?
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-20 right-4 w-60 nav-liquid rounded-[2rem] p-5 flex flex-col space-y-4 animate-slide-down-elastic z-40 bg-black/80 backdrop-blur-2xl">
                    <div className="flex flex-col space-y-3 px-1 items-center text-center">
                        <a href="#showreel" onClick={(e) => handleScroll(e, 'showreel')} className="text-base font-medium text-gray-200 hover:text-primary transition-colors tracking-wide">Portfolio</a>
                        <a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className="text-base font-medium text-gray-200 hover:text-primary transition-colors tracking-wide">Testimonials</a>
                        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-base font-medium text-gray-200 hover:text-primary transition-colors tracking-wide">Project Request</a>
                    </div>
                    
                    <div className="h-px bg-white/5 w-full"></div>
                    
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="w-full py-3 rounded-xl btn-liquid-primary font-bold text-center text-xs tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(252,182,50,0.15)]">
                        Book a Call
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navigation;