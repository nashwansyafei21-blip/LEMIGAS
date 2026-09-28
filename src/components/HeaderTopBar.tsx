import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, Globe, HelpCircle, User, LogIn, UserPlus } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/lemigasData';
import { UserSession } from './LoginModal';

interface HeaderTopBarProps {
  currentLang: 'id' | 'en';
  currentUser: UserSession | null;
  onToggleLang: () => void;
  onOpenHelp: () => void;
  onOpenLogin: () => void;
  onOpenRegister?: () => void;
}

export const HeaderTopBar: React.FC<HeaderTopBarProps> = ({
  currentLang,
  currentUser,
  onToggleLang,
  onOpenHelp,
  onOpenLogin,
  onOpenRegister
}) => {
  return (
    <div className="bg-[#0b2848] text-slate-200 text-xs border-b border-slate-700/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-2 gap-2">
          {/* Left zone: Contact & BLU badge */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-amber-300 font-semibold tracking-wide">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{INSTITUTION_INFO.status}</span>
              <span className="text-slate-400 font-normal">Kementerian ESDM</span>
            </div>

            <div className="hidden md:flex items-center gap-4 text-slate-300 border-l border-slate-700 pl-4">
              <a
                href="tel:136"
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
                title="Call Center Resmi Kementerian ESDM"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold text-white">Call Center ESDM: 136</span>
              </a>

              <a
                href={`mailto:${INSTITUTION_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{INSTITUTION_INFO.email}</span>
              </a>

              <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Sen - Jum 07:30 - 16:00 WIB</span>
              </div>
            </div>
          </div>

          {/* Right zone: KAN, User Login & Quick controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium">KAN LP-001-IDN & LK-001-IDN</span>
            </div>

            {/* Auth Buttons in Header Top bar */}
            {currentUser ? (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold transition-all cursor-pointer border bg-emerald-950/80 border-emerald-500/60 text-emerald-300 hover:bg-emerald-900/80"
                title={`Masuk sebagai: ${currentUser.name} (${currentUser.company})`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="max-w-[120px] truncate">{currentUser.name}</span>
              </button>
            ) : (
              <div className="flex items-center gap-1">
                <button
                  onClick={onOpenRegister || onOpenLogin}
                  className="flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-transparent"
                  title="Pendaftaran Akun Baru SILAB"
                >
                  <UserPlus className="w-3 h-3 text-amber-400" />
                  <span>Daftar</span>
                </button>
                <button
                  onClick={onOpenLogin}
                  className="flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors cursor-pointer shadow-2xs"
                  title="Login ke Portal SILAB LEMIGAS"
                >
                  <LogIn className="w-3 h-3 text-slate-950" />
                  <span>Login</span>
                </button>
              </div>
            )}

            <button
              onClick={onOpenHelp}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors px-1.5 py-0.5"
              title="Pusat Bantuan & Panduan Layanan"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Bantuan</span>
            </button>

            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-2 py-0.5 rounded text-[11px] font-medium border border-slate-600 transition-colors cursor-pointer"
              title="Ganti Bahasa / Switch Language"
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span>{currentLang === 'id' ? 'ID' : 'EN'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
