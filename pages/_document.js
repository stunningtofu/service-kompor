import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta name="description" content="Pangestu Service - Jasa service kompor, lampu LED, alat elektronik (kipas, rice cooker) dan pembuatan nisan di Kediri, Jawa Timur. Bisa panggilan ke rumah atau antar ke tempat kami. Profesional & terpercaya." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pangestu Service",
              areaServed: "Kediri",
              telephone: "+6281234567890"
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