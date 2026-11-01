import React from 'react';
import { FileText, CheckCircle, ExternalLink, HelpCircle, Shield, Award } from 'lucide-react';

interface CitizenGuideSectionProps {
  lang: 'bn' | 'en';
}

export const CitizenGuideSection: React.FC<CitizenGuideSectionProps> = ({ lang }) => {
  const services = [
    {
      titleBn: 'জন্ম ও মৃত্যু নিবন্ধন সেবা',
      titleEn: 'Birth & Death Registration',
      deptBn: 'ইউনিয়ন পরিষদ ডিজিটাল সেন্টার (UDC)',
      deptEn: 'Union Digital Center (UDC)',
      descBn: 'অনলাইনে আবেদন করে ইউনিয়ন পরিষদ থেকে সরকারি জন্ম ও মৃত্যু সনদ সরাসরি সংগ্রহ করা যায়।',
      descEn: 'Apply online and collect official birth or death certificates directly from the Union Parishad.',
      linkText: 'bdris.gov.bd',
      url: 'https://bdris.gov.bd'
    },
    {
      titleBn: 'ই-নামজারি ও খতিয়ান সেবা',
      titleEn: 'Land Mutation & Record of Rights',
      deptBn: 'রৌমারী উপজেলা সহকারী কমিশনার (ভূমি) কার্যালয়',
      deptEn: 'Assistant Commissioner (Land) Office',
      descBn: 'জমির মালিকানা সংক্রান্ত নামজারি আবেদন ঘরে বসেই ২৮ দিনের মধ্যে সম্পন্ন করা যায়।',
      descEn: 'Online land mutation and ownership verification processed within statutory 28 working days.',
      linkText: 'mutation.land.gov.bd',
      url: 'https://mutation.land.gov.bd'
    },
    {
      titleBn: 'কৃষি কার্ড ও প্রণোদনা সহায়তা',
      titleEn: 'Farmer Subsidy & Agro Incentive Card',
      deptBn: 'উপজেলা কৃষি সম্প্রসারণ অধিদপ্তর',
      deptEn: 'Upazila Agriculture Extension Office',
      descBn: 'চরাঞ্চলীয় ও প্রান্তিক কৃষকদের জন্য সার, উন্নত বীজ এবং দুর্যোগকালীন শস্য প্রণোদনা বিতরণ।',
      descEn: 'Distribution of subsidized fertilizer, certified seeds, and relief assistance for char farmers.',
      linkText: 'dae.gov.bd',
      url: 'http://www.dae.gov.bd'
    },
    {
      titleBn: 'বীর মুক্তিযোদ্ধা ভাতা ও সামাজিক নিরাপত্তা',
      titleEn: 'Freedom Fighter & Social Safety Allowances',
      deptBn: 'উপজেলা সমাজসেবা কার্যালয়',
      deptEn: 'Upazila Social Welfare Office',
      descBn: 'বীর মুক্তিযোদ্ধা ভাতা, বয়স্ক ভাতা, বিধবা ভাতা এবং প্রতিবন্ধী শিক্ষার্থীদের উপবৃত্তি সেবা।',
      descEn: 'Management of national freedom fighter honors, elderly pensions, and student stipends.',
      linkText: 'dss.gov.bd',
      url: 'http://www.dss.gov.bd'
    }
  ];

  return (
    <section className="py-16 bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2">
            <FileText className="w-4 h-4" />
            <span>{lang === 'bn' ? 'ডিজিটাল বাংলাদেশ নাগরিক সেবা' : 'Citizen E-Services Guide'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            {lang === 'bn' ? 'রৌমারী নাগরিক সেবা ও প্রয়োজনীয় লিংক' : 'Citizen Services & Digital Gateway'}
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
            {lang === 'bn'
              ? 'ইউনিয়ন ডিজিটাল সেন্টার (UDC) ও উপজেলা প্রশাসনের প্রধান ডিজিটাল সেবাসমূহ সহজে গ্রহণের তথ্য গাইড।'
              : 'Direct guidance on accessing core civic registries, land records, agriculture, and welfare services.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-300 transition-colors"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-400 block">
                  {lang === 'bn' ? srv.deptBn : srv.deptEn}
                </span>
                <h3 className="text-base font-bold text-stone-900 dark:text-white">
                  {lang === 'bn' ? srv.titleBn : srv.titleEn}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {lang === 'bn' ? srv.descBn : srv.descEn}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 dark:border-stone-800">
                <a
                  href={srv.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  <span>{srv.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
