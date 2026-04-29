import { FaFire, FaLightbulb, FaUtensils, FaFan, FaMicrochip as FaChip, FaFillDrip, FaCheckCircle, FaStar, FaWhatsapp } from 'react-icons/fa'

export default function Layanan() {
  const services = [
    {
      icon: FaFire,
      title: "Service Kompor",
      description: "Kompor gas & listrik semua merek. Perbaikan burner, regulator, solenoid, dll.",
      features: ["Semua merek", "Garansi 3 bulan", "Service di rumah"]
    },
    {
      icon: FaLightbulb,
      title: "Service Lampu LED",
      description: "Perbaikan lampu LED mati, redup, berkedip. Ganti driver, LED strip, dll.",
      features: ["LED rumah", "LED toko", "Garansi 6 bulan"]
    },
    {
      icon: FaUtensils,
      title: "Service Rice Cooker",
      description: "Perbaikan rice cooker mati, tidak panas, tidak matang, dll.",
      features: ["Semua kapasitas", "Garansi 3 bulan", "Service di rumah"]
    },
    {
      icon: FaFan,
      title: "Service Kipas Angin",
      description: "Perbaikan kipas angin mati, berisik, tidak berputar, dll.",
      features: ["Kipas dinding", "Kipas meja", "Garansi 3 bulan"]
    },
    {
      icon: FaChip,
      title: "Service Elektronik",
      description: "Perbaikan TV, radio, charger, power supply, dan elektronik lainnya.",
      features: ["Diagnosa gratis", "Sparepart tersedia", "Garansi servis"]
    },
    {
      icon: FaFillDrip,
      title: "Pembuatan Nisan",
      description: "Custom nisan granit & marmer. Ukuran & desain sesuai permintaan.",
      features: ["Granit premium", "Marmer import", "Garansi 1 tahun"]
    }
  ]

  return (
    <section id="layanan" className="py-16 bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Layanan Kami
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan service elektronik dan pembuatan nisan dengan harga terjangkau dan garansi servis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-gradient p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <service.icon className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{service.title}</h4>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <FaStar className="text-yellow-400 text-sm" />
                    <FaStar className="text-yellow-400 text-sm" />
                    <FaStar className="text-yellow-400 text-sm" />
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-primary text-xs flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/6285859675459?text=Halo%20pak%2C%20saya%20ingin%20service" target="_blank" rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primaryDark text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <FaWhatsapp className="text-xl" />
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Butuh layanan lain? Hubungi kami untuk konsultasi gratis</p>
          <a href="https://wa.me/6285859675459?text=Halo%20pak%2C%20saya%20ingin%20service" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <FaWhatsapp className="text-xl" />
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  )
}