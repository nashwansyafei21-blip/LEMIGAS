import React, { useState } from 'react';
import {
  X,
  Building,
  Award,
  BookOpen,
  Users,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Printer,
  FileText,
  Search,
  ArrowRight,
  FlaskConical,
  Send,
  Download
} from 'lucide-react';
import {
  INSTITUTION_INFO,
  SERVICES_DATA,
  LABORATORIES_LIST,
  NEWS_DATA,
  PPID_DOCUMENTS,
  ServiceItem,
  NewsArticle
} from '../data/lemigasData';

// 1. PROFIL MODAL
interface ProfilModalProps {
  isOpen: boolean;
  initialTab?: string;
  onClose: () => void;
}

export const ProfilModal: React.FC<ProfilModalProps> = ({
  isOpen,
  initialTab = 'sejarah',
  onClose
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003366] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Building className="w-5 h-5 text-amber-300" />
            <div>
              <h2 className="text-base font-bold">Profil Balai Besar Pengujian Minyak dan Gas Bumi</h2>
              <span className="text-xs text-slate-300">LEMIGAS · Ditjen Migas Kementerian ESDM</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-200 overflow-x-auto text-xs font-semibold scrollbar-none bg-slate-50">
          <button
            onClick={() => setActiveTab('sejarah')}
            className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'sejarah'
                ? 'border-[#003366] text-[#003366] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Sejarah (1965)
          </button>
          <button
            onClick={() => setActiveTab('visimisi')}
            className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'visimisi'
                ? 'border-[#003366] text-[#003366] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Visi, Misi & BerAKHLAK
          </button>
          <button
            onClick={() => setActiveTab('struktur')}
            className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'struktur'
                ? 'border-[#003366] text-[#003366] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Struktur Organisasi
          </button>
          <button
            onClick={() => setActiveTab('tupoksi')}
            className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'tupoksi'
                ? 'border-[#003366] text-[#003366] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Tugas & Fungsi
          </button>
          <button
            onClick={() => setActiveTab('akreditasi')}
            className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'akreditasi'
                ? 'border-[#003366] text-[#003366] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Akreditasi KAN
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {activeTab === 'sejarah' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                <span>SEJARAH PENDIRIAN & PENGABDIAN</span>
              </div>
              <h3 className="text-xl font-extrabold text-[#003366]">
                Perjalanan Pengabdian Balai LEMIGAS Mengawal Kedaulatan Energi Nasional
              </h3>
              <p>
                Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS) didirikan secara resmi pada tanggal <strong>11 Juni 1965</strong> melalui Keputusan Menteri Urusan Minyak dan Gas Bumi No. 17/M/Migas/65 dengan nama awal <em>Lembaga Minyak dan Gas Bumi (LEMIGAS)</em>.
              </p>
              <p>
                Tujuan utama pendirian LEMIGAS adalah sebagai pusat penelitian, pengembangan ilmu pengetahuan dan teknologi, serta penyiapan kader-kader ahli perminyakan nasional setelah berlakunya UU No. 44 Prp Tahun 1960.
              </p>
              <p>
                Dalam perjalanannya, LEMIGAS telah mengalami beberapa kali transformasi struktural di bawah Direktorat Jenderal Minyak dan Gas Bumi, Kementerian Energi dan Sumber Daya Mineral. Saat ini, berdasarkan Peraturan Menteri ESDM No. 13 Tahun 2021, LEMIGAS bertransformasi menjadi <strong>Balai Besar Pengujian Minyak dan Gas Bumi</strong> dengan status <strong>Badan Layanan Umum (BLU)</strong>.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <strong>Tonggak Bersejarah:</strong>
                <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600">
                  <li><strong>1965:</strong> Pendirian Lembaga Minyak dan Gas Bumi (LEMIGAS) di Cipulir.</li>
                  <li><strong>1977:</strong> Menjadi Pusat Pengembangan Teknologi Minyak dan Gas Bumi.</li>
                  <li><strong>2002:</strong> Pembentukan Balai Pengujian Mutu dan Pemanfaatan Produk Minyak dan Gas Bumi.</li>
                  <li><strong>2021 - Sekarang:</strong> Transformasi menjadi Balai Besar Pengujian Minyak dan Gas Bumi (BLU LEMIGAS).</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'visimisi' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-amber-700 mb-1">
                  Visi Balai LEMIGAS
                </h4>
                <p className="text-sm font-semibold text-[#003366] bg-slate-50 p-4 rounded-xl border border-slate-200">
                  "{INSTITUTION_INFO.vision}"
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-amber-700 mb-2">
                  Misi Balai LEMIGAS
                </h4>
                <div className="space-y-2">
                  {INSTITUTION_INFO.mission.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-bold text-[#003366] bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                        0{idx + 1}
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">{m}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-amber-700 mb-2">
                  Nilai Budaya Kerja ASN: BerAKHLAK
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {INSTITUTION_INFO.coreValues.map((val, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-slate-200 bg-white">
                      <span className="font-bold text-slate-900 block text-amber-700">{val.title}</span>
                      <span className="text-slate-600 text-[11px] leading-relaxed">{val.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'struktur' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#003366]">
                Struktur Organisasi Balai Besar Pengujian Minyak dan Gas Bumi
              </h3>
              <p className="text-xs text-slate-600">
                Berdasarkan Peraturan Menteri ESDM No. 13 Tahun 2021 tentang Organisasi dan Tata Kerja Kementerian ESDM:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-sky-50 rounded-xl border border-sky-200 text-center">
                  <span className="text-xs font-semibold text-sky-800 uppercase block">Pimpinan Utama</span>
                  <span className="text-base font-bold text-[#003366]">Kepala Balai Besar Pengujian Minyak dan Gas Bumi</span>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs font-semibold text-slate-500 uppercase block">Sekretariat Pelayanan</span>
                  <span className="text-sm font-bold text-slate-900">Bagian Tata Usaha</span>
                  <div className="text-xs text-slate-600 mt-1">
                    Subbagian Keuangan & Kepegawaian · Subbagian Pengelolaan Aset & Layanan BLU
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <span className="font-bold text-[#003366] block">Kelompok Pengujian Eksplorasi</span>
                    <span className="text-slate-600 mt-1 block">
                      Laboratorium Geologi, Geofisika, Sedimentologi, Biostratigrafi & Geokimia Organik Batuan Induk.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <span className="font-bold text-[#003366] block">Kelompok Pengujian Eksploitasi</span>
                    <span className="text-slate-600 mt-1 block">
                      Laboratorium Petrofisika (Core Analysis), Fluida Reservoir (PVT), Pemodelan Reservoar & Chemical EOR.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <span className="font-bold text-[#003366] block">Kelompok Pengujian Pengolahan & Pemanfaatan</span>
                    <span className="text-slate-600 mt-1 block">
                      Laboratorium Mutu BBM, Minyak Pelumas & Gemuk, Gas Bumi/LPG, Uji Unjuk Kerja Mesin & Emisi Gas Buang.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <span className="font-bold text-[#003366] block">Kelompok Sarana, Prasarana & Kalibrasi</span>
                    <span className="text-slate-600 mt-1 block">
                      Laboratorium Kalibrasi Tekanan, Suhu, Massa, Metrologi Industri, serta Uji Profisiensi (PUP) ISO/IEC 17043.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tupoksi' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#003366]">
                Tugas Pokok & Fungsi Balai LEMIGAS
              </h3>
              <p>
                <strong>Tugas:</strong> Balai Besar Pengujian Minyak dan Gas Bumi mempunyai tugas melaksanakan pengujian, kalibrasi, inspeksi teknis, sertifikasi, serta pengkajian dan pengembangan teknologi di bidang minyak dan gas bumi.
              </p>

              <div className="space-y-2 mt-4">
                <strong>Fungsi:</strong>
                <ul className="space-y-2 list-disc list-inside text-xs text-slate-700">
                  <li>Pelaksanaan pelayanan pengujian laboratorium di bidang eksplorasi, eksploitasi, pengolahan, pemanfaatan, dan lingkungan minyak dan gas bumi.</li>
                  <li>Pelaksanaan pelayanan kalibrasi instrumen dan metrologi peralatan industri perminyakan.</li>
                  <li>Pelaksanaan inspeksi teknis, audit teknologi, dan sertifikasi mutu produk minyak dan gas bumi serta sarana penunjang.</li>
                  <li>Pelaksanaan pengkajian terapan, rekayasa teknologi, dan uji coba lapangan di bidang minyak dan gas bumi.</li>
                  <li>Penyelenggaraan program uji profisiensi laboratorium minyak dan gas bumi tingkat nasional dan regional.</li>
                  <li>Pengelolaan urusan keuangan, kepegawaian, perlengkapan, dan ketatausahaan Badan Layanan Umum (BLU).</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'akreditasi' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#003366]">
                Akreditasi Nasional & Sertifikasi Sistem Manajemen Mutu
              </h3>
              <p className="text-xs text-slate-600">
                Seluruh fasilitas laboratorium di Balai LEMIGAS telah memenuhi standar mutu nasional dan internasional dengan sertifikasi:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {INSTITUTION_INFO.accreditations.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">{item.code}</span>
                      <span className="text-slate-600">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS) ESDM
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#002244] transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. SILAB ONLINE REGISTRATION MODAL
interface SilabModalProps {
  isOpen: boolean;
  selectedService?: ServiceItem | null;
  onClose: () => void;
}

export const SilabModal: React.FC<SilabModalProps> = ({
  isOpen,
  selectedService,
  onClose
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    picName: '',
    email: '',
    phone: '',
    sampleType: selectedService ? selectedService.title : 'Bahan Bakar Minyak Bensin',
    quantity: '2 Sampel',
    deliveryMethod: 'Kirim Mandiri ke Laboratorium Cipulir',
    note: ''
  });

  const [bookingCode, setBookingCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const code = `SILAB-2026-REG${randomNum}`;
    setBookingCode(code);
  };

  const handleReset = () => {
    setBookingCode(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003366] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FlaskConical className="w-5 h-5 text-amber-300" />
            <div>
              <h2 className="text-base font-bold">SILAB LEMIGAS</h2>
              <span className="text-xs text-slate-300">Sistem Informasi Layanan Laboratorium Online</span>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {bookingCode ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Pendaftaran Sampel Uji Berhasil!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Nomor Registrasi SILAB Anda telah diterbitkan. Silakan simpan nomor ini untuk pengiriman sampel fisik ke Loket Penerimaan Sampel Balai LEMIGAS Cipulir:
              </p>

              <div className="p-4 bg-slate-100 rounded-xl border border-slate-300 inline-block font-mono text-xl font-bold text-[#003366] tracking-wider">
                {bookingCode}
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-900 text-left space-y-1">
                <span className="font-bold block">Petunjuk Pengiriman Sampel:</span>
                <div>1. Cantumkan kode registrasi di atas pada label kemasan sampel uji.</div>
                <div>2. Lampirkan lembar Material Safety Data Sheet (MSDS) bila sampel beracun/B3.</div>
                <div>3. Kirim ke: <em>Loket Layanan Pengujian BLU LEMIGAS, Jl. Ciledug Raya No. 109, Cipulir, Kebayoran Lama, Jakarta Selatan 12230.</em></div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#003366] text-white text-xs font-bold rounded-xl hover:bg-[#002244] transition-colors"
                >
                  Selesai & Tutup
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="bg-sky-50 p-3 rounded-xl border border-sky-200 text-sky-900">
                Layanan yang dipilih:{' '}
                <strong>{selectedService ? selectedService.title : 'Pengujian Laboratorium Minyak & Gas'}</strong>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Nama Perusahaan / Instansi <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="PT Pertamina / PT ..."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Nama Penanggung Jawab (PIC) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama lengkap PIC"
                    value={formData.picName}
                    onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Email PIC <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="pic@perusahaan.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Nomor WhatsApp / HP <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Estimasi Jumlah Sampel <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: 3 Botol @ 1 Liter / 4 Plug Core"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Metode Penyerahan Sampel
                  </label>
                  <select
                    value={formData.deliveryMethod}
                    onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden bg-white"
                  >
                    <option value="Kirim Mandiri ke Laboratorium Cipulir">Kirim Mandiri ke Laboratorium Cipulir</option>
                    <option value="Ekspedisi Kurir / Cargo">Ekspedisi Kurir / Cargo</option>
                    <option value="Permintaan Pengambilan Sampel di Lokasi (Sampling)">Permintaan Pengambilan Sampel di Lokasi (Sampling)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Catatan Khusus / Permintaan Parameter Tambahan
                </label>
                <textarea
                  rows={3}
                  placeholder="Sebutkan bila ada sertifikat spesifik atau perlakuan khusus yang diperlukan..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#003366] hover:bg-[#002244] text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Send className="w-4 h-4 text-amber-300" />
                <span>Kirim Pendaftaran Sampel (SILAB)</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. UNIVERSAL SEARCH MODAL
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectArticle: (article: NewsArticle) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
  onSelectArticle
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchedServices = SERVICES_DATA.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
    s.parameters.some(p => p.toLowerCase().includes(query.toLowerCase()))
  );

  const matchedNews = NEWS_DATA.filter(n =>
    n.title.toLowerCase().includes(query.toLowerCase()) ||
    n.summary.toLowerCase().includes(query.toLowerCase())
  );

  const matchedLabs = LABORATORIES_LIST.filter(l =>
    l.name.toLowerCase().includes(query.toLowerCase()) ||
    l.description.toLowerCase().includes(query.toLowerCase())
  );

  const matchedPpid = PPID_DOCUMENTS.filter(d =>
    d.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari layanan pengujian, laboratorium, publikasi, dokumen PPID..."
            className="w-full text-sm font-medium focus:outline-hidden text-slate-900 placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-4 max-h-[60vh] text-xs">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-400">
              Ketikkan kata kunci untuk mencari di seluruh portal Balai LEMIGAS...
            </div>
          ) : (
            <>
              {matchedServices.length > 0 && (
                <div>
                  <span className="font-bold text-amber-700 uppercase tracking-wider block mb-2">
                    Layanan Pengujian ({matchedServices.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchedServices.map(s => (
                      <div
                        key={s.id}
                        onClick={() => {
                          onNavigateSection('layanan');
                          onClose();
                        }}
                        className="p-2.5 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <span className="font-bold text-slate-900 block">{s.title}</span>
                          <span className="text-slate-500 text-[11px] line-clamp-1">{s.shortDesc}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedLabs.length > 0 && (
                <div>
                  <span className="font-bold text-sky-700 uppercase tracking-wider block mb-2">
                    Laboratorium ({matchedLabs.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchedLabs.map(l => (
                      <div
                        key={l.id}
                        onClick={() => {
                          onNavigateSection('laboratorium');
                          onClose();
                        }}
                        className="p-2.5 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <span className="font-bold text-slate-900 block">{l.name}</span>
                          <span className="text-slate-500 text-[11px]">{l.division}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedNews.length > 0 && (
                <div>
                  <span className="font-bold text-emerald-700 uppercase tracking-wider block mb-2">
                    Berita & Publikasi ({matchedNews.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchedNews.map(n => (
                      <div
                        key={n.id}
                        onClick={() => {
                          onSelectArticle(n);
                          onClose();
                        }}
                        className="p-2.5 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <span className="font-bold text-slate-900 block">{n.title}</span>
                          <span className="text-slate-500 text-[11px]">{n.date} · {n.category}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedPpid.length > 0 && (
                <div>
                  <span className="font-bold text-rose-700 uppercase tracking-wider block mb-2">
                    Dokumen Publik PPID ({matchedPpid.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchedPpid.map(d => (
                      <div
                        key={d.id}
                        onClick={() => {
                          onNavigateSection('ppid');
                          onClose();
                        }}
                        className="p-2.5 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <span className="font-bold text-slate-900 block">{d.title}</span>
                          <span className="text-slate-500 text-[11px]">{d.category}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedServices.length === 0 && matchedLabs.length === 0 && matchedNews.length === 0 && matchedPpid.length === 0 && (
                <div className="py-8 text-center text-slate-400">
                  Tidak ditemukan hasil untuk "{query}". Coba kata kunci lainnya.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// 4. ARTICLE DETAIL MODAL
interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        <div className="relative h-60 sm:h-72 bg-slate-900 shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 text-white hover:bg-slate-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-2 py-0.5 text-[11px] font-bold bg-[#003366] rounded">
              {article.category}
            </span>
            <div className="text-xs text-slate-300 mt-1 flex items-center gap-3">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.author}</span>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#003366] leading-tight">
            {article.title}
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {article.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
            <span className="text-xs text-slate-500 font-semibold mr-1">Kata Kunci:</span>
            {article.tags.map((tag, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded-full border border-slate-200">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#003366] text-white text-xs font-semibold rounded-lg hover:bg-[#002244]"
          >
            Tutup Berita
          </button>
        </div>
      </div>
    </div>
  );
};

// 5. DOCUMENT VIEWER MODAL
interface DocumentModalProps {
  documentTitle: string | null;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ documentTitle, onClose }) => {
  if (!documentTitle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 bg-[#003366] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-300" />
            <h3 className="text-sm font-bold truncate max-w-md">
              {documentTitle}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto text-center space-y-4">
          <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto border border-rose-200">
            <FileText className="w-8 h-8" />
          </div>

          <h4 className="text-base font-bold text-slate-900">
            Dokumen Resmi Publik PPID LEMIGAS
          </h4>
          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            Dokumen <strong>{documentTitle}</strong> tersedia dalam format PDF resmi Kementerian Energi dan Sumber Daya Mineral.
          </p>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto text-left space-y-1 font-mono">
            <div>Format: Dokumen Digital PDF (Terverifikasi)</div>
            <div>Penerbit: Balai Besar LEMIGAS ESDM</div>
            <div>Status: Terbuka untuk Publik (UU KIP)</div>
          </div>

          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Ringkasan</span>
            </button>
            <button
              onClick={() => {
                alert(`Mengunduh dokumen: ${documentTitle}`);
                onClose();
              }}
              className="px-5 py-2.5 bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold rounded-xl flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>Unduh PDF Resmi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
