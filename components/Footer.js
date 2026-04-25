import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaTools } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <FaTools className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pangestu Service</h3>
                <p className="text-xs text-gray-400">Kediri • Profesional & Terpercaya</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Service kompor, LED, elektronik & pembuatan nisan di Kediri.
              Sudah 8+ tahun melayani dengan kualitas terbaik dan harga bersahabat.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/6285859675459?text=Halo%20pak%2C%20saya%20ingin%20service" target="_blank" className="text-green-400 hover:text-green-300 transition">
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#layanan" className="hover:text-primary transition">Service Kompor</a></li>
              <li><a href="#layanan" className="hover:text-primary transition">Service Lampu LED</a></li>
              <li><a href="#layanan" className="hover:text-primary transition">Service Elektronik</a></li>
              <li><a href="#layanan" className="hover:text-primary transition">Pembuatan Nisan</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary text-sm" />
                <a href="tel:+6285859675459" className="hover:text-primary transition">+62 858-5967-5459</a>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-primary text-sm mt-1" />
                <span>Jl. Ronggo Warsito No. 123<br />Gurah, Kediri</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pangestu Service. All rights reserved. | Made with ❤️ for Kediri
          </p>
        </div>
      </div>
    </footer>
  )
}