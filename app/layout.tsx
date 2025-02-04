import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import { cn } from '@/lib/utils'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

import {Person} from 'schema-dts'


const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Gerardo Nastri',
  description: 'Gerardo Nastri, sviluppatore full stack di Salerno specializzato in web e mobile con React, Next.js, Node.js, MongoDB, React Native, Expo, TypeScript e Tailwind CSS. Scopri i miei progetti e articoli tecnici',
  referrer: "origin-when-cross-origin",
  keywords: [
    "web developer",
    "web design",
    "website design",
    "website builder",
    "web designer",
    "webdesign",
    "ecommerce website",
    "web design company",
    "website designer",
    "responsive web design",
    "gerardo",
    "nastri",
    "gerardo nastri",
    "best website design",
    "web design software",
    "build a website",
    "web application development"
  ],
  authors: [
    {
      name: "Gerardo Nastri",
    },
  ],
  creator: "Gerardo Nastri",
  publisher: "Gerardo Nastri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "it",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  const structuredData =  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gerardo Nastri",
    "jobTitle": "Full Stack Web and Mobile Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Salerno",
      "addressCountry": "IT"
    },
    "email": "mailto:tuo-email@example.com",
    "url": "https://www.gerardonastri.it/",
    "sameAs": [
      "https://www.linkedin.com/in/gerardo-nastri-55325b21b/",
      "https://github.com/gerardonastri"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwind CSS",
      "C",
      "C++",
      "SQL",
      "Python"
    ],
    "alumniOf": "IIS Margherita hack baronissi",
    "description": "Gerardo Nastri, a full stack web and mobile developer from Salerno, specializes in creating web and mobile applications using technologies like React, Next.js, Node.js, and MongoDB."
  }

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4404827240124901"
     crossOrigin="anonymous"></script>
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />

          {/* <Analytics /> */}
        </Providers>
      </body>
    </html>
  )
}