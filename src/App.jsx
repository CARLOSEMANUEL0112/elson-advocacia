import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, 
      { 
        threshold: 0.1, // Dispara assim que 10% do elemento aparece no ecrã
        rootMargin: '0px 0px -30px 0px' 
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        
        <div className="reveal-on-scroll">
          <Services />
        </div>
        
        <div className="reveal-on-scroll">
          <About />
        </div>
        
        <div className="reveal-on-scroll">
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}