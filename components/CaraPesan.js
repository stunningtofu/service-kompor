import { FaPhone, FaTruck, FaComments, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa'

export default function CaraPesan() {
  const options = [
    {
      icon: FaPhone,
      step: "1",
      title: "Panggilan ke Rumah",
      description: "Tim teknisi kami datang langsung ke rumah Anda di wilayah Kediri Raya. Cocok untuk service kompor, kipas, rice cooker, dan elektronik ringan.",
      features: ["Gratis ongkos panggil", "Service di tempat", "Estimasi waktu 1-2 jam"],
      price: "Rp 50.000 - 150.000",
      popular: false
    },
    {
      icon: FaTruck,
      step: "2",
      title: "Antar Barang ke Bengkel",
      description: "Anda antar barang ke bengkel kami. Cocok untuk service LED, elektronik berat, dan pembuatan nisan yang membutuhkan waktu lebih lama.",
      features: ["Diagnosa gratis", "Antar-jemput tersedia", "Garansi servis"],
      price: "Rp 25.000 - 200.000",
      popular: true
    },
    {
      icon: FaComments,
      step: "3",
      title: "Konsultasi WhatsApp",
      description: "Kirim foto kerusakan via WhatsApp untuk konsultasi awal. Kami berikan estimasi harga dan saran perbaikan sebelum Anda memutuskan.",
      features: ["Konsultasi gratis", "Estimasi harga", "Jawab cepat"],
      price: "Gratis",
      popular: false
    }
  ]

  return (
    <section id="carapesan" className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Cara Pemesanan
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pilih cara yang paling sesuai dengan kebutuhan Anda. Semua layanan kami memberikan garansi servis dan harga transparan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div key={index} className={`relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 ${option.popular ? 'ring-2 ring-primary border-primary' : 'border border-gray-100'}`}>
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Paling Populer
                </div>
              )}

              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <option.icon className="text-primary text-3xl" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {option.step}
                  </div>
                </div>
                <h4 className="font-bold text-xl text-gray-800 mb-2">{option.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{option.description}</p>
                <div className="text-primary font-bold text-2xl mb-4">{option.price}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                    <FaCheckCircle className="text-primary text-sm flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/6281234567890?text=Halo%20Pangestu%20Service%2C%20saya%20mau%20pesan%20layanan%20${option.title}" target="_blank"
                className={`w-full font-semibold py-3 px-4 rounded-xl transition duration-300 flex items-center justify-center gap-2 ${option.popular ? 'bg-primary hover:bg-primaryDark text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                <option.icon className="text-lg" />
                Pilih Cara Ini
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-bold text-xl text-gray-800 mb-3 flex items-center gap-2">
                <FaClock className="text-primary" />
                Jam Operasional
              </h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Senin - Jumat:</strong> 08:00 - 17:00 WIB</p>
                <p><strong>Sabtu:</strong> 08:00 - 15:00 WIB</p>
                <p><strong>Minggu:</strong> Tutup (Emergency call only)</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl text-gray-800 mb-3 flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                Lokasi Kami
              </h4>
              <p className="text-gray-600 mb-3">Jl. Pangestu No. 123, Kediri, Jawa Timur</p>
              <a href="#kontak" className="text-primary hover:text-primaryDark font-semibold flex items-center gap-2">
                <FaMapMarkerAlt />
                Lihat di Peta →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}