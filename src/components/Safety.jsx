import { ShieldCheck, FileText, IdCard, TestTubes, Lock, Database } from 'lucide-react';

export default function Safety() {
  const points = [
    { icon: ShieldCheck, title: 'Medical safety', desc: 'Guidance on safe expression, storage, and transport. Educational resources throughout.' },
    { icon: IdCard, title: '18+ ID checks', desc: 'Age verification and optional identity verification for trust.' },
    { icon: FileText, title: 'Health declarations', desc: 'Structured forms to share relevant health information responsibly.' },
    { icon: TestTubes, title: 'Test reports (optional)', desc: 'Upload lab results to earn a verified badge and increase trust.' },
    { icon: Lock, title: 'Secure storage', desc: 'Encryption in transit and at rest. Strict access controls for sensitive data.' },
    { icon: Database, title: 'Data minimization', desc: 'Collect only what is necessary, with clear retention policies and user controls.' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Safety & Verification</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Safety is our foundation. Verification options and strong privacy protections help you connect confidently.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-slate-600">
          We provide educational content and community guidelines but do not replace medical advice. Please consult healthcare professionals for personalized guidance.
        </div>
      </div>
    </section>
  );
}
