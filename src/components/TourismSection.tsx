import React from 'react';
import { Compass, MapPin, Calendar, Sparkles, Navigation } from 'lucide-react';
import { TOURIST_SPOTS, TouristSpot } from '../data/rowmariData';

interface TourismSectionProps {
  lang: 'bn' | 'en';
  onViewSpotOnMap: (spot: TouristSpot) => void;
}

export const TourismSection: React.FC<TourismSectionProps> = ({ lang, onViewSpotOnMap }) => {
  return (
    <section id="tourism-section" className="py-16 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-400 mb-2">
            <Compass className="w-4 h-4" />
            <span>{lang === 'bn' ? 'প্রাকৃতিক রূপ ও ঐতিহ্য' : 'Scenic Delta & Heritage'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'দর্শনীয় স্থানসমূহ' : 'Attractions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            {lang === 'bn' ? 'রৌমারীর অপরূপ নৈসর্গিক ও ঐতিহাসিক স্থান' : 'Natural Wonders & Heritage of Rowmari'}
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
            {lang === 'bn'
              ? 'ব্রহ্মপুত্রের বিস্তীর্ণ চরাঞ্চল, ভারত-বাংলাদেশ আন্তর্জাতিক বর্ডার হাট, ১৯৭১-এর মুক্তাঞ্চল স্মৃতিসৌধ এবং দূর দিগন্তে নীল মেঘালয় পাহাড়ের মোহনীয় রূপ।'
              : 'Discover scenic sandbars across the Brahmaputra, the international frontier haat, war memorials, and misty views of the Meghalaya hills.'}
          </p>
        </div>

        {/* Tourist Spots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOURIST_SPOTS.map((spot, idx) => (
            <div
              key={spot.id}
              className="bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Atmospheric Hero Box for the spot with rich SVG styling */}
                <div className={`relative h-48 sm:h-56 p-6 flex flex-col justify-between text-white overflow-hidden ${
                  idx === 0 
                    ? 'bg-gradient-to-br from-cyan-900 via-sky-800 to-emerald-900' 
                    : idx === 1
                      ? 'bg-gradient-to-br from-amber-900 via-orange-800 to-stone-900'
                      : idx === 2
                        ? 'bg-gradient-to-br from-emerald-950 via-teal-900 to-stone-900'
                        : 'bg-gradient-to-br from-indigo-950 via-slate-800 to-emerald-950'
                }`}>
                  {/* Subtle Vector Background Shapes */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                      <path d="M0,150 Q100,50 200,120 T400,80 L400,200 L0,200 Z" fill="#ffffff" />
                    </svg>
                  </div>

                  <div className="relative flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-black/30 backdrop-blur-sm rounded-md border border-white/10">
                      {spot.category}
                    </span>
                    <span className="text-xs font-mono text-stone-300">
                      #{idx + 1}
                    </span>
                  </div>

                  <div className="relative space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {lang === 'bn' ? spot.nameBn : spot.nameEn}
                    </h3>
                    <p className="text-xs text-stone-200 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{lang === 'bn' ? spot.locationBn : spot.locationEn}</span>
                    </p>
                  </div>
                </div>

                {/* Spot Details Body */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {lang === 'bn' ? spot.descriptionBn : spot.descriptionEn}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400 bg-white dark:bg-stone-800 p-2.5 rounded-xl border border-stone-200 dark:border-stone-700">
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-stone-900 dark:text-white">
                      {lang === 'bn' ? 'ভ্রমণের উপযুক্ত সময়:' : 'Best Time:'}
                    </span>
                    <span>{lang === 'bn' ? spot.bestTimeBn : spot.bestTimeEn}</span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                      {lang === 'bn' ? 'প্রধান আকর্ষণসমূহ' : 'Key Highlights'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {spot.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 rounded-md"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    onViewSpotOnMap(spot);
                    const el = document.getElementById('map-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl shadow-sm transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'মানচিত্রে এই স্থানটি দেখুন' : 'Explore Spot on Map'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
