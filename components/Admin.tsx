import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { usePortfolioData, PortfolioData, VideoItem } from '../hooks/usePortfolioData';

const Admin: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const { data, loading, updateData } = usePortfolioData();
    const [editData, setEditData] = useState<PortfolioData | null>(null);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState<'saas' | 'longform' | 'shortform' | 'testimonials'>('saas');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (data && !editData && !loading) {
            setEditData(JSON.parse(JSON.stringify(data)));
        }
    }, [data, editData, loading]);

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in", error);
            alert("Error signing in");
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
    };

    const handleSave = async () => {
        if (!editData) return;
        setSaving(true);
        try {
            await updateData(editData);
            alert("Changes saved successfully!");
        } catch (error) {
            console.error("Error saving data", error);
            alert("Error saving data. Ensure you have permissions.");
        }
        setSaving(false);
    };

    if (loading) {
        return <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">Loading...</div>;
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4">
                <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
                <button 
                    onClick={handleLogin}
                    className="bg-primary text-black px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                >
                    Sign in with Google
                </button>
                <div className="mt-8 text-sm text-gray-500">
                    <a href="/" className="hover:text-white transition-colors">← Back to Portfolio</a>
                </div>
            </div>
        );
    }

    if (user.email !== 'aniketrajcargal123@gmail.com') {
        return (
            <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-3xl font-bold mb-4 text-red-500">Access Denied</h1>
                <p className="text-gray-400 mb-8 max-w-md">
                    You do not have permission to view or edit this dashboard. You are logged in as <strong>{user.email}</strong>.
                </p>
                <button 
                    onClick={handleLogout}
                    className="bg-white/10 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors mb-4"
                >
                    Sign out
                </button>
                <div className="text-sm text-gray-500">
                    <a href="/" className="hover:text-white transition-colors">← Back to Portfolio</a>
                </div>
            </div>
        );
    }

    if (!editData) return null;

    const updateSaas = (index: number, field: keyof VideoItem, value: string) => {
        const newData = { ...editData };
        newData.saas = [...newData.saas];
        newData.saas[index] = { ...newData.saas[index], [field]: value };
        setEditData(newData);
    };

    const updateLongForm = (index: number, field: keyof VideoItem, value: string) => {
        const newData = { ...editData };
        newData.longform = [...newData.longform];
        newData.longform[index] = { ...newData.longform[index], [field]: value };
        setEditData(newData);
    };

        const updateTestimonial = (index: number, field: keyof typeof editData.testimonials[0], value: string) => {
        const newData = { ...editData };
        newData.testimonials = [...newData.testimonials];
        newData.testimonials[index] = { ...newData.testimonials[index], [field]: value };
        setEditData(newData);
    };

    const addTestimonial = () => {
        const newData = { ...editData };
        if (!newData.testimonials) newData.testimonials = [];
        newData.testimonials.push({ quote: '', author: 'New Client', role: 'Role', image: '', proofImage: '' });
        setEditData(newData);
    };

    const removeTestimonial = (index: number) => {
        const newData = { ...editData };
        newData.testimonials.splice(index, 1);
        setEditData(newData);
    };

    const updateShortForm = (index: number, value: string) => {
        const newData = { ...editData };
        newData.shortform[index] = value;
        setEditData(newData);
    };

    const addVideoItem = (section: 'saas' | 'longform') => {
        const newData = { ...editData };
        newData[section].push({ videoId: '', title: 'New Video', description: '', projectUrl: '#' });
        setEditData(newData);
    };

    const removeVideoItem = (section: 'saas' | 'longform', index: number) => {
        const newData = { ...editData };
        newData[section].splice(index, 1);
        setEditData(newData);
    };

    const addShortForm = () => {
        const newData = { ...editData };
        newData.shortform.push("");
        setEditData(newData);
    };

    const removeShortForm = (index: number) => {
        const newData = { ...editData };
        newData.shortform.splice(index, 1);
        setEditData(newData);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
                    <h1 className="text-3xl font-bold font-['Bricolage_Grotesque']">Portfolio Admin</h1>
                    <div className="flex gap-4 items-center">
                        <span className="text-sm text-gray-400">{user.email}</span>
                        <button onClick={handleLogout} className="text-xs bg-white/10 px-3 py-2 rounded hover:bg-white/20">Logout</button>
                        <a href="/" className="text-xs bg-primary text-black px-4 py-2 rounded font-bold">View Site</a>
                    </div>
                </div>


                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
                    <button 
                        onClick={() => setActiveTab('saas')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'saas' ? 'bg-primary text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                    >
                        SaaS Explainer
                    </button>
                    <button 
                        onClick={() => setActiveTab('longform')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'longform' ? 'bg-primary text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                    >
                        Long Form
                    </button>
                    <button 
                        onClick={() => setActiveTab('shortform')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'shortform' ? 'bg-primary text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                    >
                        Short Form
                    </button>
                    <button 
                        onClick={() => setActiveTab('testimonials')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'testimonials' ? 'bg-primary text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
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
                                        <div className="md:col-span-2">
                                            <label className="block text-xs text-gray-400 mb-1">Screenshot Proof URL (Optional)</label>
                                            <input type="text" value={item.proofImage || ''} onChange={e => updateTestimonial(index, 'proofImage', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:border-primary outline-none" placeholder="e.g. https://res.cloudinary.com/..." />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {/* Floating Save Button */}
                <div className="sticky bottom-6 flex justify-end">
                    <button 
                        onClick={handleSave} 
                        disabled={saving}
                        className="bg-primary text-black px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                    >
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admin;
