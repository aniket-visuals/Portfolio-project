import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';
        
        const timer = setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
                setIsLoading(false);
                document.body.style.overflow = 'auto';
            }, 800); // Wait for fade out animation to finish
        }, 1800); // How long the loader stays fully visible

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div 
            className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <div className="relative flex flex-col items-center justify-center">
                {/* Background glowing orb */}
                <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-[40px] animate-pulse"></div>

                {/* Outer spinning ring */}
                <div className="absolute w-28 h-28 rounded-full border-t-2 border-primary/60 border-l-2 border-l-transparent animate-[spin_1.5s_linear_infinite]"></div>
                
                {/* Inner spinning ring */}
                <div className="absolute w-24 h-24 rounded-full border-b-2 border-white/40 border-r-2 border-r-transparent animate-[spin_2s_linear_infinite_reverse]"></div>

                {/* Logo wrapper */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden p-1 border border-white/10 glass-panel shadow-[0_0_30px_rgba(252,182,50,0.15)] z-10">
                    <img 
                        src="https://res.cloudinary.com/df5rgwdng/image/upload/v1787059763/Logo_Dark_sfcl1j.png" 
                        alt="Loading..." 
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
            
            {/* Loading text */}
            <div className="mt-12 text-primary/80 text-[10px] font-bold tracking-[0.4em] uppercase animate-pulse">
                Loading Experience
            </div>
        </div>
    );
};

export default Loader;
