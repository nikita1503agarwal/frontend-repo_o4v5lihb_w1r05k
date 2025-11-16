import { ShieldCheck, ClipboardCheck, MessageSquare, MapPin } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Create your profile',
      desc: 'Donors and recipients create secure profiles with privacy controls and health declarations.',
      icon: ClipboardCheck,
    },
    {
      title: 'Get verified',
      desc: 'Optional ID and age (18+) verification, plus upload test reports for a verified badge.',
      icon: ShieldCheck,
    },
    {
      title: 'Match & chat',
      desc: 'Use filters like location, availability, diet, and testing status. Connect via secure chat.',
      icon: MessageSquare,
    },
    {
      title: 'Meet or ship safely',
      desc: 'Coordinate pickups or cold-chain shipping with storage and hygiene guidance.',
      icon: MapPin,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">How it works</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">A simple, medically-informed process designed for safety and transparency.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
