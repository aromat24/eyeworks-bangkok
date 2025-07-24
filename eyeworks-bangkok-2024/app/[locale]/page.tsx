import { type Locale, translations } from '@/lib/i18n'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'

interface HomePageProps {
  params: { locale: Locale }
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  return (
    <>
      <Navigation locale={locale} />
      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <Locations locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}