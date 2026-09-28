import React, { useState } from 'react';
import {
  SAMPLE_LHUS,
  LhuRecord
} from '../data/lemigasData';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  QrCode,
  Download,
  Printer,
  FileCheck,
  ExternalLink,
  Award
} from 'lucide-react';

export const LhuVerificationTool: React.FC = () => {
  const [certInput, setCertInput] = useState('');
  const [searchedRecord, setSearchedRecord] = useState<LhuRecord | null>(SAMPLE_LHUS[0]);
  const [searchError, setSearchError] = useState(false);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = certInput.trim().toUpperCase();

    if (!query) {
      setSearchedRecord(null);
      setSearchError(false);
      return;
    }

    const found = SAMPLE_LHUS.find(item =>
      item.certificateNumber.toUpperCase().includes(query) ||
      item.sampleName.toUpperCase().includes(query)
    );

    if (found) {
      setSearchedRecord(found);
      setSearchError(false);
    } else {
      setSearchedRecord(null);
      setSearchError(true);
    }
    setHasSearched(true);
  };

  const handleQuickSelect = (lhu: LhuRecord) => {
    setCertInput(lhu.certificateNumber);
    setSearchedRecord(lhu);
    setSearchError(false);
    setHasSearched(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="verifikasi-lhu" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>LAYANAN INTEGRITAS & KEABSAHAN SERTIFIKAT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight">
            Verifikasi Keaslian Laporan Hasil Uji (LHU)
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Guna mencegah pemalsuan sertifikat pengujian migas, sistem verifikasi online ini memvalidasi keabsahan data hasil uji resmi yang diterbitkan Balai Besar Pengujian Minyak dan Gas Bumi LEMIGAS.
          </p>
        </div>

        {/* Search input form */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-2xs mb-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative grow">
              <input
                type="text"
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                placeholder="Masukkan Nomor LHU (Contoh: LHU/2026/LM-0842/BBM)..."
                className="w-full pl-10 pr-4 py-3 bg-white text-sm rounded-xl border border-slate-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:outline-hidden"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-[#003366] hover:bg-[#002244] text-white text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Verifikasi Sertifikat</span>
            </button>
          </form>

          {/* Quick sample pills */}
          <div className="mt-4 flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-500 font-semibold">Coba Sampel LHU Resmi:</span>
            {SAMPLE_LHUS.map((lhu, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuickSelect(lhu)}
                className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 font-mono text-[11px] rounded border border-slate-200 transition-colors cursor-pointer"
              >
                {lhu.certificateNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Verification Result Display */}
        {hasSearched && searchedRecord && (
          <div className="bg-white rounded-2xl border-2 border-emerald-500/40 p-6 sm:p-8 shadow-md">
            {/* Header Status Bar */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-xs font-extrabold bg-emerald-100 text-emerald-800 rounded-full">
                      {searchedRecord.status}
                    </span>
                    <span className="text-xs text-slate-500">
                      Terdaftar pada Database Balai LEMIGAS
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-mono font-bold text-slate-900 mt-1">
                    {searchedRecord.certificateNumber}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Cetak Verifikasi LHU"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak Bukti</span>
                </button>
              </div>
            </div>

            {/* Meta summary grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6 border-b border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 block font-semibold">Nama Komoditas / Sampel:</span>
                <span className="font-bold text-slate-900 text-sm">{searchedRecord.sampleName}</span>
                <span className="text-slate-500 block text-[11px]">{searchedRecord.sampleType}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">Nama Pelanggan / Badan Usaha:</span>
                <span className="font-bold text-slate-900 text-sm">{searchedRecord.clientName}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">Tanggal Terbit & Masa Berlaku:</span>
                <span className="font-bold text-slate-900">{searchedRecord.issueDate}</span>
                <span className="text-slate-500 block text-[11px]">s.d. {searchedRecord.validUntil}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">Laboratorium Penguji:</span>
                <span className="font-bold text-slate-900">{searchedRecord.laboratory}</span>
                <span className="text-emerald-700 font-semibold block text-[11px]">{searchedRecord.accreditation}</span>
              </div>
            </div>

            {/* Parameters Table */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-900">
                  Rincian Hasil Pengujian Laboratorium Terakreditasi
                </h4>
                <span className="text-xs text-slate-500">
                  Total Parameter Diuji: {searchedRecord.testedParameters.length}
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">No</th>
                      <th className="py-3 px-4">Parameter Pengujian</th>
                      <th className="py-3 px-4">Metode Uji Standar</th>
                      <th className="py-3 px-4">Spesifikasi Acuan</th>
                      <th className="py-3 px-4">Hasil Uji LEMIGAS</th>
                      <th className="py-3 px-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-sans">
                    {searchedRecord.testedParameters.map((param, i) => (
                      <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-2.5 px-4 text-slate-500 tabular-nums">{i + 1}</td>
                        <td className="py-2.5 px-4 font-semibold text-slate-800">{param.parameter}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-600 text-[11px]">{param.method}</td>
                        <td className="py-2.5 px-4 text-slate-600">{param.spec}</td>
                        <td className="py-2.5 px-4 font-bold text-[#003366] tabular-nums">
                          {param.result} {param.unit}
                        </td>
                        <td className="py-2.5 px-4 text-center">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Memenuhi</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Verification Watermark & QR Footnote */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
              <div className="flex items-center gap-3">
                <QrCode className="w-12 h-12 text-slate-800 p-1 bg-slate-100 rounded-lg border border-slate-200 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-800 block">
                    Tanda Tangan Digital & Sertifikasi Elektronik Balai LEMIGAS
                  </span>
                  <span>Dokumen ini sah diterbitkan melalui Portal Resmi SILAB LEMIGAS Kementerian ESDM.</span>
                </div>
              </div>

              <div className="text-right text-[11px] text-slate-400">
                Terverifikasi secara kriptografis pada {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
            </div>
          </div>
        )}

        {hasSearched && searchError && (
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-8 text-center">
            <AlertTriangle className="w-10 h-10 text-rose-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-rose-900">
              Nomor Laporan Hasil Uji Tidak Ditemukan
            </h3>
            <p className="text-xs text-rose-700 max-w-md mx-auto mt-1 leading-relaxed">
              Nomor sertifikat "<span className="font-mono font-bold">{certInput}</span>" tidak terdaftar pada basis data kami atau pengetikan nomor belum sesuai format.
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <button
                type="button"
                onClick={() => handleQuickSelect(SAMPLE_LHUS[0])}
                className="px-4 py-2 bg-rose-600 text-white text-xs font-semibold rounded-lg hover:bg-rose-700 transition-colors"
              >
                Muat Sampel Uji Resmi
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
