import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import ShortFormCarousel from './components/ShortFormCarousel';
import LongForm from './components/LongForm';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

const App: React.FC = () => {
    return (
        <div className="font-sans antialiased relative min-h-screen text-white bg-[#050505]">
            <Navigation />
            
            <main>
                <Hero />
                
                <ScrollReveal>
                    <Showreel />
                </ScrollReveal>

                <ScrollReveal delay="0.1s">
                    <ShortFormCarousel />
                </ScrollReveal>

                <ScrollReveal>
                    <LongForm />
                </ScrollReveal>

                <ScrollReveal>
                    <Process />
                </ScrollReveal>

                <ScrollReveal>
                    <Testimonials />
                </ScrollReveal>

                <ScrollReveal>
                    <FAQ />
                </ScrollReveal>

                <ScrollReveal>
                    <Contact />
                </ScrollReveal>
            </main>

            <ScrollReveal>
                <Footer />
            </ScrollReveal>
        </div>
    );
};

export default App;