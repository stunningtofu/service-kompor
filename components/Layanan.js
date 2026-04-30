import { FaCheckCircle, FaStar, FaWhatsapp } from 'react-icons/fa'
import IconRenderer from './IconRenderer'
import siteData from '@/data/siteData.json'

export default function Layanan() {
  const { services, contact } = siteData;
  const waUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;

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
            <div key={index} className="card-gradient p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <IconRenderer iconName={service.icon} className="text-primary text-2xl" />
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

              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-primary text-xs flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="mt-auto w-full bg-primary hover:bg-primaryDark text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <FaWhatsapp className="text-xl" />
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Butuh layanan lain? Hubungi kami untuk konsultasi gratis</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <FaWhatsapp className="text-xl" />
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  )
}