import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  Mail,
  User,
  Building,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  LogIn,
  KeyRound,
  FileCheck2,
  Clock,
  LogOut,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  FlaskConical,
  Award,
  UserPlus,
  Phone,
  FileText,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CreditCard,
  QrCode,
  Download,
  Edit3,
  Save,
  Check,
  Briefcase,
  MapPin,
  FileSpreadsheet,
  RefreshCw,
  Sparkles,
  Info
} from 'lucide-react';

export interface UserSession {
  name: string;
  email: string;
  role: 'Pelanggan Migas' | 'Petugas Laboratorium' | 'KKKS / Industri' | 'Peneliti / Akademisi';
  company: string;
  avatarText: string;
  activeOrders: number;
  phone?: string;
  position?: string;
  businessType?: string;
  registrationId?: string;
  npwp?: string;
  nib?: string;
  address?: string;
  joinedDate?: string;
}

interface LoginModalProps {
  isOpen: boolean;
  user: UserSession | null;
  initialMode?: 'login' | 'register' | 'forgot';
  onClose: () => void;
  onLoginSuccess: (user: UserSession) => void;
  onLogout: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenSilabModal?: () => void;
}

// Default seed registered accounts for simulation
const DEMO_PRESETS: UserSession[] = [
  {
    name: 'Ir. Hendra Wijaya, M.Sc.',
    email: 'hendra.wijaya@pertamina.com',
    role: 'KKKS / Industri',
    company: 'PT Pertamina Patra Niaga (Persero)',
    avatarText: 'HW',
    activeOrders: 3,
    phone: '0812-8899-2311',
    position: 'VP Supply & Distribution QC',
    businessType: 'Badan Usaha Niaga BBM (Hilir Migas)',
    registrationId: 'LMG-2024-0081',
    npwp: '01.000.013.1-093.000',
    nib: '9120001239841',
    address: 'Jl. Medan Merdeka Timur No. 1A, Gambir, Jakarta Pusat 10110',
    joinedDate: '15 Maret 2024'
  },
  {
    name: 'Dr. Raditya Pratama, S.Si.',
    email: 'r.pratama@esdm.go.id',
    role: 'Petugas Laboratorium',
    company: 'Balai Besar Pengujian Minyak dan Gas Bumi LEMIGAS',
    avatarText: 'RP',
    activeOrders: 8,
    phone: '0813-1122-3344',
    position: 'Koordinator Manajer Teknis Pengujian Hilir',
    businessType: 'Internal Aparatur Sipil Negara (ASN ESDM)',
    registrationId: 'LEMIGAS-ASN-19850412',
    npwp: '18.992.831.2-014.000',
    address: 'Jl. Ciledug Raya Kav. 109, Cipulir, Kebayoran Lama, Jakarta Selatan 12230',
    joinedDate: '01 Februari 2021'
  },
  {
    name: 'Sarah Rahmawati, S.T., M.Eng.',
    email: 'sarah.rahmawati@medcoenergi.com',
    role: 'Pelanggan Migas',
    company: 'PT Medco E&P Indonesia (KKKS)',
    avatarText: 'SR',
    activeOrders: 2,
    phone: '0811-9234-5678',
    position: 'Lead Petroleum & Reservoir Engineer',
    businessType: 'KKKS (Hulu Migas)',
    registrationId: 'LMG-2025-0419',
    npwp: '01.325.642.8-054.000',
    address: 'The Energy Building Lt. 28, SCBD Kav. 52-53, Jakarta Selatan 12190',
    joinedDate: '10 Januari 2025'
  },
  {
    name: 'Prof. Dr. Ir. Agus Prabowo, M.T.',
    email: 'agus.prabowo@itb.ac.id',
    role: 'Peneliti / Akademisi',
    company: 'Pusat Riset Energi Terbarukan & Biofuel ITB',
    avatarText: 'AP',
    activeOrders: 1,
    phone: '0818-0245-8822',
    position: 'Guru Besar Teknik Perminyakan',
    businessType: 'Perguruan Tinggi / Lembaga Riset',
    registrationId: 'LMG-2025-0992',
    npwp: '00.124.981.3-429.000',
    address: 'Jl. Ganesa No. 10, Coblong, Kota Bandung, Jawa Barat 40132',
    joinedDate: '05 September 2025'
  }
];

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  user,
  initialMode = 'login',
  onClose,
  onLoginSuccess,
  onLogout,
  onNavigateSection,
  onOpenSilabModal
}) => {
  // Mode: 'login' | 'register' | 'forgot'
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot'>(initialMode);

  // Sync mode when initialMode changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setAuthMode(initialMode);
      setErrorMsg('');
      setSuccessMsg('');
    }
  }, [isOpen, initialMode]);

  // Login form state
  const [tab, setTab] = useState<'pelanggan' | 'internal'>('pelanggan');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Register multi-step state
  const [regStep, setRegStep] = useState<1 | 2 | 3 | 4>(1); // 4 = success screen
  const [registeredResult, setRegisteredResult] = useState<UserSession | null>(null);
  const [regData, setRegData] = useState({
    fullName: '',
    position: 'Manager QC & Pengujian',
    companyName: '',
    businessType: 'KKKS (Kontraktor Kontrak Kerja Sama)',
    email: '',
    phone: '',
    nib: '',
    npwp: '',
    address: '',
    city: 'Jakarta Selatan',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  });
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Forgot password 3-step state
  const [forgotStep, setForgotStep] = useState<1 | 2 | 3 | 4>(1); // 1: email, 2: OTP, 3: new pass, 4: success
  const [forgotEmail, setForgotEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpTimer, setOtpTimer] = useState(60);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // Logged-in profile tab state: 'overview' | 'samples' | 'edit' | 'documents'
  const [profileTab, setProfileTab] = useState<'overview' | 'samples' | 'edit' | 'documents'>('overview');
  const [editFormData, setEditFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    position: user?.position || '',
    company: user?.company || '',
    address: user?.address || ''
  });
  const [isSavedSuccess, setIsSavedSuccess] = useState(false);

  // Keep editFormData synced with user
  useEffect(() => {
    if (user) {
      setEditFormData({
        name: user.name,
        phone: user.phone || '0812-3456-7890',
        position: user.position || 'Manajer Mutu & Operasional',
        company: user.company,
        address: user.address || 'Jakarta, Indonesia'
      });
    }
  }, [user]);

  // OTP Countdown timer
  useEffect(() => {
    let interval: any;
    if (authMode === 'forgot' && forgotStep === 2 && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [authMode, forgotStep, otpTimer]);

  if (!isOpen) return null;

  // Calculate password strength
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return { score: 0, text: 'Kosong', color: 'bg-slate-200' };
    let score = 0;
    if (pwd.length >= 6) score += 1;
    if (pwd.length >= 8) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    if (score <= 2) return { score: 1, text: 'Lemah', color: 'bg-rose-500', width: 'w-1/3' };
    if (score <= 4) return { score: 2, text: 'Sedang', color: 'bg-amber-500', width: 'w-2/3' };
    return { score: 3, text: 'Sangat Kuat', color: 'bg-emerald-500', width: 'w-full' };
  };

  // Helper to load registered users from localStorage
  const getRegisteredUsersFromStorage = (): UserSession[] => {
    try {
      const stored = localStorage.getItem('lemigas_registered_accounts');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error(e);
    }
    return [];
  };

  // Helper to save registered user to localStorage
  const saveRegisteredUserToStorage = (newUser: UserSession) => {
    try {
      const currentList = getRegisteredUsersFromStorage();
      const updatedList = [newUser, ...currentList.filter(u => u.email.toLowerCase() !== newUser.email.toLowerCase())];
      localStorage.setItem('lemigas_registered_accounts', JSON.stringify(updatedList));
    } catch (e) {
      console.error(e);
    }
  };

  // Preset demo accounts login handler
  const handleQuickLogin = (preset: UserSession) => {
    onLoginSuccess(preset);
    setErrorMsg('');
    setSuccessMsg('');
    onClose();
  };

  // Login submission
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Mohon isi alamat email dan kata sandi Anda.');
      return;
    }

    if (password.length < 4) {
      setErrorMsg('Kata sandi minimal 4 karakter.');
      return;
    }

    // Check in DEMO_PRESETS first
    const matchedPreset = DEMO_PRESETS.find(p => p.email.toLowerCase() === email.toLowerCase());
    if (matchedPreset) {
      onLoginSuccess(matchedPreset);
      onClose();
      return;
    }

    // Check in localStorage registered accounts
    const localUsers = getRegisteredUsersFromStorage();
    const matchedLocal = localUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (matchedLocal) {
      onLoginSuccess(matchedLocal);
      onClose();
      return;
    }

    // Otherwise create session dynamically
    const isInternal = email.toLowerCase().includes('esdm.go.id') || tab === 'internal';
    const loggedUser: UserSession = {
      name: isInternal ? 'Petugas Pengujian LEMIGAS' : email.split('@')[0].toUpperCase() + ' - PIC',
      email: email,
      role: isInternal ? 'Petugas Laboratorium' : 'Pelanggan Migas',
      company: isInternal ? 'Balai Besar Pengujian Minyak dan Gas Bumi LEMIGAS' : 'Mitra Industri Migas Terdaftar',
      avatarText: email.substring(0, 2).toUpperCase(),
      activeOrders: isInternal ? 5 : 2,
      phone: '0812-0000-1122',
      position: isInternal ? 'Analis Laboratorium Senior' : 'Penanggung Jawab Sampel',
      businessType: isInternal ? 'ASN Kementerian ESDM' : 'Badan Usaha Migas Terdaftar',
      registrationId: `LMG-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      npwp: '01.234.567.8-012.000',
      address: 'DKI Jakarta, Indonesia',
      joinedDate: 'Hari ini'
    };

    onLoginSuccess(loggedUser);
    setErrorMsg('');
    setSuccessMsg('');
    onClose();
  };

  // Step 1 to 2 in Register
  const handleNextToStep2 = () => {
    setErrorMsg('');
    if (!regData.fullName || !regData.email || !regData.phone) {
      setErrorMsg('Mohon lengkapi Nama PIC, Email, dan Nomor WhatsApp aktif.');
      return;
    }
    if (!regData.email.includes('@') || !regData.email.includes('.')) {
      setErrorMsg('Format email tidak valid.');
      return;
    }
    setRegStep(2);
  };

  // Step 2 to 3 in Register
  const handleNextToStep3 = () => {
    setErrorMsg('');
    if (!regData.companyName || !regData.address) {
      setErrorMsg('Mohon lengkapi Nama Badan Usaha dan Alamat Kantor.');
      return;
    }
    setRegStep(3);
  };

  // Register final submission
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!regData.password || !regData.confirmPassword) {
      setErrorMsg('Mohon lengkapi kata sandi dan konfirmasi kata sandi.');
      return;
    }

    if (regData.password.length < 6) {
      setErrorMsg('Kata sandi minimal 6 karakter.');
      return;
    }

    if (regData.password !== regData.confirmPassword) {
      setErrorMsg('Konfirmasi kata sandi tidak cocok.');
      return;
    }

    if (!regData.agreedToTerms) {
      setErrorMsg('Anda harus menyetujui Ketentuan Layanan Pengujian BLU LEMIGAS.');
      return;
    }

    // Generate registered account
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newRegisteredUser: UserSession = {
      name: regData.fullName,
      email: regData.email,
      role: regData.businessType.includes('KKKS') ? 'KKKS / Industri' : 'Pelanggan Migas',
      company: regData.companyName,
      avatarText: regData.fullName.substring(0, 2).toUpperCase(),
      activeOrders: 0,
      phone: regData.phone,
      position: regData.position,
      businessType: regData.businessType,
      registrationId: `LMG-2026-${randomNum}`,
      npwp: regData.npwp || '01.888.777.6-054.000',
      nib: regData.nib || '912000' + randomNum,
      address: `${regData.address}, ${regData.city}`,
      joinedDate: 'Hari ini'
    };

    // Save to localStorage
    saveRegisteredUserToStorage(newRegisteredUser);
    setRegisteredResult(newRegisteredUser);
    setRegStep(4); // Move to success step
  };

  // Finish register and login right away
  const handleCompleteAndLogin = () => {
    if (registeredResult) {
      onLoginSuccess(registeredResult);
      onClose();
    }
  };

  // Forgot password step 1 -> step 2
  const handleForgotStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) {
      setErrorMsg('Masukkan alamat email terdaftar Anda.');
      return;
    }
    setErrorMsg('');
    setForgotStep(2);
    setOtpTimer(60);
    setOtpCode('');
  };

  // Forgot password step 2 -> step 3
  const handleForgotStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode || otpCode.length < 4) {
      setErrorMsg('Masukkan 6 digit kode OTP verifikasi yang dikirimkan.');
      return;
    }
    setErrorMsg('');
    setForgotStep(3);
  };

  // Forgot password step 3 -> step 4 (Save new password)
  const handleForgotStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      setErrorMsg('Kata sandi baru minimal 6 karakter.');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setErrorMsg('Konfirmasi kata sandi tidak cocok.');
      return;
    }
    setErrorMsg('');
    setForgotStep(4);
  };

  // Handle edit profile submit
  const handleSaveProfileChanges = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const updatedUser: UserSession = {
      ...user,
      name: editFormData.name,
      phone: editFormData.phone,
      position: editFormData.position,
      company: editFormData.company,
      address: editFormData.address,
      avatarText: editFormData.name.substring(0, 2).toUpperCase()
    };
    onLoginSuccess(updatedUser);
    setIsSavedSuccess(true);
    setTimeout(() => setIsSavedSuccess(false), 2500);
  };

  const passwordStrength = getPasswordStrength(regData.password);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="bg-[#003366] text-white px-5 sm:px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-amber-400 text-slate-950 rounded-lg shrink-0">
              {user ? (
                <User className="w-4 h-4" />
              ) : authMode === 'register' ? (
                <UserPlus className="w-4 h-4" />
              ) : authMode === 'forgot' ? (
                <KeyRound className="w-4 h-4" />
              ) : (
                <Lock className="w-4 h-4" />
              )}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold truncate">
                {user
                  ? 'Dasbor Akun Pelanggan SILAB LEMIGAS'
                  : authMode === 'register'
                  ? 'Pendaftaran Akun Baru SILAB LEMIGAS'
                  : authMode === 'forgot'
                  ? 'Pemulihan Kata Sandi SILAB'
                  : 'Portal SSO SILAB LEMIGAS'}
              </h3>
              <span className="text-[11px] text-slate-300 block truncate">
                {user
                  ? `${user.company} · ID: ${user.registrationId || 'LMG-TERDAFTAR'}`
                  : authMode === 'register'
                  ? 'Registrasi Badan Usaha, KKKS & Pelanggan Laboratorium Migas'
                  : authMode === 'forgot'
                  ? 'Verifikasi Akun & Pembuatan Kata Sandi Baru'
                  : 'Sistem Layanan Mandiri Pelanggan Uji & Analis Laboratorium'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ml-2 shrink-0"
            aria-label="Tutup jendela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto grow p-5 sm:p-6">
          {/* ========================================================
              A. JIKA SUDAH LOGIN: TAMPILKAN DASBOR AKUN PELANGGAN LENGKAP
              ======================================================== */}
          {user ? (
            <div className="space-y-4">
              {/* Profile Tabs */}
              <div className="flex border-b border-slate-200 text-xs font-semibold gap-1 overflow-x-auto pb-1">
                <button
                  onClick={() => setProfileTab('overview')}
                  className={`px-3 py-2 rounded-t-lg transition-colors cursor-pointer shrink-0 ${
                    profileTab === 'overview'
                      ? 'bg-sky-50 text-[#003366] border-b-2 border-[#003366] font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ringkasan Akun
                </button>
                <button
                  onClick={() => setProfileTab('samples')}
                  className={`px-3 py-2 rounded-t-lg transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 ${
                    profileTab === 'samples'
                      ? 'bg-sky-50 text-[#003366] border-b-2 border-[#003366] font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>Riwayat Sampel</span>
                  <span className="px-1.5 py-0.2 bg-amber-400 text-slate-950 font-bold rounded-full text-[10px]">
                    {user.activeOrders}
                  </span>
                </button>
                <button
                  onClick={() => setProfileTab('edit')}
                  className={`px-3 py-2 rounded-t-lg transition-colors cursor-pointer shrink-0 ${
                    profileTab === 'edit'
                      ? 'bg-sky-50 text-[#003366] border-b-2 border-[#003366] font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Edit Data PIC
                </button>
                <button
                  onClick={() => setProfileTab('documents')}
                  className={`px-3 py-2 rounded-t-lg transition-colors cursor-pointer shrink-0 ${
                    profileTab === 'documents'
                      ? 'bg-sky-50 text-[#003366] border-b-2 border-[#003366] font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Format & Unduhan
                </button>
              </div>

              {/* TAB 1: OVERVIEW */}
              {profileTab === 'overview' && (
                <div className="space-y-4">
                  {/* Digital ID Card Preview */}
                  <div className="p-4 bg-linear-to-br from-[#003366] via-[#094782] to-[#0b2848] rounded-2xl text-white shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl pointer-events-none" />
                    
                    <div className="flex items-start justify-between mb-3 relative z-10">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-amber-300 block">
                          KEMENTERIAN ESDM · LEMIGAS
                        </span>
                        <h4 className="text-xs font-semibold text-slate-200">KARTU ANGGOTA SILAB ONLINE</h4>
                      </div>
                      <div className="flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
                        <ShieldCheck className="w-3 h-3 text-emerald-300" />
                        <span>KAN LP-001-IDN</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 relative z-10">
                      <div className="w-13 h-13 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg shadow-inner shrink-0">
                        {user.avatarText}
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-sm font-bold text-white truncate">{user.name}</h5>
                        <p className="text-[11px] text-amber-200 font-medium truncate">{user.position || user.role}</p>
                        <p className="text-xs text-slate-200 font-semibold truncate mt-0.5">{user.company}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] text-slate-300 relative z-10">
                      <div>
                        <span className="text-slate-400 block">ID Pelanggan:</span>
                        <span className="font-mono font-bold text-amber-300 text-xs">
                          {user.registrationId || 'LMG-2026-8812'}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Email PIC:</span>
                        <span className="font-medium text-white truncate block">{user.email}</span>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <span className="text-slate-400 block">Status Akun:</span>
                        <span className="font-bold text-emerald-400">Aktif & Terverifikasi</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 text-center">
                      <span className="text-slate-500 text-[10px] block">Sampel Aktif</span>
                      <span className="text-lg font-extrabold text-[#003366]">{user.activeOrders} Berkas</span>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
                      <span className="text-slate-500 text-[10px] block">LHU Terbit</span>
                      <span className="text-lg font-extrabold text-emerald-700">14 Dokumen</span>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 text-center">
                      <span className="text-slate-500 text-[10px] block">Poin Diskon BLU</span>
                      <span className="text-lg font-extrabold text-amber-700">Level Mitra</span>
                    </div>
                  </div>

                  {/* Fast Action Buttons */}
                  <div className="space-y-2 pt-1 text-xs">
                    <span className="font-bold text-slate-700 block text-[11px]">Tindakan Cepat Pengujian:</span>
                    
                    <button
                      onClick={() => {
                        onClose();
                        if (onOpenSilabModal) {
                          onOpenSilabModal();
                        } else {
                          onNavigateSection('tarif');
                        }
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-[#003366] hover:bg-[#002244] text-white font-bold transition-all shadow-xs cursor-pointer group"
                    >
                      <span className="flex items-center gap-2">
                        <FlaskConical className="w-4 h-4 text-amber-300" />
                        <span>Ajukan Permohonan Pengujian Sampel Baru (SILAB)</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => {
                        onNavigateSection('verifikasi-lhu');
                        onClose();
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <FileCheck2 className="w-4 h-4 text-emerald-600" />
                        <span>Verifikasi Keaslian Laporan Hasil Uji (LHU)</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>

                    <button
                      onClick={() => {
                        onNavigateSection('tarif');
                        onClose();
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-amber-600" />
                        <span>Simulasi Tarif PNBP Standar Peraturan Menteri Keuangan</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: RIWAYAT SAMPEL */}
              {profileTab === 'samples' && (
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">Daftar Sampel & Status Uji Laboratorium:</span>
                    <span className="text-[11px] text-slate-500">Update real-time SILAB</span>
                  </div>

                  {/* Sample Card 1 */}
                  <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 block">KODE: SLB-2026-B35-0812</span>
                        <h5 className="font-bold text-slate-900 text-xs">Minyak Solar Biofuel B35 (FAME Blending)</h5>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 shrink-0">
                        Sedang Diuji di Lab Hilir
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mb-2">
                      Parameter: Angka Setana (ASTM D613), Kandungan Sulfur (ASTM D4294), Densitas & Viskositas.
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-[10px] text-slate-500">
                      <span>Diserahkan: 20 Sept 2026</span>
                      <span className="font-semibold text-sky-700">Estimasi Selesai: 27 Sept 2026</span>
                    </div>
                  </div>

                  {/* Sample Card 2 */}
                  <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 block">KODE: SLB-2026-LUB-0442</span>
                        <h5 className="font-bold text-slate-900 text-xs">Pelumas Mesin Bensin SAE 10W-40 (NPT Pelumas)</h5>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 shrink-0">
                        Verifikasi Manajer Teknis
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mb-2">
                      Parameter: Titik Nyala COC (ASTM D92), TBN (ASTM D2896), Indeks Viskositas & Pengujian Busa.
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-[10px] text-slate-500">
                      <span>Diserahkan: 15 Sept 2026</span>
                      <span className="font-semibold text-purple-700">Tahap Tanda Tangan Digital LHU</span>
                    </div>
                  </div>

                  {/* Sample Card 3 */}
                  <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/50">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <span className="text-[10px] font-mono text-emerald-700 block">LHU: 1124/LHU/LMG/2026</span>
                        <h5 className="font-bold text-slate-900 text-xs">Analisis Gas Alam Komposisi Kromotografi (GC)</h5>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 shrink-0">
                        LHU Terbit (Siap Unduh)
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mb-2">
                      Pengujian selesai dan tervalidasi KAN LP-001-IDN. Sertifikat hasil uji digital tersedia.
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-emerald-200 text-[10px]">
                      <span className="text-slate-500">Diterbitkan: 12 Sept 2026</span>
                      <button
                        onClick={() => {
                          onNavigateSection('verifikasi-lhu');
                          onClose();
                        }}
                        className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded flex items-center gap-1 cursor-pointer"
                      >
                        <FileCheck2 className="w-3 h-3" />
                        <span>Unduh Dokumen LHU</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: EDIT PROFIL PIC */}
              {profileTab === 'edit' && (
                <form onSubmit={handleSaveProfileChanges} className="space-y-3 text-xs">
                  {isSavedSuccess && (
                    <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Data profil PIC & kontak berhasil diperbarui!</span>
                    </div>
                  )}

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Nama Lengkap PIC</label>
                    <input
                      type="text"
                      required
                      value={editFormData.name}
                      onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Jabatan PIC</label>
                      <input
                        type="text"
                        required
                        value={editFormData.position}
                        onChange={(e) => setEditFormData({ ...editFormData, position: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Nomor WhatsApp / HP</label>
                      <input
                        type="text"
                        required
                        value={editFormData.phone}
                        onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Nama Badan Usaha / Perusahaan</label>
                    <input
                      type="text"
                      required
                      value={editFormData.company}
                      onChange={(e) => setEditFormData({ ...editFormData, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Alamat Kantor / Domisili</label>
                    <textarea
                      rows={2}
                      value={editFormData.address}
                      onChange={(e) => setEditFormData({ ...editFormData, address: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#003366] hover:bg-[#002244] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Save className="w-4 h-4 text-amber-300" />
                    <span>Simpan Perubahan Profil</span>
                  </button>
                </form>
              )}

              {/* TAB 4: FORMAT & DOKUMEN */}
              {profileTab === 'documents' && (
                <div className="space-y-2.5 text-xs">
                  <span className="font-bold text-slate-800 block text-[11px]">
                    Template Dokumen Resmi Layanan Uji LEMIGAS:
                  </span>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-5 h-5 text-sky-600" />
                      <div>
                        <h5 className="font-bold text-slate-900">Format Surat Pengantar Sampel</h5>
                        <p className="text-[11px] text-slate-500">Format standar penyerahan sampel ke loket SILAB Cipulir</p>
                      </div>
                    </div>
                    <button
                      onClick={() => alert('Mengunduh Template Surat Pengantar Sampel LEMIGAS (Word / DOCX)...')}
                      className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg font-bold text-slate-700 flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>DOCX</span>
                    </button>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                      <div>
                        <h5 className="font-bold text-slate-900">Formulir Pendaftaran Uji NPT Pelumas</h5>
                        <p className="text-[11px] text-slate-500">Kelengkapan berkas izin Nomor Pelumas Terdaftar ESDM</p>
                      </div>
                    </div>
                    <button
                      onClick={() => alert('Mengunduh Formulir Uji NPT Pelumas (Excel / XLSX)...')}
                      className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg font-bold text-slate-700 flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>XLSX</span>
                    </button>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Award className="w-5 h-5 text-amber-600" />
                      <div>
                        <h5 className="font-bold text-slate-900">Sertifikat Akreditasi KAN LP-001-IDN</h5>
                        <p className="text-[11px] text-slate-500">Salinan resmi ruang lingkup ISO/IEC 17025 LEMIGAS</p>
                      </div>
                    </div>
                    <button
                      onClick={() => alert('Membuka Salinan Akreditasi KAN LP-001-IDN (PDF)...')}
                      className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg font-bold text-slate-700 flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Logout button */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={onLogout}
                  className="w-full py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer border border-rose-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar Akun (Logout)</span>
                </button>
              </div>
            </div>
          ) : authMode === 'register' ? (
            /* ========================================================
                B. REGISTRASI / DAFTAR AKUN BARU LENGKAP (MULTI-STEP)
                ======================================================== */
            <div className="space-y-4">
              {regStep !== 4 && (
                <>
                  {/* Top Switcher back to login */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs text-slate-600">
                      Sudah memiliki akun SILAB?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setAuthMode('login');
                          setErrorMsg('');
                        }}
                        className="text-[#003366] font-bold hover:underline cursor-pointer"
                      >
                        Masuk di sini
                      </button>
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      Langkah {regStep} dari 3
                    </span>
                  </div>

                  {/* Stepper indicator */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-semibold">
                    <div
                      className={`p-2 rounded-lg border transition-all ${
                        regStep >= 1
                          ? 'bg-sky-50 border-[#003366] text-[#003366] font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-400'
                      }`}
                    >
                      1. Identitas PIC
                    </div>
                    <div
                      className={`p-2 rounded-lg border transition-all ${
                        regStep >= 2
                          ? 'bg-sky-50 border-[#003366] text-[#003366] font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-400'
                      }`}
                    >
                      2. Badan Usaha
                    </div>
                    <div
                      className={`p-2 rounded-lg border transition-all ${
                        regStep >= 3
                          ? 'bg-sky-50 border-[#003366] text-[#003366] font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-400'
                      }`}
                    >
                      3. Sandi & Syarat
                    </div>
                  </div>
                </>
              )}

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* STEP 1: IDENTITAS PIC */}
              {regStep === 1 && (
                <div className="space-y-3.5 text-xs">
                  <div className="p-3 bg-sky-50/70 border border-sky-200 rounded-xl text-sky-900 leading-relaxed text-[11px]">
                    <strong>Informasi Pemohon:</strong> Daftarkan data Person-in-Charge (PIC) resmi yang berwenang mengajukan sampel dan menerima Laporan Hasil Uji (LHU).
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Nama Lengkap PIC / Pemohon <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Ir. Bambang Setiawan, M.T."
                        value={regData.fullName}
                        onChange={(e) => setRegData({ ...regData, fullName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Jabatan / Posisi di Perusahaan <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Manager QA/QC"
                          value={regData.position}
                          onChange={(e) => setRegData({ ...regData, position: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                        />
                        <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Nomor WhatsApp / Kontak Aktif <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          placeholder="0812xxxxxxxx"
                          value={regData.phone}
                          onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                        />
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Alamat Email Perusahaan Resmi <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="pic@perusahaan.co.id"
                        value={regData.email}
                        onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      Email ini akan menjadi identitas login SSO dan tujuan pengiriman notifikasi LHU.
                    </span>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleNextToStep2}
                      className="w-full py-2.5 bg-[#003366] hover:bg-[#002244] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Lanjut ke Langkah 2: Profil Badan Usaha</span>
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: PROFIL BADAN USAHA */}
              {regStep === 2 && (
                <div className="space-y-3.5 text-xs">
                  <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-amber-950 leading-relaxed text-[11px]">
                    <strong>Profil Legalitas Entitas:</strong> Digunakan untuk penerbitan Bukti Pemesanan Uji, Billing PNBP Kementerian Keuangan, dan Sertifikat LHU resmi.
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Nama Badan Usaha / Perusahaan / Instansi <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="PT / CV / Lembaga Riset / Instansi"
                        value={regData.companyName}
                        onChange={(e) => setRegData({ ...regData, companyName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                      />
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Kategori Entitas Usaha <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={regData.businessType}
                        onChange={(e) => setRegData({ ...regData, businessType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden bg-white text-xs"
                      >
                        <option value="KKKS (Kontraktor Kontrak Kerja Sama)">KKKS (Hulu Migas & Geotermal)</option>
                        <option value="Badan Usaha Niaga BBM">Badan Usaha Niaga BBM / Biofuel</option>
                        <option value="Produsen & Formulator Pelumas">Produsen Pelumas (Wajib NPT)</option>
                        <option value="Perusahaan Gas Bumi & LNG/CNG">Badan Usaha Gas Bumi & LPG</option>
                        <option value="Industri Manufaktur / Pembangkit">Industri Manufaktur / PLTU / Pabrik</option>
                        <option value="Perguruan Tinggi / Riset">Perguruan Tinggi / Peneliti Akademik</option>
                        <option value="Instansi Pemerintah Lainnya">Kementerian / Dinas / BUMN</option>
                        <option value="Lainnya">Lainnya / Perorangan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        NPWP Badan Usaha (16/15 Digit)
                      </label>
                      <input
                        type="text"
                        placeholder="01.234.567.8-012.000"
                        value={regData.npwp}
                        onChange={(e) => setRegData({ ...regData, npwp: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Nomor Induk Berusaha (NIB) / Izin Usaha
                      </label>
                      <input
                        type="text"
                        placeholder="912000xxxxxxx"
                        value={regData.nib}
                        onChange={(e) => setRegData({ ...regData, nib: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Kota / Kabupaten Domisili
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Jakarta Selatan"
                        value={regData.city}
                        onChange={(e) => setRegData({ ...regData, city: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Alamat Lengkap Kantor Operasional <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        rows={2}
                        required
                        placeholder="Nama Jalan, Gedung, Nomor, Kelurahan, Kecamatan"
                        value={regData.address}
                        onChange={(e) => setRegData({ ...regData, address: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden resize-none"
                      />
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setRegStep(1)}
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 inline mr-1" />
                      <span>Kembali</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNextToStep3}
                      className="grow py-2.5 bg-[#003366] hover:bg-[#002244] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Lanjut ke Langkah 3: Kata Sandi</span>
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: KATA SANDI & PERSETUJUAN */}
              {regStep === 3 && (
                <form onSubmit={handleRegisterSubmit} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Kata Sandi Baru <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showRegPassword ? 'text' : 'password'}
                          required
                          placeholder="Min. 6 karakter"
                          value={regData.password}
                          onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                          className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                        />
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <button
                          type="button"
                          onClick={() => setShowRegPassword(!showRegPassword)}
                          className="p-1 text-slate-400 hover:text-slate-600 absolute right-2.5 top-2.5 cursor-pointer"
                        >
                          {showRegPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {/* Password strength indicator */}
                      {regData.password && (
                        <div className="mt-1.5 space-y-1">
                          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className={`h-full ${passwordStrength.color} ${passwordStrength.width} transition-all duration-300`} />
                          </div>
                          <span className="text-[10px] text-slate-500">
                            Kekuatan Sandi: <strong>{passwordStrength.text}</strong>
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Konfirmasi Kata Sandi <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showRegPassword ? 'text' : 'password'}
                          required
                          placeholder="Ulangi kata sandi"
                          value={regData.confirmPassword}
                          onChange={(e) => setRegData({ ...regData, confirmPassword: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                        />
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      </div>
                    </div>
                  </div>

                  {/* Summary of what is being registered */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] space-y-1">
                    <span className="font-bold text-slate-700 block">Ringkasan Pendaftaran Akun:</span>
                    <div className="text-slate-600 flex justify-between">
                      <span>Pemohon:</span> <strong className="text-slate-800">{regData.fullName}</strong>
                    </div>
                    <div className="text-slate-600 flex justify-between">
                      <span>Perusahaan:</span> <strong className="text-slate-800">{regData.companyName}</strong>
                    </div>
                    <div className="text-slate-600 flex justify-between">
                      <span>Email Login:</span> <strong className="text-[#003366]">{regData.email}</strong>
                    </div>
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer text-slate-600 text-[11px]">
                      <input
                        type="checkbox"
                        checked={regData.agreedToTerms}
                        onChange={(e) => setRegData({ ...regData, agreedToTerms: e.target.checked })}
                        className="rounded border-slate-300 text-[#003366] focus:ring-0 mt-0.5"
                      />
                      <span>
                        Saya menyetujui Ketentuan Layanan Pengujian Laboratorium, Kerahasiaan Data Sampel ISO/IEC 17025, dan Tarif PNBP Badan Layanan Umum LEMIGAS Kementerian ESDM.{' '}
                        <button
                          type="button"
                          onClick={() => setShowTermsModal(true)}
                          className="text-[#003366] font-bold underline cursor-pointer"
                        >
                          Baca Ketentuan Lengkap
                        </button>
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setRegStep(2)}
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 inline mr-1" />
                      <span>Kembali</span>
                    </button>
                    <button
                      type="submit"
                      className="grow py-2.5 bg-[#003366] hover:bg-[#002244] active:scale-98 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <UserPlus className="w-4 h-4 text-amber-300" />
                      <span>Daftarkan & Aktifkan Akun SILAB</span>
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 4: SUCCESS REGISTRATION SCREEN */}
              {regStep === 4 && registeredResult && (
                <div className="py-4 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-0.5 rounded-full inline-block mb-1">
                      Pendaftaran Berhasil & Terverifikasi
                    </span>
                    <h4 className="text-base font-bold text-slate-900">
                      Selamat Datang di Portal SILAB LEMIGAS!
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                      Akun badan usaha <strong>{registeredResult.company}</strong> atas nama <strong>{registeredResult.name}</strong> telah berhasil dibuat dan terdaftar di pangkalan data LEMIGAS.
                    </p>
                  </div>

                  {/* Registered credentials box */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-500">Nomor Anggota Pelanggan:</span>
                      <span className="font-mono font-bold text-[#003366] text-sm">
                        {registeredResult.registrationId}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Email Login SSO:</span>
                      <span className="font-semibold text-slate-900">{registeredResult.email}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Status Akun:</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Terakreditasi KAN LP-001-IDN
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center max-w-md mx-auto">
                    <button
                      type="button"
                      onClick={handleCompleteAndLogin}
                      className="grow py-2.5 bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <LogIn className="w-4 h-4 text-amber-300" />
                      <span>Masuk ke Sesi SILAB Sekarang</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMode('login');
                        setRegStep(1);
                      }}
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      <span>Halaman Login</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : authMode === 'forgot' ? (
            /* ========================================================
                C. PEMULIHAN KATA SANDI LENGKAP (3 LANGKAH)
                ======================================================== */
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('login');
                    setErrorMsg('');
                    setForgotStep(1);
                  }}
                  className="text-xs text-[#003366] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali ke Halaman Masuk</span>
                </button>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* FORGOT STEP 1: INPUT EMAIL */}
              {forgotStep === 1 && (
                <form onSubmit={handleForgotStep1} className="space-y-3.5 text-xs">
                  <p className="text-slate-600 leading-relaxed">
                    Masukkan alamat email yang terdaftar pada sistem SILAB LEMIGAS. Kami akan mengirimkan 6 digit kode OTP verifikasi untuk mengatur ulang kata sandi Anda.
                  </p>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Akun Terdaftar <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="pic@perusahaan.co.id"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#003366] hover:bg-[#002244] active:scale-98 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <KeyRound className="w-4 h-4 text-amber-300" />
                    <span>Kirim Kode OTP Verifikasi</span>
                  </button>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500">
                    Bantuan cepat pemulihan akun: Hubungi Call Center ESDM di <strong>136</strong> atau email Helpdesk SILAB: <code>info.lemigas@esdm.go.id</code>.
                  </div>
                </form>
              )}

              {/* FORGOT STEP 2: INPUT OTP */}
              {forgotStep === 2 && (
                <form onSubmit={handleForgotStep2} className="space-y-3.5 text-xs">
                  <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl text-sky-900 leading-relaxed text-[11px]">
                    Kode verifikasi 6 digit telah dikirimkan ke <strong>{forgotEmail}</strong>. Masukkan kode tersebut di bawah ini.
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Kode Verifikasi (OTP) 6 Digit <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      required
                      placeholder="Contoh: 749216"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-3 py-2.5 text-center font-mono font-bold tracking-widest text-lg rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                    />
                  </div>

                  {/* Simulator button for quick test */}
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">
                      {otpTimer > 0 ? `Kirim ulang dalam ${otpTimer} detik` : 'Belum menerima kode?'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setOtpCode('749216')}
                      className="text-[#003366] font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span>Gunakan Kode Simulasi: 749216</span>
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#003366] hover:bg-[#002244] text-white font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Verifikasi Kode OTP</span>
                  </button>
                </form>
              )}

              {/* FORGOT STEP 3: NEW PASSWORD */}
              {forgotStep === 3 && (
                <form onSubmit={handleForgotStep3} className="space-y-3.5 text-xs">
                  <p className="text-slate-600 leading-relaxed">
                    Kode verifikasi terkonfirmasi! Silakan buat kata sandi baru untuk akun Anda.
                  </p>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Kata Sandi Baru <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="Min. 6 karakter"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Ulangi Kata Sandi Baru <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="Konfirmasi kata sandi baru"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#003366] hover:bg-[#002244] text-white font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Simpan Kata Sandi Baru</span>
                  </button>
                </form>
              )}

              {/* FORGOT STEP 4: SUCCESS RESET */}
              {forgotStep === 4 && (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Kata Sandi Berhasil Diperbarui
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Kata sandi baru Anda telah aktif. Silakan masuk kembali menggunakan email dan kata sandi baru Anda.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMode('login');
                        setForgotStep(1);
                      }}
                      className="px-6 py-2.5 bg-[#003366] text-white text-xs font-bold rounded-xl hover:bg-[#002244] transition-colors cursor-pointer"
                    >
                      Masuk ke Portal SILAB
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ========================================================
                D. LOGIN FORM LENGKAP DENGAN DEMO DAN LINK REGISTRASI
                ======================================================== */
            <div className="space-y-4">
              {/* Account Type Tabs */}
              <div className="flex p-1 bg-slate-100 rounded-xl text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setTab('pelanggan')}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    tab === 'pelanggan'
                      ? 'bg-white text-[#003366] shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Pelanggan Migas / KKKS
                </button>
                <button
                  type="button"
                  onClick={() => setTab('internal')}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    tab === 'internal'
                      ? 'bg-white text-[#003366] shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ASN / Analis Laboratorium
                </button>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span>{successMsg}</span>
                </div>
              )}

              <form onSubmit={handleLoginSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {tab === 'internal' ? 'Email Kedinasan ESDM / NIP ASN' : 'Email Akun Badan Usaha / Perusahaan'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder={tab === 'internal' ? 'nama@esdm.go.id' : 'nama@perusahaan.co.id'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-semibold text-slate-700">Kata Sandi (Password)</label>
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMode('forgot');
                        setForgotStep(1);
                        setErrorMsg('');
                      }}
                      className="text-[11px] text-[#003366] hover:underline cursor-pointer"
                    >
                      Lupa kata sandi?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                    />
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="p-1 text-slate-400 hover:text-slate-600 absolute right-2.5 top-2.5 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-slate-300 text-[#003366] focus:ring-0"
                    />
                    <span>Ingat sesi saya di perangkat ini</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#003366] hover:bg-[#002244] active:scale-98 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogIn className="w-4 h-4 text-amber-300" />
                  <span>Masuk ke Portal SILAB</span>
                </button>
              </form>

              {/* Call to Register */}
              <div className="p-3.5 bg-linear-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200/80 flex items-center justify-between gap-3 text-xs">
                <div className="min-w-0">
                  <span className="font-bold text-slate-900 block truncate">Belum memiliki akun SILAB?</span>
                  <span className="text-[11px] text-slate-600 block">Daftarkan badan usaha untuk permohonan pengujian resmi.</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('register');
                    setRegStep(1);
                    setErrorMsg('');
                  }}
                  className="px-3.5 py-2 bg-[#003366] hover:bg-[#002244] text-white font-bold rounded-lg transition-colors cursor-pointer shrink-0 text-xs flex items-center gap-1.5 shadow-xs"
                >
                  <UserPlus className="w-3.5 h-3.5 text-amber-300" />
                  <span>Daftar Akun</span>
                </button>
              </div>

              {/* Quick Demo Login Preset Buttons */}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-slate-500">
                    Masuk Cepat (Akun Simulasi Terverifikasi):
                  </span>
                  <span className="text-[10px] text-slate-400">1-Klik Akses</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  {DEMO_PRESETS.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuickLogin(preset)}
                      className="p-2.5 bg-slate-50 hover:bg-sky-50 hover:border-sky-300 rounded-xl border border-slate-200 text-slate-700 text-left transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="font-bold text-slate-900 group-hover:text-[#003366] truncate block">
                          {preset.name.split(' ')[0]} {preset.name.split(' ')[1]}
                        </span>
                      </div>
                      <span className="text-slate-500 text-[10px] truncate block">
                        {preset.company.split('(')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Security Badge */}
        <div className="px-5 sm:px-6 py-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Enkripsi SSL 256-Bit & ISO/IEC 17025 Ditjen Migas</span>
          </div>
          <span>Bantuan: ESDM 136</span>
        </div>
      </div>

      {/* Syarat & Ketentuan Layanan Popup */}
      {showTermsModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#003366]" />
                <h4 className="font-bold text-sm text-slate-900">
                  Ketentuan Layanan & Kerahasiaan Data Uji BLU LEMIGAS
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowTermsModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-2.5 max-h-64 overflow-y-auto pr-2 leading-relaxed">
              <p>
                <strong>1. Ruang Lingkup Layanan:</strong> Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS) menyelenggarakan pengujian laboratorium migas terakreditasi KAN LP-001-IDN & LK-001-IDN sesuai tarif resmi PNBP Peraturan Menteri Keuangan.
              </p>
              <p>
                <strong>2. Kerahasiaan Data Sampel:</strong> Seluruh data sampel, formulator, komposisi kimia, dan hasil pengujian dijamin kerahasiaannya dan tidak dipublikasikan kepada pihak ketiga tanpa persetujuan tertulis pemohon.
              </p>
              <p>
                <strong>3. Integritas Hasil Uji:</strong> Laporan Hasil Uji (LHU) diterbitkan dengan pengesahan tanda tangan elektronik tersertifikasi BSrE dan kode QR anti-pemalsuan resmi.
              </p>
              <p>
                <strong>4. Kewajiban Pemohon:</strong> Pemohon wajib menyampaikan informasi identitas sampel secara jujur dan melampirkan MSDS (Material Safety Data Sheet) untuk bahan uji berbahaya.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowTermsModal(false)}
                className="w-full py-2 bg-[#003366] text-white font-bold rounded-xl text-xs"
              >
                Saya Mengerti & Kembali
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
