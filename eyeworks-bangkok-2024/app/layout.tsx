import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eyeworks Bangkok - Premium Eyewear & Designer Frames',
  description: 'Discover luxury eyewear, prescription lenses, and designer frames at Bangkok\'s finest optical boutique. Expert eye care in the heart of the city.',
  keywords: 'eyewear bangkok, designer glasses thailand, prescription lenses, optical store bangkok, luxury frames',
  openGraph: {
    title: 'Eyeworks Bangkok - Premium Eyewear & Designer Frames',
    description: 'Discover luxury eyewear, prescription lenses, and designer frames at Bangkok\'s finest optical boutique.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'th_TH',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}