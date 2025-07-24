import { type Locale, locales } from '@/lib/i18n'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  )
}