import React from 'react';
import { ShieldCheck, Award, Flag, Calendar, BookOpen, Quote } from 'lucide-react';
import { HISTORICAL_HIGHLIGHTS } from '../data/rowmariData';

interface HistorySectionProps {
  lang: 'bn' | 'en';
}

export const HistorySection: React.FC<HistorySectionProps> = ({ lang }) => {
  return (
    <section id="history-section" className="py-16 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'bn' ? 'মহান মুক্তিযুদ্ধ ১৯৭১' : '1971 Liberation War Heritage'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'সেক্টর ১১' : 'Sector 11'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            {lang === 'bn' ? 'অপরাজেয় রৌমারী মুক্তাঞ্চলের গৌরবময় ইতিহাস' : 'The Invincible 1971 Rowmari Muktanchal'}
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
            {lang === 'bn'
              ? '১৯৭১ সালের ৯ মাস রক্তক্ষয়ী মুক্তিযুদ্ধের পুরোটা সময় পাকিস্তানি হানাদার বাহিনী রৌমারীর মাটিতে পা রাখতে পারেনি। রৌমারী ছিল স্বাধীন সার্বভৌম বাংলাদেশের জীবন্ত দুর্গ।'
              : 'Throughout the entire nine-month war of 1971, the Pakistani military could never capture Rowmari. It stood as a self-governed, sovereign bastion of Bangladesh.'}
          </p>
        </div>

        {/* Hero Archival Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Story Essay (70% reading column) */}
          <div className="lg:col-span-8 bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/70 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-200 dark:border-stone-700 pb-4">
              <span className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0">
                <Flag className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-white">
                  {lang === 'bn' ? 'কেন রৌমারী একমাত্র মুক্তাঞ্চল?' : 'Why Rowmari Remained Completely Liberated'}
                </h3>
                <p className="text-xs text-stone-500">
                  {lang === 'bn' ? 'মুক্তিযুদ্ধ বিষয়ক প্রামাণ্য দলিল ও ঐতিহাসিক তাৎপর্য' : 'Historical Documentation & Military Significance'}
                </p>
              </div>
            </div>

            <div className="prose text-xs sm:text-sm text-stone-700 dark:text-stone-300 space-y-4 leading-relaxed">
              <p>
                {lang === 'bn' ? (
                  <>
                    ১৯৭১ সালের ২৫ মার্চের কালরাতের পর যখন সারাদেশ পাকিস্তান হানাদার বাহিনীর নির্মম আক্রমণের শিকার হয়, তখন রৌমারীর মুক্তিকামী জনতা, দেশপ্রেমিক ছাত্রসমাজ ও আনসার-মুজাহিদ বাহিনী প্রাকৃতিক নদী ও সীমান্ত বেষ্টিত অবস্থানকে কাজে লাগিয়ে প্রতিরোধ গড়ে তোলেন। পশ্চিমে প্রমত্তা ব্রহ্মপুত্র নদ এবং পূর্বে ভারতের মেঘালয়-আসাম সীমান্ত রৌমারীকে সামরিকভাবে এক অপ্রতিরোধ্য দুর্গে রূপান্তর করে।
                  </>
                ) : (
                  <>
                    Following the brutal Pakistani military crackdown in March 1971, the patriotic people of Rowmari harnessed their unique delta geography. Flanked by the roaring Brahmaputra on the west and the Meghalaya foothills on the east, freedom fighters swiftly established an impenetrable liberation perimeter.
                  </>
                )}
              </p>

              <p>
                {lang === 'bn' ? (
                  <>
                    মুক্তিযুদ্ধের ১১ নম্বর সেক্টরের অধীনে রৌমারী ছিল প্রধান সমন্বয় কেন্দ্র। ঐতিহ্যবাহী রৌমারী সিজি জামান উচ্চ বিদ্যালয়ে স্থাপন করা হয় মুক্তিযোদ্ধা প্রশিক্ষণ ক্যাম্প। এখান থেকেই ৩০ হাজারের বেশি তরুণ প্রশিক্ষণ নিয়ে কুড়িগ্রাম, রংপুর, গাইবান্ধা, জামালপুর ও টাঙ্গাইল ফ্রন্টে যুদ্ধে অংশ নেন। বীরপ্রতীক তারামন বিবি এই অঞ্চলে অসাধারণ বীরত্বের নিদর্শন স্থাপন করেন।
                  </>
                ) : (
                  <>
                    Operating under Sector 11, Rowmari served as the master strategic launchpad. Over 30,000 valiant youth received military training at the CG Zaman School camp before mobilizing to active combat fronts. National icon Bir Protik Taramon Bibi rendered historic heroics across this frontline.
                  </>
                )}
              </p>
            </div>

            {/* Archival Pull Quote */}
            <div className="p-4 bg-amber-50/70 dark:bg-amber-950/30 border-y border-amber-200/80 dark:border-amber-800/60 rounded-lg">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium italic text-amber-900 dark:text-amber-200">
                  {lang === 'bn'
                    ? '“রৌমারী কোনো সাধারণ উপজেলা নয়, এটি আমাদের মহান মুক্তিযুদ্ধের সেই অপরাজেয় পবিত্র মাটি—যেখানে পাকিস্তানি হানাদাররা কখনোই পা ফেলার সাহস পায়নি।”'
                    : '"Rowmari was no ordinary outpost; it was the sacred unconquered soil of our liberation struggle where occupation forces could never gain a single foothold."'}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Archival Fast Facts Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-amber-900 to-stone-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <Award className="w-4 h-4" />
                <span>{lang === 'bn' ? 'মুক্তাঞ্চলের অর্জন' : 'Muktanchal Facts'}</span>
              </div>
              <h4 className="text-xl font-bold tracking-tight">
                {lang === 'bn' ? 'স্বাধীন বেসামরিক প্রশাসন' : 'Autonomous Civil Administration'}
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                {lang === 'bn'
                  ? 'যুদ্ধ চলাকালীন রৌমারীতে ডাকঘর চালু ছিল এবং স্বাধীন বাংলাদেশ সরকারের প্রথম ডাকটিকিট বিলি করা হয়েছিল। বিশ্ব গণমাধ্যমে যা বিপুল আলোড়ন সৃষ্টি করে।'
                  : 'Sovereign civil departments, judicial recordkeeping, and Bangladesh postal stamps operated freely, capturing global media attention.'}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-stone-300">{lang === 'bn' ? 'মুক্তিযুদ্ধ সেক্টর' : 'Sector'}</span>
                <span className="font-bold text-amber-300">সেক্টর ১১ (Sector 11)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-stone-300">{lang === 'bn' ? 'প্রশিক্ষণপ্রাপ্ত যোদ্ধা' : 'Trained Fighters'}</span>
                <span className="font-bold text-amber-300">৩০,০০০+ যোদ্ধা</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-stone-300">{lang === 'bn' ? 'হানাদার প্রবেশ' : 'Occupied Time'}</span>
                <span className="font-bold text-emerald-400">০ দিন (সম্পূর্ণ মুক্ত)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-300">{lang === 'bn' ? 'বীরপ্রতীক স্মারক' : 'Heroic Laureate'}</span>
                <span className="font-bold text-amber-300">তারামন বিবি বীরপ্রতীক</span>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Timeline Milestone Cards */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-stone-500">
            {lang === 'bn' ? '১৯৭১-এর গুরুত্বপূর্ণ ঐতিহাসিক ঘটনাবলি' : 'Key Historical Milestones (1971)'}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {HISTORICAL_HIGHLIGHTS.map((event, idx) => (
              <div
                key={idx}
                className="p-5 bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-xl space-y-2 hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 font-bold">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {lang === 'bn' ? event.dateBn : event.dateEn}
                  </span>
                  <span className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-950/80 rounded text-[10px]">
                    {event.year}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-stone-900 dark:text-white">
                  {lang === 'bn' ? event.titleBn : event.titleEn}
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {lang === 'bn' ? event.descriptionBn : event.descriptionEn}
                </p>
                <p className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400 pt-1 border-t border-stone-200/60 dark:border-stone-700">
                  {lang === 'bn' ? event.significanceBn : event.significanceEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
