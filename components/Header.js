import { useState } from 'react'
import { FaBars, FaTools } from 'react-icons/fa'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 border-b-2 border-primary/20">
      <div className="container mx-auto px-5 py-3 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md">
            <FaTools className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
              Pangestu <span className="text-primary">Service</span>
            </h1>
            <p className="text-xs text-gray-500 -mt-1">Kediri • Profesional & Terpercaya</p>
          </div>
        </div>
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#home" className="text-gray-700 hover:text-primary transition">Beranda</a>
          <a href="#layanan" className="text-gray-700 hover:text-primary transition">Layanan</a>
          <a href="#carapesan" className="text-gray-700 hover:text-primary transition">Cara Pesan</a>
          <a href="#kontak" className="text-gray-700 hover:text-primary transition">Kontak & Lokasi</a>
        </div>
        <div className="md:hidden">
          <button id="mobile-menu-btn" className="text-primary text-2xl focus:outline-none" onClick={() => setOpen(!open)}>
            <FaBars />
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`${open ? '' : 'hidden'} md:hidden bg-white px-5 pb-4 flex flex-col space-y-3 border-t border-gray-100`}>
        <a href="#home" className="py-2 text-gray-700 hover:text-primary" onClick={() => setOpen(false)}>Beranda</a>
        <a href="#layanan" className="py-2 text-gray-700 hover:text-primary" onClick={() => setOpen(false)}>Layanan</a>
        <a href="#carapesan" className="py-2 text-gray-700 hover:text-primary" onClick={() => setOpen(false)}>Cara Pesan</a>
        <a href="#kontak" className="py-2 text-gray-700 hover:text-primary" onClick={() => setOpen(false)}>Kontak & Lokasi</a>
      </div>
    </header>
  )
}