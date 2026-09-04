import React from 'react';

const Clients: React.FC = () => {
    return (
        <section className="w-full flex flex-col items-center gap-12 bg-[#030303] py-16 z-20 relative">
            {/* Header Line & Pill */}
            <div className="relative w-full max-w-lg mx-auto flex items-center justify-center">
                <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5A900]/60 to-transparent"></div>
                <div className="relative px-8 py-2 rounded-full bg-[#050505] border border-[#F5A900]/40 shadow-[0_0_15px_rgba(245,169,0,0.15)] text-[#eaeaea] text-sm font-medium tracking-wide">
                    My Clients
                </div>
            </div>
            
            {/* Scrolling Marquee */}
            <div className="w-full max-w-4xl mx-auto overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)' }}>
                <div className="flex w-max animate-[marquee_20s_linear_infinite]">
                    {[0, 1].map((set) => (
                        <div key={set} className="flex gap-16 items-center px-8">
                            {[
                                { name: 'Moe Hayek', stat: '22.8K Followers', img: 'https://res.cloudinary.com/df5rgwdng/image/upload/v1774390101/high-1774389960_ehpvh9.jpg' },
                                { name: 'Jack Roberts', stat: '170k Subscribers', img: 'https://res.cloudinary.com/df5rgwdng/image/upload/v1774390325/479499375_622414950386874_6207510539453852578_n_ru9tnj.jpg' },
                                { name: 'Max Sturtevant', stat: '30k Subscribers', img: 'https://res.cloudinary.com/df5rgwdng/image/upload/v1774393227/BzK24ZikXCqyabOzlDt8R9Q5rDA_rohyw4.webp' },
                                { name: 'Brandon Bryant', stat: '30k Subscribers', img: 'https://res.cloudinary.com/df5rgwdng/image/upload/v1774390101/high-1774389960_ehpvh9.jpg' },
                            ].map((client, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <img src={client.img} alt={client.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div className="flex flex-col items-start justify-center">
                                        <span className="text-[15px] font-semibold text-[#F5A900]">{client.name}</span>
                                        <span className="text-[13.5px] font-medium text-white">{client.stat}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
