import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6281234567890"
      className="whatsapp-float bg-green-500 text-white p-4 rounded-full"
    >
      <FaWhatsapp size={26} />
    </a>
  )
}