import React from 'react';
import { Heart, Mail, Code, MapPin, ExternalLink, ShieldCheck, UserCheck } from 'lucide-react';
import { DEVELOPER_INFO, UPAZILA_OVERVIEW } from '../data/rowmariData';

interface FooterProps {
  lang: 'bn' | 'en';
  onOpenDeveloper: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenDeveloper }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          {/* Col 1: About Portal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                রৌ
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {lang === 'bn' ? 'রৌমারী উপজেলা ডিজিটাল পোর্টাল' : 'Rowmari Upazila Digital Portal'}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {lang === 'bn'
                ? 'কুড়িগ্রাম জেলার রৌমারী উপজেলার মহান মুক্তিযুদ্ধ ১৯৭১ এর ইতিহাস, ভৌগোলিক মানচিত্র, ৬টি ইউনিয়নের ১৯৮টি গ্রামের তথ্য, জরুরি সেবা ও পর্যটনের ডিজিটাল প্রবেশদ্বার।'
                : 'The official digital guide to Rowmari Upazila, Kurigram. Interactive maps, 6 union profiles, 198 village directory, 1971 history, and civic emergency directory.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{lang === 'bn' ? '১৯৭১ সালের ঐতিহাসিক রৌমারী মুক্তাঞ্চল' : '1971 Historic Liberated Zone'}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {lang === 'bn' ? 'পোর্টাল নেভিগেশন' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#map-section" className="hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'উপজেলা ইন্টারঅ্যাক্টিভ মানচিত্র' : 'Interactive Upazila Map'}
                </a>
              </li>
              <li>
                <a href="#unions-section" className="hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? '৬টি ইউনিয়ন ও সকল গ্রামের তালিকা' : '6 Unions & Village Directory'}
                </a>
              </li>
              <li>
                <a href="#history-section" className="hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? '১৯৭১ রৌমারী মুক্তাঞ্চল' : '1971 Muktanchal History'}
                </a>
              </li>
              <li>
                <a href="#emergency-section" className="hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'জরুরি সেবা ও পুলিশ-হাসপাতাল' : 'Emergency & Hospitals'}
                </a>
              </li>
              <li>
                <a href="#tourism-section" className="hover:text-emerald-400 transition-colors">
                  {lang === 'bn' ? 'কালাইরচর বর্ডার হাট ও পর্যটন' : 'Border Haat & Sightseeing'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Prominent Developer Spotlight with Jaidul's Real Photo */}
          <div className="lg:col-span-4 space-y-3 bg-stone-900/80 p-5 rounded-2xl border border-stone-800 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'ডিজিটাল রূপকার ও নির্মাতা' : 'Platform Architect & Creator'}</span>
              </span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded-full font-bold">
                Developed by Jaidul
              </span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-emerald-500/50 shrink-0 bg-stone-800">
                <img
                  src={DEVELOPER_INFO.photoUrl}
                  alt="Jaidul"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-black text-white">
                  {lang === 'bn' ? 'জাইদুল ইসলাম (জাইদুল)' : DEVELOPER_INFO.name}
                </p>
                <p className="text-[11px] text-emerald-300 font-medium">
                  {lang === 'bn' ? 'ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার' : DEVELOPER_INFO.title}
                </p>
                <p className="text-[10px] text-stone-400">
                  {lang === 'bn' ? 'রৌমারী, কুড়িগ্রাম' : 'Rowmari, Kurigram'}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed pt-1">
              {lang === 'bn'
                ? 'রৌমারী উপজেলার গৌরবোজ্জ্বল ইতিহাস ও ১৯৬টি গ্রামের সঠিক তথ্য বিশ্বের বুকে ডিজিটালভাবে পৌঁছে দিতে জাইদুল এই পোর্টালটি নির্মাণ করেছেন।'
                : 'Engineered with love and dedication by Jaidul Islam for the people of Rowmari Upazila.'}
            </p>

            <div className="pt-2 flex items-center justify-between gap-2 border-t border-stone-800">
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{DEVELOPER_INFO.email}</span>
              </a>

              <button
                onClick={onOpenDeveloper}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'জাইদুলের প্রোফাইল' : 'Profile'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {lang === 'bn' ? 'রৌমারী উপজেলা ডিজিটাল পোর্টাল।' : 'Rowmari Upazila Portal.'} All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-stone-400">
              {lang === 'bn' ? 'ডিজাইন ও ডেভেলপমেন্ট:' : 'Designed & Developed by:'}{' '}
              <button
                onClick={onOpenDeveloper}
                className="text-emerald-400 hover:underline font-bold cursor-pointer"
              >
                Developed by Jaidul (জাইদুল)
              </button>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
