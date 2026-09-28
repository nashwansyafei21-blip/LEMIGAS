import React from 'react';
import {
  FlaskConical,
  ShieldCheck,
  Calculator,
  Award,
  FileText,
  ArrowUpRight
} from 'lucide-react';

interface QuickServicesBarProps {
  onOpenSilab: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenPpidDoc: () => void;
}

export const QuickServicesBar: React.FC<QuickServicesBarProps> = ({
  onOpenSilab,
  onNavigateSection,
  onOpenPpidDoc
}) => {
  const quickLinks = [
    {
      id: 'silab',
      title: 'SILAB LEMIGAS',
      subtitle: 'Sistem Informasi Laboratorium',
      desc: 'Pendaftaran sampel & lacak progres uji secara online.',
      icon: <FlaskConical className="w-6 h-6 text-amber-500" />,
      action: onOpenSilab,
      badge: 'Layanan Online',
      accentColor: 'hover:border-amber-400'
    },
    {
      id: 'lhu',
      title: 'Verifikasi LHU',
      subtitle: 'Cek Keaslian Sertifikat',
      desc: 'Validasi QR Code & Nomor Sertifikat Hasil Uji resmi.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      action: () => onNavigateSection('verifikasi-lhu'),
      badge: 'Keamanan Data',
      accentColor: 'hover:border-emerald-400'
    },
    {
      id: 'tarif',
      title: 'Kalkulator Tarif BLU',
      subtitle: 'Simulasi Biaya Pengujian',
      desc: 'Estimasi biaya uji transparan berdasar PMK tarif BLU.',
      icon: <Calculator className="w-6 h-6 text-sky-500" />,
      action: () => onNavigateSection('tarif'),
      badge: 'Transparan',
      accentColor: 'hover:border-sky-400'
    },
    {
      id: 'pup',
      title: 'Uji Profisiensi (PUP)',
      subtitle: 'ISO/IEC 17043',
      desc: 'Program penjaminan mutu laboratorium migas nasional.',
      icon: <Award className="w-6 h-6 text-indigo-500" />,
      action: () => onNavigateSection('laboratorium'),
      badge: 'Terakreditasi KAN',
      accentColor: 'hover:border-indigo-400'
    },
    {
      id: 'ppid',
      title: 'PPID & Pengaduan',
      subtitle: 'Keterbukaan Informasi',
      desc: 'Permohonan dokumen publik & SP4N-LAPOR ESDM.',
      icon: <FileText className="w-6 h-6 text-rose-500" />,
      action: onOpenPpidDoc,
      badge: 'Publik & WBS',
      accentColor: 'hover:border-rose-400'
    }
  ];

  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 lg:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        {quickLinks.map((item) => (
          <button
            key={item.id}
            onClick={item.action}
            className={`group bg-white p-4 sm:p-5 rounded-xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-200 text-left flex flex-col justify-between cursor-pointer ${item.accentColor}`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 bg-slate-50 group-hover:bg-slate-100 rounded-lg transition-colors">
                  {item.icon}
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                  <span>{item.badge}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>

              <h2 className="text-sm font-bold text-slate-900 group-hover:text-[#003366] transition-colors leading-tight">
                {item.title}
              </h2>
              <span className="text-[12px] font-medium text-slate-500 block mb-1">
                {item.subtitle}
              </span>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#003366] flex items-center justify-between">
              <span>Buka Layanan</span>
              <span className="text-amber-500 font-bold">→</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
