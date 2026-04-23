import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Layanan from '@/components/Layanan'
import CaraPesan from '@/components/CaraPesan'
import Kontak from '@/components/Kontak'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pangestu Service | Servis Kompor Kediri</title>
      </Head>

      <Header />
      <WhatsAppFloat />

      <Hero />
      <Layanan />
      <CaraPesan />
      <Kontak />
      <Footer />
    </>
  )
}