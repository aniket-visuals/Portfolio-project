import React from 'react';

const Process: React.FC = () => {
    return (
        <section className="py-10 px-4 bg-black/50">
            <div className="max-w-3xl mx-auto text-center">
                <span className="w-1 h-1 rounded-full bg-primary inline-block mb-2"></span>
                <h2 className="text-2xl font-bold mb-10">The Process</h2>

                <div className="grid md:grid-cols-3 gap-6 relative">
                    <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    
                    {[
                        { id: "01", title: "The Brief", desc: "Share your footage and vision." },
                        { id: "02", title: "The Magic", desc: "I edit, grade, and add SFX." },
                        { id: "03", title: "Delivery", desc: "Final render ready for upload." }
                    ].map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center group">
                            <div className="w-16 h-16 glass-panel rounded-full flex items-center justify-center mb-4 border border-primary/20 group-hover:border-primary transition-colors hover-trigger bg-[rgba(20,20,20,0.6)] backdrop-blur-xl shadow-lg">
                                <span className="text-xl font-bold text-primary">{step.id}</span>
                            </div>
                            <h3 className="text-sm font-bold mb-1">{step.title}</h3>
                            <p className="text-[10px] text-gray-400 max-w-[150px]">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;