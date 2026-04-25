import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaStar, FaQuoteLeft, FaQuestionCircle } from 'react-icons/fa'

export default function Kontak() {
  const testimonials = [
    {
      name: "Bu Siti",
      location: "Kediri Kota",
      text: "Service kompornya cepat dan rapi. Sudah 3 tahun pakai jasa beliau, selalu puas. Harganya juga bersahabat.",
      rating: 5,
      service: "Service Kompor Gas"
    },
    {
      name: "Pak Budi",
      location: "Pare",
      text: "Membuat nisan untuk orang tua. Hasilnya bagus sekali, granitnya berkualitas. Prosesnya juga tidak terlalu lama.",
      rating: 5,
      service: "Pembuatan Nisan"
    },
    {
      name: "Ibu Rina",
      location: "Nganjuk",
      text: "Lampu LED rumah redup semua, sudah diperbaiki dengan baik. Sekarang terang kembali. Terima kasih Pak!",
      rating: 5,
      service: "Service Lampu LED"
    }
  ]

  const faqs = [
    {
      question: "Berapa lama waktu service?",
      answer: "Untuk service ringan (kompor, kipas) biasanya 1-2 jam. Service LED dan elektronik bisa 2-4 jam tergantung kerusakan."
    },
    {
      question: "Apakah ada garansi servis?",
      answer: "Ya, semua service kami memberikan garansi minimal 3 bulan. Untuk pembuatan nisan garansi 1 tahun."
    },
    {
      question: "Apakah sparepart tersedia?",
      answer: "Ya, kami menyediakan berbagai sparepart untuk kompor, LED, dan elektronik. Jika tidak ada, kami bisa pesan dengan waktu 1-2 hari."
    },
    {
      question: "Berapa biaya panggilan ke rumah?",
      answer: "Biaya panggilan ke rumah GRATIS untuk wilayah Kediri Kota. Untuk daerah sekitar ada biaya transport minimal Rp 25.000."
    }
  ]

  return (
    <section id="kontak" className="py-16 bg-gray-50">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Kontak & Lokasi
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kunjungi bengkel kami atau hubungi untuk konsultasi gratis. Kami siap melayani Anda dengan profesional
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                Lokasi Bengkel
              </h4>
              <p className="text-gray-600 mb-3">
                Jl. Ronggo Warsito No. 123<br />
                Gurah, Kediri, Jawa Timur 64151
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaMapMarkerAlt className="text-primary" />
                <span>Mudah dijangkau dari pusat kota Kediri</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                <FaPhone className="text-primary" />
                Kontak Kami
              </h4>
              <div className="space-y-3">
                <a href="tel:+6281234567890" className="flex items-center gap-3 text-gray-600 hover:text-primary transition">
                  <FaPhone className="text-primary" />
                  <span>+62 812-3456-7890</span>
                </a>
                <a href="https://wa.me/6281234567890" target="_blank" className="flex items-center gap-3 text-gray-600 hover:text-primary transition">
                  <FaWhatsapp className="text-green-500" />
                  <span>+62 812-3456-7890 (WhatsApp)</span>
                </a>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <h4 className="font-bold text-lg text-gray-800 mb-3">Jam Operasional</h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Senin - Jumat:</strong> 08:00 - 17:00 WIB</p>
                <p><strong>Sabtu:</strong> 08:00 - 15:00 WIB</p>
                <p><strong>Minggu:</strong> Tutup (Emergency call only)</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h4 className="font-bold text-xl text-gray-800 mb-4">Lokasi di Peta</h4>
            <div className="map-container rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.098!2d112.013!3d-7.816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDknMDAuMCJTIDExMsKwMDAnNDcuMiJF!5e0!3m2!1sen!2sid!4v1234567890!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-gray-800 text-center mb-8">Testimoni Pelanggan</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <FaQuoteLeft className="text-primary/30 text-2xl mb-3" />
                <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-3">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="text-2xl font-bold text-gray-800 text-center mb-8 flex items-center justify-center gap-2">
            <FaQuestionCircle className="text-primary" />
            Pertanyaan Umum
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <h5 className="font-semibold text-gray-800 mb-3">{faq.question}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}