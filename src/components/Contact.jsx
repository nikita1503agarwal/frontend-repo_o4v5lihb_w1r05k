import { Mail, Phone, Twitter, Facebook, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Contact us</h2>
            <p className="mt-3 text-slate-600 max-w-xl">We’re here to help. Reach out with questions about verification, safety, or how to get started.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@milkmatch.health</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (555) 212-9876</div>
              <div className="flex items-center gap-2"><Twitter className="w-4 h-4" /> @milkmatch</div>
              <div className="flex items-center gap-2"><Facebook className="w-4 h-4" /> MilkMatch</div>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Your data is protected. We never sell personal information.
            </div>
          </div>
          <form className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input placeholder="Full name" className="px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 outline-none" />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 outline-none" />
            <input placeholder="Subject" className="sm:col-span-2 px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 outline-none" />
            <textarea rows="4" placeholder="Message" className="sm:col-span-2 px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 outline-none" />
            <button type="button" className="sm:col-span-2 inline-flex justify-center rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-3">Send message</button>
          </form>
        </div>
        <footer className="mt-16 pt-8 border-t border-slate-200 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} MilkMatch Health — All rights reserved.
          </div>
          <nav className="flex items-center gap-4">
            <a className="hover:text-slate-900" href="#">Privacy</a>
            <a className="hover:text-slate-900" href="#">Terms</a>
            <a className="hover:text-slate-900" href="#">Guidelines</a>
          </nav>
        </footer>
      </div>
    </section>
  );
}
