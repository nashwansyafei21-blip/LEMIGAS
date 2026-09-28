import React, { useState, useMemo } from 'react';
import {
  Calculator,
  CheckSquare,
  Square,
  FileDown,
  Printer,
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';

interface ParameterTarif {
  id: string;
  name: string;
  method: string;
  price: number;
  category: string;
  standardDays: number;
}

const TARIF_ITEMS: ParameterTarif[] = [
  // BBM
  { id: 't-ron', name: 'Research Octane Number (RON Engine)', method: 'ASTM D2699', price: 1850000, category: 'bbm', standardDays: 3 },
  { id: 't-mon', name: 'Motor Octane Number (MON Engine)', method: 'ASTM D2700', price: 1850000, category: 'bbm', standardDays: 3 },
  { id: 't-dist-bbm', name: 'Distilasi Atmosferik Otomatis', method: 'ASTM D86', price: 650000, category: 'bbm', standardDays: 2 },
  { id: 't-densitas', name: 'Massa Jenis @ 15°C (Digital)', method: 'ASTM D4052', price: 400000, category: 'bbm', standardDays: 1 },
  { id: 't-sulfur-xrf', name: 'Kandungan Belerang XRF (Sulfur)', method: 'ASTM D2622 / D4294', price: 750000, category: 'bbm', standardDays: 2 },
  { id: 't-rvp', name: 'Tekanan Uap Reid (RVP Mini)', method: 'ASTM D5191', price: 550000, category: 'bbm', standardDays: 2 },
  
  // Pelumas
  { id: 't-visko-40', name: 'Viskositas Kinematik 40°C & 100°C', method: 'ASTM D445', price: 800000, category: 'pelumas', standardDays: 2 },
  { id: 't-tbn', name: 'Total Base Number (TBN Titrator)', method: 'ASTM D2896', price: 600000, category: 'pelumas', standardDays: 2 },
  { id: 't-flash-coc', name: 'Titik Nyala Cleveland Open Cup (COC)', method: 'ASTM D92', price: 450000, category: 'pelumas', standardDays: 1 },
  { id: 't-pour-point', name: 'Titik Tuang Otomatis (Pour Point)', method: 'ASTM D97', price: 450000, category: 'pelumas', standardDays: 2 },
  { id: 't-icp-metal', name: 'Analisis 22 Logam Aditif & Aus (ICP-OES)', method: 'ASTM D5185', price: 1750000, category: 'pelumas', standardDays: 3 },
  { id: 't-ccs', name: 'Viskositas Cold Cranking Simulator (CCS)', method: 'ASTM D5293', price: 1100000, category: 'pelumas', standardDays: 3 },

  // Gas Bumi
  { id: 't-gas-gc', name: 'Komposisi Gas Hidrokarbon C1-C6+ (GC)', method: 'GPA 2261', price: 1800000, category: 'gas', standardDays: 3 },
  { id: 't-gas-h2s', name: 'Kadar H2S dan Total Sulfur Gas', method: 'ASTM D5504', price: 1200000, category: 'gas', standardDays: 2 },
  { id: 't-ghv', name: 'Perhitungan Nilai Kalor Gas (Gross Heating Value)', method: 'GPA 2145', price: 400000, category: 'gas', standardDays: 1 },

  // Reservoir / Core
  { id: 't-rca-poro', name: 'Porositas Inti Batuan (Gas Expansion)', method: 'API RP 40', price: 850000, category: 'core', standardDays: 5 },
  { id: 't-rca-perm', name: 'Permeabilitas Gas Klinkenberg', method: 'API RP 40', price: 950000, category: 'core', standardDays: 5 },
  { id: 't-scal-flood', name: 'Core Flooding Relative Permeability', method: 'API RP 40 Special', price: 9500000, category: 'core', standardDays: 15 },
  { id: 't-pvt-cce', name: 'Constant Composition Expansion (PVT Cell)', method: 'API RP 44', price: 8000000, category: 'core', standardDays: 10 },

  // Kalibrasi
  { id: 't-cal-press', name: 'Kalibrasi Pressure Gauge / Transmitter (Dead Weight)', method: 'DKD-R 6-1', price: 850000, category: 'kalibrasi', standardDays: 3 },
  { id: 't-cal-temp', name: 'Kalibrasi Sensor Suhu RTD / Thermocouple', method: 'EURAMET cg-13', price: 750000, category: 'kalibrasi', standardDays: 3 },
  { id: 't-cal-mass', name: 'Kalibrasi Neraca Analitik Presisi', method: 'OIML R76', price: 650000, category: 'kalibrasi', standardDays: 3 }
];

export const TarifCalculator: React.FC<{ onOpenSilabModal: () => void }> = ({ onOpenSilabModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('bbm');
  const [selectedIds, setSelectedIds] = useState<string[]>(['t-ron', 't-dist-bbm', 't-densitas', 't-sulfur-xrf']);

  const categories = [
    { id: 'bbm', label: 'Bahan Bakar Bensin & Solar' },
    { id: 'pelumas', label: 'Minyak Pelumas & Gemuk (NPT)' },
    { id: 'gas', label: 'Gas Bumi & LPG' },
    { id: 'core', label: 'Batuan Inti & Fluida Reservoir' },
    { id: 'kalibrasi', label: 'Kalibrasi & Metrologi' },
  ];

  const currentCategoryItems = useMemo(() => {
    return TARIF_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const selectedItems = useMemo(() => {
    return TARIF_ITEMS.filter(item => selectedIds.includes(item.id));
  }, [selectedIds]);

  const totalPrice = useMemo(() => {
    return selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  }, [selectedItems]);

  const maxDays = useMemo(() => {
    return selectedItems.length > 0 ? Math.max(...selectedItems.map(i => i.standardDays)) : 0;
  }, [selectedItems]);

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectAllInCategory = () => {
    const idsInCat = currentCategoryItems.map(i => i.id);
    setSelectedIds(prev => Array.from(new Set([...prev, ...idsInCat])));
  };

  const clearSelection = () => {
    setSelectedIds([]);
  };

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="tarif" className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-300 mb-2">
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>TRANSPARANSI TARIF RESMI BLU LEMIGAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight">
            Simulasi Biaya & Tarif Pengujian Laboratorium
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Hitung estimasi pengujian sesuai Peraturan Menteri Keuangan (PMK) Tarif Layanan Badan Layanan Umum Balai Besar Pengujian Minyak dan Gas Bumi LEMIGAS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left panel: Category and Item picker */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs">
            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-slate-100 scrollbar-none">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === c.id
                      ? 'bg-[#003366] text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Quick bulk actions */}
            <div className="flex items-center justify-between mb-4 text-xs">
              <span className="font-semibold text-slate-700">
                Pilih Parameter Pengujian:
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={selectAllInCategory}
                  className="text-[#003366] hover:underline font-semibold cursor-pointer"
                >
                  Pilih Semua Kategori Ini
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={clearSelection}
                  className="text-rose-600 hover:underline font-semibold cursor-pointer"
                >
                  Bersihkan Pilihan
                </button>
              </div>
            </div>

            {/* Parameter checklist */}
            <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
              {currentCategoryItems.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleSelect(item.id)}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all gap-2 sm:gap-3 ${
                      isSelected
                        ? 'bg-amber-50/60 border-amber-400/80 shadow-2xs'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <div className="mt-0.5 text-slate-500 shrink-0">
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-[#003366]" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block leading-snug">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] text-slate-500 mt-0.5 flex-wrap">
                          <span className="font-mono text-slate-600">{item.method}</span>
                          <span>·</span>
                          <span>Estimasi {item.standardDays} hari kerja</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-left sm:text-right shrink-0 pl-6 sm:pl-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center">
                      <span className="font-extrabold text-[#003366] tabular-nums block text-xs sm:text-sm">
                        {formatRupiah(item.price)}
                      </span>
                      <span className="text-[10px] text-slate-400 sm:block">Tarif Resmi PMK</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-3 bg-sky-50 rounded-xl border border-sky-200 text-xs text-sky-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>
                Tarif pengujian belum termasuk PPN 11% sesuai ketentuan perpajakan penerimaan negara bukan pajak (PNBP). Untuk pengujian paket komprehensif atau kontrak tahunan KKKS, tersedia fasilitas billing terpusat.
              </span>
            </div>
          </div>

          {/* Right panel: Calculation Summary & Invoice Simulation */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Rincian Estimasi Biaya
                  </h3>
                  <span className="text-xs text-slate-500">
                    Kalkulator Penerimaan Negara Bukan Pajak (PNBP)
                  </span>
                </div>
                <div className="p-2 bg-amber-50 rounded-lg">
                  <Calculator className="w-5 h-5 text-amber-600" />
                </div>
              </div>

              {selectedItems.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-xs">
                  Belum ada parameter pengujian yang dipilih. Silakan centang parameter di panel kiri.
                </div>
              ) : (
                <div className="space-y-3 mb-6 max-h-[220px] overflow-y-auto pr-1">
                  {selectedItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-100">
                      <div className="pr-2">
                        <span className="font-semibold text-slate-800 block truncate max-w-[200px]">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">{item.method}</span>
                      </div>
                      <span className="font-bold text-slate-700 tabular-nums shrink-0">
                        {formatRupiah(item.price)}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Total calculations */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Jumlah Parameter:</span>
                  <span className="font-bold text-slate-800 tabular-nums">{selectedItems.length} Pengujian</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimasi Pengerjaan:</span>
                  <span className="font-bold text-slate-800 tabular-nums">~{maxDays} Hari Kerja</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>PPN (11% PNBP):</span>
                  <span className="font-bold text-slate-800 tabular-nums">{formatRupiah(totalPrice * 0.11)}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                  <span className="font-bold text-slate-900 text-sm">Total Estimasi Biaya:</span>
                  <span className="text-lg font-extrabold text-[#003366] tabular-nums">
                    {formatRupiah(totalPrice * 1.11)}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={onOpenSilabModal}
                disabled={selectedItems.length === 0}
                className="w-full py-3 bg-[#003366] hover:bg-[#002244] disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ajukan Permohonan Uji Resmi (SILAB)</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>

              <button
                onClick={handlePrint}
                disabled={selectedItems.length === 0}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak Rincian Estimasi Biaya</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
