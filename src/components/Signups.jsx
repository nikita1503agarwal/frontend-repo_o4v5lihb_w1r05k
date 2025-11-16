import { HeartHandshake, UserPlus, Filter, MapPin } from 'lucide-react';

export default function Signups() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl ring-1 ring-slate-200 p-8 bg-gradient-to-br from-emerald-50 to-white">
            <div className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full text-sm font-medium">
              <HeartHandshake className="w-4 h-4" /> Donor Signup
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Become a donor</h3>
            <p className="mt-2 text-slate-600">Support families by donating or selling milk. Control your privacy, set availability, and choose verification options.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><UserPlus className="w-4 h-4 text-emerald-600" /> Create a donor profile with health declaration</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-600" /> Choose pickup radius or shipping</li>
              <li className="flex items-center gap-2"><Filter className="w-4 h-4 text-emerald-600" /> Set diet, pumping schedule, and availability</li>
            </ul>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input required placeholder="Full name" className="px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
              <input placeholder="City / ZIP" className="px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
              <select className="px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none">
                <option>Verification: Optional</option>
                <option>ID + Age (18+)</option>
                <option>Upload test report</option>
              </select>
              <button type="button" className="mt-2 col-span-full inline-flex justify-center rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 py-3">Start Donor Profile</button>
            </form>
          </div>

          <div className="rounded-2xl ring-1 ring-slate-200 p-8 bg-gradient-to-br from-sky-50 to-white">
            <div className="inline-flex items-center gap-2 text-sky-700 bg-sky-100 px-3 py-1 rounded-full text-sm font-medium">
              <UserPlus className="w-4 h-4" /> Buyer Signup
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Find a donor</h3>
            <p className="mt-2 text-slate-600">Search with medical-minded filters like testing status, diet, distance, and price. Connect securely.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Filter className="w-4 h-4 text-sky-600" /> Filters: price, distance, diet, testing</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-600" /> Location-based matching</li>
              <li className="flex items-center gap-2"><HeartHandshake className="w-4 h-4 text-sky-600" /> Private, secure messaging</li>
            </ul>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input required placeholder="Full name" className="px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none" />
              <input placeholder="City / ZIP" className="px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none" />
              <select className="px-4 py-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none">
                <option>Testing: Any</option>
                <option>Verified tests</option>
                <option>Unverified</option>
              </select>
              <button type="button" className="mt-2 col-span-full inline-flex justify-center rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold px-5 py-3">Start Buyer Profile</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
