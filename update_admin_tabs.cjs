const fs = require('fs');

let content = fs.readFileSync('components/Admin.tsx', 'utf8');

// Add activeTab state
content = content.replace("const [saving, setSaving] = useState(false);", "const [saving, setSaving] = useState(false);\n    const [activeTab, setActiveTab] = useState<'saas' | 'longform' | 'shortform' | 'testimonials'>('saas');");

// Replace the sections with a tabbed interface
const sectionsStart = content.indexOf('                {/* SaaS Explainer Section */}');
const sectionsEnd = content.indexOf('                {/* Floating Save Button */}');

if (sectionsStart !== -1 && sectionsEnd !== -1) {
    const beforeSections = content.substring(0, sectionsStart);
    const afterSections = content.substring(sectionsEnd);

    const tabsHTML = `
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
                    <button 
                        onClick={() => setActiveTab('saas')}
                        className={\`px-4 py-2 rounded-md text-sm font-medium transition-colors \${activeTab === 'saas' ? 'bg-primary text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}\`}
                    >
                        SaaS Explainer
                    </button>
                    <button 
                        onClick={() => setActiveTab('longform')}
                        className={\`px-4 py-2 rounded-md text-sm font-medium transition-colors \${activeTab === 'longform' ? 'bg-primary text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}\`}
                    >
                        Long Form
                    </button>
                    <button 
                        onClick={() => setActiveTab('shortform')}
                        className={\`px-4 py-2 rounded-md text-sm font-medium transition-colors \${activeTab === 'shortform' ? 'bg-primary text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}\`}
                    >
                        Short Form
                    </button>
                    <button 
                        onClick={() => setActiveTab('testimonials')}
                        className={\`px-4 py-2 rounded-md text-sm font-medium transition-colors \${activeTab === 'testimonials' ? 'bg-primary text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}\`}
                    >
                        Client Love
                    </button>
                </div>

                {activeTab === 'saas' && (
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-primary">SaaS Explainer Videos</h2>
                            <button onClick={() => addVideoItem('saas')} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded text-sm">+ Add Video</button>
                        </div>
                        <div className="space-y-6">
                            {editData.saas.map((item, index) => (
                                <div key={index} className="bg-black border border-white/10 p-4 rounded-lg relative">
                                    <button onClick={() => removeVideoItem('saas', index)} className="absolute top-4 right-4 text-red-500 hover:text-red-400 text-sm">Remove</button>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1">YouTube Video ID</label>
                                            <input type="text" value={item.videoId} onChange={e => updateSaas(index, 'videoId', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1">Title</label>
                                            <input type="text" value={item.title} onChange={e => updateSaas(index, 'title', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs text-gray-400 mb-1">Description</label>
                                            <input type="text" value={item.description} onChange={e => updateSaas(index, 'description', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs text-gray-400 mb-1">Project Link (Behance, etc)</label>
                                            <input type="text" value={item.projectUrl} onChange={e => updateSaas(index, 'projectUrl', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'longform' && (
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-primary">Long Form Content</h2>
                            <button onClick={() => addVideoItem('longform')} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded text-sm">+ Add Video</button>
                        </div>
                        <div className="space-y-6">
                            {editData.longform.map((item, index) => (
                                <div key={index} className="bg-black border border-white/10 p-4 rounded-lg relative">
                                    <button onClick={() => removeVideoItem('longform', index)} className="absolute top-4 right-4 text-red-500 hover:text-red-400 text-sm">Remove</button>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1">YouTube Video ID</label>
                                            <input type="text" value={item.videoId} onChange={e => updateLongForm(index, 'videoId', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1">Title</label>
                                            <input type="text" value={item.title} onChange={e => updateLongForm(index, 'title', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs text-gray-400 mb-1">Description</label>
                                            <input type="text" value={item.description} onChange={e => updateLongForm(index, 'description', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs text-gray-400 mb-1">Project Link</label>
                                            <input type="text" value={item.projectUrl} onChange={e => updateLongForm(index, 'projectUrl', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'shortform' && (
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-primary">Short Form Content</h2>
                            <button onClick={addShortForm} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded text-sm">+ Add Short</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {editData.shortform.map((url, index) => (
                                <div key={index} className="bg-black border border-white/10 p-4 rounded-lg flex items-center gap-4">
                                    <div className="flex-1">
                                        <label className="block text-xs text-gray-400 mb-1">Cloudinary Video URL</label>
                                        <input type="text" value={url} onChange={e => updateShortForm(index, e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                    </div>
                                    <button onClick={() => removeShortForm(index)} className="text-red-500 hover:text-red-400 text-sm mt-5">Remove</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'testimonials' && (
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-primary">Client Love (Testimonials)</h2>
                            <button onClick={addTestimonial} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded text-sm">+ Add Testimonial</button>
                        </div>
                        <div className="space-y-6">
                            {editData.testimonials?.map((item, index) => (
                                <div key={index} className="bg-black border border-white/10 p-4 rounded-lg relative">
                                    <button onClick={() => removeTestimonial(index)} className="absolute top-4 right-4 text-red-500 hover:text-red-400 text-sm">Remove</button>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1">Author Name</label>
                                            <input type="text" value={item.author} onChange={e => updateTestimonial(index, 'author', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1">Role / Subtitle</label>
                                            <input type="text" value={item.role} onChange={e => updateTestimonial(index, 'role', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs text-gray-400 mb-1">Quote</label>
                                            <textarea value={item.quote} onChange={e => updateTestimonial(index, 'quote', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none h-24" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs text-gray-400 mb-1">Image URL (Optional)</label>
                                            <input type="text" value={item.image || ''} onChange={e => updateTestimonial(index, 'image', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
`;
    
    fs.writeFileSync('components/Admin.tsx', beforeSections + tabsHTML + afterSections);
} else {
    console.error("Could not find sections");
}
