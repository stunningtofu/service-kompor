import { FaWhatsapp } from 'react-icons/fa'
import siteData from '@/data/siteData.json'

export default function WhatsAppFloat() {
  const { whatsappNumber, whatsappMessage } = siteData.contact;
  const message = encodeURIComponent(whatsappMessage);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
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