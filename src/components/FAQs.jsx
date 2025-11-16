import { HelpCircle, Shield, Thermometer, Scale, CheckCircle } from 'lucide-react';

export default function FAQs() {
  const faqs = [
    { q: 'Is breast milk exchange legal?', a: 'Laws vary by region. We provide guidelines and resources but recommend checking local regulations and consulting healthcare professionals.' },
    { q: 'How is safety handled?', a: 'Through optional ID and test verification, health declarations, and educational content on safe handling and storage.' },
    { q: 'How should milk be stored?', a: 'We share best-practice guides for expression, freezing, labeling, and transport to maintain quality.' },
    { q: 'What is a verified badge?', a: 'A visual indicator for donors who completed ID/age checks and optionally uploaded recent lab results.' },
    { q: 'How do payments work?', a: 'We do not process payments. Any compensation is arranged directly between parties, subject to local laws and guidelines.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">FAQs</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl p-6 ring-1 ring-slate-200 bg-slate-50">
              <div className="flex items-center gap-2 text-slate-900 font-medium"><HelpCircle className="w-5 h-5 text-sky-600" /> {f.q}</div>
              <p className="mt-2 text-slate-600 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
