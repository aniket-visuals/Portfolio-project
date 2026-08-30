const fs = require('fs');
let content = fs.readFileSync('components/Testimonials.tsx', 'utf8');

const quoteJSX = `<p className="text-gray-200 italic mb-6 text-xs leading-relaxed font-light">"{t.quote}"</p>`;
const replacement = `${quoteJSX}
                                        {t.proofImage && (
                                            <div className="mb-6 rounded-lg overflow-hidden border border-white/10 mt-[-10px]">
                                                <img src={t.proofImage} alt="Screenshot proof" className="w-full h-auto max-h-40 object-contain bg-black/40" referrerPolicy="no-referrer" />
                                            </div>
                                        )}`;

content = content.replace(quoteJSX, replacement);
fs.writeFileSync('components/Testimonials.tsx', content);
