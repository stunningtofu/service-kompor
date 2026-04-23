export default function CaraPesan() {
  return (
    <section id="carapesan" className="py-16 bg-orange-50">
      <div className="container mx-auto px-5 grid md:grid-cols-3 gap-6">

        <div className="bg-white p-5 rounded-xl">
          <h4 className="font-bold">Panggilan</h4>
          <p>Tim datang ke rumah Anda.</p>
        </div>

        <div className="bg-white p-5 rounded-xl">
          <h4 className="font-bold">Antar Barang</h4>
          <p>Datang ke bengkel kami.</p>
        </div>

        <div className="bg-white p-5 rounded-xl">
          <h4 className="font-bold">Konsultasi WA</h4>
          <p>Kirim foto & tanya via WhatsApp.</p>
        </div>

      </div>
    </section>
  )
}