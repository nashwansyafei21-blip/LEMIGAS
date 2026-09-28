import React from 'react';
import { INSTITUTION_INFO } from '../data/lemigasData';
import { EsdmLogo } from './EsdmLogo';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Award,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenProfilModal: (tab?: string) => void;
  onOpenSilabModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenProfilModal,
  onOpenSilabModal
}) => {
  return (
    <footer className="bg-[#071d33] text-slate-300 text-xs border-t border-slate-800">
      {/* Top Footer Banner */}
      <div className="bg-[#05172a] border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-400 text-slate-950 font-bold rounded-xl text-lg shrink-0">
              136
            </div>
            <div>
              <div className="text-white font-bold text-sm">
                Hubungi Call Center Kementerian ESDM 136
              </div>
              <div className="text-slate-400 text-xs">
                Layanan pengaduan, informasi umum energi, serta konfirmasi tarif & perizinan resmi 24 jam.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSilabModal}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer"
            >
              SILAB Online
            </button>
            <button
              onClick={() => onNavigateSection('verifikasi-lhu')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              Cek Keaslian LHU
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/10 p-3 rounded-xl border border-white/10 inline-block">
              <span className="font-extrabold text-white text-sm tracking-wide block">
                BALAI BESAR PENGUJIAN MIGAS LEMIGAS
              </span>
              <span className="text-amber-400 text-[11px] font-semibold">
                Direktorat Jenderal Minyak dan Gas Bumi - Kementerian ESDM
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS) merupakan institusi pemerintah pengelola Badan Layanan Umum (BLU) yang menyelenggarakan pelayanan jasa pengujian laboratorium, kalibrasi, inspeksi teknis, dan sertifikasi migas terpercaya sejak 11 Juni 1965.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  Jl. Ciledug Raya Kav. 109, Cipulir, Kebayoran Lama, Jakarta Selatan 12230
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[11px]">Telp: (021) 7394422, (021) 7393958</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[11px]">info.lemigas@esdm.go.id</span>
              </div>
            </div>
          </div>

          {/* Col 2: Profil & Layanan */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-700 pb-2">
              Layanan & Profil
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onOpenProfilModal('sejarah')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3" />
                  <span>Sejarah Singkat (1965)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenProfilModal('visimisi')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3" />
                  <span>Visi, Misi & Budaya BerAKHLAK</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenProfilModal('struktur')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3" />
                  <span>Struktur Organisasi & Pejabat</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('layanan')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3" />
                  <span>Pengujian BBM & Pelumas (NPT)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('laboratorium')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3" />
                  <span>Laboratorium Core & PVT Reservoir</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('tarif')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3" />
                  <span>Kalkulator Tarif BLU Resmi</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal & Regulasi Terkait */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-700 pb-2">
              Tautan Eksternal
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a
                  href="https://www.esdm.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>Kementerian ESDM</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://migas.esdm.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>Ditjen Migas</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.bphmigas.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>BPH Migas</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.skkmigas.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>SKK Migas</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://kan.or.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>Komite Akreditasi (KAN)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.lapor.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>SP4N LAPOR!</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Akreditasi & Sertifikasi */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-700 pb-2">
              Standar & Akreditasi
            </h4>
            <div className="space-y-2 text-xs">
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <span className="font-bold text-amber-300 block">KAN LP-001-IDN</span>
                <span className="text-[11px] text-slate-400">Laboratorium Pengujian ISO/IEC 17025</span>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <span className="font-bold text-amber-300 block">KAN LK-001-IDN</span>
                <span className="text-[11px] text-slate-400">Laboratorium Kalibrasi ISO/IEC 17025</span>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <span className="font-bold text-amber-300 block">KAN PUP-002-IDN</span>
                <span className="text-[11px] text-slate-400">Penyelenggara Uji Profisiensi ISO/IEC 17043</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="bg-[#030e1a] border-t border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-xs gap-3">
          <div>
            © 2026 Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS) · Kementerian Energi dan Sumber Daya Mineral Republik Indonesia.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={() => onNavigateSection('ppid')} className="hover:text-white transition-colors">
              Maklumat Pelayanan
            </button>
            <span>·</span>
            <button onClick={() => onNavigateSection('ppid')} className="hover:text-white transition-colors">
              Zona Integritas WBK/WBBM
            </button>
            <span>·</span>
            <button onClick={() => onNavigateSection('kontak')} className="hover:text-white transition-colors">
              Kebijakan Privasi
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
