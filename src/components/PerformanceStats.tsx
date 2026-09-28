import React from 'react';
import { Award, FlaskRound as Flask, Gauge, Users, CheckCircle2 } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/lemigasData';

export const PerformanceStats: React.FC = () => {
  const stats = [
    {
      figure: '59+',
      unit: 'Tahun Pengabdian',
      desc: 'Berdiri sejak 11 Juni 1965 mengawal kedaulatan migas nasional.',
      icon: <Award className="w-5 h-5 text-amber-500" />
    },
    {
      figure: '47+',
      unit: 'Laboratorium Khusus',
      desc: 'Fasilitas uji hulu, hilir, emisi, metrologi, dan rekayasa reservoir.',
      icon: <Flask className="w-5 h-5 text-sky-500" />
    },
    {
      figure: '280+',
      unit: 'Peralatan Uji Canggih',
      desc: 'CFR Octane Engine, GC-MS, ICP-OES, Rock-Eval, PVT Cell berstandar global.',
      icon: <Gauge className="w-5 h-5 text-emerald-500" />
    },
    {
      figure: '10.000+',
      unit: 'Sampel Diuji / Tahun',
      desc: 'Melayani badan usaha Pertamina, KKKS hulu migas, dan industri pelumas.',
      icon: <Users className="w-5 h-5 text-indigo-500" />
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-14 sm:py-16 my-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/40 mb-3">
            <span>KREDIBILITAS & REKAYASA TEKNOLOGI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3 text-balance">
            Mitra Strategis Pemerintah & Industri Migas Kelas Dunia
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto text-balance">
            Sebagai Balai Besar Pengujian di bawah Kementerian ESDM berstatus Badan Layanan Umum (BLU), LEMIGAS menghadirkan kepastian mutu, riset dekarbonisasi, dan integritas pengujian berstandar internasional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/60 p-6 rounded-xl border border-slate-700/70 hover:border-slate-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                    {item.figure}
                  </span>
                  <div className="p-2 bg-slate-700/60 rounded-lg">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-1">
                  {item.unit}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center gap-1.5 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Terverifikasi SNI & ISO/IEC 17025</span>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation banners */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Standar Akreditasi Komite Akreditasi Nasional (KAN):</span>
          {INSTITUTION_INFO.accreditations.map((acc, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-md border border-slate-700">
              <span className="font-bold text-amber-400">{acc.code}</span>
              <span className="text-slate-400 hidden md:inline">({acc.label})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
