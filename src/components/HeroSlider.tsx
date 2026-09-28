import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  Play,
  Pause,
  Award,
  Zap,
  Building2,
  FileCheck2
} from 'lucide-react';

interface Slide {
  id: number;
  tag: string;
  badgeIcon: React.ReactNode;
  title: string;
  subtitle: string;
  ctaPrimaryText: string;
  ctaPrimaryAction: string;
  ctaSecondaryText: string;
  ctaSecondaryAction: string;
  image: string;
}

interface HeroSliderProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenSilabModal: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigateSection,
  onOpenSilabModal
}) => {
  const slides: Slide[] = [
    {
      id: 1,
      tag: 'INSTANSI BLU DITJEN MIGAS KEMENTERIAN ESDM',
      badgeIcon: <Award className="w-4 h-4 text-amber-300" />,
      title: 'Pusat Keunggulan Pengujian Minyak dan Gas Bumi Indonesia',
      subtitle:
        'Melayani industri energi nasional sejak 11 Juni 1965 dengan standar mutu tertinggi terakreditasi KAN LP-001-IDN dan ISO/IEC 17025.',
      ctaPrimaryText: 'Jelajahi Layanan Pengujian',
      ctaPrimaryAction: 'layanan',
      ctaSecondaryText: 'Cek Keaslian LHU',
      ctaSecondaryAction: 'verifikasi-lhu',
      image: '/src/assets/images/lemigas_hero_facility_1790299114698.jpg',
    },
    {
      id: 2,
      tag: 'PENJAMINAN MUTU BAHAN BAKAR & PELUMAS',
      badgeIcon: <ShieldCheck className="w-4 h-4 text-emerald-300" />,
      title: 'Uji Mutu BBM Bensin, Biofuel B40 & Pendaftaran Pelumas (NPT)',
      subtitle:
        'Pengujian komprehensif sifat fisika kimia dan uji unjuk kerja mesin dynamometer untuk perlindungan konsumen serta keandalan industri otomotif.',
      ctaPrimaryText: 'Simulasi Tarif Pengujian',
      ctaPrimaryAction: 'tarif',
      ctaSecondaryText: 'Permohonan Uji (SILAB)',
      ctaSecondaryAction: 'silab',
      image: '/src/assets/images/lemigas_fuel_testing_lab_1790299127533.jpg',
    },
    {
      id: 3,
      tag: 'SOLUSI TEKNOLOGI HULU MIGAS INDONESIA',
      badgeIcon: <Zap className="w-4 h-4 text-sky-300" />,
      title: 'Evaluasi Batuan Inti, Analisis PVT & Enhanced Oil Recovery (EOR)',
      subtitle:
        'Mendukung Kontraktor Kontrak Kerja Sama (KKKS) dalam optimalisasi cadangan dan peningkatan perolehan minyak bumi di seluruh cekungan sedimen Indonesia.',
      ctaPrimaryText: '47+ Fasilitas Laboratorium',
      ctaPrimaryAction: 'laboratorium',
      ctaSecondaryText: 'Konsultasi Riset Hulu',
      ctaSecondaryAction: 'kontak',
      image: '/src/assets/images/lemigas_oil_rig_upstream_1790299140299.jpg',
    },
    {
      id: 4,
      tag: 'TRANSISI ENERGI & NET ZERO EMISSION 2060',
      badgeIcon: <Building2 className="w-4 h-4 text-emerald-400" />,
      title: 'Pionir Riset & Implementasi Carbon Capture, Storage (CCS/CCUS)',
      subtitle:
        'Kajian saintifik kapasitas formasi geologi untuk penyimpanan karbon serta pengembangan teknologi dekarbonisasi industri migas berkelanjutan.',
      ctaPrimaryText: 'Pelajari Kajian CCUS',
      ctaPrimaryAction: 'ccus',
      ctaSecondaryText: 'Publikasi Jurnal Riset',
      ctaSecondaryAction: 'ppid',
      image: '/src/assets/images/lemigas_ccus_green_energy_1790299153236.jpg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length]);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const handleCtaClick = (action: string) => {
    if (action === 'silab') {
      onOpenSilabModal();
    } else {
      onNavigateSection(action);
    }
  };

  return (
    <section id="hero" className="relative bg-slate-900 text-white overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center">
      {/* Background slide images with crossfade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Measured multi-layer scrim overlay ensuring high contrast WCAG AA readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
        </div>
      ))}

      {/* Slide content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
        <div className="max-w-3xl">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide text-amber-300 mb-3 sm:mb-4 bg-slate-950/70 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-amber-500/30">
            {slides[currentSlide].badgeIcon}
            <span className="uppercase">{slides[currentSlide].tag}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-snug sm:leading-tight text-balance mb-3 sm:mb-4 drop-shadow-md">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200/95 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl text-balance">
            {slides[currentSlide].subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
            <button
              onClick={() => handleCtaClick(slides[currentSlide].ctaPrimaryAction)}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-xl shadow-lg hover:shadow-amber-400/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>{slides[currentSlide].ctaPrimaryText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleCtaClick(slides[currentSlide].ctaSecondaryAction)}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/90 active:scale-98 backdrop-blur-md border border-slate-600/70 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              <FileCheck2 className="w-4 h-4 text-sky-400" />
              <span>{slides[currentSlide].ctaSecondaryText}</span>
            </button>
          </div>

          {/* Quick trust metrics row */}
          <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-slate-700/60 grid grid-cols-3 gap-2 sm:gap-4 max-w-xl text-[11px] sm:text-xs md:text-sm text-slate-300">
            <div>
              <span className="block font-bold text-base sm:text-lg md:text-xl text-amber-400">1965</span>
              <span className="text-slate-400">Tahun Berdiri</span>
            </div>
            <div>
              <span className="block font-bold text-base sm:text-lg md:text-xl text-white">47+ Lab</span>
              <span className="text-slate-400">Terakreditasi KAN</span>
            </div>
            <div>
              <span className="block font-bold text-base sm:text-lg md:text-xl text-emerald-400">100% BLU</span>
              <span className="text-slate-400">Layanan Prima ESDM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls: Arrows and Indicators */}
      <div className="absolute z-20 bottom-6 right-4 sm:right-8 flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800">
        <button
          onClick={handlePrev}
          aria-label="Slide sebelumnya"
          className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5 px-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Beralih ke slide ${i + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Slide berikutnya"
          className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Jeda carousel' : 'Putar carousel'}
          className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1 border-l border-slate-700 pl-2"
          title={isPlaying ? 'Jeda Otomatis' : 'Mulai Putar Otomatis'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>
    </section>
  );
};
