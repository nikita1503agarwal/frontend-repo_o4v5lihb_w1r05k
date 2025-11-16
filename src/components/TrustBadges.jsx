import { ShieldCheck, Lock, BadgeCheck, FileText } from 'lucide-react';

export default function TrustBadges() {
  const items = [
    { icon: ShieldCheck, label: 'Verified IDs' },
    { icon: BadgeCheck, label: 'Optional Lab Tests' },
    { icon: Lock, label: 'Secure & Private' },
    { icon: FileText, label: 'Health Declarations' },
  ];
  return (
    <div className="w-full bg-white/70 backdrop-blur border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((b) => (
          <div key={b.label} className="flex items-center justify-center gap-2 text-slate-700 text-sm">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700"><b.icon className="w-4 h-4" /></span>
            {b.label}
          </div>
        ))}
      </div>
    </div>
  );
}
