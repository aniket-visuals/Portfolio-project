const fs = require('fs');
let content = fs.readFileSync('components/Admin.tsx', 'utf8');

// Update addTestimonial
content = content.replace(
    "newData.testimonials.push({ quote: '', author: 'New Client', role: 'Role', image: '' });",
    "newData.testimonials.push({ quote: '', author: 'New Client', role: 'Role', image: '', proofImage: '' });"
);

// Add the new input field
const imageInput = `<div className="md:col-span-2">
                                            <label className="block text-xs text-gray-400 mb-1">Image URL (Optional)</label>
                                            <input type="text" value={item.image || ''} onChange={e => updateTestimonial(index, 'image', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>`;
                                        
const proofInput = imageInput + `
                                        <div className="md:col-span-2">
                                            <label className="block text-xs text-gray-400 mb-1">Screenshot Proof URL (Optional)</label>
                                            <input type="text" value={item.proofImage || ''} onChange={e => updateTestimonial(index, 'proofImage', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" placeholder="e.g. https://res.cloudinary.com/..." />
                                        </div>`;
                                        
content = content.replace(imageInput, proofInput);

fs.writeFileSync('components/Admin.tsx', content);
