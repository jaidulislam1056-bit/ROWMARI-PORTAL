import React from 'react';
import { Globe, Menu, X, ShieldCheck } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/rowmariData';

interface NavbarProps {
  lang: 'bn' | 'en';
  onToggleLang: () => void;
  onOpenDeveloper: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenDeveloper }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-black tracking-tight text-emerald-950 dark:text-emerald-400 whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              রৌ
            </div>
            <div className="flex flex-col">
              <span className="leading-tight">{lang === 'bn' ? 'রৌমারী উপজেলা' : 'Rowmari Upazila'}</span>
              <span className="text-[10px] font-normal text-stone-500 tracking-normal">
                {lang === 'bn' ? 'কুড়িগ্রাম জেলা · ডিজিটাল পোর্টাল' : 'Kurigram · Digital Gateway'}
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-stone-600 dark:text-stone-300">
            <a
              href="#map-section"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {lang === 'bn' ? 'উপজেলা মানচিত্র' : 'Interactive Map'}
            </a>
            <a
              href="#unions-section"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {lang === 'bn' ? '৬টি ইউনিয়ন ও গ্রাম' : '6 Unions & Villages'}
            </a>
            <a
              href="#history-section"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {lang === 'bn' ? 'মুক্তাঞ্চল ৭১' : '1971 History'}
            </a>
            <a
              href="#emergency-section"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {lang === 'bn' ? 'জরুরি সেবা' : 'Emergency'}
            </a>
            <a
              href="#tourism-section"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {lang === 'bn' ? 'দর্শনীয় স্থান' : 'Tourism'}
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language toggle */}
            <button
              onClick={onToggleLang}
              aria-label="Toggle Language"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:text-stone-200 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{lang === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Premium Developer Avatar Button with Jaidul's Photo */}
            <button
              onClick={onOpenDeveloper}
              title="View Developer Profile: Jaidul"
              className="group inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-800 to-teal-900 hover:from-emerald-700 hover:to-teal-800 rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer border border-emerald-700/60"
            >
              <div className="relative w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/60 shrink-0 bg-stone-300">
                <img
                  src={DEVELOPER_INFO.photoUrl}
                  alt="Jaidul"
                  onError={(e) => {
                    // Fallback to initial
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-emerald-200 font-semibold leading-none">
                  Developer
                </span>
                <span className="text-xs font-bold text-white leading-tight">
                  {lang === 'bn' ? 'জাইদুল' : 'Jaidul'}
                </span>
              </div>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg cursor-pointer"
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-4 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 space-y-2">
            <a
              href="#map-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              {lang === 'bn' ? 'উপজেলা মানচিত্র' : 'Interactive Map'}
            </a>
            <a
              href="#unions-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              {lang === 'bn' ? '৬টি ইউনিয়ন ও গ্রাম তালিকা' : '6 Unions & Villages'}
            </a>
            <a
              href="#history-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              {lang === 'bn' ? 'মুক্তাঞ্চল ৭১' : '1971 History'}
            </a>
            <a
              href="#emergency-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              {lang === 'bn' ? 'জরুরি সেবা' : 'Emergency'}
            </a>
            <a
              href="#tourism-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              {lang === 'bn' ? 'দর্শনীয় স্থান' : 'Tourism'}
            </a>
          </div>
        )}
      </header>
    </>
  );
};
