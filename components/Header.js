import { useState } from 'react'
import { FaBars, FaTools } from 'react-icons/fa'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-40 border-b-2 border-primary/20">
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">

        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md">
            <FaTools className="text-white text-xl"/>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Pangestu <span className="text-primary">Service</span>
            </h1>
            <p className="text-xs text-gray-500 -mt-1">
              Kediri • Profesional & Terpercaya
            </p>
          </div>
        </div>

        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#home">Beranda</a>
          <a href="#layanan">Layanan</a>
          <a href="#carapesan">Cara Pesan</a>
          <a href="#kontak">Kontak & Lokasi</a>
        </div>

        <button className="md:hidden text-primary text-2xl"
          onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-5 pb-4 flex flex-col space-y-3">
          <a href="#home">Beranda</a>
          <a href="#layanan">Layanan</a>
          <a href="#carapesan">Cara Pesan</a>
          <a href="#kontak">Kontak</a>
        </div>
      )}
    </header>
  )
}