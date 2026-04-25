import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const siteUrl = 'https://pangestuservice.vercel.app'
  
  return (
    <Html lang="id">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Pangestu Service - Jasa service kompor, lampu LED, alat elektronik (kipas, rice cooker) dan pembuatan nisan di Kediri, Jawa Timur. Bisa panggilan ke rumah atau antar ke tempat kami. Profesional & terpercaya." />
        <meta name="keywords" content="service kompor, service LED, service elektronik, pembuatan nisan, Kediri" />
        <meta name="author" content="Pangestu Service" />
        <meta name="theme-color" content="#FF6B35" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Pangestu Service - Service Kompor, LED & Elektronik Kediri" />
        <meta property="og:description" content="Jasa service profesional untuk kompor, lampu LED, elektronik dan pembuatan nisan di Kediri, Jawa Timur." />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content="Pangestu Service - Service Kompor, LED & Elektronik Kediri" />
        <meta name="twitter:description" content="Jasa service profesional untuk kompor, lampu LED, elektronik dan pembuatan nisan di Kediri." />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="uHDCdB9R6RQ2uyreu2J2S9AXe0eWCm-bkhhP3P7JMcw" />
        
        {/* Font Awesome 6 */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Pangestu Service",
              "description": "Layanan servis panggilan ke rumah di Kota & Kabupaten Kediri. Cepat, bergaransi, harga transparan, dan berpengalaman 3+ tahun.",
              "telephone": "+6285859675459",
              "url": siteUrl,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jalan Ronggo Warsito No.65, RT.002/RW.004, Dusun Pojok, Desa Sukorejo",
                "addressLocality": "Kediri",
                "addressRegion": "Jawa Timur",
                "postalCode": "64181",
                "addressCountry": "ID"
              },
              "areaServed": ["Kota Kediri", "Kabupaten Kediri"],
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                "opens": "08:00",
                "closes": "17:00"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}