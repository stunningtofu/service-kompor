import { FaFire, FaLightbulb, FaUtensils, FaFan, FaMapMarkerAlt, FaCheckCircle, FaTools, FaMicrochip, FaFillDrip } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primaryLight via-white to-orange-50 py-16 md:py-24">
      {/* Dekorasi background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 hero-badge text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <FaMapMarkerAlt className="text-white text-xs" />
              <span>Melayani Wilayah Kediri Raya</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
              Service Kompor, LED,
              <span className="text-primary relative inline-block">
                Elektronik
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 200 8" fill="currentColor">
                  <path d="M0,4 L200,4" stroke="currentColor" strokeWidth="4" strokeDasharray="6 4"/>
                </svg>
              </span>
              & Pembuatan Nisan
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Panggilan ke rumah Anda di Kediri (Kota & Kabupaten) atau antar langsung ke tempat kami. Cepat, harga bersahabat, garansi servis, dan sudah berpengalaman 3+ tahun.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-3">
              <a
                href="https://wa.me/6285859675459?text=Halo%20pak%2C%20saya%20ingin%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary px-6 py-3 text-center text-white font-bold shadow-lg transition-all duration-300 hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <FaUtensils className="text-xl" />
                Hubungi WhatsApp
              </a>
              <a
                href="#carapesan"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-primary px-6 py-3 text-center text-primary font-semibold transition-all duration-300 hover:bg-primary/10"
              >
                Cara Pemesanan →
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <FaCheckCircle className="text-primary text-lg" />
                <span className="text-sm font-medium">Service datang</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <FaCheckCircle className="text-primary text-lg" />
                <span className="text-sm font-medium">Antar barang</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <FaTools className="text-primary text-lg" />
                <span className="text-sm font-medium">Garansi servis</span>
              </div>
            </div>
          </div>

          {/* Side icon animasi (tanpa gambar) */}
          <div className="relative hidden md:flex justify-center">
            <div className="hero-icon-bg rounded-3xl p-8 w-full max-w-96">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="animate-float-icons">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                    <FaFire className="text-primary text-3xl" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Kompor</span>
                </div>
                <div className="animate-float-icons delay-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                    <FaLightbulb className="text-yellow-500 text-3xl" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">LED</span>
                </div>
                <div className="animate-float-icons delay-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                    <FaUtensils className="text-primary text-3xl" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Rice Cooker</span>
                </div>
                <div className="animate-float-icons delay-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                    <FaFan className="text-primary text-3xl" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Kipas</span>
                </div>
                <div className="animate-float-icons">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                    <FaFillDrip className="text-stone-500 text-3xl" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Nisan</span>
                </div>
                <div className="animate-float-icons delay-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                    <FaMicrochip className="text-primary text-3xl" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Elektronik</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-primary font-bold text-lg">3+ tahun Pengalaman</p>
                <p className="text-xs text-gray-500">Servis & Nisan di Kediri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}