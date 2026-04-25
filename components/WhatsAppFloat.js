import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  const phoneNumber = "6285859675459" // Ganti dengan nomor asli
  const message = encodeURIComponent("Halo pak, saya ingin service")

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-float fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 min-h-[44px] min-w-[44px] rounded-full bg-green-500 p-4 text-white shadow-2xl transition-all duration-300 hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      title="Hubungi WhatsApp"
    >
      <FaWhatsapp size={28} />
      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold">
        !
      </div>
    </a>
  )
}