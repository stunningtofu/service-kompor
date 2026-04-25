import { useState } from 'react'
import { FaBars, FaTimes, FaTools } from 'react-icons/fa'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 border-b-2 border-primary/20">
      <div className="container mx-auto px-5 py-3 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md shrink-0">
            <FaTools className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
              Pangestu <span className="text-primary">Service</span>
            </h1>
            <p className="text-[0.65rem] sm:text-xs text-gray-500 mt-1">Kediri • Profesional & Terpercaya</p>
          </div>
        </div>
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#home" className="text-gray-700 hover:text-primary transition">Beranda</a>
          <a href="#layanan" className="text-gray-700 hover:text-primary transition">Layanan</a>
          <a href="#carapesan" className="text-gray-700 hover:text-primary transition">Cara Pesan</a>
          <a href="#kontak" className="text-gray-700 hover:text-primary transition">Kontak & Lokasi</a>
        </div>
        <button
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden rounded-full border border-primary/20 p-3 text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`${open ? 'block' : 'hidden'} md:hidden bg-white px-5 pb-4 pt-2 transition-all duration-300 border-t border-gray-100`}
      >
        <a
          href="#home"
          className="min-h-[44px] rounded-xl px-3 flex items-center text-gray-700 hover:text-primary transition-all duration-300"
          onClick={() => setOpen(false)}
        >
          Beranda
        </a>
        <a
          href="#layanan"
          className="min-h-[44px] rounded-xl px-3 flex items-center text-gray-700 hover:text-primary transition-all duration-300"
          onClick={() => setOpen(false)}
        >
          Layanan
        </a>
        <a
          href="#carapesan"
          className="min-h-[44px] rounded-xl px-3 flex items-center text-gray-700 hover:text-primary transition-all duration-300"
          onClick={() => setOpen(false)}
        >
          Cara Pesan
        </a>
        <a
          href="#kontak"
          className="min-h-[44px] rounded-xl px-3 flex items-center text-gray-700 hover:text-primary transition-all duration-300"
          onClick={() => setOpen(false)}
        >
          Kontak & Lokasi
        </a>
      </div>
    </header>
  )
}