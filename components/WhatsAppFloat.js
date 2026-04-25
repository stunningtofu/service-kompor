import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  const phoneNumber = "6285859675459" // Ganti dengan nomor asli
  const message = encodeURIComponent("Halo pak, saya ingin service")

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-float fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-pulse"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      title="Hubungi WhatsApp"
    >
      <FaWhatsapp size={28} />
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold">!</span>
      </div>
    </a>
  )
}