/**
 * LEMIGAS - Balai Besar Pengujian Minyak dan Gas Bumi
 * Direktorat Jenderal Minyak dan Gas Bumi
 * Kementerian Energi dan Sumber Daya Mineral Republik Indonesia
 */

export interface ServiceItem {
  id: string;
  category: 'hilir' | 'hulu' | 'emisi' | 'kalibrasi' | 'lingkungan' | 'ccus';
  title: string;
  shortDesc: string;
  standards: string[];
  parameters: string[];
  estimatedDays: string;
  basePrice: number;
  highlight?: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: 'Berita' | 'Siaran Pers' | 'Pengumuman' | 'Agenda';
  summary: string;
  content: string[];
  image: string;
  author: string;
  tags: string[];
}

export interface LhuRecord {
  certificateNumber: string;
  sampleName: string;
  sampleType: string;
  clientName: string;
  issueDate: string;
  validUntil: string;
  laboratory: string;
  status: 'VALID / ASLI' | 'DALAM PROSES' | 'KADALUARSA';
  accreditation: string;
  testedParameters: { parameter: string; method: string; result: string; unit: string; spec: string }[];
}

export interface LaboratoryFacility {
  id: string;
  name: string;
  division: 'Pengujian Eksplorasi' | 'Pengujian Eksploitasi' | 'Pengujian Pengolahan & Pemanfaatan' | 'Kalibrasi & Sarana';
  description: string;
  keyEquipments: string[];
  accreditationNumber: string;
}

export const INSTITUTION_INFO = {
  fullName: 'Balai Besar Pengujian Minyak dan Gas Bumi LEMIGAS',
  shortName: 'LEMIGAS ESDM',
  parentMinistry: 'Kementerian Energi dan Sumber Daya Mineral Republik Indonesia',
  directorate: 'Direktorat Jenderal Minyak dan Gas Bumi',
  status: 'Badan Layanan Umum (BLU)',
  establishedYear: 1965,
  foundationDay: '11 Juni 1965',
  legalBasis: 'Peraturan Menteri ESDM No. 13 Tahun 2021 dan PMK No. 129/PMK.05/2020',
  address: 'Area Perkantoran LEMIGAS, Jalan Ciledug Raya Kav. 109, Cipulir, Kebayoran Lama, Jakarta Selatan 12230, Indonesia',
  phone: ['(021) 7394422', '(021) 7393958', '(021) 7234031'],
  fax: '(021) 7246150',
  callCenter: 'ESDM 136',
  email: 'info.lemigas@esdm.go.id',
  contactCenterEmail: 'contactcenter136@esdm.go.id',
  workingHours: 'Senin - Kamis: 07.30 - 16.00 WIB | Jumat: 07.30 - 16.30 WIB',
  accreditations: [
    { code: 'KAN LP-001-IDN', label: 'Laboratorium Penguji ISO/IEC 17025:2017' },
    { code: 'KAN LK-001-IDN', label: 'Laboratorium Kalibrasi ISO/IEC 17025:2017' },
    { code: 'KAN PUP-002-IDN', label: 'Penyelenggara Uji Profisiensi ISO/IEC 17043' },
    { code: 'ISO 9001:2015', label: 'Sistem Manajemen Mutu' },
    { code: 'ISO 14001:2015', label: 'Sistem Manajemen Lingkungan' },
    { code: 'ISO 45001:2018', label: 'Sistem Manajemen K3' },
  ],
  vision: 'Menjadi balai besar pengujian dan pusat keunggulan teknologi minyak dan gas bumi kelas dunia yang profesional, terpercaya, dan berorientasi pada kepuasan pelanggan guna mendukung ketahanan energi nasional.',
  mission: [
    'Menyelenggarakan pelayanan jasa pengujian, kalibrasi, inspeksi teknis, dan sertifikasi minyak dan gas bumi berstandar internasional secara cepat, akurat, dan transparan.',
    'Melaksanakan pengkajian dan pengembangan teknologi minyak dan gas bumi serta dekarbonisasi energi (CCS/CCUS) yang berdaya saing tinggi.',
    'Meningkatkan kompetensi sumber daya manusia dan memodernisasi sarana laboratorium sesuai perkembangan industri energi global.',
    'Mendukung perumusan kebijakan pemerintah di sektor minyak dan gas bumi untuk kesejahteraan masyarakat dan pelestarian lingkungan hidup.'
  ],
  coreValues: [
    { title: 'Berorientasi Pelayanan', desc: 'Komitmen memberikan pelayanan prima demi kepuasan pelanggan dan masyarakat.' },
    { title: 'Akuntabel', desc: 'Bertanggung jawab atas kepercayaan yang diberikan secara transparan dan berintegritas.' },
    { title: 'Kompeten', desc: 'Terus belajar dan mengembangkan kapabilitas saintifik dan teknologi perminyakan.' },
    { title: 'Harmonis', desc: 'Saling peduli dan menghargai perbedaan dalam lingkungan kerja yang profesional.' },
    { title: 'Loyal', desc: 'Berdedikasi dan mengutamakan kepentingan bangsa dan negara di sektor energi.' },
    { title: 'Adaptif', desc: 'Terus berinovasi dan antusias dalam menggerakkan ataupun menghadapi transisi energi.' },
    { title: 'Kolaboratif', desc: 'Membangun kerja sama yang sinergis dengan institusi hulu-hilir migas dunia.' }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'bbm-komersial',
    category: 'hilir',
    title: 'Pengujian Mutu Bahan Bakar Minyak (BBM)',
    shortDesc: 'Uji komprehensif spesifikasi BBM bensin (RON 90, 92, 95, 98), minyak solar, dan minyak tanah sesuai standar Dirjen Migas.',
    standards: ['ASTM D2699', 'ASTM D2700', 'ASTM D86', 'ASTM D4052', 'SNI 06-3506'],
    parameters: ['Research Octane Number (RON)', 'Motor Octane Number (MON)', 'Distilasi ASTM', 'Massa Jenis @ 15°C', 'Kandungan Belerang (Sulfur XRF)', 'Tekanan Uap Reid (RVP)'],
    estimatedDays: '3 - 5 Hari Kerja',
    basePrice: 4500000,
    highlight: true
  },
  {
    id: 'pelumas-npt',
    category: 'hilir',
    title: 'Pengujian & Sertifikasi Pelumas (NPT)',
    shortDesc: 'Pengujian sifat fisika kimia dan kinerja pelumas otomotif dan industri untuk pemenuhan Nomor Pelumas Terdaftar (NPT) Kementerian ESDM.',
    standards: ['ASTM D445', 'ASTM D2270', 'ASTM D2896', 'ASTM D92', 'SNI Pelumas'],
    parameters: ['Viskositas Kinematik (40°C & 100°C)', 'Indeks Viskositas', 'Total Base Number (TBN)', 'Titik Nyala (Flash Point COC)', 'Kandungan Logam Aditif (ICP-OES)', 'Titik Tuang (Pour Point)'],
    estimatedDays: '5 - 7 Hari Kerja',
    basePrice: 6200000,
    highlight: true
  },
  {
    id: 'gas-bumi-lpg',
    category: 'hilir',
    title: 'Analisis Gas Bumi, LPG, LNG & CNG',
    shortDesc: 'Pengujian komposisi fraksi gas hidrokarbon, nilai kalor, kadar pengotor, dan odoran menggunakan kromatografi gas canggih.',
    standards: ['GPA 2261', 'GPA 2145', 'ASTM D1945', 'ASTM D3588'],
    parameters: ['Komposisi Hidrokarbon C1 - C6+', 'Gross Heating Value (GHV)', 'Wobbe Index', 'Kandungan H2S & Total Sulfur', 'Kandungan CO2 dan N2', 'Spesific Gravity Gas'],
    estimatedDays: '2 - 4 Hari Kerja',
    basePrice: 3800000,
    highlight: false
  },
  {
    id: 'core-analysis',
    category: 'hulu',
    title: 'Routine & Special Core Analysis (RCAL & SCAL)',
    shortDesc: 'Evaluasi sifat petrofisika batuan reservoar dari inti batuan (core) pemboran sumur migas untuk optimasi cadangan hidrokarbon.',
    standards: ['API RP 40', 'ASTM D4543'],
    parameters: ['Porositas Gas Efektif', 'Permeabilitas Udara & Klinkenberg', 'Saturasi Fluida (Dean Stark)', 'Tekanan Kapiler (Porous Plate & Centrifuge)', 'Relatif Permeabilitas Minyak-Air', 'Wettability Amott-Harvey'],
    estimatedDays: '10 - 20 Hari Kerja',
    basePrice: 18500000,
    highlight: true
  },
  {
    id: 'pvt-reservoir',
    category: 'hulu',
    title: 'Analisis Fluida Reservoir (PVT Analysis)',
    shortDesc: 'Studi sifat fasa dan termodinamika minyak mentah, kondensat, dan gas sumur pada temperatur dan tekanan formasi tinggi.',
    standards: ['API RP 44', 'NACE MR0175'],
    parameters: ['Constant Composition Expansion (CCE)', 'Differential Liberation (DL)', 'Separator Test', 'Viskositas Minyak Reservoir', 'Bubble Point Pressure (Pb)', 'Gas Oil Ratio (GOR)'],
    estimatedDays: '14 - 25 Hari Kerja',
    basePrice: 32000000,
    highlight: false
  },
  {
    id: 'geokimia-biostrat',
    category: 'hulu',
    title: 'Geokimia Organik & Biostratigrafi Eksplorasi',
    shortDesc: 'Karakterisasi batuan induk (source rock), kematangan termal, dan penentuan umur batuan cekungan sedimen Indonesia.',
    standards: ['Rock-Eval Pyrolysis Standard', 'Vitrinite Reflectance ASTM D7708'],
    parameters: ['Total Organic Carbon (TOC)', 'Pirolisis Rock-Eval (S1, S2, S3, Tmax)', 'Reflektansi Vitrinit (%Ro)', 'Biostratigrafi Foraminifera & Nannoplankton', 'Korelasi Minyak-Batuan Induk (GC-MS Biomarker)'],
    estimatedDays: '10 - 15 Hari Kerja',
    basePrice: 12500000,
    highlight: false
  },
  {
    id: 'uji-biofuel-b40',
    category: 'emisi',
    title: 'Uji Kinerja Biodiesel (B35, B40, B50) & SAF',
    shortDesc: 'Pusat pengujian resmi mandatori biodiesel dan Sustainable Aviation Fuel (SAF) pada mesin uji dynamometer dan uji jalan (road test).',
    standards: ['SNI 7182', 'ASTM D6751', 'ASTM D7566 (SAF)'],
    parameters: ['Kadar Metil Ester (FAME)', 'Stabilitas Oksidasi (Rancimat)', 'Monogliserida & Bebas Gliserol', 'Kadar Air (Coulometric Karl Fischer)', 'Uji Daya dan Konsumsi Bahan Bakar Mesin', 'Uji Kompatibilitas Filter Fuel Filter Choking'],
    estimatedDays: '7 - 14 Hari Kerja',
    basePrice: 9500000,
    highlight: true
  },
  {
    id: 'uji-emisi-otomotif',
    category: 'emisi',
    title: 'Uji Emisi Gas Buang Kendaraan & EURO 4 / EURO 5',
    shortDesc: 'Fasilitas chassis dynamometer canggih untuk mengukur emisi gas buang siklus pengendaraan standar global dan nasional.',
    standards: ['UN ECE R83', 'UN ECE R49', 'SNI 09-7117'],
    parameters: ['Kadar CO, HC, NOx, dan PM', 'CO2 Footprint & Fuel Economy', 'Pengukuran Particulate Matter (PM2.5 / PM10)', 'Smoke Opacity Meter'],
    estimatedDays: '3 - 5 Hari Kerja',
    basePrice: 7000000,
    highlight: false
  },
  {
    id: 'kalibrasi-instrumentasi',
    category: 'kalibrasi',
    title: 'Kalibrasi Peralatan Uji & Metrologi Migas',
    shortDesc: 'Layanan kalibrasi terakreditasi KAN LK-001-IDN untuk instrumen tekanan, temperatur, massa, volume, dan kelistrikan industri.',
    standards: ['ISO/IEC 17025:2017', 'DKD-R / Euramet Guidelines'],
    parameters: ['Pressure Gauge & Transmitter (hingga 10.000 psi)', 'Temperature Sensor (RTD, Thermocouple, Dry Block)', 'Neraca Analitik & Anak Timbangan', 'Glassware & Hidrometer', 'Spectrophotometer UV-Vis'],
    estimatedDays: '3 - 5 Hari Kerja',
    basePrice: 2200000,
    highlight: false
  },
  {
    id: 'lingkungan-migas',
    category: 'lingkungan',
    title: 'Pengujian Lingkungan Migas & Analisis B3',
    shortDesc: 'Analisis limbah lumpur bor (cuttings), air terproduksi, air permukaan, dan toksisitas lingkungan operasi migas.',
    standards: ['PP No. 22 Tahun 2021', 'US EPA 8260 / 8270'],
    parameters: ['Total Petroleum Hydrocarbon (TPH)', 'Uji TCLP Logam Berat (As, Pb, Cd, Hg, Cr)', 'BOD, COD, Minyak & Lemak Air Limbah', 'Uji Toksisitas Hayati (96-hr LC50 Bioassay)', 'Kualitas Udara Ambien'],
    estimatedDays: '5 - 7 Hari Kerja',
    basePrice: 5500000,
    highlight: false
  },
  {
    id: 'ccus-kajian',
    category: 'ccus',
    title: 'Kajian Teknis CCUS / CCS & Penyimpanan Karbon',
    shortDesc: 'Studi komprehensif penangkapan dan injeksi CO2 pada depleted oil/gas reservoir dan saline aquifer untuk target Net Zero Emission 2060.',
    standards: ['ISO 27914 (Geological Storage of CO2)', 'Permen ESDM No. 2 Tahun 2023'],
    parameters: ['Perhitungan Kapasitas Penyimpanan CO2 (Storage Capacity)', 'Uji Kompatibilitas Batuan & CO2 (Core Flooding CO2)', 'Integritas Batuan Penutup (Caprock Integrity)', 'Simulasi Aliran Fasa & Geokimia CO2-Water-Rock', 'Pemantauan Kebocoran & MMV (Measurement, Monitoring, Verification)'],
    estimatedDays: '30 - 60 Hari Kerja',
    basePrice: 75000000,
    highlight: true
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'LEMIGAS Pastikan Standar Mutu BBM B40 Berjalan Optimal di Seluruh SPBU Nasional',
    date: '22 September 2026',
    category: 'Berita',
    summary: 'Tim Balai Besar Pengujian Minyak dan Gas Bumi LEMIGAS melakukan uji petik berkala mutu bahan bakar bensin dan biodiesel di stasiun pengisian untuk menjamin perlindungan konsumen.',
    content: [
      'JAKARTA - Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS) Direktorat Jenderal Minyak dan Gas Bumi, Kementerian ESDM terus memperketat pengawasan mutu bahan bakar minyak (BBM) yang beredar di masyarakat.',
      'Melalui laboratorium pengujian mutakhir di Cipulir Jakarta Selatan, LEMIGAS telah memeriksa ratusan sampel BBM jenis bensin RON 90, RON 92, RON 95, serta campuran bahan bakar nabati biodiesel B40 yang disalurkan melalui berbagai badan usaha niaga migas.',
      'Kepala Balai LEMIGAS menegaskan bahwa setiap sampel diuji menggunakan metode standar ASTM dan SNI dengan tingkat ketelitian tinggi. Pengujian meliputi angka oktan (RON/MON), distilasi, stabilitas oksidasi, kandungan belerang, serta kadar air untuk memastikan performa mesin kendaraan terjaga optimal.',
      '"Komitmen LEMIGAS sebagai institusi pengujian pemerintah adalah memberikan kepastian kualitas energi bagi seluruh rakyat Indonesia dan menjamin iklim usaha migas yang transparan dan akuntabel," tuturnya.'
    ],
    image: '/src/assets/images/lemigas_fuel_testing_lab_1790299127533.jpg',
    author: 'Humas LEMIGAS ESDM',
    tags: ['Mutu BBM', 'Biodiesel B40', 'Laboratorium Hilir', 'SNI']
  },
  {
    id: 'news-2',
    title: 'LEMIGAS Rampungkan Studi Geologis Kapasitas Penyimpanan Karbon (CCS) di Sumatra Bagian Tengah',
    date: '18 September 2026',
    category: 'Siaran Pers',
    summary: 'Mendukung peta jalan Net Zero Emission 2060, tim peneliti LEMIGAS berhasil memetakan formasi depleted reservoir dengan potensi injeksi CO2 hingga puluhan juta ton.',
    content: [
      'JAKARTA - Dalam rangka mengimplementasikan Peraturan Presiden mengenai Carbon Capture and Storage (CCS), LEMIGAS ESDM menyelesaikan studi potensi penyimpanan karbon di Cekungan Sumatra Tengah.',
      'Studi ini melibatkan pemodelan geologi 3D, analisis core flooding dengan fluida CO2 superkritis, serta pengujian integritas batuan penutup (caprock seal capacity) pada laboratorium mekanika batuan LEMIGAS.',
      'Hasil studi membuktikan formasi reservoir memiliki karakteristik petrofisika yang sangat aman dan stabil untuk menampung emisi karbon dari klaster industri hilir dan pembangkit listrik sekitarnya.',
      'LEMIGAS siap memberikan pendampingan teknis kepada Kontraktor Kontrak Kerja Sama (KKKS) yang berminat mengembangkan proyek CCS/CCUS komersial di Indonesia.'
    ],
    image: '/src/assets/images/lemigas_ccus_green_energy_1790299153236.jpg',
    author: 'Biro Komunikasi & Informasi ESDM',
    tags: ['CCS/CCUS', 'Transisi Energi', 'Eksplorasi Migas', 'Net Zero Emission']
  },
  {
    id: 'news-3',
    title: 'Balai Besar LEMIGAS Selenggarakan Program Uji Profisiensi Laboratorium Migas Nasional 2026',
    date: '10 September 2026',
    category: 'Pengumuman',
    summary: 'Sebagai Penyelenggara Uji Profisiensi (PUP) terakreditasi KAN, LEMIGAS mengundang laboratorium migas nasional dan swasta untuk mengikuti evaluasi mutu hasil pengujian BBM dan Pelumas.',
    content: [
      'JAKARTA - Guna memastikan unjuk kerja dan keabsahan hasil uji seluruh laboratorium minyak dan gas bumi di Indonesia, LEMIGAS kembali membuka pendaftaran Program Uji Profisiensi (PUP) Putaran II Tahun 2026.',
      'Ruang lingkup pengujian profisiensi kali ini mencakup komoditas Gasoline (Bensin), Gasoil (Solar), Minyak Pelumas Otomotif, dan Gas Bumi (Natural Gas).',
      'Laboratorium peserta akan menerima sampel uji homogen dan diuji secara blind test sesuai ketentuan ISO/IEC 17043. Hasil evaluasi z-score akan menjadi bukti validitas kompetensi laboratorium dalam akreditasi KAN.',
      'Pendaftaran dibuka secara daring melalui portal resmi LEMIGAS hingga akhir bulan ini.'
    ],
    image: '/src/assets/images/lemigas_hero_facility_1790299114698.jpg',
    author: 'Sekretariat PUP LEMIGAS',
    tags: ['Uji Profisiensi', 'Akreditasi KAN', 'ISO/IEC 17043', 'Penjaminan Mutu']
  },
  {
    id: 'news-4',
    title: 'Inovasi Teknologi Enhanced Oil Recovery (EOR): LEMIGAS Sukses Uji Formula Surfaktan Nabati',
    date: '02 September 2026',
    category: 'Berita',
    summary: 'Riset lanjutan LEMIGAS menghasilkan formulasi surfaktan ramah lingkungan berbasis minyak sawit yang mampu meningkatkan perolehan minyak pada sumur-sumur tua.',
    content: [
      'JAKARTA - Menjawab tantangan peningkatan produksi minyak nasional menuju target 1 juta barel per hari, Balai Besar Pengujian Minyak dan Gas Bumi LEMIGAS terus meluncurkan inovasi teknologi tahap hulu.',
      'Kelompok Kerja Pengujian Eksploitasi berhasil menyempurnakan formulasi chemical EOR menggunakan surfaktan ester tersulfonasi berbasis bahan baku sawit domestik.',
      'Pengujian core flooding di laboratorium menunjukkan peningkatan faktor perolehan minyak (recovery factor) hingga 18% di atas waterflood konvensional tanpa menimbulkan emulsi yang merusak formasi.',
      'Formulasi ini dirancang dengan biaya kompetitif dan siap untuk dilakukan uji coba skala pilot (field pilot test) di lapangan migas Sumatera dan Jawa Timur.'
    ],
    image: '/src/assets/images/lemigas_oil_rig_upstream_1790299140299.jpg',
    author: 'Kelompok Kerja Eksploitasi LEMIGAS',
    tags: ['EOR', 'Hulu Migas', 'Inovasi', 'Produksi Minyak']
  }
];

export const SAMPLE_LHUS: LhuRecord[] = [
  {
    certificateNumber: 'LHU/2026/LM-0842/BBM',
    sampleName: 'Bahan Bakar Minyak Bensin RON 92',
    sampleType: 'Gasoline / Bensin Komersial',
    clientName: 'PT Pertamina Patra Niaga (Persero)',
    issueDate: '15 September 2026',
    validUntil: '15 September 2027',
    laboratory: 'Laboratorium Pengujian Pengolahan & Bahan Bakar LEMIGAS',
    status: 'VALID / ASLI',
    accreditation: 'KAN LP-001-IDN (ISO/IEC 17025:2017)',
    testedParameters: [
      { parameter: 'Research Octane Number (RON)', method: 'ASTM D2699', result: '92.4', unit: '-', spec: 'Min. 92.0' },
      { parameter: 'Massa Jenis pada 15°C', method: 'ASTM D4052', result: '742.8', unit: 'kg/m³', spec: '715 - 770' },
      { parameter: 'Kandungan Belerang (Sulfur)', method: 'ASTM D2622', result: '14.2', unit: 'mg/kg (ppm)', spec: 'Maks. 50' },
      { parameter: 'Distilasi: 10% Vol Penguapan', method: 'ASTM D86', result: '58.5', unit: '°C', spec: 'Maks. 70' },
      { parameter: 'Distilasi: 50% Vol Penguapan', method: 'ASTM D86', result: '98.2', unit: '°C', spec: '77 - 125' },
      { parameter: 'Tekanan Uap Reid (RVP)', method: 'ASTM D323', result: '54.6', unit: 'kPa', spec: '45 - 62' },
      { parameter: 'Residu Penguapan (Gum Eksisten)', method: 'ASTM D381', result: '1.2', unit: 'mg/100 mL', spec: 'Maks. 5' }
    ]
  },
  {
    certificateNumber: 'LHU/2026/LM-1120/LUB',
    sampleName: 'Pelumas Mesin Bensin SAE 0W-20 API SP',
    sampleType: 'Automotive Engine Oil Fully Synthetic',
    clientName: 'PT Shell Indonesia',
    issueDate: '08 September 2026',
    validUntil: '08 September 2027',
    laboratory: 'Laboratorium Pengujian Minyak Pelumas & Gemuk LEMIGAS',
    status: 'VALID / ASLI',
    accreditation: 'KAN LP-001-IDN (ISO/IEC 17025:2017)',
    testedParameters: [
      { parameter: 'Viskositas Kinematik @ 100°C', method: 'ASTM D445', result: '8.45', unit: 'cSt', spec: '6.9 - 9.3' },
      { parameter: 'Indeks Viskositas (VI)', method: 'ASTM D2270', result: '168', unit: '-', spec: 'Min. 140' },
      { parameter: 'Total Base Number (TBN)', method: 'ASTM D2896', result: '7.85', unit: 'mg KOH/g', spec: 'Min. 6.0' },
      { parameter: 'Titik Nyala (COC Flash Point)', method: 'ASTM D92', result: '228', unit: '°C', spec: 'Min. 200' },
      { parameter: 'Titik Tuang (Pour Point)', method: 'ASTM D97', result: '-42', unit: '°C', spec: 'Maks. -36' },
      { parameter: 'Viskositas CCS @ -35°C', method: 'ASTM D5293', result: '5420', unit: 'mPa.s', spec: 'Maks. 6200' }
    ]
  },
  {
    certificateNumber: 'LHU/2026/LM-0615/GAS',
    sampleName: 'Natural Gas Pipeline Wellhead Stream A',
    sampleType: 'Gas Bumi Terproses',
    clientName: 'PT Medco E&P Indonesia',
    issueDate: '29 Agustus 2026',
    validUntil: '29 Agustus 2027',
    laboratory: 'Laboratorium Pengujian Gas Bumi & LPG LEMIGAS',
    status: 'VALID / ASLI',
    accreditation: 'KAN LP-001-IDN (ISO/IEC 17025:2017)',
    testedParameters: [
      { parameter: 'Methane (C1)', method: 'GPA 2261', result: '89.42', unit: '% mol', spec: 'Min. 80.0' },
      { parameter: 'Ethane (C2)', method: 'GPA 2261', result: '4.85', unit: '% mol', spec: '-' },
      { parameter: 'Propane (C3)', method: 'GPA 2261', result: '1.92', unit: '% mol', spec: '-' },
      { parameter: 'Karbondioksida (CO2)', method: 'GPA 2261', result: '1.88', unit: '% mol', spec: 'Maks. 3.0' },
      { parameter: 'Hydrogen Sulfide (H2S)', method: 'ASTM D5504', result: '1.4', unit: 'ppmv', spec: 'Maks. 4.0' },
      { parameter: 'Gross Heating Value (GHV)', method: 'GPA 2145', result: '1038.5', unit: 'Btu/scf', spec: '950 - 1150' }
    ]
  },
  {
    certificateNumber: 'LHU/2026/LM-0412/COR',
    sampleName: 'Plug Core Batupasir Formasi Talang Akar',
    sampleType: 'Batuan Inti Reservoir (Routine Core)',
    clientName: 'Pertamina Hulu Energi ONWJ',
    issueDate: '14 Agustus 2026',
    validUntil: '14 Agustus 2028',
    laboratory: 'Laboratorium Petrofisika & Core Analysis LEMIGAS',
    status: 'VALID / ASLI',
    accreditation: 'KAN LP-001-IDN (ISO/IEC 17025:2017)',
    testedParameters: [
      { parameter: 'Porositas Efektif (He Pycnometer)', method: 'API RP 40', result: '24.6', unit: '%', spec: 'Evaluasi' },
      { parameter: 'Permeabilitas Udara (Klinkenberg)', method: 'API RP 40', result: '312.4', unit: 'mD', spec: 'Evaluasi' },
      { parameter: 'Kepadatan Butiran (Grain Density)', method: 'API RP 40', result: '2.648', unit: 'g/cm³', spec: 'Evaluasi' },
      { parameter: 'Saturasi Air (Sw)', method: 'Dean Stark Method', result: '32.1', unit: '% PV', spec: 'Evaluasi' }
    ]
  }
];

export const LABORATORIES_LIST: LaboratoryFacility[] = [
  {
    id: 'lab-bbm',
    name: 'Laboratorium Pengujian Bahan Bakar Minyak (BBM)',
    division: 'Pengujian Pengolahan & Pemanfaatan',
    description: 'Fasilitas pengujian komprehensif spesifikasi BBM, avtur, biofuel, dan bahan bakar alternatif dengan peralatan mutakhir ASTM/IP.',
    keyEquipments: ['CFR F1/F2 Octane Engine', 'Automated Distillation Unit', 'XRF Sulfur Analyzer', 'Densitometer Digital Anton Paar', 'Karl Fischer Titrator'],
    accreditationNumber: 'KAN LP-001-IDN'
  },
  {
    id: 'lab-pelumas',
    name: 'Laboratorium Pengujian Minyak Pelumas & Gemuk',
    division: 'Pengujian Pengolahan & Pemanfaatan',
    description: 'Laboratorium rujukan nasional untuk pendaftaran NPT pelumas dengan analisis reologi, aditif kimia, dan stabilitas termal.',
    keyEquipments: ['ICP-OES Spectrometer', 'Automated Kinematic Viscometer', 'Cold Cranking Simulator (CCS)', 'Four Ball Wear Tester', 'NOACK Volatility Tester'],
    accreditationNumber: 'KAN LP-001-IDN'
  },
  {
    id: 'lab-engine',
    name: 'Laboratorium Uji Unjuk Kerja Mesin & Emisi Kendaraan',
    division: 'Pengujian Pengolahan & Pemanfaatan',
    description: 'Fasilitas chassis & engine dynamometer untuk pengujian bahan bakar nabati (B35/B40), aditif, dan sertifikasi emisi gas buang EURO 4/5.',
    keyEquipments: ['Chassis Dynamometer 4WD', 'AVL Exhaust Gas Analyzer', 'Particulate Measurement System', 'Engine Test Bench AC Dynamometer', 'Fuel Flow Measurement Coriolis'],
    accreditationNumber: 'KAN LP-001-IDN'
  },
  {
    id: 'lab-core',
    name: 'Laboratorium Petrofisika & Core Analysis',
    division: 'Pengujian Eksploitasi',
    description: 'Laboratorium evaluasi sifat fisik batuan reservoar, porositas, permeabilitas relatif, dan karakterisasi reservoir batuan karbonat maupun klastik.',
    keyEquipments: ['Automated Porosimeter-Permeameter', 'Unsteady-State Core Flood Apparatus', 'Centrifuge Capillary Pressure', 'Electrical Properties Reservoir Unit', 'Dean-Stark Extraction Unit'],
    accreditationNumber: 'KAN LP-001-IDN'
  },
  {
    id: 'lab-pvt',
    name: 'Laboratorium Fluida Reservoir & EOR',
    division: 'Pengujian Eksploitasi',
    description: 'Fasilitas penentuan perilaku fasa fluida hidrokarbon pada tekanan hingga 15.000 psi dan temperatur tinggi, serta riset formulasi chemical EOR.',
    keyEquipments: ['Mercury-Free Visual PVT Cell', 'High Pressure High Temperature Viscometer', 'Gas Chromatograph RGA', 'Spinning Drop Interfacial Tensiometer', 'Slim Tube Miscibility Apparatus'],
    accreditationNumber: 'KAN LP-001-IDN'
  },
  {
    id: 'lab-geokimia',
    name: 'Laboratorium Geokimia Organik & Biostratigrafi',
    division: 'Pengujian Eksplorasi',
    description: 'Analisis batuan induk (source rock), pemodelan sistem minyak bumi (petroleum system), dan penentuan biostratigrafi fosil mikro.',
    keyEquipments: ['Rock-Eval 6 Pyrolyzer', 'Gas Chromatography Mass Spectrometry (GC-MS)', 'LECO Carbon Analyzer', 'Vitrinite Reflectance Microscope', 'Scanning Electron Microscope (SEM-EDX)'],
    accreditationNumber: 'KAN LP-001-IDN'
  },
  {
    id: 'lab-gas',
    name: 'Laboratorium Pengujian Gas Bumi & Gas Olahan',
    division: 'Pengujian Pengolahan & Pemanfaatan',
    description: 'Pengujian komposisi gas bumi, LNG, LPG, biomethane, dan hidrogen dengan detektor presisi tinggi.',
    keyEquipments: ['Gas Chromatograph TCD/FID/FPD', 'Sulfur Chemiluminescence Detector (SCD)', 'Moisture in Gas Analyzer', 'Dew Point Meter', 'Calorimeter Bomb'],
    accreditationNumber: 'KAN LP-001-IDN'
  },
  {
    id: 'lab-kalibrasi',
    name: 'Laboratorium Kalibrasi & Metrologi Migas',
    division: 'Kalibrasi & Sarana',
    description: 'Laboratorium kalibrasi tertua dan terlengkap di sektor energi, memberikan ketertelusuran standar nasional dan internasional (BIPM).',
    keyEquipments: ['Dead Weight Tester Fluke/Ruska', 'Standard Platinum Resistance Thermometer (SPRT)', 'Temperature Calibration Dry Well Bath', 'Class E2 & F1 Standard Weights', 'Precision Multimeter Fluke 8508A'],
    accreditationNumber: 'KAN LK-001-IDN'
  }
];

export const PPID_DOCUMENTS = [
  {
    id: 'ppid-1',
    category: 'Informasi Berkala',
    title: 'Laporan Akuntabilitas Kinerja Instansi Pemerintah (LAKIP) LEMIGAS 2025/2026',
    date: 'Januari 2026',
    format: 'PDF',
    size: '4.8 MB',
    desc: 'Laporan pertanggungjawaban capaian target kinerja, realisasi anggaran BLU, dan evaluasi program tahunan.'
  },
  {
    id: 'ppid-2',
    category: 'Informasi Berkala',
    title: 'Rencana Strategis (RENSTRA) Balai Besar Pengujian Migas LEMIGAS 2025-2029',
    date: 'Maret 2025',
    format: 'PDF',
    size: '8.2 MB',
    desc: 'Dokumen arah kebijakan, sasaran strategis, serta peta jalan riset dan layanan pengujian 5 tahunan.'
  },
  {
    id: 'ppid-3',
    category: 'Informasi Setiap Saat',
    title: 'Daftar Standar Tarif Layanan Pengujian BLU LEMIGAS (Sesuai PMK)',
    date: 'Terbaru 2026',
    format: 'PDF',
    size: '2.5 MB',
    desc: 'Buku tarif resmi pengujian laboratorium hilir, hulu, kalibrasi, konsultansi, dan penggunaan sarana.'
  },
  {
    id: 'ppid-4',
    category: 'Informasi Setiap Saat',
    title: 'Maklumat Pelayanan & Standar Operasional Prosedur (SOP) Layanan Pengujian',
    date: '2026',
    format: 'PDF',
    size: '1.9 MB',
    desc: 'Komitmen pelayanan publik, kepastian jangka waktu penyelesaian, dan jaminan mutu hasil uji.'
  },
  {
    id: 'ppid-5',
    category: 'Informasi Serta Merta',
    title: 'Hasil Uji Petik Nasional Mutu Bahan Bakar Minyak Pada Periode Hari Besar Keagamaan',
    date: '2026',
    format: 'PDF',
    size: '3.1 MB',
    desc: 'Publikasi transparansi pengawasan kualitas BBM nasional guna memastikan keamanan berkendara masyarakat.'
  },
  {
    id: 'ppid-6',
    category: 'Informasi Setiap Saat',
    title: 'Pedoman Penanganan Pengaduan Masyarakat (Whistleblowing System) Kementerian ESDM',
    date: '2026',
    format: 'PDF',
    size: '1.4 MB',
    desc: 'Mekanisme pelaporan dugaan pelanggaran etik, korupsi, atau pelayanan dengan perlindungan identitas pelapor.'
  }
];
