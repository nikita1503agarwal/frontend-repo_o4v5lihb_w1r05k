import { UserPlus, ShieldCheck, MessageSquareLock, FileText, Filter, MapPin, EyeOff, BadgeCheck } from 'lucide-react';

export default function Features() {
  const items = [
    { title: 'Profile creation', desc: 'Build donor or recipient profiles with preferences and privacy controls.', icon: UserPlus },
    { title: 'Donor verification', desc: 'Age 18+, ID checks, and optional lab test verification for a badge.', icon: BadgeCheck },
    { title: 'Secure chat', desc: 'End-to-end protected conversations inside the platform.', icon: MessageSquareLock },
    { title: 'Health declarations', desc: 'Structured forms for medical history and lifestyle disclosures.', icon: FileText },
    { title: 'Smart filters', desc: 'Filter by availability, diet, pumping schedule, testing status, and price.', icon: Filter },
    { title: 'Location matching', desc: 'Find nearby donors or arrange safe shipping with guidance.', icon: MapPin },
    { title: 'Privacy first', desc: 'Control what is visible; hide sensitive data by default.', icon: EyeOff },
    { title: 'Trust & Safety', desc: 'Guidelines, moderation, and community reporting tools.', icon: ShieldCheck },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Features</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Everything you need to connect safely and privately, guided by health best practices.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl bg-gradient-to-b from-slate-50 to-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
