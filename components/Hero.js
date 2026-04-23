import { FaFire, FaLightbulb, FaUtensils, FaFan } from 'react-icons/fa'
import { FaMicrochip } from 'react-icons/fa6'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primaryLight via-white to-orange-50 py-16 md:py-24">

      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <div className="hero-badge text-white px-4 py-2 rounded-full inline-flex items-center gap-2">
              <span>Melayani Wilayah Kediri Raya</span>
            </div>

            <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
              Service Kompor, LED, Elektronik & Pembuatan Nisan
            </h2>

            <p className="text-gray-600 text-lg">
              Panggilan ke rumah Anda di Kediri atau antar langsung ke tempat kami.
            </p>

            <a href="https://wa.me/6281234567890"
              className="bg-primary hover:bg-primaryDark text-white px-7 py-3 rounded-xl shadow-lg">
              Hubungi WhatsApp
            </a>
          </div>

          <div className="hero-icon-bg rounded-3xl p-8 w-80 md:w-96">
            <div className="grid grid-cols-3 gap-6 text-center">

              <div className="animate-float-icons">
                <FaFire className="text-primary text-3xl mx-auto"/>
              </div>

              <div className="animate-float-icons delay-1">
                <FaLightbulb className="text-yellow-500 text-3xl mx-auto"/>
              </div>

              <div className="animate-float-icons delay-2">
                <FaUtensils className="text-primary text-3xl mx-auto"/>
              </div>

              <div className="animate-float-icons delay-1">
                <FaFan className="text-primary text-3xl mx-auto"/>
              </div>

              <div className="animate-float-icons">
                <FaMicrochip className="text-primary text-3xl mx-auto"/>
              </div>

            </div>

            <div className="mt-6 text-center">
              <p className="text-primary font-bold text-lg">8+ Tahun Pengalaman</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}