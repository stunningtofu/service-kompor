import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaStar, FaQuoteLeft, FaQuestionCircle } from 'react-icons/fa'
import siteData from '@/data/siteData.json'

export default function Kontak() {
  const { kontak, contact } = siteData;
  const waUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  return (
    <section id="kontak" className="py-16 bg-gray-50">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {kontak.title}
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {kontak.description}
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
                {contact.address}
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
                <a href={`tel:+${contact.whatsappNumber}`} className="flex items-center gap-3 text-gray-600 hover:text-primary transition">
                  <FaPhone className="text-primary" />
                  <span>{contact.phoneDisplay}</span>
                </a>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-primary transition">
                  <FaWhatsapp className="text-green-500" />
                  <span>{contact.phoneDisplay} (WhatsApp)</span>
                </a>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <h4 className="font-bold text-lg text-gray-800 mb-3">Jam Operasional</h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>Senin - Jumat:</strong> {contact.hours.weekday}</p>
                <p><strong>Sabtu:</strong> {contact.hours.saturday}</p>
                <p><strong>Minggu:</strong> {contact.hours.sunday}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col h-full">
            <h4 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              Lokasi di Peta
            </h4>
            <div className="rounded-xl overflow-hidden border border-gray-200 relative flex-grow min-h-[300px] mb-4 group">
              {/* Embedded Google Maps */}
              <iframe
                src={contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <a
              href={contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-white font-semibold transition duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              <FaMapMarkerAlt />
              Buka di Aplikasi Google Maps
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-gray-800 text-center mb-8">Testimoni Pelanggan</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {kontak.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <FaQuoteLeft className="text-primary/30 text-2xl mb-3" />
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
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
            {kontak.faqs.map((faq, index) => (
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