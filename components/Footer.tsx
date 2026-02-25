import React from 'react';
import { Instagram, Send, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="py-6 border-t border-white/5 bg-black">
            <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                <a href="https://x.com/Ankitxed" className="glass-panel p-3 rounded-lg flex items-center justify-between group hover:border-white/50 transition-colors hover-trigger">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 p-1.5 rounded">
                            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current text-white">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-gray-400 group-hover:text-white transition-colors text-xs">X</p>
                            <p className="text-[10px] text-gray-500">@Ankitxed</p>
                        </div>
                    </div>
                    <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors w-3 h-3" />
                </a>
                <a href="https://www.instagram.com/ankitrxj/" className="glass-panel p-3 rounded-lg flex items-center justify-between group hover:border-pink-500/50 transition-colors hover-trigger">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 p-1.5 rounded"><Instagram className="w-3 h-3" /></div>
                        <div>
                            <p className="font-bold text-gray-400 group-hover:text-pink-500 transition-colors text-xs">Instagram</p>
                            <p className="text-[10px] text-gray-500">@ankitrxj</p>
                        </div>
                    </div>
                    <ArrowUpRight className="text-gray-600 group-hover:text-pink-500 transition-colors w-3 h-3" />
                </a>
                <a href="https://t.me/Amyname1" className="glass-panel p-3 rounded-lg flex items-center justify-between group hover:border-blue-400/50 transition-colors hover-trigger">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 p-1.5 rounded"><Send className="w-3 h-3" /></div>
                        <div>
                            <p className="font-bold text-gray-400 group-hover:text-blue-400 transition-colors text-xs">Telegram</p>
                            <p className="text-[10px] text-gray-500">@amyname1</p>
                        </div>
                    </div>
                    <ArrowUpRight className="text-gray-600 group-hover:text-blue-400 transition-colors w-3 h-3" />
                </a>
            </div>
            <div className="text-center text-gray-600 text-[10px] mt-6">
                &copy; 2026 Video Portfolio. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;