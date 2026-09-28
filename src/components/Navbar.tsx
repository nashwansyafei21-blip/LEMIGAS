import React, { useState } from 'react';
import {
  Menu,
  X,
  Search,
  ChevronDown,
  FileCheck,
  Calculator,
  FlaskConical,
  BookOpen,
  Info,
  Newspaper,
  PhoneCall,
  ExternalLink,
  User,
  LogIn,
  UserPlus
} from 'lucide-react';
import { EsdmLogo } from './EsdmLogo';
import { UserSession } from './LoginModal';

interface NavbarProps {
  currentUser: UserSession | null;
  onOpenLogin: () => void;
  onOpenRegister?: () => void;
  onOpenSearch: () => void;
  onOpenSilabModal: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenProfilModal: (tab?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  onOpenLogin,
  onOpenRegister,
  onOpenSearch,
  onOpenSilabModal,
  onNavigateSection,
  onOpenProfilModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  const handleMobileNav = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand zone */}
          <button
            onClick={() => onNavigateSection('hero')}
            className="flex items-center text-left focus:outline-hidden group cursor-pointer"
          >
            <EsdmLogo />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 text-[13px] font-semibold text-slate-700">
            <button
              onClick={() => onNavigateSection('hero')}
              className="px-3 py-2 rounded-md hover:text-[#003366] hover:bg-slate-100/80 transition-colors"
            >
              Beranda
            </button>

            {/* Dropdown: Profil */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('profil')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => onOpenProfilModal('sejarah')}
                className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-[#003366] hover:bg-slate-100/80 transition-colors"
              >
                <span>Profil</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
              </button>

              {activeDropdown === 'profil' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => {
                      onOpenProfilModal('sejarah');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-[#003366] transition-colors"
                  >
                    Sejarah LEMIGAS (Sejak 1965)
                  </button>
                  <button
                    onClick={() => {
                      onOpenProfilModal('visimisi');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-[#003366] transition-colors"
                  >
                    Visi, Misi & Core Values BerAKHLAK
                  </button>
                  <button
                    onClick={() => {
                      onOpenProfilModal('struktur');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-[#003366] transition-colors"
                  >
                    Struktur Organisasi & Pimpinan
                  </button>
                  <button
                    onClick={() => {
                      onOpenProfilModal('tupoksi');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-[#003366] transition-colors"
                  >
                    Tugas & Fungsi Balai Besar
                  </button>
                  <button
                    onClick={() => {
                      onOpenProfilModal('akreditasi');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-[#003366] transition-colors"
                  >
                    Akreditasi KAN & Sertifikasi Mutu
                  </button>
                </div>
              )}
            </div>

            {/* Dropdown: Layanan Pengujian */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('layanan')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => onNavigateSection('layanan')}
                className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-[#003366] hover:bg-slate-100/80 transition-colors"
              >
                <span>Layanan Pengujian</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'layanan' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => {
                      onNavigateSection('layanan');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-[#003366] transition-colors"
                  >
                    Pengujian Mutu BBM & Pelumas (NPT)
                  </button>
                  <button
                    onClick={() => {
                      onNavigateSection('layanan');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-[#003366] transition-colors"
                  >
                    Evaluasi Batuan Inti (Core Analysis)
                  </button>
                  <button
                    onClick={() => {
                      onNavigateSection('layanan');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-[#003366] transition-colors"
                  >
                    Analisis Gas Bumi, LPG & LNG
                  </button>
                  <button
                    onClick={() => {
                      onNavigateSection('layanan');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-[#003366] transition-colors"
                  >
                    Uji Biodiesel B40 & Emisi EURO 4/5
                  </button>
                  <button
                    onClick={() => {
                      onNavigateSection('ccus');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-[#003366] transition-colors"
                  >
                    Kajian CCUS & Transisi Energi
                  </button>
                  <button
                    onClick={() => {
                      onNavigateSection('laboratorium');
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-[#003366] transition-colors"
                  >
                    Kalibrasi & Metrologi Alat Uji
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigateSection('laboratorium')}
              className="px-3 py-2 rounded-md hover:text-[#003366] hover:bg-slate-100/80 transition-colors"
            >
              Fasilitas Lab
            </button>

            <button
              onClick={() => onNavigateSection('verifikasi-lhu')}
              className="px-3 py-2 rounded-md hover:text-[#003366] hover:bg-slate-100/80 transition-colors"
            >
              Verifikasi LHU
            </button>

            <button
              onClick={() => onNavigateSection('tarif')}
              className="px-3 py-2 rounded-md hover:text-[#003366] hover:bg-slate-100/80 transition-colors"
            >
              Simulasi Tarif
            </button>

            <button
              onClick={() => onNavigateSection('berita')}
              className="px-3 py-2 rounded-md hover:text-[#003366] hover:bg-slate-100/80 transition-colors"
            >
              Berita
            </button>

            <button
              onClick={() => onNavigateSection('ppid')}
              className="px-3 py-2 rounded-md hover:text-[#003366] hover:bg-slate-100/80 transition-colors"
            >
              PPID
            </button>

            <button
              onClick={() => onNavigateSection('kontak')}
              className="px-3 py-2 rounded-md hover:text-[#003366] hover:bg-slate-100/80 transition-colors"
            >
              Kontak
            </button>
          </nav>

          {/* Action Zone: Search, Login & SILAB Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-[#003366] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Cari di portal LEMIGAS"
              title="Cari pengujian, laboratorium, atau dokumen publik"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Login / Profile button in Navbar */}
            {currentUser ? (
              <button
                onClick={onOpenLogin}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg border bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100 transition-all cursor-pointer"
                title={`Akun Terverifikasi: ${currentUser.name} (${currentUser.company})`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="max-w-[110px] truncate">{currentUser.name.split(' ')[0]}</span>
              </button>
            ) : (
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  onClick={onOpenRegister || onOpenLogin}
                  className="inline-flex items-center gap-1 px-2.5 py-2 text-xs font-bold rounded-lg border border-amber-400/80 bg-amber-50/80 text-amber-900 hover:bg-amber-400 hover:text-slate-950 transition-all cursor-pointer"
                  title="Pendaftaran Akun Baru Badan Usaha / KKKS"
                >
                  <UserPlus className="w-3.5 h-3.5 text-amber-600" />
                  <span>Daftar Akun</span>
                </button>
                <button
                  onClick={onOpenLogin}
                  className="inline-flex items-center gap-1 px-3 py-2 text-xs font-bold rounded-lg border border-slate-300 bg-white text-slate-700 hover:text-[#003366] hover:border-[#003366] hover:bg-slate-50 transition-all cursor-pointer"
                  title="Login ke Akun Portal SILAB"
                >
                  <LogIn className="w-3.5 h-3.5 text-amber-500" />
                  <span>Login SSO</span>
                </button>
              </div>
            )}

            <button
              onClick={onOpenSilabModal}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#003366] hover:bg-[#002244] active:scale-98 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <FlaskConical className="w-4 h-4 text-amber-300" />
              <span>SILAB Online</span>
            </button>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Buka navigasi mobile"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-2">
            <div className="pb-3 border-b border-slate-100 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onOpenSilabModal();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-white bg-[#003366] hover:bg-[#002244] active:scale-98 rounded-xl shadow-sm transition-all"
                >
                  <FlaskConical className="w-4 h-4 text-amber-300" />
                  <span>SILAB Online</span>
                </button>

                <button
                  onClick={() => {
                    onOpenLogin();
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold rounded-xl border transition-all ${
                    currentUser
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                      : 'bg-amber-400 hover:bg-amber-300 text-slate-950 border-amber-400'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>{currentUser ? 'Akun Saya' : 'Login SSO'}</span>
                </button>
              </div>

              {!currentUser && (
                <button
                  onClick={() => {
                    if (onOpenRegister) onOpenRegister();
                    else onOpenLogin();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 transition-colors"
                >
                  <UserPlus className="w-4 h-4 text-amber-600" />
                  <span>Daftar Akun Baru SILAB (Badan Usaha / KKKS)</span>
                </button>
              )}
            </div>

            <button
              onClick={() => handleMobileNav('hero')}
              className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003366] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Beranda</span>
            </button>

            <div>
              <button
                onClick={() => toggleDropdown('m-profil')}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <span>Profil LEMIGAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'm-profil' ? 'rotate-180 text-[#003366]' : 'text-slate-400'}`} />
              </button>
              {activeDropdown === 'm-profil' && (
                <div className="pl-4 py-1.5 space-y-1 bg-slate-50/80 rounded-xl mt-1 border border-slate-100">
                  <button
                    onClick={() => {
                      onOpenProfilModal('sejarah');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#003366] hover:bg-white rounded-lg transition-colors"
                  >
                    Sejarah LEMIGAS (Sejak 1965)
                  </button>
                  <button
                    onClick={() => {
                      onOpenProfilModal('visimisi');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#003366] hover:bg-white rounded-lg transition-colors"
                  >
                    Visi, Misi & Budaya BerAKHLAK
                  </button>
                  <button
                    onClick={() => {
                      onOpenProfilModal('struktur');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#003366] hover:bg-white rounded-lg transition-colors"
                  >
                    Struktur Organisasi & Pimpinan
                  </button>
                  <button
                    onClick={() => {
                      onOpenProfilModal('tupoksi');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#003366] hover:bg-white rounded-lg transition-colors"
                  >
                    Tugas & Fungsi Balai Besar
                  </button>
                  <button
                    onClick={() => {
                      onOpenProfilModal('akreditasi');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#003366] hover:bg-white rounded-lg transition-colors"
                  >
                    Akreditasi KAN LP-001 & LK-001
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleMobileNav('layanan')}
              className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003366] rounded-lg transition-colors"
            >
              Layanan Pengujian Laboratorium
            </button>

            <button
              onClick={() => handleMobileNav('laboratorium')}
              className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003366] rounded-lg transition-colors"
            >
              47+ Fasilitas Lab Khusus
            </button>

            <button
              onClick={() => handleMobileNav('verifikasi-lhu')}
              className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003366] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Cek & Verifikasi Keaslian LHU</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Resmi</span>
            </button>

            <button
              onClick={() => handleMobileNav('tarif')}
              className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003366] rounded-lg transition-colors"
            >
              Simulasi Tarif Pengujian BLU
            </button>

            <button
              onClick={() => handleMobileNav('ccus')}
              className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003366] rounded-lg transition-colors"
            >
              Pusat Riset CCS & CCUS
            </button>

            <button
              onClick={() => handleMobileNav('berita')}
              className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003366] rounded-lg transition-colors"
            >
              Berita & Siaran Pers
            </button>

            <button
              onClick={() => handleMobileNav('ppid')}
              className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003366] rounded-lg transition-colors"
            >
              Layanan PPID ESDM & Transparansi
            </button>

            <button
              onClick={() => handleMobileNav('kontak')}
              className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003366] rounded-lg transition-colors"
            >
              Kontak & Lokasi Kantor Cipulir
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
