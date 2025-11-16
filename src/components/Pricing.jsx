import { BadgeCheck, ShieldCheck, MessageSquareLock } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    { name: 'Basic', price: 'Free', features: ['Create profile', 'Standard matching', 'Community support'], badge: null },
    { name: 'Verified', price: '$9/mo', features: ['Verified badge', 'Priority in search', 'Profile insights'], badge: BadgeCheck },
    { name: 'Plus', price: '$19/mo', features: ['Priority matching', 'Secure file storage', 'Priority support'], badge: ShieldCheck },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Pricing</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Simple plans. Upgrade anytime for verification badges and priority matching.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <div className="flex items-center gap-2">
                {t.badge ? <t.badge className="w-5 h-5 text-emerald-600" /> : <MessageSquareLock className="w-5 h-5 text-slate-400" />}
                <h3 className="font-semibold text-slate-900">{t.name}</h3>
              </div>
              <div className="mt-3 text-3xl font-semibold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.features.map((f) => (<li key={f}>• {f}</li>))}
              </ul>
              <button className="mt-6 inline-flex justify-center w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-3">Choose {t.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
