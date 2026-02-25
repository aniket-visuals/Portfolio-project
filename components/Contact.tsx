import React, { useState } from 'react';
import { ArrowUpRight, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        videoType: '',
        budget: '',
        vision: ''
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError(null);
    };

    const handleOptionSelect = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
        if (error) setError(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        const { name, email, videoType, budget, vision } = formData;
        
        if (!name.trim() || !email.trim() || !videoType || !budget || !vision.trim()) {
            e.preventDefault();
            setError("Please fill in all fields before submitting.");
            return;
        }
        
        // Allow native form submission to proceed
    };

    return (
        <section id="contact" className="py-10 px-4 relative">
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-center mb-5">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wide">Project Requests</span>
                </div>
                
                <form 
                    action="https://formsubmit.co/aniketrajcargal123@gmail.com" 
                    method="POST" 
                    onSubmit={handleSubmit} 
                    className="glass-panel p-5 md:p-8 rounded-xl relative"
                >
                    <input type="hidden" name="_subject" value="New Project Request from Portfolio" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    
                    {error && (
                        <div className="absolute top-4 right-4 md:right-8 flex items-center gap-2 text-red-400 bg-red-500/10 px-3 py-1.5 rounded-md border border-red-500/20 animate-pulse z-10">
                            <AlertCircle className="w-3 h-3" />
                            <span className="text-[10px] font-bold">{error}</span>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4 mb-4 mt-2">
                        <div>
                            <label className="block text-[10px] font-bold mb-1 text-gray-400 uppercase">Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jane Smith" 
                                className={`w-full p-2.5 rounded text-xs bg-[rgba(255,255,255,0.03)] border backdrop-blur-sm text-white focus:outline-none focus:bg-[rgba(255,255,255,0.05)] transition-all hover-trigger ${error && !formData.name ? 'border-red-500/40 focus:border-red-500' : 'border-[rgba(255,255,255,0.1)] focus:border-primary'}`} 
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold mb-1 text-gray-400 uppercase">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="jane@gmail.com" 
                                className={`w-full p-2.5 rounded text-xs bg-[rgba(255,255,255,0.03)] border backdrop-blur-sm text-white focus:outline-none focus:bg-[rgba(255,255,255,0.05)] transition-all hover-trigger ${error && !formData.email ? 'border-red-500/40 focus:border-red-500' : 'border-[rgba(255,255,255,0.1)] focus:border-primary'}`} 
                            />
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <label className={`block text-[10px] font-bold mb-2 uppercase ${error && !formData.videoType ? 'text-red-400' : 'text-gray-400'}`}>What Kind of Video Do You Need?</label>
                        <div className="grid md:grid-cols-2 gap-2 text-xs">
                            {['Short Form Videos', "Youtube Videos / VSL's", 'Motion Graphics / Ads', 'Other'].map((type) => (
                                <label key={type} className="flex items-center space-x-2 cursor-pointer hover-trigger">
                                    <input 
                                        type="radio" 
                                        name="videoType" 
                                        value={type}
                                        checked={formData.videoType === type}
                                        onChange={() => handleOptionSelect('videoType', type)}
                                        className="form-radio text-primary bg-transparent border-gray-600 focus:ring-primary w-3 h-3 accent-primary" 
                                    />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className={`block text-[10px] font-bold mb-2 uppercase ${error && !formData.budget ? 'text-red-400' : 'text-gray-400'}`}>What's Your Budget Range?</label>
                        <div className="flex flex-wrap gap-2">
                            {['Below $500', '$500 - $1K', '$1K - $2K', '$2K - $5K', '> $5K'].map((budget) => (
                                <label key={budget} className="cursor-pointer hover-trigger">
                                    <input 
                                        type="radio" 
                                        name="budget" 
                                        value={budget}
                                        className="peer sr-only" 
                                        checked={formData.budget === budget}
                                        onChange={() => handleOptionSelect('budget', budget)}
                                    />
                                    <span className="px-3 py-1 rounded-full border border-gray-700 peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary transition-all text-[10px] font-medium block hover:border-gray-500">
                                        {budget}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-[10px] font-bold mb-1 text-gray-400 uppercase">Share Your Vision</label>
                        <textarea 
                            name="vision"
                            rows={3} 
                            value={formData.vision}
                            onChange={handleChange}
                            placeholder="e.g. video references, design, brand identity..." 
                            className={`w-full p-2.5 rounded text-xs bg-[rgba(255,255,255,0.03)] border backdrop-blur-sm text-white focus:outline-none focus:bg-[rgba(255,255,255,0.05)] transition-all hover-trigger ${error && !formData.vision ? 'border-red-500/40 focus:border-red-500' : 'border-[rgba(255,255,255,0.1)] focus:border-primary'}`}
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full py-2.5 rounded-lg font-bold text-sm hover-trigger btn-liquid-blue-hover">
                        Submit Request
                    </button>
                </form>

                <div className="text-center mt-8">
                    <p className="text-sm mb-3">You got a Vision! Go ahead and book a quick 15 min call.</p>
                    <a href="https://calendly.com/ankit121345123/30min?month=2025-12" className="px-8 py-3 rounded-full text-xs font-bold inline-flex items-center gap-2 hover-trigger btn-liquid-primary">
                        Book a Call <ArrowUpRight className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;