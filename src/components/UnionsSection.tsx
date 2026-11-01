import React, { useState } from 'react';
import { UNIONS_DATA, UnionData } from '../data/rowmariData';
import { MapPin, Users, LandPlot, BookOpen, ChevronRight, Phone, CheckCircle, X, Search, Copy, Check } from 'lucide-react';

interface UnionsSectionProps {
  lang: 'bn' | 'en';
  onFocusUnionOnMap: (union: UnionData) => void;
}

export const UnionsSection: React.FC<UnionsSectionProps> = ({ lang, onFocusUnionOnMap }) => {
  const [selectedUnionModal, setSelectedUnionModal] = useState<UnionData | null>(null);
  const [villageSearch, setVillageSearch] = useState('');
  const [expandedVillagesUnionId, setExpandedVillagesUnionId] = useState<string | null>(null);
  const [copiedVillage, setCopiedVillage] = useState<string | null>(null);

  const handleCopyVillage = (village: string) => {
    navigator.clipboard.writeText(village);
    setCopiedVillage(village);
    setTimeout(() => setCopiedVillage(null), 2000);
  };

  return (
    <section id="unions-section" className="py-16 bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2">
            <span>{lang === 'bn' ? 'স্থানীয় সরকার ও প্রশাসন' : 'Local Governance'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'bn' ? '৬টি ইউনিয়ন ও গ্রাম তালিকা' : '6 Unions & Complete Village Directory'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            {lang === 'bn' ? 'রৌমারী উপজেলার ৬টি ইউনিয়ন ও সকল গ্রামের নাম' : 'Rowmari Upazila 6 Unions & Village Directory'}
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
            {lang === 'bn'
              ? 'রৌমারী সদর, দাঁতভাঙ্গা, শৌলমারী, যাদুরচর, চর শৌলমারী ও বন্দবেড়—প্রতিটি ইউনিয়নের আয়তন ও মোট গ্রাম সংখ্যার সাথে সেই সকল গ্রামের সম্পূর্ণ নাম নিচে দেওয়া হলো। আপনার গ্রামটি খুঁজে বের করুন।'
              : 'Detailed civic profiles, demographics, and the complete, authentic list of all villages for every single union.'}
          </p>
        </div>

        {/* Global Village Search Bar */}
        <div className="max-w-xl mb-8">
          <div className="relative flex items-center bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl px-3 py-2 shadow-xs focus-within:ring-2 focus-within:ring-emerald-500">
            <Search className="w-4 h-4 text-emerald-700 shrink-0 mr-2" />
            <input
              type="text"
              value={villageSearch}
              onChange={(e) => setVillageSearch(e.target.value)}
              placeholder={lang === 'bn' ? 'যেকোনো গ্রামের নাম লিখুন (যেমন: কালাইরচর, বাউশমারী, কুটিরচর)...' : 'Filter village name...'}
              className="w-full text-xs bg-transparent text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none"
            />
            {villageSearch && (
              <button
                onClick={() => setVillageSearch('')}
                className="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
              >
                {lang === 'bn' ? 'মুছুন' : 'Clear'}
              </button>
            )}
          </div>
        </div>

        {/* 6 Unions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNIONS_DATA.map((union, index) => {
            const isExpanded = expandedVillagesUnionId === union.id;
            const villageList = lang === 'bn' ? union.villagesBn : union.villagesEn;
            const filteredVillages = villageSearch.trim()
              ? villageList.filter(v => v.toLowerCase().includes(villageSearch.trim().toLowerCase()))
              : villageList;

            // Highlight if village search matches this union
            const matchesSearch = villageSearch.trim() && filteredVillages.length > 0;

            return (
              <div
                key={union.id}
                className={`group bg-white dark:bg-stone-900 border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                  matchesSearch 
                    ? 'ring-2 ring-emerald-500 border-emerald-500' 
                    : 'border-stone-200 dark:border-stone-800 hover:border-emerald-300 dark:hover:border-emerald-700'
                }`}
              >
                <div className="space-y-4">
                  {/* Header Strip */}
                  <div className="flex items-start justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-3">
                    <div>
                      <span className="text-[11px] font-semibold text-stone-400 tracking-wider">
                        {lang === 'bn' ? `ইউনিয়ন #${index + 1}` : `Union 0${index + 1}`}
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {lang === 'bn' ? union.nameBn : union.nameEn}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded tabular-nums">
                      {union.areaKm2} কি.মি.²
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
                    {lang === 'bn' ? union.descriptionBn : union.descriptionEn}
                  </p>

                  {/* Demographics Metrics with Village Count */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-stone-100 dark:border-stone-800 text-xs">
                    <div>
                      <span className="text-stone-400 block text-[10px]">
                        {lang === 'bn' ? 'জনসংখ্যা' : 'Population'}
                      </span>
                      <span className="font-bold text-stone-800 dark:text-stone-200 tabular-nums">
                        {union.population}
                      </span>
                    </div>
                    <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-1 rounded-md">
                      <span className="text-emerald-700 dark:text-emerald-400 block text-[10px] font-bold">
                        {lang === 'bn' ? 'গ্রাম সংখ্যা' : 'Villages'}
                      </span>
                      <span className="font-extrabold text-emerald-800 dark:text-emerald-300 tabular-nums text-sm">
                        {union.villagesCount} টি
                      </span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px]">
                        {lang === 'bn' ? 'সাক্ষরতা' : 'Literacy'}
                      </span>
                      <span className="font-bold text-stone-800 dark:text-stone-200 tabular-nums">
                        {union.literacyRate}
                      </span>
                    </div>
                  </div>

                  {/* Village Names Display - The specific user requirement! */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider flex items-center gap-1">
                        <span>{lang === 'bn' ? 'এই ইউনিয়নের গ্রামসমূহ' : 'Villages in this Union'}</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold">({filteredVillages.length})</span>
                      </span>
                      <button
                        onClick={() => setExpandedVillagesUnionId(isExpanded ? null : union.id)}
                        className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold hover:underline cursor-pointer"
                      >
                        {isExpanded ? (lang === 'bn' ? 'সংক্ষেপ করুন' : 'Show less') : (lang === 'bn' ? 'সকল গ্রাম দেখুন' : 'Show all')}
                      </button>
                    </div>

                    {/* Preview or Expanded Villages Cloud */}
                    <div className={`flex flex-wrap gap-1.5 overflow-hidden transition-all ${
                      isExpanded ? 'max-h-80 overflow-y-auto p-1 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700' : 'max-h-24'
                    }`}>
                      {filteredVillages.map((village, vIdx) => (
                        <button
                          key={vIdx}
                          onClick={() => handleCopyVillage(village)}
                          title={lang === 'bn' ? 'কপি করতে ক্লিক করুন' : 'Click to copy'}
                          className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all inline-flex items-center gap-1 cursor-pointer ${
                            copiedVillage === village
                              ? 'bg-emerald-600 text-white'
                              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-emerald-100 hover:text-emerald-900 border border-stone-200 dark:border-stone-700'
                          }`}
                        >
                          <span>{village}</span>
                          {copiedVillage === village && <Check className="w-2.5 h-2.5" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      onFocusUnionOnMap(union);
                      const el = document.getElementById('map-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'মানচিত্রে অবস্থান' : 'View on Map'}</span>
                  </button>

                  <button
                    onClick={() => setSelectedUnionModal(union)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>{lang === 'bn' ? 'পূর্ণাঙ্গ তালিকা' : 'Full Profile'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Union Full Profile Modal with All Villages */}
      {selectedUnionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl p-6 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
              <div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                  {lang === 'bn' ? 'ইউনিয়ন পরিষদ ও গ্রাম তালিকা' : 'Union Full Information & Village Roster'}
                </span>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                  {lang === 'bn' ? selectedUnionModal.nameBn : selectedUnionModal.nameEn}
                </h3>
              </div>
              <button
                onClick={() => setSelectedUnionModal(null)}
                className="p-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {lang === 'bn' ? selectedUnionModal.descriptionBn : selectedUnionModal.descriptionEn}
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs bg-stone-50 dark:bg-stone-800/60 p-4 rounded-xl border border-stone-200 dark:border-stone-700">
              <div>
                <span className="text-stone-500 block">{lang === 'bn' ? 'ইউপি কার্যালয় অবস্থান' : 'Office Location'}</span>
                <span className="font-bold text-stone-900 dark:text-white">{selectedUnionModal.upOfficeLocation}</span>
              </div>
              <div>
                <span className="text-stone-500 block">{lang === 'bn' ? 'দায়িত্বপ্রাপ্ত চেয়ারম্যান' : 'Current Chairman'}</span>
                <span className="font-bold text-stone-900 dark:text-white">{selectedUnionModal.chairman}</span>
              </div>
              <div>
                <span className="text-stone-500 block">{lang === 'bn' ? 'মোট গ্রাম সংখ্যা' : 'Total Villages'}</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 text-sm">{selectedUnionModal.villagesCount} টি গ্রাম</span>
              </div>
              <div>
                <span className="text-stone-500 block">{lang === 'bn' ? 'ইউপি যোগাযোগ ফোন' : 'Contact Phone'}</span>
                <a href={`tel:${selectedUnionModal.contactPhone}`} className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
                  {selectedUnionModal.contactPhone}
                </a>
              </div>
            </div>

            {/* Complete Village List in Modal */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                  {lang === 'bn' ? `সকল গ্রামের নাম (${selectedUnionModal.villagesBn.length} টি গ্রাম)` : `All Village Names (${selectedUnionModal.villagesEn.length})`}
                </h4>
                <span className="text-[11px] text-stone-400">
                  {lang === 'bn' ? 'কপি করতে গ্রামে ক্লিক করুন' : 'Click village to copy'}
                </span>
              </div>
              <div className="p-4 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 max-h-60 overflow-y-auto">
                <div className="flex flex-wrap gap-1.5">
                  {(lang === 'bn' ? selectedUnionModal.villagesBn : selectedUnionModal.villagesEn).map((village, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyVillage(village)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                        copiedVillage === village
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 hover:border-emerald-500'
                      }`}
                    >
                      <span>{village}</span>
                      {copiedVillage === village && <span className="ml-1 text-[10px]">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-stone-200 dark:border-stone-800">
              <button
                onClick={() => {
                  onFocusUnionOnMap(selectedUnionModal);
                  setSelectedUnionModal(null);
                  const el = document.getElementById('map-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer"
              >
                {lang === 'bn' ? 'মানচিত্রে এই ইউনিয়ন দেখুন' : 'Show on Map'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
