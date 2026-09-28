/**
 * Portal Resmi Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS)
 * Direktorat Jenderal Minyak dan Gas Bumi
 * Kementerian Energi dan Sumber Daya Mineral Republik Indonesia
 */

import React, { useState } from 'react';
import { HeaderTopBar } from './components/HeaderTopBar';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { QuickServicesBar } from './components/QuickServicesBar';
import { PerformanceStats } from './components/PerformanceStats';
import { ServicesSection } from './components/ServicesSection';
import { LhuVerificationTool } from './components/LhuVerificationTool';
import { TarifCalculator } from './components/TarifCalculator';
import { LaboratoriesSection } from './components/LaboratoriesSection';
import { CcusHighlightSection } from './components/CcusHighlightSection';
import { NewsSection } from './components/NewsSection';
import { PpidSection } from './components/PpidSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  ProfilModal,
  SilabModal,
  SearchModal,
  ArticleModal,
  DocumentModal
} from './components/Modals';
import { LoginModal, UserSession } from './components/LoginModal';
import { ServiceItem, NewsArticle } from './data/lemigasData';

export default function App() {
  const [lang, setLang] = useState<'id' | 'en'>('id');

  // User auth session state with persistence
  const [currentUser, setCurrentUser] = useState<UserSession | null>(() => {
    try {
      const saved = localStorage.getItem('lemigas_active_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [authInitialMode, setAuthInitialMode] = useState<'login' | 'register' | 'forgot'>('login');

  // Modal states
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [profilInitialTab, setProfilInitialTab] = useState('sejarah');

  const [isSilabOpen, setIsSilabOpen] = useState(false);
  const [selectedServiceForSilab, setSelectedServiceForSilab] = useState<ServiceItem | null>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedDocTitle, setSelectedDocTitle] = useState<string | null>(null);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProfil = (tab: string = 'sejarah') => {
    setProfilInitialTab(tab);
    setIsProfilOpen(true);
  };

  const handleOpenSilab = (service?: ServiceItem) => {
    setSelectedServiceForSilab(service || null);
    setIsSilabOpen(true);
  };

  const handleToggleLang = () => {
    setLang(prev => (prev === 'id' ? 'en' : 'id'));
  };

  const handleOpenLogin = (mode: 'login' | 'register' = 'login') => {
    setAuthInitialMode(mode);
    setIsLoginOpen(true);
  };

  const handleOpenRegister = () => {
    setAuthInitialMode('register');
    setIsLoginOpen(true);
  };

  const handleLoginSuccess = (user: UserSession) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('lemigas_active_session', JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('lemigas_active_session');
    } catch (e) {
      console.error(e);
    }
    setIsLoginOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      {/* 1. Official Government Header Top Bar */}
      <HeaderTopBar
        currentLang={lang}
        currentUser={currentUser}
        onToggleLang={handleToggleLang}
        onOpenHelp={() => handleOpenProfil('tupoksi')}
        onOpenLogin={() => handleOpenLogin('login')}
        onOpenRegister={handleOpenRegister}
      />

      {/* 2. Main Navigation Bar with Ministry Brand */}
      <Navbar
        currentUser={currentUser}
        onOpenLogin={() => handleOpenLogin('login')}
        onOpenRegister={handleOpenRegister}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSilabModal={() => handleOpenSilab()}
        onNavigateSection={handleNavigateSection}
        onOpenProfilModal={handleOpenProfil}
      />

      {/* 3. Hero Carousel Banner with Real Lab & Energy Visuals */}
      <main className="grow">
        <HeroSlider
          onNavigateSection={handleNavigateSection}
          onOpenSilabModal={() => handleOpenSilab()}
        />

        {/* 4. Quick Services Shortcuts (SILAB, Verifikasi LHU, Tarif, PUP, PPID) */}
        <QuickServicesBar
          onOpenSilab={() => handleOpenSilab()}
          onNavigateSection={handleNavigateSection}
          onOpenPpidDoc={() => handleNavigateSection('ppid')}
        />

        {/* 5. Key Statistics & Credentials */}
        <PerformanceStats />

        {/* 6. Core Testing Services Catalog with Parameter Details & Prices */}
        <ServicesSection
          onSelectServiceForOrder={(service) => handleOpenSilab(service)}
        />

        {/* 7. Interactive LHU Verification Tool (Anti-Counterfeiting System) */}
        <LhuVerificationTool />

        {/* 8. Interactive Tarif Calculator (BLU LEMIGAS PMK Rates) */}
        <TarifCalculator
          onOpenSilabModal={() => handleOpenSilab()}
        />

        {/* 9. 47+ Specialized Laboratories Showcase */}
        <LaboratoriesSection />

        {/* 10. CCUS (Carbon Capture & Storage) & Energy Transition Focus */}
        <CcusHighlightSection
          onOpenConsultation={() => handleNavigateSection('kontak')}
        />

        {/* 11. Media Center, News & Press Releases */}
        <NewsSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 12. PPID & Public Information Documents */}
        <PpidSection
          onOpenInfoRequestModal={() => handleOpenSilab()}
          onViewDoc={(title) => setSelectedDocTitle(title)}
        />

        {/* 13. Contact & Office Location in Cipulir Jakarta Selatan */}
        <ContactSection />
      </main>

      {/* 14. Official Government Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenProfilModal={handleOpenProfil}
        onOpenSilabModal={() => handleOpenSilab()}
      />

      {/* Floating Action Button (Quick Contact / Scroll To Top) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        <button
          onClick={() => handleOpenSilab()}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-amber-400 group"
          title="Buka Permohonan Pengujian SILAB Online"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="hidden sm:inline">SILAB Online</span>
          <span className="sm:hidden">SILAB</span>
        </button>
      </div>

      {/* Modals */}
      <ProfilModal
        isOpen={isProfilOpen}
        initialTab={profilInitialTab}
        onClose={() => setIsProfilOpen(false)}
      />

      <SilabModal
        isOpen={isSilabOpen}
        selectedService={selectedServiceForSilab}
        onClose={() => setIsSilabOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateSection={handleNavigateSection}
        onSelectArticle={(article) => setSelectedArticle(article)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <DocumentModal
        documentTitle={selectedDocTitle}
        onClose={() => setSelectedDocTitle(null)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        user={currentUser}
        initialMode={authInitialMode}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
        onNavigateSection={handleNavigateSection}
        onOpenSilabModal={() => handleOpenSilab()}
      />
    </div>
  );
}
