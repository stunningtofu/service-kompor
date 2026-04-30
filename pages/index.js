import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Layanan from '@/components/Layanan'
import CaraPesan from '@/components/CaraPesan'
import Kontak from '@/components/Kontak'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import siteData from '@/data/siteData.json'

export default function Home() {
  const { seo } = siteData;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pb-24">
        <WhatsAppFloat />
        <Hero />
        <Layanan />
        <CaraPesan />
        <Kontak />
      </main>

      <Footer />
    </>
  )
}