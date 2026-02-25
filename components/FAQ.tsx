import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQ: React.FC = () => {
    const FAQS = [
        { q: "Do you guarantee results?", a: "Yes! I work until you are completely satisfied with the narrative and flow of the video." },
        { q: "How fast I'll get my videos?", a: "Typical turnaround time is 24-48 hours for short form and 3-5 days for long form." },
        { q: "Can I request specific themes?", a: "Absolutely. Just share a reference link or describe the vibe in the 'Brief' stage." },
        { q: "Do you offer any FREE revisions?", a: "Yes, I offer up to 2 rounds of free revisions to ensure the edit aligns with your vision." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="py-10 px-4 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="glass-panel rounded-lg p-1 bg-gradient-to-br from-primary/20 to-purple-500/20 h-full">
                    <div className="bg-black/80 rounded h-full overflow-hidden flex flex-col items-center justify-center min-h-[64px] relative group">
                        <img 
                            src="https://image2url.com/r2/default/gifs/1767355985191-16ca977e-4828-4c09-8f43-40381739b639.gif" 
                            alt="Satisfaction Guaranteed" 
                            className="absolute inset-0 w-fill h-fill object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="relative z-10 mt-auto pb-6 text-center">
                            <h3 className="text-2xl font-bold leading-tight drop-shadow-lg text-white">Satisfaction Guaranteed</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-5">All your Questions <span className="text-gray-400">Answered</span></h2>
                    <div className="space-y-2">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="border-b border-gray-800 pb-2">
                                <button 
                                    onClick={() => toggle(i)}
                                    className={`w-full flex justify-between items-center text-left py-1 hover:text-primary transition-colors hover-trigger ${openIndex === i ? 'text-primary' : ''}`}
                                >
                                    <span className="font-bold text-xs">{faq.q}</span>
                                    <Plus className={`w-3 h-3 transition-transform ${openIndex === i ? 'rotate-45' : 'rotate-0'}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-20 pt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-gray-400 text-[10px] leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;