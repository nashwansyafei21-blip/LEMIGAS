import React, { useState, useMemo } from 'react';
import {
  SERVICES_DATA,
  ServiceItem
} from '../data/lemigasData';
import {
  FlaskConical,
  Clock,
  CheckCircle,
  FileCheck,
  Search,
  ArrowRight,
  Filter
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForOrder: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForOrder
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Semua Layanan' },
    { id: 'hilir', label: 'BBM & Pelumas (NPT)' },
    { id: 'hulu', label: 'Hulu & Reservoir' },
    { id: 'emisi', label: 'Biofuel B40 & Emisi' },
    { id: 'kalibrasi', label: 'Kalibrasi & Metrologi' },
    { id: 'lingkungan', label: 'Lingkungan Migas' },
    { id: 'ccus', label: 'Kajian CCS/CCUS' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter(service => {
      const matchCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.standards.some(std => std.toLowerCase().includes(searchQuery.toLowerCase())) ||
        service.parameters.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="layanan" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-600 uppercase mb-2">
              <FlaskConical className="w-4 h-4" />
              <span>KATALOG LAYANAN BLU RESMI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight text-balance">
              Layanan Pengujian & Analisis Teknis Laboratorium
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1 text-balance">
              Didukung lebih dari 47 laboratorium spesialisasi dengan sertifikasi KAN ISO/IEC 17025 untuk memenuhi regulasi ESDM, SNI, dan standar internasional (ASTM, IP, API, GPA).
            </p>
          </div>

          {/* Search inside services */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Cari parameter, SNI, ASTM..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden shadow-2xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#003366] text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
            <Filter className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-700 font-semibold">Tidak ditemukan layanan yang cocok dengan pencarian Anda.</p>
            <p className="text-xs text-slate-500 mt-1">Coba gunakan kata kunci umum seperti "RON", "Viskositas", "Core", "Gas", atau "Emisi".</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-[#003366]/40 transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Card header */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs text-slate-500 font-medium">
                    <span className="uppercase tracking-wider font-semibold text-amber-700">
                      {service.category.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{service.estimatedDays}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#003366] transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Standard badges */}
                  <div className="mb-4">
                    <div className="text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                      Standar Acuan Uji:
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      {service.standards.map((std, i) => (
                        <span
                          key={i}
                          className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded border border-slate-200/70"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tested parameter bullets */}
                  <div className="space-y-1.5 text-xs text-slate-600 mb-4 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Parameter Unggulan:
                    </div>
                    {service.parameters.slice(0, 4).map((p, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{p}</span>
                      </div>
                    ))}
                    {service.parameters.length > 4 && (
                      <span className="text-[11px] text-slate-400 italic block pl-5">
                        + {service.parameters.length - 4} parameter lainnya...
                      </span>
                    )}
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-5 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">
                      Tarif Dasar BLU
                    </span>
                    <span className="text-sm font-extrabold text-[#003366] tabular-nums">
                      {formatRupiah(service.basePrice)}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectServiceForOrder(service)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#003366] hover:bg-[#002244] active:scale-98 rounded-lg shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Ajukan Uji (SILAB)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
