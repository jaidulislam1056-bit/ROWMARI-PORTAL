import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Layers, 
  ExternalLink, 
  Info, 
  Check, 
  Phone, 
  Navigation,
  Compass,
  Building2,
  Landmark,
  HeartPulse,
  Trees,
  GraduationCap
} from 'lucide-react';
import { UNIONS_DATA, MAP_POINTS, MapPoint, UnionData } from '../data/rowmariData';
import L from 'leaflet';

interface InteractiveMapProps {
  lang: 'bn' | 'en';
  selectedUnionId?: string;
  onSelectUnion?: (union: UnionData) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  lang,
  selectedUnionId,
  onSelectUnion
}) => {
  const [mapMode, setMapMode] = useState<'svg' | 'leaflet'>('svg');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(MAP_POINTS[0]);
  const [activeUnion, setActiveUnion] = useState<UnionData>(
    UNIONS_DATA.find(u => u.id === selectedUnionId) || UNIONS_DATA[0]
  );
  const [copiedCoords, setCopiedCoords] = useState(false);

  const leafletContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapInstance = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  // Sync selected union when parent updates
  useEffect(() => {
    if (selectedUnionId) {
      const found = UNIONS_DATA.find(u => u.id === selectedUnionId);
      if (found) {
        setActiveUnion(found);
        // Find points in this union
        const unionPoint = MAP_POINTS.find(p => p.unionId === found.id);
        if (unionPoint) setSelectedPoint(unionPoint);
      }
    }
  }, [selectedUnionId]);

  // Leaflet Map Initialization
  useEffect(() => {
    if (mapMode === 'leaflet' && leafletContainerRef.current && !leafletMapInstance.current) {
      // Initialize map centered at Rowmari Sadar
      const map = L.map(leafletContainerRef.current).setView([25.565, 89.852], 12);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors | Rowmari Portal'
      }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);
      markersLayerRef.current = markersGroup;
      leafletMapInstance.current = map;
    }

    // Update markers when filtered or mode is leaflet
    if (mapMode === 'leaflet' && leafletMapInstance.current && markersLayerRef.current) {
      markersLayerRef.current.clearLayers();

      const filtered = activeCategory === 'all' 
        ? MAP_POINTS 
        : MAP_POINTS.filter(p => p.category === activeCategory);

      filtered.forEach(point => {
        const marker = L.circleMarker([point.lat, point.lng], {
          radius: 9,
          fillColor: point.category === 'emergency' ? '#dc2626' : point.category === 'history' ? '#b45309' : '#059669',
          color: '#ffffff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.9
        });

        marker.bindPopup(`
          <div style="font-family: 'Hind Siliguri', sans-serif; font-size: 13px;">
            <strong style="color: #065f46; font-size: 14px;">${lang === 'bn' ? point.titleBn : point.titleEn}</strong>
            <p style="margin: 4px 0; color: #444;">${lang === 'bn' ? point.descriptionBn : point.descriptionEn}</p>
            <span style="font-size: 11px; background: #e5e7eb; padding: 2px 6px; border-radius: 4px;">
              ${lang === 'bn' ? point.badgeBn : point.badgeEn}
            </span>
          </div>
        `);

        marker.on('click', () => {
          setSelectedPoint(point);
          const relatedUnion = UNIONS_DATA.find(u => u.id === point.unionId);
          if (relatedUnion) {
            setActiveUnion(relatedUnion);
            if (onSelectUnion) onSelectUnion(relatedUnion);
          }
        });

        markersLayerRef.current?.addLayer(marker);
      });
    }

    return () => {
      // Cleanup leaflet if switching modes or unmounting
    };
  }, [mapMode, activeCategory, lang, onSelectUnion]);

  // Handle category filter
  const filteredPoints = activeCategory === 'all'
    ? MAP_POINTS
    : MAP_POINTS.filter(p => p.category === activeCategory);

  const handleUnionClick = (union: UnionData) => {
    setActiveUnion(union);
    const point = MAP_POINTS.find(p => p.unionId === union.id);
    if (point) setSelectedPoint(point);
    if (onSelectUnion) onSelectUnion(union);

    if (mapMode === 'leaflet' && leafletMapInstance.current) {
      leafletMapInstance.current.flyTo(union.coordinates, 13, { duration: 1 });
    }
  };

  const handlePointClick = (point: MapPoint) => {
    setSelectedPoint(point);
    const relatedUnion = UNIONS_DATA.find(u => u.id === point.unionId);
    if (relatedUnion) {
      setActiveUnion(relatedUnion);
      if (onSelectUnion) onSelectUnion(relatedUnion);
    }
    if (mapMode === 'leaflet' && leafletMapInstance.current) {
      leafletMapInstance.current.flyTo([point.lat, point.lng], 14, { duration: 1 });
    }
  };

  const copyCoordinates = () => {
    if (!selectedPoint) return;
    navigator.clipboard.writeText(`${selectedPoint.lat}, ${selectedPoint.lng}`);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  return (
    <section id="map-section" className="py-16 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1.5">
              <Compass className="w-4 h-4" />
              <span>{lang === 'bn' ? 'ভৌগোলিক সীমানা ও অবস্থান' : 'Geographic Map & Boundaries'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
              {lang === 'bn' ? 'রৌমারী উপজেলার সমন্বিত মানচিত্র' : 'Interactive Map of Rowmari Upazila'}
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-2xl">
              {lang === 'bn' 
                ? '৬টি ইউনিয়ন, ঐতিহাসিক মুক্তাঞ্চল স্মৃতিসৌধ, কালাইরচর বর্ডার হাট, হাসপাতাল, থানা এবং ব্রহ্মপুত্র নদের ঘাটসমূহ মানচিত্রে চিহ্নিত করা আছে।'
                : 'Interactive exploration of all 6 unions, historical monuments, border haat, hospital, police, and river ghats.'}
            </p>
          </div>

          {/* Map View Switcher (Interactive SVG vs Live OpenStreetMap) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shrink-0">
            <button
              onClick={() => setMapMode('svg')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                mapMode === 'svg'
                  ? 'bg-white dark:bg-stone-700 text-emerald-800 dark:text-emerald-300 shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              {lang === 'bn' ? 'ভৌগোলিক ইউনিয়ন ভিউ' : 'Union Boundary View'}
            </button>
            <button
              onClick={() => setMapMode('leaflet')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                mapMode === 'leaflet'
                  ? 'bg-white dark:bg-stone-700 text-emerald-800 dark:text-emerald-300 shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              {lang === 'bn' ? 'লাইভ স্যাটেলাইট/রোড ম্যাপ' : 'Live Street/GPS Map'}
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 p-1.5 bg-stone-50 dark:bg-stone-800/60 rounded-xl border border-stone-200 dark:border-stone-700">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-emerald-800 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            {lang === 'bn' ? 'সকল স্থান' : 'All Places'} ({MAP_POINTS.length})
          </button>
          <button
            onClick={() => setActiveCategory('admin')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'admin'
                ? 'bg-emerald-800 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'প্রশাসনিক' : 'Administrative'}</span>
          </button>
          <button
            onClick={() => setActiveCategory('history')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'history'
                ? 'bg-amber-800 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? '১৯৭১ মুক্তাঞ্চল' : '1971 History'}</span>
          </button>
          <button
            onClick={() => setActiveCategory('emergency')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'emergency'
                ? 'bg-rose-700 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'স্বাস্থ্য ও জরুরি' : 'Emergency & Health'}</span>
          </button>
          <button
            onClick={() => setActiveCategory('tourism')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'tourism'
                ? 'bg-teal-800 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Trees className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'পর্যটন ও ঘাট' : 'Tourism & Ghats'}</span>
          </button>
          <button
            onClick={() => setActiveCategory('education')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'education'
                ? 'bg-indigo-800 text-white'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'শিক্ষা প্রতিষ্ঠান' : 'Education'}</span>
          </button>
        </div>

        {/* Map Layout Grid: Left Map Canvas, Right Selected Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Map Box */}
          <div className="lg:col-span-8 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-sm">
            {mapMode === 'svg' ? (
              /* Custom Scalable Interactive Geographic Map of Rowmari */
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-gradient-to-br from-emerald-950/5 via-stone-100 to-amber-950/5 dark:from-stone-900 dark:to-stone-950 rounded-xl overflow-hidden border border-stone-200/80 dark:border-stone-800 flex items-center justify-center">
                {/* SVG Map of Rowmari Upazila */}
                <svg
                  viewBox="0 0 900 650"
                  className="w-full h-full select-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="brahmaputraGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="jinjiramGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7dd3fc" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                    <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="10" stroke="#94a3b8" strokeWidth="1" opacity="0.3" />
                    </pattern>
                  </defs>

                  {/* Neighboring Boundaries (Meghalaya, Assam, Chilmari, Rajibpur) */}
                  {/* Western Bank: Brahmaputra River Bed */}
                  <path
                    d="M 50,0 Q 90,180 80,320 Q 70,450 110,650 L 0,650 L 0,0 Z"
                    fill="url(#brahmaputraGrad)"
                    className="opacity-70"
                  />
                  <text x="30" y="320" fill="#0369a1" fontSize="13" fontWeight="bold" transform="rotate(-90 30,320)">
                    ব্রহ্মপুত্র নদ (Brahmaputra River)
                  </text>

                  {/* Eastern Boundary: India (Meghalaya & Assam) */}
                  <rect x="740" y="0" width="160" height="650" fill="url(#diagonalHatch)" />
                  <path
                    d="M 740,0 L 740,650"
                    stroke="#b91c1c"
                    strokeWidth="2.5"
                    strokeDasharray="6,4"
                  />
                  <text x="760" y="280" fill="#991b1b" fontSize="14" fontWeight="bold">
                    ভারত (মেঘালয় ও আসাম)
                  </text>
                  <text x="760" y="302" fill="#78350f" fontSize="11">
                    India (Meghalaya Frontier)
                  </text>

                  {/* Jinjiram River Channel flowing through eastern unions */}
                  <path
                    d="M 720,120 Q 580,220 540,320 Q 510,420 560,540 Q 600,600 650,650"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="opacity-75"
                  />
                  <text x="590" y="240" fill="#0284c7" fontSize="11" fontWeight="600">
                    ঝিঞ্জিরাম নদী
                  </text>

                  {/* 1. Dantbhanga Union (North - Bordering Assam/Meghalaya) */}
                  <g
                    onClick={() => handleUnionClick(UNIONS_DATA[1])}
                    className="cursor-pointer group transition-all"
                  >
                    <path
                      d="M 280,30 L 730,40 L 735,200 L 460,200 L 260,150 Z"
                      fill={activeUnion.id === 'dantbhanga' ? '#10b981' : '#dcfce7'}
                      stroke={activeUnion.id === 'dantbhanga' ? '#047857' : '#86efac'}
                      strokeWidth="2.5"
                      className="transition-colors group-hover:fill-emerald-300 dark:group-hover:fill-emerald-700"
                    />
                    <text
                      x="490"
                      y="115"
                      textAnchor="middle"
                      fill={activeUnion.id === 'dantbhanga' ? '#ffffff' : '#065f46'}
                      fontSize="15"
                      fontWeight="bold"
                    >
                      {lang === 'bn' ? 'দাঁতভাঙ্গা ইউনিয়ন' : 'Dantbhanga'}
                    </text>
                    <text
                      x="490"
                      y="135"
                      textAnchor="middle"
                      fill={activeUnion.id === 'dantbhanga' ? '#f0fdf4' : '#047857'}
                      fontSize="11"
                    >
                      {lang === 'bn' ? 'কালাইরচর বর্ডার হাট' : 'Border Haat'}
                    </text>
                  </g>

                  {/* 2. Saulmari Union (North-West) */}
                  <g
                    onClick={() => handleUnionClick(UNIONS_DATA[2])}
                    className="cursor-pointer group transition-all"
                  >
                    <path
                      d="M 120,80 L 280,30 L 260,150 L 460,200 L 380,330 L 140,290 Z"
                      fill={activeUnion.id === 'saulmari' ? '#059669' : '#d1fae5'}
                      stroke={activeUnion.id === 'saulmari' ? '#047857' : '#6ee7b7'}
                      strokeWidth="2.5"
                      className="transition-colors group-hover:fill-emerald-300 dark:group-hover:fill-emerald-700"
                    />
                    <text
                      x="250"
                      y="210"
                      textAnchor="middle"
                      fill={activeUnion.id === 'saulmari' ? '#ffffff' : '#065f46'}
                      fontSize="15"
                      fontWeight="bold"
                    >
                      {lang === 'bn' ? 'শৌলমারী ইউনিয়ন' : 'Saulmari'}
                    </text>
                  </g>

                  {/* 3. Rowmari Sadar Union (Center - Administrative Heart) */}
                  <g
                    onClick={() => handleUnionClick(UNIONS_DATA[0])}
                    className="cursor-pointer group transition-all"
                  >
                    <path
                      d="M 380,200 L 735,200 L 740,360 L 470,390 L 380,330 Z"
                      fill={activeUnion.id === 'rowmari-sadar' ? '#047857' : '#ecfdf5'}
                      stroke={activeUnion.id === 'rowmari-sadar' ? '#064e3b' : '#34d399'}
                      strokeWidth="3"
                      className="transition-colors group-hover:fill-emerald-300 dark:group-hover:fill-emerald-700"
                    />
                    <text
                      x="540"
                      y="280"
                      textAnchor="middle"
                      fill={activeUnion.id === 'rowmari-sadar' ? '#ffffff' : '#064e3b'}
                      fontSize="16"
                      fontWeight="800"
                    >
                      ★ {lang === 'bn' ? 'রৌমারী সদর ইউনিয়ন' : 'Rowmari Sadar'}
                    </text>
                    <text
                      x="540"
                      y="302"
                      textAnchor="middle"
                      fill={activeUnion.id === 'rowmari-sadar' ? '#d1fae5' : '#047857'}
                      fontSize="12"
                      fontWeight="600"
                    >
                      {lang === 'bn' ? 'উপজেলা পরিষদ ও স্মৃতিসৌধ' : 'HQ & Memorial'}
                    </text>
                  </g>

                  {/* 4. Bondober Union (West - Along Brahmaputra Ghats) */}
                  <g
                    onClick={() => handleUnionClick(UNIONS_DATA[5])}
                    className="cursor-pointer group transition-all"
                  >
                    <path
                      d="M 140,290 L 380,330 L 340,480 L 130,450 Z"
                      fill={activeUnion.id === 'bondober' ? '#0d9488' : '#ccfbf1'}
                      stroke={activeUnion.id === 'bondober' ? '#0f766e' : '#5eead4'}
                      strokeWidth="2.5"
                      className="transition-colors group-hover:fill-teal-300 dark:group-hover:fill-teal-700"
                    />
                    <text
                      x="230"
                      y="390"
                      textAnchor="middle"
                      fill={activeUnion.id === 'bondober' ? '#ffffff' : '#115e59'}
                      fontSize="15"
                      fontWeight="bold"
                    >
                      {lang === 'bn' ? 'বন্দবেড় ইউনিয়ন' : 'Bondober'}
                    </text>
                    <text
                      x="230"
                      y="410"
                      textAnchor="middle"
                      fill={activeUnion.id === 'bondober' ? '#e6fffa' : '#0f766e'}
                      fontSize="11"
                    >
                      {lang === 'bn' ? 'ব্রহ্মপুত্র নৌঘাট' : 'Ferry Ghat'}
                    </text>
                  </g>

                  {/* 5. Char Shoulmari Union (South-West Delta) */}
                  <g
                    onClick={() => handleUnionClick(UNIONS_DATA[4])}
                    className="cursor-pointer group transition-all"
                  >
                    <path
                      d="M 130,450 L 340,480 L 320,620 L 140,620 Z"
                      fill={activeUnion.id === 'char-shoulmari' ? '#0284c7' : '#e0f2fe'}
                      stroke={activeUnion.id === 'char-shoulmari' ? '#0369a1' : '#7dd3fc'}
                      strokeWidth="2.5"
                      className="transition-colors group-hover:fill-sky-300 dark:group-hover:fill-sky-700"
                    />
                    <text
                      x="230"
                      y="540"
                      textAnchor="middle"
                      fill={activeUnion.id === 'char-shoulmari' ? '#ffffff' : '#075985'}
                      fontSize="15"
                      fontWeight="bold"
                    >
                      {lang === 'bn' ? 'চর শৌলমারী' : 'Char Shoulmari'}
                    </text>
                  </g>

                  {/* 6. Jadurchar Union (South-East - Border Front) */}
                  <g
                    onClick={() => handleUnionClick(UNIONS_DATA[3])}
                    className="cursor-pointer group transition-all"
                  >
                    <path
                      d="M 340,480 L 470,390 L 740,360 L 740,620 L 320,620 Z"
                      fill={activeUnion.id === 'jadurchar' ? '#d97706' : '#fef3c7'}
                      stroke={activeUnion.id === 'jadurchar' ? '#b45309' : '#fcd34d'}
                      strokeWidth="2.5"
                      className="transition-colors group-hover:fill-amber-300 dark:group-hover:fill-amber-700"
                    />
                    <text
                      x="530"
                      y="510"
                      textAnchor="middle"
                      fill={activeUnion.id === 'jadurchar' ? '#ffffff' : '#78350f'}
                      fontSize="16"
                      fontWeight="bold"
                    >
                      {lang === 'bn' ? 'যাদুরচর ইউনিয়ন' : 'Jadurchar'}
                    </text>
                    <text
                      x="530"
                      y="532"
                      textAnchor="middle"
                      fill={activeUnion.id === 'jadurchar' ? '#fffbeb' : '#92400e'}
                      fontSize="12"
                    >
                      {lang === 'bn' ? 'সেক্টর ১১ ঘাঁটি ও সীমান্ত' : 'Sector 11 Base'}
                    </text>
                  </g>

                  {/* Interactive Map Points Pins Placed on SVG */}
                  {filteredPoints.map((point) => {
                    // Normalize lat (25.48 to 25.66) and lng (89.78 to 89.92) to SVG coordinate space
                    const x = ((point.lng - 89.76) / (89.93 - 89.76)) * 680 + 70;
                    const y = 630 - ((point.lat - 25.48) / (25.66 - 25.48)) * 580;
                    const isSelected = selectedPoint?.id === point.id;

                    const pinColor = point.category === 'emergency' 
                      ? '#dc2626' 
                      : point.category === 'history' 
                        ? '#d97706' 
                        : point.category === 'tourism'
                          ? '#0d9488'
                          : point.category === 'education'
                            ? '#4f46e5'
                            : '#059669';

                    return (
                      <g
                        key={point.id}
                        transform={`translate(${x}, ${y})`}
                        onClick={() => handlePointClick(point)}
                        className="cursor-pointer group"
                      >
                        {isSelected && (
                          <circle r="18" fill={pinColor} opacity="0.25" className="animate-ping" />
                        )}
                        <circle
                          r={isSelected ? "11" : "8"}
                          fill={pinColor}
                          stroke="#ffffff"
                          strokeWidth="2"
                          className="drop-shadow-md transition-all group-hover:scale-125"
                        />
                        <text
                          y="-13"
                          textAnchor="middle"
                          fill="#1c1917"
                          fontSize="10"
                          fontWeight="bold"
                          className="opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1"
                        >
                          {lang === 'bn' ? point.titleBn : point.titleEn}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Map Quick Compass Overlay */}
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-stone-200 dark:border-stone-800 text-[11px] font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5 shadow-sm">
                  <Navigation className="w-3.5 h-3.5 text-emerald-600 rotate-45" />
                  <span>উত্তর (North ↑)</span>
                </div>
              </div>
            ) : (
              /* Live Leaflet OpenStreetMap View */
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800">
                <div ref={leafletContainerRef} className="w-full h-full" />
              </div>
            )}

            {/* Union Quick Navigation Ribbon */}
            <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                {lang === 'bn' ? 'ইউনিয়নে জুম করুন:' : 'Jump to Union:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {UNIONS_DATA.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => handleUnionClick(u)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                      activeUnion.id === u.id
                        ? 'bg-emerald-800 text-white shadow-sm'
                        : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    {lang === 'bn' ? u.nameBn.replace(' ইউনিয়ন', '') : u.nameEn.replace(' Union', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Selected Point & Union Information Panel */}
          <div className="lg:col-span-4 space-y-4">
            {/* Active Union Focus Card */}
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-stone-50 dark:from-emerald-950/30 dark:to-stone-900 border border-emerald-200/80 dark:border-emerald-800/50 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-2 border-b border-emerald-200/60 dark:border-emerald-800/50 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                    {lang === 'bn' ? 'নির্বাচিত ইউনিয়ন' : 'Focused Union'}
                  </span>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white">
                    {lang === 'bn' ? activeUnion.nameBn : activeUnion.nameEn}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded">
                  {activeUnion.areaKm2} কি.মি.²
                </span>
              </div>

              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                {lang === 'bn' ? activeUnion.descriptionBn : activeUnion.descriptionEn}
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white/80 dark:bg-stone-800/80 p-2.5 rounded-lg border border-stone-200/60 dark:border-stone-700">
                  <span className="text-stone-500 block text-[10px]">
                    {lang === 'bn' ? 'জনসংখ্যা' : 'Population'}
                  </span>
                  <span className="font-bold text-stone-900 dark:text-white">
                    {activeUnion.population}
                  </span>
                </div>
                <div className="bg-white/80 dark:bg-stone-800/80 p-2.5 rounded-lg border border-stone-200/60 dark:border-stone-700">
                  <span className="text-stone-500 block text-[10px]">
                    {lang === 'bn' ? 'গ্রাম সংখ্যা' : 'Villages'}
                  </span>
                  <span className="font-bold text-stone-900 dark:text-white">
                    {activeUnion.villagesCount} টি গ্রাম
                  </span>
                </div>
              </div>

              <div className="text-xs space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-stone-600 dark:text-stone-400">
                  <span>{lang === 'bn' ? 'ইউপি কার্যালয়:' : 'UP Office:'}</span>
                  <span className="font-medium text-stone-900 dark:text-white">
                    {activeUnion.upOfficeLocation}
                  </span>
                </div>
                <div className="flex items-center justify-between text-stone-600 dark:text-stone-400">
                  <span>{lang === 'bn' ? 'যোগাযোগ:' : 'Contact:'}</span>
                  <a
                    href={`tel:${activeUnion.contactPhone}`}
                    className="font-medium text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    {activeUnion.contactPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Selected Landmark / Point Card */}
            {selectedPoint && (
              <div className="p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded">
                    {lang === 'bn' ? selectedPoint.badgeBn : selectedPoint.badgeEn}
                  </span>
                  <button
                    onClick={copyCoordinates}
                    className="inline-flex items-center gap-1 text-[11px] text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-400 cursor-pointer"
                  >
                    {copiedCoords ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>{lang === 'bn' ? 'কপি হয়েছে' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <MapPin className="w-3 h-3" />
                        <span>{selectedPoint.lat.toFixed(4)}, {selectedPoint.lng.toFixed(4)}</span>
                      </>
                    )}
                  </button>
                </div>

                <h4 className="text-base font-bold text-stone-900 dark:text-white">
                  {lang === 'bn' ? selectedPoint.titleBn : selectedPoint.titleEn}
                </h4>

                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {lang === 'bn' ? selectedPoint.descriptionBn : selectedPoint.descriptionEn}
                </p>

                {selectedPoint.contact && (
                  <div className="pt-2">
                    <a
                      href={`tel:${selectedPoint.contact}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold rounded-lg transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{lang === 'bn' ? 'জরুরি কল:' : 'Call:'} {selectedPoint.contact}</span>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
