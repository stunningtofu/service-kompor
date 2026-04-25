export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-6 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="mb-3 leading-relaxed">
          Layanan panggilan ke rumah di <strong className="text-gray-200">Kota & Kabupaten Kediri</strong>.{' '}
          Tersedia antar-jemput perangkat.{' '}
          <span className="text-primary font-medium">Cepat, harga transparan, bergaransi,</span>{' '}
          dan telah dipercaya lebih dari 3 tahun.
        </p>

        <small className="block mt-4">
          © {year}{' '}
          <a href="/" className="hover:text-primary transition-colors">
            Pangestu Service
          </a>
          . Seluruh hak cipta dilindungi undang-undang.
        </small>
      </div>
    </footer>
  );
}