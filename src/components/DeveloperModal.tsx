import React, { useState } from 'react';
import { X, Mail, MapPin, Code2, Award, Heart, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/rowmariData';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'bn' | 'en';
}

export const DeveloperModal: React.FC<DeveloperModalProps> = ({ isOpen, onClose, lang }) => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [userName, setUserName] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [imageLoaded, setImageLoaded] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userMsg.trim()) return;
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackSent(false);
      setUserName('');
      setUserMsg('');
      setUserPhone('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-gradient-to-r from-stone-50 via-emerald-50/40 to-stone-50 dark:from-stone-900 dark:via-emerald-950/20 dark:to-stone-900">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 bg-emerald-600 text-white rounded-lg shadow-sm">
              <Code2 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                <span>{lang === 'bn' ? 'ডেভেলপার পরিচিতি ও তথ্য' : 'Developer Information'}</span>
                <span className="px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 rounded-full">
                  {lang === 'bn' ? 'জাইদুল ইসলাম' : 'Jaidul Islam'}
                </span>
              </h3>
              <p className="text-xs text-stone-500">
                {lang === 'bn' ? 'রৌমারী উপজেলা সমন্বিত ডিজিটাল পোর্টাল' : 'Rowmari Upazila Digital Portal'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Developer Spotlight with uploaded picture */}
          <div className="relative overflow-hidden p-5 bg-gradient-to-br from-emerald-50 via-white to-amber-50/30 dark:from-emerald-950/30 dark:via-stone-900 dark:to-stone-900 border border-emerald-200/80 dark:border-emerald-800/60 rounded-2xl shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              {/* Jaidul's Real Uploaded Picture */}
              <div className="relative group shrink-0">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-4 ring-emerald-600/20 dark:ring-emerald-500/30 shadow-lg bg-stone-200 dark:bg-stone-800">
                  {imageLoaded ? (
                    <img
                      src={DEVELOPER_INFO.photoUrl}
                      alt={DEVELOPER_INFO.name}
                      onError={() => setImageLoaded(false)}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-teal-800 flex flex-col items-center justify-center text-white">
                      <span className="text-3xl font-extrabold">JI</span>
                      <span className="text-[10px] tracking-widest uppercase font-semibold">Jaidul</span>
                    </div>
                  )}
                </div>

                {/* Verified Ribbon */}
                <div className="absolute -bottom-2 -right-2 bg-emerald-700 text-white p-1 rounded-full shadow-md flex items-center justify-center" title="Verified Creator">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Developer Credentials */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white tracking-tight">
                    {lang === 'bn' ? DEVELOPER_INFO.nameBn : DEVELOPER_INFO.name}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100/90 dark:bg-emerald-950 px-2.5 py-0.5 rounded-md border border-emerald-300 dark:border-emerald-800">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{lang === 'bn' ? 'ওয়েব ডেভেলপার ও ইঞ্জিনিয়ার' : 'Lead Engineer'}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-emerald-800 dark:text-emerald-300">
                  {lang === 'bn' ? DEVELOPER_INFO.titleBn : DEVELOPER_INFO.title}
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-stone-600 dark:text-stone-400 pt-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{lang === 'bn' ? 'রৌমারী, কুড়িগ্রাম, বাংলাদেশ' : 'Rowmari, Kurigram, Bangladesh'}</span>
                  </span>
                  <a 
                    href={`mailto:${DEVELOPER_INFO.email}`} 
                    className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 hover:underline font-semibold"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    <span>{DEVELOPER_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Bio & Message */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{lang === 'bn' ? 'উদ্দেশ্য ও অঙ্গীকার' : 'Vision & Dedication'}</span>
            </h5>
            <p className="text-sm font-medium text-stone-800 dark:text-stone-200 leading-relaxed bg-stone-50 dark:bg-stone-800/60 p-4 rounded-xl border border-stone-200 dark:border-stone-700 italic">
              {lang === 'bn' ? DEVELOPER_INFO.quoteBn : DEVELOPER_INFO.quoteEn}
            </p>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              {lang === 'bn' ? DEVELOPER_INFO.bioBn : DEVELOPER_INFO.bioEn}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {lang === 'bn' ? 'ব্যবহৃত প্রযুক্তি কাঠামো' : 'Technology Stack & Engineering'}
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {DEVELOPER_INFO.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Send Message / Suggestion to Jaidul Form */}
          <div className="p-4 bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 rounded-xl space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500" />
              <h5 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                {lang === 'bn' ? 'জাইদুল-কে রৌমারী সম্পর্কে নতুন তথ্য বা শুভেচ্ছা পাঠান' : 'Send Feedback or Greeting to Jaidul'}
              </h5>
            </div>
            
            {feedbackSent ? (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg flex items-center gap-3 text-emerald-800 dark:text-emerald-300 text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>
                  {lang === 'bn' 
                    ? 'ধন্যবাদ! আপনার বার্তাটি জাইদুল ইসলামের কাছে সফলভাবে সংরক্ষিত হয়েছে।' 
                    : 'Thank you! Your message has been sent to Jaidul Islam.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-600 dark:text-stone-300 mb-1">
                      {lang === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder={lang === 'bn' ? 'যেমন: মোঃ রফিকুল ইসলাম' : 'e.g. John Doe'}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-600 dark:text-stone-300 mb-1">
                      {lang === 'bn' ? 'মোবাইল / গ্রাম (ঐচ্ছিক)' : 'Mobile or Village'}
                    </label>
                    <input
                      type="text"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      placeholder={lang === 'bn' ? 'যেমন: ০১৭XXXXXXXX / কালাইরচর' : '017XXXXXXXX'}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 dark:text-stone-300 mb-1">
                    {lang === 'bn' ? 'আপনার পরামর্শ বা গ্রামের কোনো নতুন তথ্য *' : 'Message or Village Information *'}
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={userMsg}
                    onChange={(e) => setUserMsg(e.target.value)}
                    placeholder={lang === 'bn' ? 'রৌমারীর কোনো নতুন স্থান, ফোন নম্বর বা তথ্য যোগ করতে লিখুন...' : 'Write your feedback or points about Rowmari to add...'}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'বার্তা পাঠান' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 text-xs text-stone-500">
          <div className="flex items-center gap-1.5">
            <span>Crafted with pride by</span>
            <strong className="text-emerald-700 dark:text-emerald-400">Jaidul (জাইদুল)</strong>
          </div>
          <button
            onClick={onClose}
            className="text-stone-700 dark:text-stone-300 font-medium hover:underline cursor-pointer"
          >
            {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
