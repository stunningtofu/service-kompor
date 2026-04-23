export default function Kontak() {
  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <h3 className="text-2xl font-bold">Kontak & Lokasi</h3>

        <p className="mt-3">
          Jalan Ronggo Warsito, Gurah, Kediri
        </p>

        <iframe
          className="w-full h-72 mt-5 rounded-xl"
          src="https://www.google.com/maps/embed?..."
        />
      </div>
    </section>
  )
}