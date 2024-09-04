import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Gerardo Nastri',
  description: 'Sito Portfolio di Gerardo Nastri. Web developer full stack.',
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
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
        </Providers>
      </body>
    </html>
  )
}