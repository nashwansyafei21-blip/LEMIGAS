import React from 'react';

export const EsdmLogo: React.FC<{ className?: string }> = ({ className = 'h-11' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* ESDM Official Insignia vector */}
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 shrink-0 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo Kementerian ESDM"
      >
        <circle cx="50" cy="50" r="48" fill="#003366" stroke="#F59E0B" strokeWidth="2.5" />
        {/* Radiating energy rays */}
        <path
          d="M50 14L54 28H46L50 14Z"
          fill="#F59E0B"
        />
        <path
          d="M74 24L65 35L60 30L74 24Z"
          fill="#FBBF24"
        />
        <path
          d="M26 24L40 30L35 35L26 24Z"
          fill="#FBBF24"
        />
        {/* Core oil flame & mineral crystal */}
        <path
          d="M50 26C50 26 36 44 36 58C36 67.5 42 75 50 75C58 75 64 67.5 64 58C64 44 50 26 50 26Z"
          fill="url(#esdmFlameGrad)"
        />
        <path
          d="M50 38C50 38 41 50 41 60C41 66 45 71 50 71C55 71 59 66 59 60C59 50 50 38 50 38Z"
          fill="#FDE68A"
        />
        {/* Geological stratum wave */}
        <path
          d="M28 72C35 68 43 76 50 72C57 68 65 76 72 72"
          stroke="#38BDF8"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="esdmFlameGrad" x1="50" y1="26" x2="50" y2="75" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="0.6" stopColor="#D97706" />
            <stop offset="1" stopColor="#B45309" />
          </linearGradient>
        </defs>
      </svg>

      {/* LEMIGAS Blue Droplet & Gear Vector */}
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 shrink-0 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo Balai LEMIGAS"
      >
        <circle cx="50" cy="50" r="48" fill="#F8FAFC" stroke="#003366" strokeWidth="2.5" />
        {/* Stylized petroleum teardrop in deep royal blue */}
        <path
          d="M50 16C50 16 26 48 26 64C26 77.25 36.75 88 50 88C63.25 88 74 77.25 74 64C74 48 50 16 50 16Z"
          fill="url(#lemigasBlueGrad)"
        />
        {/* Inner flame and core testing ring */}
        <ellipse cx="50" cy="62" rx="14" ry="18" fill="#38BDF8" opacity="0.85" />
        <ellipse cx="50" cy="64" rx="8" ry="10" fill="#FFFFFF" />
        {/* Orbital trajectory representing testing & research */}
        <path
          d="M22 60C30 45 70 45 78 60C70 75 30 75 22 60Z"
          stroke="#F59E0B"
          strokeWidth="3.5"
          strokeDasharray="2 3"
        />
        <circle cx="72" cy="52" r="4" fill="#F59E0B" />
        <defs>
          <linearGradient id="lemigasBlueGrad" x1="50" y1="16" x2="50" y2="88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284C7" />
            <stop offset="0.5" stopColor="#0369A1" />
            <stop offset="1" stopColor="#003366" />
          </linearGradient>
        </defs>
      </svg>

      {/* Official Text Hierarchy */}
      <div className="flex flex-col min-w-0">
        <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-wider uppercase text-amber-700 leading-tight truncate">
          KEMENTERIAN ENERGI DAN SUMBER DAYA MINERAL
        </span>
        <span className="text-[10px] sm:text-xs font-semibold text-slate-600 leading-tight truncate">
          Direktorat Jenderal Minyak dan Gas Bumi
        </span>
        <span className="text-xs sm:text-sm md:text-base lg:text-lg font-extrabold tracking-tight text-[#003366] leading-snug sm:leading-none mt-0.5">
          BALAI BESAR PENGUJIAN MINYAK DAN GAS BUMI
        </span>
      </div>
    </div>
  );
};
