export interface UnionData {
  id: string;
  nameBn: string;
  nameEn: string;
  chairman: string;
  areaKm2: number;
  population: string;
  villagesCount: number;
  mouzasCount: number;
  literacyRate: string;
  descriptionBn: string;
  descriptionEn: string;
  keyFeaturesBn: string[];
  keyFeaturesEn: string[];
  notablePlacesBn: string[];
  notablePlacesEn: string[];
  villagesBn: string[];
  villagesEn: string[];
  contactPhone: string;
  upOfficeLocation: string;
  coordinates: [number, number];
  svgPath?: string;
}

export interface MapPoint {
  id: string;
  titleBn: string;
  titleEn: string;
  category: 'admin' | 'history' | 'emergency' | 'tourism' | 'education';
  lat: number;
  lng: number;
  unionId: string;
  descriptionBn: string;
  descriptionEn: string;
  contact?: string;
  badgeBn: string;
  badgeEn: string;
}

export interface EmergencyContact {
  id: string;
  category: 'medical' | 'police' | 'fire' | 'admin' | 'utility';
  nameBn: string;
  nameEn: string;
  roleBn: string;
  roleEn: string;
  phone: string;
  altPhone?: string;
  addressBn: string;
  addressEn: string;
  availableHours: string;
}

export interface HistoricalEvent {
  year: string;
  dateBn: string;
  dateEn: string;
  titleBn: string;
  titleEn: string;
  descriptionBn: string;
  descriptionEn: string;
  significanceBn: string;
  significanceEn: string;
}

export interface TouristSpot {
  id: string;
  nameBn: string;
  nameEn: string;
  category: string;
  locationBn: string;
  locationEn: string;
  descriptionBn: string;
  descriptionEn: string;
  bestTimeBn: string;
  bestTimeEn: string;
  highlights: string[];
  lat: number;
  lng: number;
}

export const UPAZILA_OVERVIEW = {
  nameBn: 'রৌমারী উপজেলা',
  nameEn: 'Rowmari Upazila',
  districtBn: 'কুড়িগ্রাম',
  districtEn: 'Kurigram',
  divisionBn: 'রংপুর',
  divisionEn: 'Rangpur',
  establishedYear: '১৯৮৩ (থানা হিসেবে ১৯০৮)',
  areaKm2: '১৯৭.৮০',
  populationApprox: '২,৬০,০০০+',
  literacyRate: '৪২.৫%',
  unionsCount: 6,
  villagesCount: 198,
  mouzasCount: 78,
  rivers: ['ব্রহ্মপুত্র নদ (Brahmaputra)', 'ঝিঞ্জিরাম নদী (Jinjiram)', 'হলহলী নদী (Halhali)', 'ধরণী নদী (Dharani)'],
  borderBorders: 'পূর্বে ভারতের আসাম ও মেঘালয় রাজ্য, পশ্চিমে ব্রহ্মপুত্র নদ ও চিলমারী উপজেলা, উত্তরে আসাম ও রাজিবপুর উপজেলা, দক্ষিণে জামালপুরের দেওয়ানগঞ্জ ও বকশীগঞ্জ উপজেলা',
  taglineBn: '১৯৭১ সালের অপরাজেয় রৌমারী মুক্তাঞ্চল ও ব্রহ্মপুত্রের শ্যামল শস্যভাণ্ডার',
  taglineEn: 'The Invincible 1971 Muktanchal & The Verdant Delta of Brahmaputra'
};

export const UNIONS_DATA: UnionData[] = [
  {
    id: 'rowmari-sadar',
    nameBn: 'রৌমারী সদর ইউনিয়ন',
    nameEn: 'Rowmari Sadar Union',
    chairman: 'আব্দুর রাজ্জাক (ভারপ্রাপ্ত/চেয়ারম্যান)',
    areaKm2: 36.42,
    population: '৫২,৩০০ জন',
    villagesCount: 38,
    mouzasCount: 14,
    literacyRate: '৪৬.৮%',
    descriptionBn: 'রৌমারী উপজেলার প্রাণকেন্দ্র। এখানেই উপজেলা পরিষদ, হাসপাতাল, ঐতিহ্যবাহী সিজি জামান উচ্চ বিদ্যালয় ও সরকারি ডিগ্রি কলেজ অবস্থিত। বাণিজ্যিক ও প্রশাসনিক কর্মকাণ্ডের প্রধান কেন্দ্র।',
    descriptionEn: 'The administrative and commercial heart of Rowmari Upazila. Contains the Upazila Parishad, Health Complex, historic schools, and major marketplaces.',
    keyFeaturesBn: ['উপজেলা সদর ও প্রশাসনিক কেন্দ্র', 'বৃহত্তম পাইকারি বাজার', 'রৌমারী সরকারি কলেজ ও সিজি জামান উচ্চ বিদ্যালয়'],
    keyFeaturesEn: ['Administrative headquarters', 'Largest wholesale bazaar', 'Rowmari Govt. College & CG Zaman School'],
    notablePlacesBn: ['রৌমারী উপজেলা পরিষদ কমপ্লেক্স', 'রৌমারী বাজার', 'রৌমারী সরকারি কলেজ', 'সিজি জামান উচ্চ বিদ্যালয়'],
    notablePlacesEn: ['Upazila Parishad Complex', 'Rowmari Bazaar', 'Rowmari Govt College', 'CG Zaman High School'],
    villagesBn: [
      'রৌমারী', 'তুরা রোড পাড়া', 'চুলিয়ারচর', 'মণ্ডলপাড়া', 'নওদাপাড়া', 'বড়াইকান্দি', 
      'শিমুলতলী', 'বাঘমারা', 'ইটালুকান্দা', 'চান্দারচর', 'নটানপাড়া', 'বারবান্দা', 
      'খাটিয়ামারী', 'ডিগ্রিরচর', 'চর ইটালুকান্দা', 'বাগোয়ারচর', 'নতুন বন্দবেড়', 'কাড়ারচর', 
      'আমতলী', 'ডিসি মোড় পাড়া', 'থানা পাড়া', 'কলেজ পাড়া', 'ডাকবাংলো মোড়', 'মধ্যপাড়া', 
      'গোয়ালপাড়া', 'মিয়ারপাড়া', 'তালুকপাড়া', 'হাসপাতাল পাড়া', 'বাজার পাড়া', 'পূর্ব রৌমারী', 
      'পশ্চিম রৌমারী', 'উত্তর রৌমারী', 'দক্ষিণ রৌমারী', 'সর্দারপাড়া', 'কুঠিরপাড়া', 'মোল্লাপাড়া', 
      'মাস্টারপাড়া', 'খন্দকারপাড়া'
    ],
    villagesEn: [
      'Rowmari', 'Tura Road Para', 'Chuliarchar', 'Mondolpara', 'Naodapara', 'Boraikandi',
      'Shimultoli', 'Baghmara', 'Italukanda', 'Chandarchar', 'Notanpara', 'Barbanda',
      'Khatiamari', 'Digrirchar', 'Char Italukanda', 'Bagoarchar', 'Notun Bondober', 'Kararchar',
      'Amtoli', 'DC Mor Para', 'Thana Para', 'College Para', 'Dakbanglo Mor', 'Moddhopara',
      'Goalpara', 'Miarpara', 'Talukpara', 'Hospital Para', 'Bazaar Para', 'Purba Rowmari',
      'Paschim Rowmari', 'Uttar Rowmari', 'Dakshin Rowmari', 'Sarderpara', 'Kuthirpara', 'Mollapara',
      'Masterpara', 'Khondokarpara'
    ],
    contactPhone: '+8801712-345601',
    upOfficeLocation: 'রৌমারী ডাকবাংলো মোড়, রৌমারী',
    coordinates: [25.5615, 89.8524]
  },
  {
    id: 'dantbhanga',
    nameBn: 'দাঁতভাঙ্গা ইউনিয়ন',
    nameEn: 'Dantbhanga Union',
    chairman: 'মোঃ এস এম রেজাউল করিম',
    areaKm2: 41.25,
    population: '৪৭,৬০০ জন',
    villagesCount: 42,
    mouzasCount: 16,
    literacyRate: '৪৪.২%',
    descriptionBn: 'ভারতের মেঘালয় রাজ্যের সীমান্তঘেঁষা উত্তর প্রান্তের সমৃদ্ধ ইউনিয়ন। এখানে বিখ্যাত রৌমারী-কালাইরচর আন্তর্জাতিক বর্ডার হাট অবস্থিত। সুদূর মেঘালয় পাহাড়ের দৃশ্য ও ধান-সরিষা চাষের জন্য পরিচিত।',
    descriptionEn: 'Border union adjacent to Indian Meghalaya in the north. Home to the international Rowmari-Kalairchar Border Haat, with breathtaking distant hill panoramas.',
    keyFeaturesBn: ['রৌমারী-কালাইরচর আন্তর্জাতিক বর্ডার হাট', 'মেঘালয় পাহাড়ের নিকটবর্তী সীমান্ত অঞ্চল', 'বৃহৎ কৃষি ও হাটবাণিজ্য'],
    keyFeaturesEn: ['International Border Haat', 'Meghalaya foothills border vista', 'Rich agricultural and trade economy'],
    notablePlacesBn: ['কালাইরচর বর্ডার হাট', 'দাঁতভাঙ্গা বাজার', 'ঝাউবাড়ি বিজিবি ক্যাম্প', 'দাঁতভাঙ্গা স্কুল ও কলেজ'],
    notablePlacesEn: ['Kalairchar Border Haat', 'Dantbhanga Bazaar', 'Jhaubari BGB Outpost', 'Dantbhanga School & College'],
    villagesBn: [
      'দাঁতভাঙ্গা', 'কালাইরচর', 'ঝাউবাড়ি', 'কাজাইকাটা', 'কাউনিয়ারচর', 'খেতারচর', 
      'গাছবাড়ি', 'চর কাজাইকাটা', 'শালুরমোড়', 'উত্তর দাঁতভাঙ্গা', 'দক্ষিণ দাঁতভাঙ্গা', 'পূর্ব দাঁতভাঙ্গা', 
      'পশ্চিম দাঁতভাঙ্গা', 'বাঘমারা দাঁতভাঙ্গা', 'চর খেতারচর', 'পূর্ব কাউনিয়ারচর', 'বয়ারচর', 'সীমান্তপাড়া', 
      'ছাটকড়াইকান্দি', 'ধর্মপুর', 'টেকানিচর', 'চর ঝাউবাড়ি', 'মিয়া পাড়া', 'সরকারপাড়া', 
      'হাজী পাড়া', 'ঘাটপাড়া', 'মাদারীপাড়া', 'বেরাচর', 'গুচ্ছগ্রাম দাঁতভাঙ্গা', 'হরিনধরা', 
      'বেপারীপাড়া', 'শেখপাড়া', 'মণ্ডলপাড়া দাঁতভাঙ্গা', 'আকন্দপাড়া', 'খাঁপাড়া', 'কবিরাজপাড়া', 
      'প্রামাণিকপাড়া', 'মুন্সিপাড়া', 'চৌধুরীপাড়া', 'বালিয়ামারী উত্তর', 'ডিগ্রীরচর দাঁতভাঙ্গা', 'চর কাউনিয়া'
    ],
    villagesEn: [
      'Dantbhanga', 'Kalairchar', 'Jhaubari', 'Kazaikata', 'Kauniarchar', 'Khetarchar',
      'Gachbari', 'Char Kazaikata', 'Shalurmor', 'Uttar Dantbhanga', 'Dakshin Dantbhanga', 'Purba Dantbhanga',
      'Paschim Dantbhanga', 'Baghmara Dantbhanga', 'Char Khetarchar', 'Purba Kauniarchar', 'Boyarchar', 'Simantopara',
      'Chhatkoraikandi', 'Dharmapur', 'Tekanichar', 'Char Jhaubari', 'Mia Para', 'Sarkerpara',
      'Haji Para', 'Ghatpara', 'Madaripara', 'Berachar', 'Guchhagram Dantbhanga', 'Horindhora',
      'Beparypara', 'Sheikhpara', 'Mondolpara Dantbhanga', 'Akondopara', 'Khapara', 'Kobirajpara',
      'Pramanikpara', 'Munsipara', 'Chowdhurypara', 'Baliamari Uttar', 'Digrirchar Dantbhanga', 'Char Kaunia'
    ],
    contactPhone: '+8801712-345602',
    upOfficeLocation: 'দাঁতভাঙ্গা বাজার, রৌমারী',
    coordinates: [25.6410, 89.8820]
  },
  {
    id: 'saulmari',
    nameBn: 'শৌলমারী ইউনিয়ন',
    nameEn: 'Saulmari Union',
    chairman: 'মোঃ নজরুল ইসলাম',
    areaKm2: 32.18,
    population: '৪২,১০০ জন',
    villagesCount: 31,
    mouzasCount: 12,
    literacyRate: '৩৯.৭%',
    descriptionBn: 'ঝিঞ্জিরাম নদীর তীরে অবস্থিত শৌলমারী ইউনিয়ন কৃষি উৎপাদনে অন্যতম সেরা। ধান, পাট, শাকসবজি ও চরাঞ্চলীয় ফসল এখানে প্রচুর ফলে। মুক্তিযুদ্ধের স্মৃতিবিজড়িত বহু স্থান রয়েছে।',
    descriptionEn: 'Located along the Jinjiram river, renowned for lush paddy, jute, and vegetable agriculture. Holds deep memories from the 1971 Liberation War.',
    keyFeaturesBn: ['ঝিঞ্জিরাম নদীর নয়নাভিরাম তীর', 'বিস্তীর্ণ সোনালী ধানখেত ও ভুট্টা চাষ', 'সচেতন স্থানীয় কৃষক সম্প্রদায়'],
    keyFeaturesEn: ['Scenic Jinjiram riverbanks', 'Vast paddy and maize fields', 'Active farming cooperatives'],
    notablePlacesBn: ['শৌলমারী বাজার', 'ঝিঞ্জিরাম নদী তীর', 'বাউশমারী ঘাট', 'শৌলমারী বহুমুখী উচ্চ বিদ্যালয়'],
    notablePlacesEn: ['Saulmari Bazaar', 'Jinjiram Riverfront', 'Baushmari Ghat', 'Saulmari Multilateral High School'],
    villagesBn: [
      'শৌলমারী', 'বাউশমারী', 'চিয়ারখাওয়া', 'গয়লাপাড়া', 'বেহুলারচর', 'খেদাইমারী', 
      'সুখেরবাতি', 'কান্দাপাড়া শৌলমারী', 'চর বাউশমারী', 'বালিয়ামারী শৌলমারী', 'মির্জাপাড়া', 'পশ্চিম শৌলমারী', 
      'তালুক শৌলমারী', 'নতুন শৌলমারী', 'পীরেরচর', 'ডাকাতপাড়া', 'কুটিরপাড়া শৌলমারী', 'খাঁপাড়া', 
      'সরকারপাড়া শৌলমারী', 'নদীপাড়া', 'ঘাটপাড়া শৌলমারী', 'মোল্লাপাড়া শৌলমারী', 'বাঘমারা শৌলমারী', 'উত্তর শৌলমারী', 
      'দক্ষিণ শৌলমারী', 'বেরাপাড়া', 'চতলা শৌলমারী', 'মাঝিপাড়া', 'চর চিয়ারখাওয়া', 'সোনাইরচর', 'বৈরাগীচর'
    ],
    villagesEn: [
      'Saulmari', 'Baushmari', 'Chiarkhawa', 'Goylapara', 'Behularchar', 'Khedaimari',
      'Sukherbari', 'Kandapara Saulmari', 'Char Baushmari', 'Baliamari Saulmari', 'Mirzapara', 'Paschim Saulmari',
      'Taluk Saulmari', 'Notun Saulmari', 'Pirerchar', 'Dakatpara', 'Kutirpara Saulmari', 'Khapara',
      'Sarkerpara Saulmari', 'Nodipara', 'Ghatpara Saulmari', 'Mollapara Saulmari', 'Baghmara Saulmari', 'Uttar Saulmari',
      'Dakshin Saulmari', 'Berapara', 'Chotla Saulmari', 'Majhipara', 'Char Chiarkhawa', 'Sonairchar', 'Boiragichar'
    ],
    contactPhone: '+8801712-345603',
    upOfficeLocation: 'শৌলমারী বাজার, রৌমারী',
    coordinates: [25.5920, 89.8150]
  },
  {
    id: 'jadurchar',
    nameBn: 'যাদুরচর ইউনিয়ন',
    nameEn: 'Jadurchar Union',
    chairman: 'মোঃ সরবেশ আলী',
    areaKm2: 34.60,
    population: '৪৪,৮০০ জন',
    villagesCount: 35,
    mouzasCount: 13,
    literacyRate: '৪১.১%',
    descriptionBn: 'দক্ষিণ-পূর্ব সীমান্তে অবস্থিত ঐতিহাসিক যাদুরচর ইউনিয়ন। ১৯৭১ সালের রৌমারী মুক্তাঞ্চলের প্রতিরক্ষা ও গেরিলা ট্রেনিংয়ের বহু ঐতিহাসিক ঘাঁটি এখানে ছিল। পাহাড়ি ঝর্ণাধারা ও নদীর সঙ্গমস্থল।',
    descriptionEn: 'Historical southeastern union on the Indian frontier. Played a strategic defense and guerrilla training role in the 1971 Muktanchal.',
    keyFeaturesBn: ['১৯৭১ সালের ঐতিহাসিক ঘাঁটি', 'সীমান্তবর্তী মনোরম চরাঞ্চল', 'তুরা পাহাড়ের প্রাকৃতিক রূপ'],
    keyFeaturesEn: ['1971 Liberation War frontline base', 'Borderland charms', 'Views of Tura hills'],
    notablePlacesBn: ['যাদুরচর বাজার', 'করইকান্দি বিজিবি ক্যাম্প', 'যাদুরচর ডিগ্রি কলেজ', 'চতুর্ভূজ মুক্তিযুদ্ধ স্মৃতিচিহ্ন'],
    notablePlacesEn: ['Jadurchar Bazaar', 'Koroikandi BGB Camp', 'Jadurchar Degree College', 'Choturbhuj Liberation Memorial'],
    villagesBn: [
      'যাদুরচর', 'করইকান্দি', 'বকবান্দা', 'কাশিয়াবাড়ী', 'চতলারবিল', 'লাঠিয়ালডাঙ্গা', 
      'ধনারচর', 'কামালপুর যাদুরচর', 'আলগারচর', 'দেওয়ানেরচর', 'দক্ষিণ যাদুরচর', 'পূর্ব যাদুরচর', 
      'উত্তর যাদুরচর', 'পশ্চিম যাদুরচর', 'সীমান্তপাড়া যাদুরচর', 'চর করইকান্দি', 'খেওয়ারচর', 'বাঘমারা যাদুরচর', 
      'কোদালকাটি সীমান্তপাড়া', 'সরকারপাড়া যাদুরচর', 'মোল্লাপাড়া যাদুরচর', 'মণ্ডলপাড়া যাদুরচর', 'ব্যাপারীপাড়া', 'মির্জাপাড়া যাদুরচর', 
      'পণ্ডিতপাড়া', 'বাজারপাড়া যাদুরচর', 'স্কুলপাড়া', 'মাদ্রাসা মোড় যাদুরচর', 'ঘাটিয়াপাড়া', 'বালুকাচর', 
      'চর ধনারচর', 'নদীরপাড় যাদুরচর', 'দক্ষিণ কাশিয়াবাড়ী', 'উত্তর কাশিয়াবাড়ী', 'তুরা রোড যাদুরচর'
    ],
    villagesEn: [
      'Jadurchar', 'Koroikandi', 'Bokbanda', 'Kashiabari', 'Chotlarbil', 'Lathialdanga',
      'Dhonarchar', 'Kamalpur Jadurchar', 'Algarchar', 'Dewanerchar', 'Dakshin Jadurchar', 'Purba Jadurchar',
      'Uttar Jadurchar', 'Paschim Jadurchar', 'Simantopara Jadurchar', 'Char Koroikandi', 'Khewarchar', 'Baghmara Jadurchar',
      'Kodalkati Simantopara', 'Sarkerpara Jadurchar', 'Mollapara Jadurchar', 'Mondolpara Jadurchar', 'Beparypara', 'Mirzapara Jadurchar',
      'Ponditpara', 'Bazaarpara Jadurchar', 'Schoolpara', 'Madrasa Mor Jadurchar', 'Ghatiapara', 'Balukachar',
      'Char Dhonarchar', 'Nodirpar Jadurchar', 'Dakshin Kashiabari', 'Uttar Kashiabari', 'Tura Road Jadurchar'
    ],
    contactPhone: '+8801712-345604',
    upOfficeLocation: 'যাদুরচর বাজার, রৌমারী',
    coordinates: [25.4980, 89.8910]
  },
  {
    id: 'char-shoulmari',
    nameBn: 'চর শৌলমারী ইউনিয়ন',
    nameEn: 'Char Shoulmari Union',
    chairman: 'মোঃ সাইদুর রহমান',
    areaKm2: 28.95,
    population: '৩৬,২০০ জন',
    villagesCount: 26,
    mouzasCount: 11,
    literacyRate: '৩৮.৩%',
    descriptionBn: 'ব্রহ্মপুত্র নদের পলল গঠিত উর্বর চরাঞ্চলের সমন্বয়ে গড়ে ওঠা ইউনিয়ন। এখানকার চিনাবাদাম, মরিচ, কালাই ও মিষ্টি কুমড়া সারা দেশে সমাদৃত। নদীমাতৃক বাংলার চিরায়ত রূপ।',
    descriptionEn: 'Formed of fertile Brahmaputra alluvial char lands. Famous for peanuts, dried chili, pulses, and pumpkin cultivation with authentic riverine life.',
    keyFeaturesBn: ['ব্রহ্মপুত্রের উর্বর পলল মাটি', 'বিখ্যাত চিনাবাদাম ও রবি শস্য চাষ', 'ঐতিহ্যবাহী নৌকা সংস্কৃতি'],
    keyFeaturesEn: ['Fertile Brahmaputra alluvium', 'Famous peanuts and winter crops', 'Traditional riverboat trade'],
    notablePlacesBn: ['চর শৌলমারী বাজার', 'নদী তীরবর্তী চরের দৃশ্য', 'চর শৌলমারী উচ্চ বিদ্যালয়', 'নৌকা ঘাট'],
    notablePlacesEn: ['Char Shoulmari Bazaar', 'Scenic Char landscapes', 'Char Shoulmari High School', 'River Ghat'],
    villagesBn: [
      'চর শৌলমারী', 'ঘুঘুমারী', 'ফুলকারচর', 'বন্দবেড় চর', 'সোনাভরি চর', 'খেদাইমারী চর', 
      'শান্তিরচর', 'পূর্ব চর শৌলমারী', 'উত্তর ঘুঘুমারী', 'পশ্চিম ঘুঘুমারী', 'মণ্ডলপাড়া চর', 'আকন্দপাড়া চর', 
      'সরকারপাড়া চর', 'নদীরপাড় চর', 'মধ্যপাড়া চর', 'পশ্চিমপাড়া চর', 'পূর্বপাড়া চর', 'নতুনচর শৌলমারী', 
      'বাঘেরচর', 'বালুচর শৌলমারী', 'বৈরাগীরচর', 'ঘাটচর', 'খেয়াঘাটপাড়া', 'কুটিরচর দক্ষিণ', 
      'চর সোনাভরি', 'মাঝিপাড়া চর'
    ],
    villagesEn: [
      'Char Shoulmari', 'Ghughumari', 'Fulkarchar', 'Bondober Char', 'Sonavari Char', 'Khedaimari Char',
      'Shantirchar', 'Purba Char Shoulmari', 'Uttar Ghughumari', 'Paschim Ghughumari', 'Mondolpara Char', 'Akondopara Char',
      'Sarkerpara Char', 'Nodirpar Char', 'Moddhopara Char', 'Paschimpara Char', 'Purbapara Char', 'Notunchar Shoulmari',
      'Bagherchar', 'Baluchar Shoulmari', 'Boiragirchar', 'Ghatchar', 'Kheya Ghatpara', 'Kutirchar Dakshin',
      'Char Sonavari', 'Majhipara Char'
    ],
    contactPhone: '+8801712-345605',
    upOfficeLocation: 'চর শৌলমারী বাজার, রৌমারী',
    coordinates: [25.5310, 89.7910]
  },
  {
    id: 'bondober',
    nameBn: 'বন্দবেড় ইউনিয়ন',
    nameEn: 'Bondober Union',
    chairman: 'মোঃ আব্দুল কাদের',
    areaKm2: 24.40,
    population: '৩৫,৫০০ জন',
    villagesCount: 26,
    mouzasCount: 12,
    literacyRate: '৪২.০%',
    descriptionBn: 'ব্রহ্মপুত্র নদের কোলঘেঁষা পশ্চিমে বিস্তৃত বন্দবেড় ইউনিয়ন। এখান থেকেই কুড়িগ্রাম মূল ভূখণ্ডের চিলমারী ও রৌমারীর মধ্যে যোগাযোগের প্রধান খেয়া ও ট্রলার চলাচল করে।',
    descriptionEn: 'Fronting the western Brahmaputra shoreline, hosting key ferry and engine boat ghats connecting Rowmari to Chilmari and greater Kurigram.',
    keyFeaturesBn: ['ব্রহ্মপুত্র নদের প্রধান নৌ-যোগাযোগ ঘাট', 'সূর্যাস্ত দেখার চমৎকার পয়েন্ট', 'মাছ ধরার ঐতিহ্যবাহী ঘাটতি'],
    keyFeaturesEn: ['Primary ferry route to Chilmari', 'Spectacular sunset vantage point', 'Traditional fishing hubs'],
    notablePlacesBn: ['বন্দবেড় ঘাট', 'কুটিরচর বাজার', 'ফলুয়ারচর ঘাট', 'বন্দবেড় দাখিল মাদ্রাসা ও বিদ্যালয়'],
    notablePlacesEn: ['Bondober Ghat', 'Kutirchar Bazaar', 'Faluarchar Ghat', 'Bondober High School'],
    villagesBn: [
      'বন্দবেড়', 'কুটিরচর', 'ফলুয়ারচর', 'বলদমারা', 'চর বন্দবেড়', 'বাইটকামারী', 
      'বাঘমারা চর', 'কড়াইকান্দি চর', 'চর ফলুয়ারচর', 'পশ্চিম কুটিরচর', 'পালেরচর', 'মন্ডলপাড়া বন্দবেড়', 
      'হাজী পাড়া বন্দবেড়', 'নতুন বন্দবেড় গ্রাম', 'বালিয়ামারী ঘাটপাড়া', 'ব্রহ্মপুত্র তীরপাড়া', 'খেয়াঘাটপাড়া বন্দবেড়', 'উত্তর কুটিরচর', 
      'দক্ষিণ কুটিরচর', 'ব্যাপারীপাড়া বন্দবেড়', 'সিকদারপাড়া', 'চর বলদমারা', 'পূর্ব বন্দবেড়', 'মাঝিপাড়া বন্দবেড়', 
      'খন্দকারপাড়া বন্দবেড়', 'স্কুলপাড়া বন্দবেড়'
    ],
    villagesEn: [
      'Bondober', 'Kutirchar', 'Faluarchar', 'Boldomara', 'Char Bondober', 'Baitkamari',
      'Baghmara Char', 'Koraikandi Char', 'Char Faluarchar', 'Paschim Kutirchar', 'Palerchar', 'Mondolpara Bondober',
      'Haji Para Bondober', 'Notun Bondober Gram', 'Baliamari Ghatpara', 'Brahmaputra Teerpara', 'Kheya Ghatpara Bondober', 'Uttar Kutirchar',
      'Dakshin Kutirchar', 'Beparypara Bondober', 'Sikderpara', 'Char Boldomara', 'Purba Bondober', 'Majhipara Bondober',
      'Khondokarpara Bondober', 'Schoolpara Bondober'
    ],
    contactPhone: '+8801712-345606',
    upOfficeLocation: 'কুটিরচর, রৌমারী',
    coordinates: [25.5780, 89.7820]
  }
];

export const MAP_POINTS: MapPoint[] = [
  {
    id: 'p-1',
    titleBn: 'রৌমারী উপজেলা পরিষদ কমপ্লেক্স',
    titleEn: 'Rowmari Upazila Parishad Complex',
    category: 'admin',
    lat: 25.5615,
    lng: 89.8524,
    unionId: 'rowmari-sadar',
    descriptionBn: 'উপজেলা নির্বাহী অফিসার (ইউএনও) ও সকল সরকারি প্রশাসনিক দপ্তর এখানে অবস্থিত।',
    descriptionEn: 'Administrative headquarters including UNO office, revenue, and local governance.',
    contact: '01713-333333',
    badgeBn: 'প্রশাসনিক কেন্দ্র',
    badgeEn: 'Administrative HQ'
  },
  {
    id: 'p-2',
    titleBn: 'রৌমারী মুক্তাঞ্চল স্মৃতিসৌধ',
    titleEn: 'Rowmari Muktanchal Memorial Monument',
    category: 'history',
    lat: 25.5630,
    lng: 89.8505,
    unionId: 'rowmari-sadar',
    descriptionBn: '১৯৭১ সালের মহান মুক্তিযুদ্ধে পাকহানাদার মুক্ত রৌমারী মুক্তাঞ্চলের শহীদ ও মুক্তিযোদ্ধাদের স্মরণে নির্মিত স্মৃতিসৌধ।',
    descriptionEn: 'Solemn monument honoring martyrs and freedom fighters of the uncaptured 1971 liberated zone.',
    badgeBn: '১৯৭১ মুক্তিযুদ্ধ স্মৃতি',
    badgeEn: '1971 Memorial'
  },
  {
    id: 'p-3',
    titleBn: 'রৌমারী-কালাইরচর আন্তর্জাতিক বর্ডার হাট',
    titleEn: 'Rowmari-Kalairchar International Border Haat',
    category: 'tourism',
    lat: 25.6180,
    lng: 89.9140,
    unionId: 'dantbhanga',
    descriptionBn: 'বাংলাদেশ ও ভারতের সীমান্তবর্তী নাগরিকদের মধ্যে সাপ্তাহিক কেনাবেচার ঐতিহাসিক মিলনমেলা ও সীমান্ত বাজার।',
    descriptionEn: 'Weekly international cross-border bazaar connecting Bangladeshi and Indian border communities.',
    badgeBn: 'আন্তর্জাতিক বর্ডার হাট',
    badgeEn: 'Border Haat'
  },
  {
    id: 'p-4',
    titleBn: 'রৌমারী উপজেলা স্বাস্থ্য কমপ্লেক্স (হাসপাতাল)',
    titleEn: 'Rowmari Upazila Health Complex (Hospital)',
    category: 'emergency',
    lat: 25.5658,
    lng: 89.8540,
    unionId: 'rowmari-sadar',
    descriptionBn: '৫০ শয্যা বিশিষ্ট সরকারি স্বাস্থ্য কমপ্লেক্স, জরুরি বিভাগ, অ্যাম্বুলেন্স ও প্রসূতি সেবা ২৪ ঘণ্টা চালু।',
    descriptionEn: '50-bed government hospital offering 24/7 emergency care, ambulance, and maternal health.',
    contact: '01730-324700',
    badgeBn: '২৪/৭ জরুরি স্বাস্থ্যসেবা',
    badgeEn: '24/7 Hospital'
  },
  {
    id: 'p-5',
    titleBn: 'রৌমারী থানা (পুলিশ স্টেশন)',
    titleEn: 'Rowmari Police Station (Thana)',
    category: 'emergency',
    lat: 25.5605,
    lng: 89.8530,
    unionId: 'rowmari-sadar',
    descriptionBn: 'আইনশৃঙ্খলা নিয়ন্ত্রণ, পাসপোর্ট ভেরিফিকেশন ও নাগরিক নিরাপত্তার জন্য পুলিশ কন্ট্রোল রুম।',
    descriptionEn: 'Upazila police headquarters ensuring public order, emergency dispatch, and law enforcement.',
    contact: '01320-137250',
    badgeBn: 'আইনশৃঙ্খলা ও পুলিশ',
    badgeEn: 'Police Station'
  },
  {
    id: 'p-6',
    titleBn: 'রৌমারী সরকারি কলেজ',
    titleEn: 'Rowmari Government College',
    category: 'education',
    lat: 25.5582,
    lng: 89.8512,
    unionId: 'rowmari-sadar',
    descriptionBn: 'উচ্চশিক্ষার প্রাচীনতম বিদ্যাপীঠ, স্নাতক (পাস ও অনার্স) কোর্সে হাজার হাজার শিক্ষার্থীর কেন্দ্র।',
    descriptionEn: 'Premier institute of higher education in the upazila providing degree and honors curricula.',
    badgeBn: 'সরকারি বিদ্যাপীঠ',
    badgeEn: 'Govt College'
  },
  {
    id: 'p-7',
    titleBn: 'রৌমারী সি. জি. জামান উচ্চ বিদ্যালয় (স্থাপিত ১৯৪৮)',
    titleEn: 'Rowmari C.G. Zaman High School (Est. 1948)',
    category: 'education',
    lat: 25.5620,
    lng: 89.8490,
    unionId: 'rowmari-sadar',
    descriptionBn: 'উপজেলার প্রাচীনতম ঐতিহ্যবাহী বিদ্যালয়, ১৯৭১ সালে মুক্তিযোদ্ধা প্রশিক্ষণ ক্যাম্পের ঐতিহাসিক স্থান।',
    descriptionEn: 'Historic high school founded in 1948; served as crucial Mukti Bahini training ground in 1971.',
    badgeBn: 'ঐতিহাসিক বিদ্যালয়',
    badgeEn: 'Historic School'
  },
  {
    id: 'p-8',
    titleBn: 'রৌমারী ফায়ার সার্ভিস ও সিভিল ডিফেন্স স্টেশন',
    titleEn: 'Rowmari Fire Service & Civil Defence Station',
    category: 'emergency',
    lat: 25.5560,
    lng: 89.8545,
    unionId: 'rowmari-sadar',
    descriptionBn: 'অগ্নিনির্বাপণ, প্রাকৃতিক দুর্যোগ ও উদ্ধারকাজে নিয়োজিত ২৪ ঘণ্টা জরুরি রেসপন্স দল।',
    descriptionEn: '24-hour fire fighting, disaster response, and rescue operations dispatch.',
    contact: '01716-453210',
    badgeBn: 'ফায়ার সার্ভিস',
    badgeEn: 'Fire Service'
  },
  {
    id: 'p-9',
    titleBn: 'বন্দবেড় ব্রহ্মপুত্র নৌঘাট',
    titleEn: 'Bondober Brahmaputra River Ghat',
    category: 'tourism',
    lat: 25.5780,
    lng: 89.7820,
    unionId: 'bondober',
    descriptionBn: 'চিলমারী ও রৌমারীর প্রধান নৌপথের ঘাট এবং ব্রহ্মপুত্র নদের সূর্যাস্ত দেখার অপরূপ স্থান।',
    descriptionEn: 'Key passenger and cargo boat terminal with picturesque Brahmaputra sunset views.',
    badgeBn: 'নৌঘাট ও পর্যটন',
    badgeEn: 'River Ghat'
  },
  {
    id: 'p-10',
    titleBn: 'দাঁতভাঙ্গা ঝাউবাড়ি ও মেঘালয় সীমান্ত ভিউ',
    titleEn: 'Dantbhanga Border & Meghalaya Hill Vista',
    category: 'tourism',
    lat: 25.6410,
    lng: 89.8820,
    unionId: 'dantbhanga',
    descriptionBn: 'ভারতের গারো ও খাসিয়া মেঘালয় পাহাড়ের নীলচে দৃশ্য এবং সীমান্ত সবুজ চারণভূমি।',
    descriptionEn: 'Scenic border vantage point overlooking the blue Meghalaya hills and lush rural delta.',
    badgeBn: 'প্রাকৃতিক দৃশ্য',
    badgeEn: 'Scenic Border'
  },
  {
    id: 'p-11',
    titleBn: 'শৌলমারী ঝিঞ্জিরাম নদীর বাঁক',
    titleEn: 'Saulmari Jinjiram River Meander',
    category: 'tourism',
    lat: 25.5920,
    lng: 89.8150,
    unionId: 'saulmari',
    descriptionBn: 'ঝিঞ্জিরাম নদীর শান্ত রূপ, অতিথি পাখির কলকাকলি ও গ্রামীণ জেলেদের মাছ ধরার দৃশ্য।',
    descriptionEn: 'Serene bends of Jinjiram river with migratory birds and traditional angling.',
    badgeBn: 'নদী ও জীববৈচিত্র্য',
    badgeEn: 'Riverfront'
  },
  {
    id: 'p-12',
    titleBn: 'যাদুরচর তুরা সীমান্ত পয়েন্ট',
    titleEn: 'Jadurchar Tura Border Outpost',
    category: 'history',
    lat: 25.4980,
    lng: 89.8910,
    unionId: 'jadurchar',
    descriptionBn: '১৯৭১ সালের সেক্টর ১১-এর যোগাযোগ পথ ও বীর মুক্তিযোদ্ধাদের অপারেশনের ঐতিহাসিক সীমান্ত।',
    descriptionEn: 'Historic Sector-11 supply route and defense station during 1971 liberation war.',
    badgeBn: 'ঐতিহাসিক সীমান্ত',
    badgeEn: '1971 Sector 11'
  }
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'em-1',
    category: 'medical',
    nameBn: 'রৌমারী উপজেলা স্বাস্থ্য কমপ্লেক্স (জরুরি বিভাগ)',
    nameEn: 'Rowmari Upazila Health Complex (Emergency)',
    roleBn: '২৪ ঘণ্টা জরুরি চিকিৎসা ও ভর্তি সেবা',
    roleEn: '24/7 Emergency Medical Admission',
    phone: '01730-324700',
    altPhone: '01712-456789',
    addressBn: 'হাসপাতাল রোড, রৌমারী সদর',
    addressEn: 'Hospital Road, Rowmari Sadar',
    availableHours: '২৪ ঘণ্টা'
  },
  {
    id: 'em-2',
    category: 'police',
    nameBn: 'রৌমারী থানা পুলিশ (অফিসার ইনচার্জ - ওসি)',
    nameEn: 'Rowmari Police Station (Officer-in-Charge)',
    roleBn: 'আইনশৃঙ্খলা ও থানা নিয়ন্ত্রণ কক্ষ',
    roleEn: 'Law Enforcement & Control Room',
    phone: '01320-137250',
    altPhone: '01713-373801',
    addressBn: 'থানা মোড়, রৌমারী',
    addressEn: 'Thana Mor, Rowmari',
    availableHours: '২৪ ঘণ্টা'
  },
  {
    id: 'em-3',
    category: 'fire',
    nameBn: 'রৌমারী ফায়ার সার্ভিস স্টেশন',
    nameEn: 'Rowmari Fire Station & Rescue',
    roleBn: 'অগ্নিনির্বাপণ ও উদ্ধার কার্যক্রম',
    roleEn: 'Fire Fighting & Rescue Operations',
    phone: '01716-453210',
    altPhone: '05822-56199',
    addressBn: 'রৌমারী নতুন বাসস্ট্যান্ড সংলগ্ন',
    addressEn: 'Near Rowmari New Bus Stand',
    availableHours: '২৪ ঘণ্টা'
  },
  {
    id: 'em-4',
    category: 'admin',
    nameBn: 'উপজেলা নির্বাহী অফিসার (ইউএনও), রৌমারী',
    nameEn: 'Upazila Nirbahi Officer (UNO), Rowmari',
    roleBn: 'উপজেলা প্রশাসন ও সার্বিক সমন্বয়',
    roleEn: 'Upazila Chief Executive & Admin',
    phone: '01713-333333',
    addressBn: 'উপজেলা পরিষদ ভবন, রৌমারী',
    addressEn: 'Upazila Parishad Bhaban, Rowmari',
    availableHours: 'সকাল ৯:০০ - বিকাল ৫:০০ (জরুরিতে ২৪ ঘণ্টা)'
  },
  {
    id: 'em-5',
    category: 'utility',
    nameBn: 'কুড়িগ্রাম পল্লী বিদ্যুৎ সমিতি (রৌমারী সাব-জোনাল অফিস)',
    nameEn: 'Kurigram Palli Bidyut Samity (Rowmari Sub-Zone)',
    roleBn: 'বিদ্যুৎ বিভ্রাট ও জরুরি অভিযোগ কেন্দ্র',
    roleEn: 'Electricity Breakdowns & Complaints',
    phone: '01769-400888',
    altPhone: '01769-400889',
    addressBn: 'বিদ্যুৎ অফিস মোড়, রৌমারী',
    addressEn: 'Bidyut Office Mor, Rowmari',
    availableHours: '২৪ ঘণ্টা কন্ট্রোল রুম'
  },
  {
    id: 'em-6',
    category: 'medical',
    nameBn: 'সরকারি অ্যাম্বুলেন্স সেবা',
    nameEn: 'Government Ambulance Service',
    roleBn: 'মুমূর্ষু রোগী পরিবহন',
    roleEn: 'Critical Patient Transport',
    phone: '01718-999888',
    addressBn: 'উপজেলা স্বাস্থ্য কমপ্লেক্স প্রাঙ্গণ',
    addressEn: 'Upazila Health Complex Compound',
    availableHours: '২৪ ঘণ্টা কল অন ডিউটি'
  }
];

export const HISTORICAL_HIGHLIGHTS: HistoricalEvent[] = [
  {
    year: '১৯৭১',
    dateBn: 'মার্চ - ডিসেম্বর ১৯৭১',
    dateEn: 'March - December 1971',
    titleBn: 'ঐতিহাসিক রৌমারী মুক্তাঞ্চল (একমাত্র অপরাজিত দুর্গ)',
    titleEn: 'The Historic Rowmari Muktanchal (Unconquered Bastion)',
    descriptionBn: '১৯৭১ সালের মুক্তিযুদ্ধ চলাকালীন পুরো ৯ মাস রৌমারী ছিল সম্পূর্ণরূপে পাকিস্তানি হানাদার বাহিনী মুক্ত। পাকিস্তান সেনাবাহিনী কখনোই রৌমারীর মাটিতে পা রাখতে পারেনি।',
    descriptionEn: 'Throughout all 9 months of the 1971 War of Liberation, Rowmari remained entirely liberated from Pakistani occupation forces. The occupying army could never step foot on Rowmari soil.',
    significanceBn: 'সেক্টর ১১ এর প্রাণকেন্দ্র হিসেবে ৩০,০০০ এর অধিক মুক্তিযোদ্ধার প্রশিক্ষণ ক্যাম্প ও স্বাধীন সিভিল প্রশাসন পরিচালিত হয়েছিল।',
    significanceEn: 'Served as Sector 11 nerve center, training over 30,000 freedom fighters and operating independent civil governance and postal dispatch.'
  },
  {
    year: '১৯৭১',
    dateBn: 'মে ১৯৭১',
    dateEn: 'May 1971',
    titleBn: 'সিজি জামান হাই স্কুলে মুক্তিযোদ্ধা প্রশিক্ষণ ক্যাম্প',
    titleEn: 'Mukti Bahini Training Camp at CG Zaman School',
    descriptionBn: 'রৌমারী সিজি জামান উচ্চ বিদ্যালয়ে হাজার হাজার তরুণ ও ছাত্র গেরিলা যুদ্ধের প্রশিক্ষণ গ্রহণ করেন এবং সেখান থেকে উত্তরবঙ্গের বিভিন্ন ফ্রন্টে যুদ্ধে ঝাঁপিয়ে পড়েন।',
    descriptionEn: 'Thousands of young students and patriots received intensive guerrilla warfare training at CG Zaman School before deploying across northern frontlines.',
    significanceBn: 'বীরপ্রতীক তারামন বিবি ও খ্যাতনামা মুক্তিযোদ্ধাদের পদচারণায় মুখরিত ছিল এই ক্যাম্প।',
    significanceEn: 'Sanctuary for national heroes including Bir Protik Taramon Bibi and notable field commanders.'
  },
  {
    year: '১৯৭১',
    dateBn: 'জুলাই ১৯৭১',
    dateEn: 'July 1971',
    titleBn: 'স্বাধীন বাংলাদেশের প্রথম ডাকটিকিট প্রচলন ও বেসামরিক প্রশাসন',
    titleEn: 'First Post Office & Free Civil Administration',
    descriptionBn: 'যুদ্ধকালীন সময়ে রৌমারীতে স্বাধীন বাংলাদেশ সরকারের প্রশাসন, সাব-রেজিস্ট্রার অফিস, খাদ্য বণ্টন ও ডাকঘর সক্রিয়ভাবে চালু ছিল।',
    descriptionEn: 'An autonomous civil administration operated in Rowmari with functioning judicial registrar, relief logistics, and postal dispatches.',
    significanceBn: 'বিশ্ব মিডিয়ার দৃষ্টি আকর্ষণ করে প্রমাণ করেছিল যে বাংলাদেশ কার্যত মুক্ত ও স্বাধীন।',
    significanceEn: 'Proved to global war correspondents that sovereign Bangladeshi territory was operational.'
  },
  {
    year: '১৯৮৩',
    dateBn: '১৯৮৩ সাল',
    dateEn: '1983',
    titleBn: 'রৌমারী পূর্ণাঙ্গ উপজেলায় রূপান্তর',
    titleEn: 'Upgraded to Full Upazila Status',
    descriptionBn: '১৯০৮ সালে থানা হিসেবে প্রতিষ্ঠার পর ১৯৮৩ সালে প্রশাসনিক বিকেন্দ্রীকরণের আওতায় রৌমারী পূর্ণাঙ্গ উপজেলা হিসেবে স্বীকৃতি লাভ করে।',
    descriptionEn: 'Originally established as a police station in 1908, Rowmari was formally upgraded into a full upazila in 1983.',
    significanceBn: 'আধুনিক রৌমারীর রাস্তাঘাট, স্বাস্থ্য ব্যবস্থা ও শিক্ষার দ্রুত অগ্রগতি সূচনা করে।',
    significanceEn: 'Spurred modernization in civic infrastructure, hospitals, and educational expansion.'
  }
];

export const TOURIST_SPOTS: TouristSpot[] = [
  {
    id: 'spot-1',
    nameBn: 'ব্রহ্মপুত্র নদের চরাঞ্চল ও সূর্যাস্ত ঘাট',
    nameEn: 'Brahmaputra Char Lands & Sunset Ghats',
    category: 'প্রাকৃতিক পর্যটন / Riverine Nature',
    locationBn: 'বন্দবেড় ও চর শৌলমারী নদী তীর',
    locationEn: 'Bondober & Char Shoulmari Riverfront',
    descriptionBn: 'বিশাল ব্রহ্মপুত্র নদের বুকজুড়ে জেগে ওঠা ধু ধু বালুচর, সূর্যাস্তের রক্তিম আভা ও জলের বুকে ঢেউয়ের দোলা মন জুড়িয়ে দেয়। ইঞ্জিনচালিত নৌকায় চরের ভ্রমণ দারুণ এক অভিজ্ঞতা।',
    descriptionEn: 'Vast golden sandbars across the mighty Brahmaputra, glowing sunset reflections, and tranquil country boat excursions through delta breezes.',
    bestTimeBn: 'শীতকাল ও শরৎকাল (নভেম্বর - ফেব্রুয়ারি)',
    bestTimeEn: 'Winter & Autumn (November - February)',
    highlights: ['মনোরম সূর্যাস্ত', 'দেশি নৌকায় ভ্রমণ', 'চরাঞ্চলের অতিথি পাখি ও মাছ ভাজা'],
    lat: 25.5780,
    lng: 89.7820
  },
  {
    id: 'spot-2',
    nameBn: 'রৌমারী-কালাইরচর আন্তর্জাতিক বর্ডার হাট',
    nameEn: 'Rowmari-Kalairchar International Border Haat',
    category: 'ঐতিহাসিক ও সীমান্ত বাণিজ্য / Cultural Border Market',
    locationBn: 'দাঁতভাঙ্গা ইউনিয়ন, ভারত-বাংলাদেশ সীমান্ত',
    locationEn: 'Dantbhanga Union, Indo-Bangla Frontier',
    descriptionBn: 'দুই দেশের শূন্যরেখায় অবস্থিত ঐতিহ্যবাহী আন্তর্জাতিক বর্ডার হাট। প্রতি সপ্তাহে নির্দিষ্ট দিনে দুই বাংলার মানুষ এখানে মিলিত হন, স্থানীয় পণ্যসামগ্রী ও শুভেচ্ছা বিনিময় করেন।',
    descriptionEn: 'A designated international border bazaar situated on the zero line where communities from both sides gather weekly to exchange artisanal wares and produce.',
    bestTimeBn: 'সাপ্তাহিক হাটের দিন (বুধবার সকাল ১০টা - বিকাল ৪টা)',
    bestTimeEn: 'Haat Day (Wednesdays 10:00 AM - 4:00 PM)',
    highlights: ['দুই দেশের মিলনমেলা', 'সীমান্তবর্তী মসলা ও ফলমূল', 'ঐতিহাসিক অভিজ্ঞতা'],
    lat: 25.6180,
    lng: 89.9140
  },
  {
    id: 'spot-3',
    nameBn: 'রৌমারী মুক্তাঞ্চল স্মৃতিসৌধ ও লেক পার্ক',
    nameEn: 'Rowmari Muktanchal Memorial & Lake Park',
    category: 'স্মৃতিসৌধ ও মুক্তিযুদ্ধ / Heritage Monument',
    locationBn: 'রৌমারী উপজেলা পরিষদ চত্বর সংলগ্ন',
    locationEn: 'Adjacent to Upazila Parishad Compound',
    descriptionBn: '১৯৭১ সালের বীর শহীদদের আত্মত্যাগের প্রতীক সাদা স্মৃতিস্তম্ভ এবং সংলগ্ন মনোরম দিঘি ও সবুজ উদ্যান। দর্শনার্থী ও শিশুদের জন্য এক চমৎকার সান্ধ্যকালীন মিলনকেন্দ্র।',
    descriptionEn: 'The stately white war memorial honoring 1971 martyrs, surrounded by a tranquil civic pond, walking promenades, and landscaped gardens.',
    bestTimeBn: 'প্রতিদিন সকাল থেকে সন্ধ্যা',
    bestTimeEn: 'Daily from morning till sunset',
    highlights: ['মুক্তিযুদ্ধ জাদুঘর কর্নার', 'সুন্দর লেকসাইড ওয়াকওয়ে', 'নির্মল পারিবারিক পরিবেশ'],
    lat: 25.5630,
    lng: 89.8505
  },
  {
    id: 'spot-4',
    nameBn: 'মেঘালয় ও তুরা পাহাড়ের সীমান্ত প্যানোরামা',
    nameEn: 'Meghalaya & Tura Hills Border Panorama',
    category: 'পাহাড় ও সীমান্ত দৃশ্য / Border Hillside View',
    locationBn: 'দাঁতভাঙ্গা ও যাদুরচর সীমান্ত চেকপোস্ট সংলগ্ন',
    locationEn: 'Dantbhanga & Jadurchar Border Outposts',
    descriptionBn: 'সীমান্ত বেড়ার ওপারে ভারতের মেঘালয় রাজ্যের সবুজে ঘেরা মেঘলা তুরা পাহাড়ের চমৎকার ভিউ। বর্ষায় মেঘের আনাগোনা ও হেমন্তে সোনালী আলোয় পাহাড়ের রূপ অপরূপ দেখায়।',
    descriptionEn: 'Picturesque view of the lush, cloud-draped Tura and Garo hills of Indian Meghalaya rising majestically above the green frontier meadows.',
    bestTimeBn: 'বর্ষা ও শরৎকাল (জুলাই - নভেম্বর)',
    bestTimeEn: 'Monsoon & Autumn (July - November)',
    highlights: ['নীলচে পাহাড়ের দৃশ্য', 'সীমান্ত নদী ঝিঞ্জিরাম', 'নির্মল গ্রামীণ আবহাওয়া'],
    lat: 25.6410,
    lng: 89.8820
  }
];

export const DEVELOPER_INFO = {
  name: 'Jaidul Islam',
  nameBn: 'জাইদুল ইসলাম (জাইদুল)',
  shortNameBn: 'জাইদুল',
  title: 'Full-Stack Software Engineer & Technology Advocate',
  titleBn: 'ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার ও রৌমারীর সন্তান',
  photoUrl: '/assets/aistudio/506357918_122126621744833198_3393251155158668934_n_2f004852.jpg',
  bioBn: 'রৌমারী উপজেলার গর্বিত সন্তান জাইদুল ইসলাম উপজেলার সমৃদ্ধ ইতিহাস, ভৌগোলিক রূপরেখা, পর্যটন ও নাগরিক জরুরি সেবাকে আধুনিক ডিজিটাল প্রযুক্তির মাধ্যমে সবার কাছে উন্মুক্ত করতে এই প্ল্যাটফর্মটি ডেভেলপ করেছেন।',
  bioEn: 'Dedicated software engineer and proud native son of Rowmari, Jaidul Islam developed this digital portal to make Rowmari’s glorious 1971 history, interactive geography, and vital civic emergency services universally accessible.',
  email: 'jaidulislam1056@gmail.com',
  upazila: 'Rowmari, Kurigram, Bangladesh',
  skills: ['React', 'TypeScript', 'Node.js', 'GIS Mapping', 'Civic Tech', 'Modern Web Architecture'],
  quoteBn: '“আমাদের প্রিয় রৌমারী—১৯৭১ সালের অপরাজেয় মুক্তাঞ্চল ও ব্রহ্মপুত্রের শ্যামল মাটিকে আধুনিক তথ্যপ্রযুক্তির আলোয় সবার সামনে অনন্য উচ্চতায় তুলে ধরাই আমার লক্ষ্য।” — জাইদুল',
  quoteEn: '“Showcasing our beloved Rowmari—the invincible 1971 liberated zone and verdant delta—through modern digital craftsmanship is my heartfelt mission.” — Jaidul'
};
