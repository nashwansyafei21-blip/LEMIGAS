import React, { useState } from 'react';
import { NEWS_DATA, NewsArticle } from '../data/lemigasData';
import { Newspaper, Calendar, User, ArrowRight, Tag } from 'lucide-react';

interface NewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectArticle }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'Semua Publikasi' },
    { id: 'Berita', label: 'Berita Terkini' },
    { id: 'Siaran Pers', label: 'Siaran Pers ESDM' },
    { id: 'Pengumuman', label: 'Pengumuman & Agenda' },
  ];

  const filteredNews = NEWS_DATA.filter(item =>
    activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="berita" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-700 uppercase mb-2">
              <Newspaper className="w-4 h-4 text-amber-600" />
              <span>MEDIA & INFORMASI RESMI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight text-balance">
              Berita, Siaran Pers & Aktivitas Balai LEMIGAS
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mt-1 text-balance">
              Informasi terkini mengenai pengawasan mutu bahan bakar nasional, pengujian laboratorium, kemajuan riset energi, dan pengumuman uji profisiensi.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#003366] text-white shadow-2xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-[#003366]/40 transition-all flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#003366]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                    {article.category}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{article.date}</span>
                    </span>
                    <span>·</span>
                    <span className="truncate">{article.author}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#003366] transition-colors leading-snug line-clamp-2 mb-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs font-semibold text-[#003366]">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
