import Spline from '@splinetool/react-spline';
import { ShieldCheck, Heart, Search } from 'lucide-react';

export default function Hero({ onFindDonorClick, onBecomeDonorClick }) {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-200 px-3 py-1 text-sm mb-4 ring-1 ring-emerald-400/20">
              <ShieldCheck className="w-4 h-4" />
              Safe, verified, and caring community
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
              Connect donors and recipients with compassion and medical safety
            </h1>
            <p className="mt-4 text-slate-200/90 text-lg max-w-xl">
              A secure platform to match breast‑milk donors and families in need. Built with verification, privacy, and healthcare guidance at its core.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onFindDonorClick} className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-3 shadow-lg shadow-emerald-500/20 transition">
                <Search className="w-5 h-5" />
                Find Donor
              </button>
              <button onClick={onBecomeDonorClick} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3 ring-1 ring-white/20 backdrop-blur transition">
                <Heart className="w-5 h-5 text-rose-300" />
                Become a Donor
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-300" /> Medical guidance</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-300" /> ID verification</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-300" /> Secure data</div>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
