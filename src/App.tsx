/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveMap } from './components/InteractiveMap';
import { UnionsSection } from './components/UnionsSection';
import { HistorySection } from './components/HistorySection';
import { EmergencySection } from './components/EmergencySection';
import { TourismSection } from './components/TourismSection';
import { CitizenGuideSection } from './components/CitizenGuideSection';
import { DeveloperModal } from './components/DeveloperModal';
import { Footer } from './components/Footer';
import { UNIONS_DATA, MAP_POINTS, EMERGENCY_CONTACTS, UnionData, TouristSpot } from './data/rowmariData';
import { Search, MapPin, Phone, ChevronRight, Home } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnionId, setSelectedUnionId] = useState<string>('rowmari-sadar');

  const toggleLanguage = () => {
    setLang(prev => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleFocusUnion = (union: UnionData) => {
    setSelectedUnionId(union.id);
  };

  const handleViewSpotOnMap = (spot: TouristSpot) => {
    const matchedPoint = MAP_POINTS.find(p => p.id === spot.id || p.titleBn.includes(spot.nameBn.substring(0, 5)));
    if (matchedPoint) {
      setSelectedUnionId(matchedPoint.unionId);
    }
  };

  // Live search filtering across unions, villages, landmarks, and emergency services
  const trimmedSearch = searchQuery.trim().toLowerCase();
  
  // Find matching villages across all unions
  const matchingVillages: { village: string; union: UnionData }[] = [];
  if (trimmedSearch.length > 1) {
    UNIONS_DATA.forEach(u => {
      const vList = lang === 'bn' ? u.villagesBn : u.villagesEn;
      vList.forEach(v => {
        if (v.toLowerCase().includes(trimmedSearch)) {
          matchingVillages.push({ village: v, union: u });
        }
      });
    });
  }

  const searchResults = trimmedSearch.length > 1 ? {
    villages: matchingVillages,
    unions: UNIONS_DATA.filter(u => 
      u.nameBn.toLowerCase().includes(trimmedSearch) || 
      u.nameEn.toLowerCase().includes(trimmedSearch) ||
      u.descriptionBn.toLowerCase().includes(trimmedSearch)
    ),
    points: MAP_POINTS.filter(p => 
      p.titleBn.toLowerCase().includes(trimmedSearch) || 
      p.titleEn.toLowerCase().includes(trimmedSearch) ||
      p.descriptionBn.toLowerCase().includes(trimmedSearch)
    ),
    contacts: EMERGENCY_CONTACTS.filter(c => 
      c.nameBn.toLowerCase().includes(trimmedSearch) || 
      c.nameEn.toLowerCase().includes(trimmedSearch) ||
      c.phone.includes(trimmedSearch)
    )
  } : null;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 flex flex-col font-sans">
      {/* Strict 3-Zone Top Navigation Bar with Jaidul's Avatar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenDeveloper={() => setIsDeveloperModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Key Statistics and Jaidul's Spotlight */}
        <HeroSection
          lang={lang}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectQuickFilter={(f) => console.log(f)}
          onOpenDeveloper={() => setIsDeveloperModalOpen(true)}
        />

        {/* Live Search Results Modal/Dropdown when user types query */}
        {searchResults && (
          searchResults.villages.length > 0 || 
          searchResults.unions.length > 0 || 
          searchResults.points.length > 0 || 
          searchResults.contacts.length > 0
        ) && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 mb-8 relative z-30">
            <div className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-2xl shadow-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  <span>
                    {lang === 'bn' ? `খোঁজের ফলাফল ("${searchQuery}")` : `Search Results for "${searchQuery}"`}
                  </span>
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
                >
                  {lang === 'bn' ? 'মুছে ফেলুন' : 'Dismiss'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* Matched Villages (The specific user request) */}
                {searchResults.villages.length > 0 && (
                  <div className="space-y-2">
                    <span className="font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block flex items-center gap-1">
                      <Home className="w-3 h-3" />
                      <span>{lang === 'bn' ? 'প্রাপ্ত গ্রামসমূহ' : 'Villages Found'}</span> ({searchResults.villages.length})
                    </span>
                    <div className="max-h-48 overflow-y-auto space-y-1.5">
                      {searchResults.villages.slice(0, 10).map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            handleFocusUnion(item.union);
                            setSearchQuery('');
                            const el = document.getElementById('unions-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full text-left p-2 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors border border-emerald-200/60 dark:border-emerald-800/60 block cursor-pointer"
                        >
                          <p className="font-bold text-stone-900 dark:text-white">
                            📍 {item.village}
                          </p>
                          <p className="text-[10px] text-emerald-800 dark:text-emerald-300">
                            {lang === 'bn' ? item.union.nameBn : item.union.nameEn}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Matched Landmarks */}
                {searchResults.points.length > 0 && (
                  <div className="space-y-2">
                    <span className="font-bold text-stone-400 uppercase tracking-wider block">
                      {lang === 'bn' ? 'স্থান ও স্থাপনা' : 'Landmarks'} ({searchResults.points.length})
                    </span>
                    {searchResults.points.slice(0, 6).map(p => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setSelectedUnionId(p.unionId);
                          setSearchQuery('');
                          const el = document.getElementById('map-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full text-left p-2 rounded-lg bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 transition-colors border border-stone-200/60 dark:border-stone-700 block cursor-pointer"
                      >
                        <p className="font-bold text-stone-900 dark:text-white flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{lang === 'bn' ? p.titleBn : p.titleEn}</span>
                        </p>
                        <span className="text-[10px] text-emerald-700 dark:text-emerald-400">
                          {lang === 'bn' ? p.badgeBn : p.badgeEn}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Matched Emergency Numbers */}
                {searchResults.contacts.length > 0 && (
                  <div className="space-y-2">
                    <span className="font-bold text-stone-400 uppercase tracking-wider block">
                      {lang === 'bn' ? 'জরুরি সেবা' : 'Emergency'} ({searchResults.contacts.length})
                    </span>
                    {searchResults.contacts.map(c => (
                      <div
                        key={c.id}
                        className="p-2 rounded-lg bg-stone-50 dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700 space-y-1"
                      >
                        <p className="font-bold text-stone-900 dark:text-white">
                          {lang === 'bn' ? c.nameBn : c.nameEn}
                        </p>
                        <a
                          href={`tel:${c.phone}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:underline"
                        >
                          <Phone className="w-3 h-3" />
                          <span>{c.phone}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Interactive Map of Rowmari (Dual Mode: SVG Union Boundaries + Leaflet OpenStreetMap) */}
        <InteractiveMap
          lang={lang}
          selectedUnionId={selectedUnionId}
          onSelectUnion={handleFocusUnion}
        />

        {/* 6 Unions Directory & Village Roster Section */}
        <UnionsSection
          lang={lang}
          onFocusUnionOnMap={handleFocusUnion}
        />

        {/* 1971 Historic Rowmari Muktanchal Heritage Section */}
        <HistorySection
          lang={lang}
        />

        {/* 24/7 Citizen Emergency Hotlines & Directory */}
        <EmergencySection
          lang={lang}
        />

        {/* Natural Attractions & Border Haat Tourism Section */}
        <TourismSection
          lang={lang}
          onViewSpotOnMap={handleViewSpotOnMap}
        />

        {/* Citizen E-Services & Digital Guide */}
        <CitizenGuideSection
          lang={lang}
        />
      </main>

      {/* Developer Profile Modal ('Developed by Jaidul' - জাইদুল) */}
      <DeveloperModal
        isOpen={isDeveloperModalOpen}
        onClose={() => setIsDeveloperModalOpen(false)}
        lang={lang}
      />

      {/* Official Institutional Footer with Jaidul's Photo & Developer Credits */}
      <Footer
        lang={lang}
        onOpenDeveloper={() => setIsDeveloperModalOpen(true)}
      />
    </div>
  );
}
