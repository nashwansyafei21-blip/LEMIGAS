import React, { useState } from 'react';
import { PPID_DOCUMENTS } from '../data/lemigasData';
import {
  FileText,
  Download,
  Eye,
  ShieldCheck,
  Search,
  ExternalLink,
  Send,
  CheckCircle2
} from 'lucide-react';

interface PpidSectionProps {
  onOpenInfoRequestModal: () => void;
  onViewDoc: (title: string) => void;
}

export const PpidSection: React.FC<PpidSectionProps> = ({
  onOpenInfoRequestModal,
  onViewDoc
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchDoc, setSearchDoc] = useState('');

  const categories = [
    { id: 'all', label: 'Semua Dokumen' },
    { id: 'Informasi Berkala', label: 'Informasi Berkala' },
    { id: 'Informasi Setiap Saat', label: 'Informasi Setiap Saat' },
    { id: 'Informasi Serta Merta', label: 'Informasi Serta Merta' },
  ];

  const filteredDocs = PPID_DOCUMENTS.filter(doc => {
    const matchCat = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchSearch =
      doc.title.toLowerCase().includes(searchDoc.toLowerCase()) ||
      doc.desc.toLowerCase().includes(searchDoc.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="ppid" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-rose-700 uppercase mb-2">
              <ShieldCheck className="w-4 h-4 text-rose-600" />
              <span>KETERBUKAAN INFORMASI PUBLIK (UU NO. 14/2008)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight">
              Layanan PPID & Akuntabilitas Kinerja Publik
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mt-1">
              Sebagai badan publik, LEMIGAS Ditjen Migas Kementerian ESDM menjamin hak masyarakat untuk memperoleh informasi berkala, serta merta, dan setiap saat secara transparan.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenInfoRequestModal}
              className="px-4 py-2.5 bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5 text-amber-300" />
              <span>Permohonan Informasi Online</span>
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-[#003366] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative sm:w-64">
            <input
              type="text"
              placeholder="Cari judul dokumen..."
              value={searchDoc}
              onChange={(e) => setSearchDoc(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 text-xs rounded-lg border border-slate-200 focus:border-[#003366] focus:outline-hidden"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Document list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-5 rounded-xl border border-slate-200/90 hover:border-slate-300 bg-slate-50/50 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                  <span className="font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                    {doc.category}
                  </span>
                  <span>{doc.date}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                  {doc.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {doc.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-mono">
                  {doc.format} · {doc.size}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onViewDoc(doc.title)}
                    className="px-3 py-1 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>Lihat Dokumen</span>
                  </button>

                  <button
                    onClick={() => onViewDoc(doc.title)}
                    className="px-3 py-1 bg-[#003366] hover:bg-[#002244] text-white font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-300" />
                    <span>Unduh</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
