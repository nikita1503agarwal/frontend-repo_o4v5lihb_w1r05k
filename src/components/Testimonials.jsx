import { Quote } from 'lucide-react';

export default function Testimonials() {
  const quotes = [
    { name: 'Ava & Leo', text: 'We found a verified donor nearby within days. The guidance on safe storage gave us peace of mind.' },
    { name: 'Maya (Donor)', text: 'I loved the privacy controls. Sharing my health declaration and test badge helped families trust me.' },
    { name: 'Priya & Arjun', text: 'Filters made it easy to match by diet and distance. The community feels caring and safe.' },
  ];
  return (
    <section className="py-16 bg-gradient-to-b from-rose-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <Quote className="w-6 h-6 text-rose-500" />
              <p className="mt-3 text-slate-700">“{q.text}”</p>
              <div className="mt-4 text-sm font-medium text-slate-900">— {q.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
