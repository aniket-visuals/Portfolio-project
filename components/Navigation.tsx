import React, { useState, useEffect, useRef } from 'react';
import { LayoutGrid, MessageCircle, FileText, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('showreel');
    const isClickScrolling = useRef(false);
    const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            if (isClickScrolling.current) return;
            
            // Scroll spy logic to update active section
            const sections = ['showreel', 'testimonials', 'contact'];
            let current = 'showreel';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section top is above middle of screen (plus some buffer)
                    if (rect.top <= window.innerHeight / 2.5) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };
        
        // Call once on mount to set initial state
        handleScroll();
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setActiveSection(targetId);
        
        isClickScrolling.current = true;
        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }
        
        // Re-enable scroll spy after the smooth scroll is likely finished
        scrollTimeout.current = setTimeout(() => {
            isClickScrolling.current = false;
        }, 1000);
        
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { id: 'showreel', label: 'Portfolio', icon: LayoutGrid },
        { id: 'testimonials', label: 'Testimonials', icon: MessageCircle },
        { id: 'contact', label: 'Project Request', icon: FileText }
    ];

    return (
        <nav className={`fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 opacity-0 animate-[slideLeftRightBounce_1s_cubic-bezier(0.34,1.56,0.64,1)_forwards] ${scrolled ? 'backdrop-blur-none' : ''}`}>
            
            {/* --- DESKTOP NAVBAR --- */}
            <div className="hidden md:flex relative items-center justify-center pointer-events-auto h-[56px]">
                
                {/* LOGO CONTAINER (Overlapping, Separate Box) */}
                <div className="absolute -left-7 z-20 flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#0a0a0a]/90 backdrop-blur-md border border-white/[0.12] shadow-[0_6px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] ring-1 ring-[#F5A900]/10 overflow-hidden group hover:scale-105 transition-transform duration-300">
                     {/* Subtle gold glow behind logo */}
                     <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(245,169,0,0.1)] pointer-events-none"></div>
                     <a href="#" onClick={(e) => scrollTo(e, 'root')} className="w-full h-full p-[2.5px] relative z-10">
                        <img 
                            src="https://res.cloudinary.com/df5rgwdng/image/upload/v1787059763/Logo_Dark_sfcl1j.png" 
                            alt="Logo" 
                            className="w-full h-full object-cover rounded-full" 
                        />
                    </a>
                </div>

                {/* MAIN PILL */}
                <div className={`pl-[38px] pr-1.5 h-[50px] flex items-center rounded-full bg-[#111111]/75 backdrop-blur-lg border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1),0_-1px_10px_rgba(245,169,0,0.02)] transition-all duration-500`}>
                    
                    {/* LINKS */}
                    <div className="flex items-center gap-0.5 pr-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            const Icon = link.icon;
                            
                            return (
                                <a 
                                    key={link.id} 
                                    href={`#${link.id}`} 
                                    onClick={(e) => scrollTo(e, link.id)} 
                                    className={`group relative flex items-center gap-2 px-3 h-[38px] rounded-full outline-none focus:outline-none focus:ring-0 transition-colors ${
                                        !isActive ? 'hover:bg-white/[0.03]' : ''
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavPill"
                                            className="absolute inset-0 bg-[#222222]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),inset_0_0_8px_rgba(245,169,0,0.08)] border border-white/[0.04] rounded-full z-0 overflow-hidden"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                bounce: 0.25,
                                                duration: 0.5
                                            }}
                                        />
                                    )}
                                   <Icon className={`relative z-10 w-[16px] h-[16px] stroke-[1.5] transition-colors ${isActive ? 'text-[#F5A900]' : 'text-[#a0a0a0] group-hover:text-[#eaeaea]'}`} />
                                   <span className={`relative z-10 text-[13.5px] font-medium tracking-wide transition-colors ${isActive ? 'text-white' : 'text-[#a0a0a0] group-hover:text-[#eaeaea]'}`}>
                                       {link.label}
                                   </span>
                                </a>
                            );
                        })}
                    </div>

                    {/* SEPARATOR */}
                    <div className="w-[1px] h-4 bg-white/10 mx-1.5"></div>

                    {/* CTA */}
                    <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="group relative flex items-center justify-center px-4 h-[38px] min-w-[86px] rounded-full bg-[#0a0702]/60 border border-[#F5A900]/40 shadow-[0_0_12px_rgba(245,169,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,169,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-[#F5A900]/70 hover:bg-[#1a1205]/80 ml-1.5">
                        <span className="text-[11px] font-bold tracking-[0.1em] text-[#F5A900] group-hover:text-[#FFD780] transition-colors relative z-10 pt-[1px]">READY?</span>
                        <div className="absolute inset-0 rounded-full bg-[#F5A900]/0 group-hover:bg-[#F5A900]/10 transition-colors pointer-events-none"></div>
                    </a>
                </div>
            </div>

            {/* --- MOBILE NAVBAR --- */}
            <div className="flex md:hidden relative items-center pointer-events-auto w-full justify-between">
                <div className="z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] ring-1 ring-[#F5A900]/20 overflow-hidden">
                     <a href="#" onClick={(e) => scrollTo(e, 'root')} className="w-full h-full p-[2px]">
                        <img 
                            src="https://res.cloudinary.com/df5rgwdng/image/upload/v1787059763/Logo_Dark_sfcl1j.png" 
                            alt="Logo" 
                            className="w-full h-full object-cover rounded-full" 
                        />
                    </a>
                </div>
                
                <div className="flex items-center rounded-full bg-[#080808]/50 backdrop-blur-xl border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] border-t-[#F5A900]/10 p-1.5">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/5 text-[#eaeaea]"
                    >
                        {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-20 right-4 left-4 rounded-3xl p-5 flex flex-col space-y-2 animate-slide-down-elastic z-40 bg-[#080808]/90 backdrop-blur-2xl border border-white/10 shadow-2xl pointer-events-auto">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        const Icon = link.icon;
                        return (
                            <a 
                                key={link.id} 
                                href={`#${link.id}`} 
                                onClick={(e) => scrollTo(e, link.id)} 
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors relative overflow-hidden ${
                                    isActive 
                                    ? 'bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]' 
                                    : 'hover:bg-white/[0.04]'
                                }`}
                            >
                                {isActive && <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#F5A900]/30"></div>}
                                <Icon className={`w-4 h-4 ${isActive ? 'text-[#eaeaea]' : 'text-[#8a8a8a] hover:text-[#eaeaea]'}`} />
                                <span className={`text-sm font-medium ${isActive ? 'text-[#eaeaea]' : 'text-[#8a8a8a] hover:text-[#eaeaea]'}`}>{link.label}</span>
                            </a>
                        );
                    })}
                    <div className="h-px bg-white/10 w-full my-2"></div>
                    <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="flex items-center justify-center px-4 py-3.5 rounded-xl bg-[#120d04]/60 border border-[#F5A900]/30 shadow-[0_0_15px_rgba(245,169,0,0.1)] transition-colors hover:bg-[#1a1205]">
                        <span className="text-[11px] font-bold tracking-[0.15em] text-[#F5A900]">READY?</span>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
