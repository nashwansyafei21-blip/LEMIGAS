import React from 'react';
import { ArrowRight, Leaf, Shield, CheckCircle2, Globe, Database } from 'lucide-react';

interface CcusHighlightProps {
  onOpenConsultation: () => void;
}

export const CcusHighlightSection: React.FC<CcusHighlightProps> = ({ onOpenConsultation }) => {
  return (
    <section id="ccus" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/70 px-3.5 py-1.5 rounded-full border border-emerald-800/50 mb-4">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>TRANSISI ENERGI & DEKARBONISASI INDUSTRI MIGAS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
              Pusat Kajian & Riset Carbon Capture, Utilization & Storage (CCS/CCUS) LEMIGAS
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 text-balance">
              Mendukung Peraturan Presiden dan Permen ESDM No. 2 Tahun 2023, LEMIGAS memimpin kajian teknis evaluasi potensi penangkapan dan injeksi karbon geologis di berbagai cekungan migas Indonesia untuk mencapai Net Zero Emission 2060.
            </p>

            {/* Core pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
                  <Database className="w-4 h-4" />
                  <span>Kapasitas Simpan Karbon</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Perhitungan potensi penyimpanan CO2 pada depleted oil & gas reservoir serta deep saline aquifer nasional.
                </p>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-xs mb-1">
                  <Shield className="w-4 h-4" />
                  <span>Integritas Batuan Penutup</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pengujian geomekanika caprock seal capacity pada temperatur & tekanan formasi ekstrem (HPHT).
                </p>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Core Flooding CO2 Superkritis</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Simulasi interaksi fasa CO2-air-batuan untuk memastikan kestabilan jebakan mineral permanen.
                </p>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs mb-1">
                  <Globe className="w-4 h-4" />
                  <span>Penyusunan Pedoman MMV</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Formulasi protokol Measurement, Monitoring & Verification untuk keselamatan lingkungan jangka panjang.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Konsultasi Proyek CCS/CCUS KKKS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl">
              <img
                src="/src/assets/images/lemigas_ccus_green_energy_1790299153236.jpg"
                alt="Fasilitas Riset CCUS LEMIGAS"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200">
                <span className="font-bold text-amber-300 block text-sm">
                  Laboratorium Geokimia & Rekayasa Reservoir
                </span>
                <span>Fasilitas simulasi injeksi gas asam dan pemodelan penyimpanan geologis LEMIGAS.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
