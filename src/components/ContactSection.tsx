import React, { useState } from 'react';
import { INSTITUTION_INFO } from '../data/lemigasData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Navigation,
  HelpCircle
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: 'Pengujian Mutu BBM / Pelumas',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      topic: 'Pengujian Mutu BBM / Pelumas',
      message: ''
    });
  };

  return (
    <section id="kontak" className="py-16 sm:py-20 bg-slate-100/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-300 mb-2">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>KANTOR PUSAT & AREA LABORATORIUM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight">
            Hubungi Kami & Layanan Konsultasi Pengujian
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Silakan hubungi customer service BLU LEMIGAS atau kirimkan pertanyaan teknis terkait jadwal uji, prosedur penerimaan sampel, dan penawaran kerja sama.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left info box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-5">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Informasi Kontak Resmi
              </h3>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Alamat Kantor & Lab:</span>
                  <span className="leading-relaxed">{INSTITUTION_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Telepon & Call Center:</span>
                  <div className="space-y-0.5 mt-0.5">
                    <div>Call Center ESDM: <span className="font-bold text-[#003366]">136</span></div>
                    <div>Hunting: {INSTITUTION_INFO.phone.join(' / ')}</div>
                    <div>Fax: {INSTITUTION_INFO.fax}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <Mail className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Surat Elektronik (Email):</span>
                  <a href={`mailto:${INSTITUTION_INFO.email}`} className="text-[#003366] font-medium hover:underline block">
                    {INSTITUTION_INFO.email}
                  </a>
                  <a href={`mailto:${INSTITUTION_INFO.contactCenterEmail}`} className="text-slate-500 hover:underline block text-[11px]">
                    {INSTITUTION_INFO.contactCenterEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Jam Layanan Pelanggan (Loket):</span>
                  <span>{INSTITUTION_INFO.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Transport & Location hint card */}
            <div className="bg-[#003366] text-white p-5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 font-bold text-sm text-amber-300 mb-2">
                <Navigation className="w-4 h-4" />
                <span>Aksesibilitas Lokasi Kantor</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Berada tepat di Jalan Ciledug Raya No. 109, Cipulir (seberang ITC Cipulir Mas / dekat Halte TransJakarta Koridor 13 Cipulir). Tersedia area parkir pengantaran sampel dan bongkar muat kontainer core.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Pesan & Pertanyaan Berhasil Terkirim
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Terima kasih, <strong>{formData.name}</strong>. Tim Customer Service Pelayanan Pengujian BLU LEMIGAS akan menghubungi Anda melalui email <strong>{formData.email}</strong> atau telepon dalam 1x24 jam kerja.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-[#003366] text-white text-xs font-bold rounded-xl hover:bg-[#002244] transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Formulir Permohonan Informasi & Konsultasi
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Pratama, S.T."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Perusahaan / Institusi
                    </label>
                    <input
                      type="text"
                      placeholder="PT / Universitas / Instansi"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Alamat Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@perusahaan.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nomor Telepon / WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Topik Layanan yang Dituju
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden bg-white"
                  >
                    <option value="Pengujian Mutu BBM / Pelumas">Pengujian Mutu BBM / Pelumas (NPT)</option>
                    <option value="Core Analysis & Reservoir Fluida PVT">Core Analysis & Reservoir Fluida PVT (Hulu)</option>
                    <option value="Analisis Gas Bumi & LPG/LNG">Analisis Gas Bumi & LPG/LNG</option>
                    <option value="Uji Biodiesel B40 & Uji Emisi Mesin">Uji Biodiesel B40 & Uji Emisi Mesin</option>
                    <option value="Kalibrasi & Metrologi Peralatan">Kalibrasi & Metrologi Peralatan</option>
                    <option value="Kajian CCS / CCUS Transisi Energi">Kajian CCS / CCUS Transisi Energi</option>
                    <option value="Uji Profisiensi (PUP)">Uji Profisiensi (PUP) ISO/IEC 17043</option>
                    <option value="Lainnya">Lainnya / Pertanyaan Umum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Detail Pertanyaan atau Spesifikasi Sampel <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Jelaskan kebutuhan pengujian, estimasi jumlah sampel, atau parameter yang ingin diuji..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#003366] focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-amber-300" />
                  <span>Kirim Formulir Konsultasi</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
