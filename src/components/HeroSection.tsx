import React from 'react';
import { Search, Map, PhoneCall, Compass, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { UPAZILA_OVERVIEW, DEVELOPER_INFO } from '../data/rowmariData';

interface HeroSectionProps {
  lang: 'bn' | 'en';
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectQuickFilter: (filter: string) => void;
  onOpenDeveloper: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  searchQuery,
  onSearchChange,
  onSelectQuickFilter,
  onOpenDeveloper
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white dark:from-stone-950 dark:via-stone-900 dark:to-stone-900 border-b border-stone-200 dark:border-stone-800">
      {/* Decorative Riverine Delta SVG Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 overflow-hidden">
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          {/* River Brahmaputra Curving Delta Waves */}
          <path
            d="M-50,120 C300,160 450,40 800,90 C1100,130 1300,50 1500,100 L1500,600 L-50,600 Z"
            fill="url(#riverGrad1)"
            opacity="0.35"
          />
          <path
            d="M-50,220 C250,290 550,150 900,210 C1200,260 1350,170 1500,240 L1500,600 L-50,600 Z"
            fill="url(#riverGrad2)"
            opacity="0.25"
          />
          <defs>
            <linearGradient id="riverGrad1" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#059669" />
              <stop offset="0.5" stopColor="#0d9488" />
              <stop offset="1" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="riverGrad2" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop offset="0.7" stopColor="#06b6d4" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Kicker (Anti-Slop Zero-Pill) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              <span>{lang === 'bn' ? 'কুড়িগ্রাম জেলা' : 'Kurigram District'}</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>{lang === 'bn' ? 'রংপুর বিভাগ' : 'Rangpur Division'}</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-amber-700 dark:text-amber-400 font-extrabold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'ঐতিহাসিক ১৯৭১ রৌমারী মুক্তাঞ্চল' : '1971 Uncaptured Zone'}</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight leading-[1.15]"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'bn' ? (
                <>
                  স্বাগতম <span className="text-emerald-700 dark:text-emerald-400 underline decoration-emerald-500/40">রৌমারী উপজেলা</span> ডিজিটাল পোর্টালে
                </>
              ) : (
                <>
                  Welcome to the Official <span className="text-emerald-700 dark:text-emerald-400">Rowmari Upazila</span> Digital Portal
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
              {lang === 'bn' 
                ? 'ব্রহ্মপুত্র নদের উর্বর পলল ভূমি, ১৯৭১ সালের অপরাজেয় মুক্তাঞ্চল এবং মেঘালয় সীমান্তবর্তী ৬টি ইউনিয়নের ১৯৮টি গ্রামের প্রতিটি নাম, ইন্টারঅ্যাক্টিভ মানচিত্র ও জরুরি সেবার সমন্বিত কেন্দ্র।'
                : 'A comprehensive digital gateway to the verdant delta of Brahmaputra, the invincible 1971 Muktanchal, interactive union mapping, complete village directory, and 24/7 civic emergency services.'}
            </p>

            {/* Search Box with Village & Union Search */}
            <div className="relative max-w-xl">
              <div className="relative flex items-center shadow-md rounded-2xl overflow-hidden border border-emerald-200 dark:border-stone-700 bg-white dark:bg-stone-800 focus-within:ring-2 focus-within:ring-emerald-500 transition-all">
                <Search className="w-5 h-5 text-emerald-700 ml-4 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder={
                    lang === 'bn' 
                      ? 'গ্রামের নাম (যেমন: কালাইরচর, চুলিয়ারচর, কুটিরচর), হাসপাতাল বা সেবা খুঁজুন...' 
                      : 'Search village (e.g. Kalairchar, Chuliarchar, Kutirchar), unions, places...'
                  }
                  className="w-full px-3 py-3.5 text-sm bg-transparent text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="mr-3 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
                  >
                    {lang === 'bn' ? 'মুছুন' : 'Clear'}
                  </button>
                )}
              </div>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#map-section"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <Map className="w-4 h-4" />
                <span>{lang === 'bn' ? 'মানচিত্রে উপজেলা দেখুন' : 'Explore Map'}</span>
              </a>

              <a
                href="#unions-section"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl text-xs font-bold shadow-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>{lang === 'bn' ? 'গ্রাম ও ইউনিয়ন তালিকা' : 'Villages & Unions'}</span>
              </a>

              <a
                href="#emergency-section"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{lang === 'bn' ? 'জরুরি হেল্পলাইন ও নম্বর' : 'Emergency Contacts'}</span>
              </a>
            </div>
          </div>

          {/* Hero Visual Card: Ultra-Premium Spotlight Card with Jaidul's Real Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 bg-gradient-to-br from-emerald-950 via-stone-900 to-teal-950 text-white shadow-2xl overflow-hidden border border-emerald-700/50">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-52 h-52 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-5">
                {/* Header of Card */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{lang === 'bn' ? 'রৌমারী ডিজিটাল ফ্রন্ট' : 'Rowmari Civic Tech'}</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-200 bg-emerald-900/60 border border-emerald-700/60 px-2 py-0.5 rounded-full">
                    {lang === 'bn' ? 'কুড়িগ্রাম' : 'Kurigram'}
                  </span>
                </div>

                {/* Developer Spotlight Mini-Hero */}
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden ring-2 ring-emerald-400/60 shrink-0 bg-stone-700 shadow-md">
                    <img
                      src={DEVELOPER_INFO.photoUrl}
                      alt="Jaidul"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-stone-900 rounded-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-white truncate">
                        {lang === 'bn' ? DEVELOPER_INFO.nameBn : DEVELOPER_INFO.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-200 font-medium">
                      {lang === 'bn' ? 'ডিজাইন ও ডেভেলপমেন্ট: জাইদুল' : 'Lead Architect & Developer'}
                    </p>
                    <button
                      onClick={onOpenDeveloper}
                      className="text-[11px] text-stone-300 hover:text-white underline mt-0.5 inline-block cursor-pointer"
                    >
                      {lang === 'bn' ? 'প্রোফাইল দেখুন →' : 'View Profile →'}
                    </button>
                  </div>
                </div>

                {/* Upazila Fast Facts */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-stone-300">{lang === 'bn' ? 'ইউনিয়ন ও গ্রাম' : 'Unions & Villages'}</span>
                    <span className="font-bold text-emerald-300">৬টি ইউনিয়ন · ১৯৮টি গ্রাম</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-stone-300">{lang === 'bn' ? '১৯৭১ মুক্তাঞ্চল' : '1971 History'}</span>
                    <span className="font-bold text-amber-300">একমাত্র অপরাজেয় দুর্গ</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                    <span className="text-stone-300">{lang === 'bn' ? 'আন্তর্জাতিক বর্ডার হাট' : 'Border Haat'}</span>
                    <span className="font-bold text-emerald-300">কালাইরচর (দাঁতভাঙ্গা)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-stone-300">{lang === 'bn' ? 'প্রধান নদী' : 'Primary River'}</span>
                    <span className="font-bold text-emerald-300">ব্রহ্মপুত্র ও জিঞ্জিরাম নদী</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Statistics Strip (Anti-Slop Claim-to-Proof Adjacency) */}
        <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              {lang === 'bn' ? 'মোট ইউনিয়ন ও গ্রাম' : 'Total Unions & Villages'}
            </p>
            <p className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white tabular-nums">
              ০৬ টি <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">/ ১৯৮ গ্রাম</span>
            </p>
            <p className="text-xs text-stone-500">
              {lang === 'bn' ? '৭৮ টি মৌজা ও ৬টি ইউপি' : '78 Mouzas · All Villages Listed'}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              {lang === 'bn' ? 'ভৌগোলিক আয়তন' : 'Total Land Area'}
            </p>
            <p className="text-2xl sm:text-3xl font-black text-emerald-700 dark:text-emerald-400 tabular-nums">
              {UPAZILA_OVERVIEW.areaKm2} <span className="text-base font-medium text-stone-600 dark:text-stone-400">বর্গ কি.মি.</span>
            </p>
            <p className="text-xs text-stone-500">
              {lang === 'bn' ? '১৯,৭৮০ হেক্টর ভূমিসম্পদ' : '19,780 Hectares'}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              {lang === 'bn' ? 'আনুমানিক জনসংখ্যা' : 'Total Population'}
            </p>
            <p className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white tabular-nums">
              {UPAZILA_OVERVIEW.populationApprox}
            </p>
            <p className="text-xs text-stone-500">
              {lang === 'bn' ? 'সাক্ষরতার হার ৪২.৫%' : 'Literacy Rate 42.5%'}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              {lang === 'bn' ? 'ঐতিহাসিক পরিচিতি' : 'Historical Identity'}
            </p>
            <p className="text-2xl sm:text-3xl font-black text-amber-700 dark:text-amber-400">
              {lang === 'bn' ? 'রৌমারী মুক্তাঞ্চল' : 'Muktanchal'}
            </p>
            <p className="text-xs text-stone-500">
              {lang === 'bn' ? '১৯৭১-এ কখনোই দখল হয়নি' : 'Never captured in 1971'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
