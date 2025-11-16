import { useRef } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Safety from './components/Safety';
import Signups from './components/Signups';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import TrustBadges from './components/TrustBadges';
import Testimonials from './components/Testimonials';

function App() {
  const findRef = useRef(null);
  const donorRef = useRef(null);

  const scrollTo = (ref) => ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="w-8 h-8 rounded-xl bg-rose-200" />
            MilkMatch Health
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#safety" className="hover:text-slate-900">Safety</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#faqs" className="hover:text-slate-900">FAQs</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollTo(findRef)} className="hidden sm:inline-flex rounded-xl px-4 py-2 bg-slate-900 text-white text-sm font-semibold">Find Donor</button>
            <button onClick={() => scrollTo(donorRef)} className="inline-flex rounded-xl px-4 py-2 bg-emerald-500 text-slate-950 text-sm font-semibold">Become a Donor</button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Hero onFindDonorClick={() => scrollTo(findRef)} onBecomeDonorClick={() => scrollTo(donorRef)} />
        <TrustBadges />
        <div id="how"><HowItWorks /></div>
        <div id="features"><Features /></div>
        <div id="safety"><Safety /></div>
        <div ref={donorRef}><Signups /></div>
        <div id="pricing"><Pricing /></div>
        <Testimonials />
        <div id="faqs"><FAQs /></div>
        <div ref={findRef}><Contact /></div>
      </main>
    </div>
  );
}

export default App;
