import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import SaasExplainer from './components/SaasExplainer';
import ShortForm from './components/ShortForm';
import LongForm from './components/LongForm';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

import Admin from "./components/Admin";
import Clients from "./components/Clients";

const Portfolio = () => {
    return (
        <div className="font-sans antialiased relative min-h-screen text-white bg-[#050505]">
            <Loader />
            <Navigation />
            <main>
                <Hero />
                <Clients />
                <ScrollReveal><Showreel /></ScrollReveal>
                <ScrollReveal><SaasExplainer /></ScrollReveal>
                <ScrollReveal><LongForm /></ScrollReveal>
                <ScrollReveal><ShortForm /></ScrollReveal>
                <ScrollReveal><Process /></ScrollReveal>
                <ScrollReveal><Testimonials /></ScrollReveal>
                <ScrollReveal><FAQ /></ScrollReveal>
                <ScrollReveal><Contact /></ScrollReveal>
            </main>
            <ScrollReveal><Footer /></ScrollReveal>
            <Analytics />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </Router>
    );
};

export default App;
