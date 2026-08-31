const fs = require('fs');
let content = fs.readFileSync('components/Admin.tsx', 'utf8');

const loginUI = `    if (!user) {
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
    }`;

const restrictedUI = loginUI + `

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
    }`;

content = content.replace(loginUI, restrictedUI);
fs.writeFileSync('components/Admin.tsx', content);
