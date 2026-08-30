const fs = require('fs');

let content = fs.readFileSync('components/Testimonials.tsx', 'utf8');

// Update imports
content = content.replace(
    "import { ChevronLeft, ChevronRight } from 'lucide-react';",
    "import { ChevronLeft, ChevronRight, X } from 'lucide-react';"
);

// Add state
content = content.replace(
    "const Testimonials: React.FC = () => {",
    "const Testimonials: React.FC = () => {\n    const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);"
);

// Add onClick to proofImage
const currentProofJSX = `<div className="mb-6 rounded-lg overflow-hidden border border-white/10 mt-[-10px]">
                                                <img src={t.proofImage} alt="Screenshot proof" className="w-full h-auto max-h-40 object-contain bg-black/40" referrerPolicy="no-referrer" />
                                            </div>`;

const newProofJSX = `<div 
                                                className="mb-6 rounded-lg overflow-hidden border border-white/10 mt-[-10px] cursor-pointer hover:opacity-80 transition-opacity"
                                                onClick={() => setFullScreenImage(t.proofImage!)}
                                            >
                                                <img src={t.proofImage} alt="Screenshot proof" className="w-full h-auto max-h-40 object-contain bg-black/40" referrerPolicy="no-referrer" />
                                            </div>`;

content = content.replace(currentProofJSX, newProofJSX);

// Add modal before the closing tag of section
const modalJSX = `
            {/* Full Screen Image Preview Modal */}
            {fullScreenImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm"
                    onClick={() => setFullScreenImage(null)}
                >
                    <button 
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            setFullScreenImage(null);
                        }}
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <img 
                        src={fullScreenImage} 
                        alt="Preview" 
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        referrerPolicy="no-referrer"
                    />
                </div>
            )}
        </section>
`;

content = content.replace("</section>", modalJSX);

fs.writeFileSync('components/Testimonials.tsx', content);
