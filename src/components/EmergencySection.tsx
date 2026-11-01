import React, { useState } from 'react';
import { 
  PhoneCall, 
  Copy, 
  Check, 
  Clock, 
  MapPin, 
  ShieldAlert, 
  HeartPulse, 
  Flame, 
  Building2, 
  Zap, 
  HelpCircle 
} from 'lucide-react';
import { EMERGENCY_CONTACTS, EmergencyContact } from '../data/rowmariData';

interface EmergencySectionProps {
  lang: 'bn' | 'en';
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredContacts = activeCategory === 'all'
    ? EMERGENCY_CONTACTS
    : EMERGENCY_CONTACTS.filter(c => c.category === activeCategory);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="emergency-section" className="py-16 bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>{lang === 'bn' ? '২৪/৭ নাগরিক সেবা ও জরুরি হটলাইন' : '24/7 Citizen Emergency Directory'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
              {lang === 'bn' ? 'রৌমারী জরুরি যোগাযোগ ও হেল্পলাইন' : 'Rowmari Emergency Hotlines & Contacts'}
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-2xl">
              {lang === 'bn'
                ? 'হাসপাতাল, অ্যাম্বুলেন্স, থানা পুলিশ, ফায়ার সার্ভিস ও পল্লী বিদ্যুতের সাথে সরাসরি এক ক্লিকে কল বা নম্বর কপি করুন।'
                : 'Direct one-click dialing and verified contacts for hospital, ambulance, police, fire, and power utilities.'}
            </p>
          </div>

          {/* National Toll-Free Helplines Strip */}
          <div className="flex items-center gap-2 p-2 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-xl">
            <span className="text-[11px] font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider pl-1">
              {lang === 'bn' ? 'জাতীয় জরুরি সেবা:' : 'National:'}
            </span>
            <a
              href="tel:999"
              className="px-2.5 py-1 bg-rose-600 text-white text-xs font-bold rounded-lg shadow-sm hover:bg-rose-700 transition-colors"
            >
              ৯৯৯ (999)
            </a>
            <a
              href="tel:333"
              className="px-2.5 py-1 bg-stone-800 text-white text-xs font-bold rounded-lg hover:bg-stone-900 transition-colors"
            >
              ৩৩৩ (333)
            </a>
            <a
              href="tel:109"
              className="px-2.5 py-1 bg-amber-600 text-white text-xs font-bold rounded-lg hover:bg-amber-700 transition-colors"
            >
              ১০৯ (109)
            </a>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8 p-1.5 bg-stone-100 dark:bg-stone-800/80 rounded-xl border border-stone-200 dark:border-stone-700">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-rose-600 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            {lang === 'bn' ? 'সকল জরুরি সেবা' : 'All Contacts'} ({EMERGENCY_CONTACTS.length})
          </button>
          <button
            onClick={() => setActiveCategory('medical')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'medical'
                ? 'bg-rose-600 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'হাসপাতাল ও অ্যাম্বুলেন্স' : 'Hospital & Ambulance'}</span>
          </button>
          <button
            onClick={() => setActiveCategory('police')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'police'
                ? 'bg-rose-600 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'থানা ও পুলিশ' : 'Police & Security'}</span>
          </button>
          <button
            onClick={() => setActiveCategory('fire')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'fire'
                ? 'bg-rose-600 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'ফায়ার সার্ভিস' : 'Fire Service'}</span>
          </button>
          <button
            onClick={() => setActiveCategory('admin')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'admin'
                ? 'bg-rose-600 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'উপজেলা প্রশাসন (ইউএনও)' : 'Administration'}</span>
          </button>
          <button
            onClick={() => setActiveCategory('utility')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'utility'
                ? 'bg-rose-600 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'পল্লী বিদ্যুৎ' : 'Electricity Utility'}</span>
          </button>
        </div>

        {/* Directory Contacts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className={`p-2 rounded-xl text-white ${
                    contact.category === 'medical' ? 'bg-rose-600' :
                    contact.category === 'police' ? 'bg-blue-700' :
                    contact.category === 'fire' ? 'bg-amber-600' :
                    contact.category === 'utility' ? 'bg-amber-500' : 'bg-emerald-700'
                  }`}>
                    {contact.category === 'medical' && <HeartPulse className="w-4 h-4" />}
                    {contact.category === 'police' && <ShieldAlert className="w-4 h-4" />}
                    {contact.category === 'fire' && <Flame className="w-4 h-4" />}
                    {contact.category === 'utility' && <Zap className="w-4 h-4" />}
                    {contact.category === 'admin' && <Building2 className="w-4 h-4" />}
                  </span>

                  <span className="text-[11px] font-semibold text-stone-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{contact.availableHours}</span>
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-stone-900 dark:text-white leading-snug">
                    {lang === 'bn' ? contact.nameBn : contact.nameEn}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    {lang === 'bn' ? contact.roleBn : contact.roleEn}
                  </p>
                </div>

                <div className="text-xs text-stone-600 dark:text-stone-400 flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>{lang === 'bn' ? contact.addressBn : contact.addressEn}</span>
                </div>
              </div>

              {/* Actions: Direct Dial & Copy */}
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider">
                    {lang === 'bn' ? 'জরুরি হেল্পলাইন নম্বর' : 'Phone Number'}
                  </span>
                  <span className="text-sm font-bold text-stone-900 dark:text-white tabular-nums tracking-wide">
                    {contact.phone}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard(contact.phone, contact.id)}
                    aria-label="Copy Phone Number"
                    className="p-2 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-lg transition-colors cursor-pointer"
                    title={lang === 'bn' ? 'নম্বর কপি করুন' : 'Copy Number'}
                  >
                    {copiedId === contact.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={`tel:${contact.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'কল করুন' : 'Call'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
