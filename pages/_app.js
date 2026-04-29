import '../styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
 return (
   <>
     {/* Google tag (gtag.js) */}
     <Script
       strategy="afterInteractive"
       src={`https://www.googletagmanager.com/gtag/js?id=G-F0LE69H27B`}
     />
     <Script
       id="google-analytics"
       strategy="afterInteractive"
       dangerouslySetInnerHTML={{
         __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', 'G-F0LE69H27B', {
             page_path: window.location.pathname,
           });
         `,
       }}
     />
     <Component {...pageProps} />
     <SpeedInsights />
     <Analytics />
   </>
 )
}
