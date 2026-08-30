import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export interface VideoItem {
    videoId: string;
    title: string;
    description: string;
    projectUrl: string;
}

export interface TestimonialItem {
    quote: string;
    author: string;
    role: string;
    image?: string;
    proofImage?: string;
}

export interface PortfolioData {
    saas: VideoItem[];
    longform: VideoItem[];
    shortform: string[];
    testimonials: TestimonialItem[];
}

const DEFAULT_DATA: PortfolioData = {
    saas: [
        {
            videoId: "XfL5m4GHs3Y",
            title: "Cooveb Launch Video",
            description: "AI-powered hotel discovery platform",
            projectUrl: "https://www.behance.net/gallery/254802257/Cooveb-AI-Powered-Hotel-Discovery-SaaS-Launch-Video"
        },
        {
            videoId: "nZ_tsvCeFfI",
            title: "Saas recreation video",
            description: "practice project",
            projectUrl: "#"
        },
        {
            videoId: "K6rswtPW66c",
            title: "OmniTool launch video",
            description: "After effects all in one tool",
            projectUrl: "#"
        },
        {
            videoId: "6AeKDHvQLrM",
            title: "Google flow",
            description: "practice project",
            projectUrl: "#"
        }
    ],
    longform: [
        {
            videoId: "VhxSYVyopy8",
            title: "Business Style Content",
            description: "Deep dive into tech history",
            projectUrl: "#"
        },
        {
            videoId: "BsHi-N_Gamw",
            title: "Business Style Content",
            description: "High retention storytelling",
            projectUrl: "#"
        },
        {
            videoId: "tZSaGhFoEXc",
            title: "Business Style Content",
            description: "Engaging and fast-paced editing",
            projectUrl: "#"
        },
        {
            videoId: "We9n4yZDdKA",
            title: "Podcast Intro Edit",
            description: "Clear and concise visual learning",
            projectUrl: "#"
        }
    ],
    shortform: [
        "https://res.cloudinary.com/df5rgwdng/video/upload/v1777380889/Day_10_v3_mzaoyp.mp4",
        "https://res.cloudinary.com/df5rgwdng/video/upload/v1776639696/nov_1st_kdsol2.mov",
        "https://res.cloudinary.com/df5rgwdng/video/upload/v1777373390/new_reel_complete_nndljp.mp4",
        "https://res.cloudinary.com/df5rgwdng/video/upload/v1777372859/4k30fpsdd_z9kuho.mp4"
    ],
    testimonials: [
        { quote: "Honestly, it was a really great experience. I received every edit on time, and the editing skills he possesses are excellent.", author: "Smith Roy", role: "Agency Owner", image: "https://res.cloudinary.com/df5rgwdng/image/upload/v1774390466/cropped_circle_image_ef9hgz.png" },
        { quote: "Loved the edit—so smooth and well-crafted! The attention to detail was amazing, and the quick turnaround made it even better. Great job!.", author: "Lars", role: "Youtube Entrepreneur", image: "https://res.cloudinary.com/df5rgwdng/image/upload/v1774393227/Ot4ZqEfYu9Zq4jV4JtSjGVRMtlQ_rc35l3.avif" },
        { quote: "Incredible work! This is exactly what I was looking for. The quality is insane, and the fast delivery makes it even more impressive. Amazing job, mate!", author: "Carlo Smolders", role: "Youtuber & Creator", image: "https://res.cloudinary.com/df5rgwdng/image/upload/v1774393227/BzK24ZikXCqyabOzlDt8R9Q5rDA_rohyw4.webp" },
        { quote: "The video was edited exceptionally well, with great attention to detail. I’m also impressed by the fast turnaround—fantastic work!", author: "Rayan", role: "Channel Manager", image: "https://res.cloudinary.com/df5rgwdng/image/upload/v1774393227/faggCnasOmNAlEJrLlZ3YysFNU_vfosyt.webp" },
        { quote: "You really delivered on this one—super impressive work! The smooth animations and well-timed keyframes look fantastic.", author: "Yash", role: "Youtuber & Channel owner", image: "https://res.cloudinary.com/df5rgwdng/image/upload/v1774393227/EEtfmg54ZFMMO7x2dNCrqf88_psm2mi.webp" },
        { quote: "Excellent work. He made the edits exactly as I expected and delivered everything on time. Really happy with the final result.", author: "Jordan Lee", role: "Content Creator", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" }
    ]
};

export const usePortfolioData = () => {
    const [data, setData] = useState<PortfolioData>(DEFAULT_DATA);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const docRef = doc(db, 'portfolio', 'data');
        
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setData({ ...DEFAULT_DATA, ...docSnap.data() } as PortfolioData);
            }
            setLoading(false);
        }, (error) => {
            console.error("Error fetching portfolio data:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const updateData = async (newData: PortfolioData) => {
        const docRef = doc(db, 'portfolio', 'data');
        await setDoc(docRef, newData);
    };

    return { data, loading, updateData };
};
