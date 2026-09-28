import React, { useState } from 'react';
import {
  LABORATORIES_LIST,
  LaboratoryFacility
} from '../data/lemigasData';
import {
  Building2,
  Cpu,
  ShieldCheck,
  CheckCircle,
  FlaskConical,
  Wrench
} from 'lucide-react';

export const LaboratoriesSection: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');

  const divisions = [
    { id: 'all', label: 'Semua Laboratorium (47+)' },
    { id: 'Pengujian Pengolahan & Pemanfaatan', label: 'Hilir BBM & Pelumas' },
    { id: 'Pengujian Eksploitasi', label: 'Eksploitasi & Reservoir' },
    { id: 'Pengujian Eksplorasi', label: 'Eksplorasi & Geokimia' },
    { id: 'Kalibrasi & Sarana', label: 'Kalibrasi & Metrologi' },
  ];

  const filteredLabs = LABORATORIES_LIST.filter(lab =>
    selectedDivision === 'all' || lab.division === selectedDivision
  );

  return (
    <section id="laboratorium" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 mb-2">
            <Building2 className="w-4 h-4 text-sky-600" />
            <span>INFRASTRUKTUR & PERALATAN RISET MIGAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight">
            Fasilitas Laboratorium Berstandar Internasional
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Berlokasi di Area Perkantoran LEMIGAS Cipulir Jakarta Selatan, balai ini mengoperasikan lebih dari 47 laboratorium spesialisasi dengan dukungan 280+ instrumen pengujian mutakhir terakreditasi KAN LP-001-IDN & LK-001-IDN.
          </p>
        </div>

        {/* Division Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {divisions.map((div) => (
            <button
              key={div.id}
              onClick={() => setSelectedDivision(div.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedDivision === div.id
                  ? 'bg-[#003366] text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {div.label}
            </button>
          ))}
        </div>

        {/* Laboratories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLabs.map((lab) => (
            <div
              key={lab.id}
              className="bg-slate-50/80 rounded-xl p-5 border border-slate-200 hover:border-[#003366]/40 hover:bg-white transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-2">
                  <span className="uppercase text-amber-700">{lab.division}</span>
                  <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    {lab.accreditationNumber}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2">
                  {lab.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {lab.description}
                </p>

                <div className="pt-3 border-t border-slate-200/80">
                  <div className="text-[11px] font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-sky-600" />
                    <span>Peralatan Kunci Laboratorium:</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-600">
                    {lab.keyEquipments.map((eq, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#003366] font-bold">›</span>
                        <span className="line-clamp-1">{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ISO/IEC 17025</span>
                </span>
                <span>Area Cipulir, Jaksel</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
