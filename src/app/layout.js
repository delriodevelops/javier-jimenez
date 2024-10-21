import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Escudo Leal JPT - Consultoría Jurídica Arbitraje, Derecho Financiero y más',
  description: 'Asesoría legal especializada en arbitraje, derecho financiero, derecho laboral y más. Servicios jurídicos premium para empresas y particulares.',
  keywords: 'asesoría legal, consultoría jurídica, derecho empresarial, arbitraje, derecho financiero, derecho laboral, derecho inmobiliario, contratos comerciales, insolvencias, legislación energética, derecho fiscal, competencia desleal, litigación civil, defensa penal, protección de datos, urbanismo, medio ambiente, gobierno corporativo',
  authors: [{ name: 'Christian Del Río Rodríguez', url: 'https://www.iamdelrioo.com' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.tusitio.com',
    title: 'Escudo Leal JPT - Consultoría Jurídica Arbitraje, Derecho Financiero y más',
    description: 'Asesoría legal especializada en arbitraje, derecho financiero, derecho laboral y más. Servicios jurídicos premium para empresas y particulares.',
    siteName: 'Consultoría Jurídica',
    images: [
      {
        url: 'https://www.tusitio.com/escudo-leal-jpt.png',
        width: 1200,
        height: 630,
        alt: 'Escudo Leal JPT - Consultoría Jurídica Arbitraje, Derecho Financiero y más',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escudo Leal JPT - Consultoría Jurídica Arbitraje, Derecho Financiero y más',
    description: 'Asesoría legal especializada en arbitraje, derecho financiero, derecho laboral y más. Servicios jurídicos premium para empresas y particulares.',
    images: ['https://www.tusitio.com/escudo-leal-jpt.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.tusitio.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
