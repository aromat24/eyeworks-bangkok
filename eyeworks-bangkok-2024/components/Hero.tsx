import Link from 'next/link'
import { type Locale, translations } from '@/lib/i18n'

interface HeroProps {
  locale: Locale
}

export default function Hero({ locale }: HeroProps) {
  const t = translations[locale]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            {t.hero.title.split(' ').map((word, index) => (
              <span key={index} className={index === 1 ? 'text-gradient block' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href={`/${locale}/contact`} className="luxury-button text-lg">
              {t.hero.cta}
            </Link>
            <Link 
              href={`/${locale}/services`} 
              className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary-900 transition-all duration-300 text-lg"
            >
              {t.hero.cta_secondary}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm md:text-base">
                {locale === 'en' ? 'Years Experience' : 'ปีประสบการณ์'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">5000+</div>
              <div className="text-gray-300 text-sm md:text-base">
                {locale === 'en' ? 'Happy Customers' : 'ลูกค้าพอใจ'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm md:text-base">
                {locale === 'en' ? 'Designer Brands' : 'แบรนด์ดีไซเนอร์'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm md:text-base">
                {locale === 'en' ? 'Emergency Service' : 'บริการฉุกเฉิน'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}