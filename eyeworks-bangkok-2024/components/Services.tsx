import Link from 'next/link'
import { type Locale, translations } from '@/lib/i18n'

interface ServicesProps {
  locale: Locale
}

export default function Services({ locale }: ServicesProps) {
  const t = translations[locale]

  const services = [
    {
      title: t.services.prescription.title,
      description: t.services.prescription.description,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      slug: 'prescription-lenses'
    },
    {
      title: t.services.designer.title,
      description: t.services.designer.description,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      slug: 'designer-frames'
    },
    {
      title: t.services.cutting.title,
      description: t.services.cutting.description,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      slug: 'lens-cutting'
    },
    {
      title: t.services.exam.title,
      description: t.services.exam.description,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      slug: 'eye-examinations'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="luxury-card p-8 text-center group hover:scale-105 transform transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-gold-600 to-gold-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:shadow-lg transition-shadow duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-primary-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={`/${locale}/services/${service.slug}`}
                className="inline-flex items-center text-gold-600 font-medium hover:text-gold-700 transition-colors duration-200"
              >
                {locale === 'en' ? 'Learn More' : 'เรียนรู้เพิ่มเติม'}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link href={`/${locale}/services`} className="luxury-button">
            {locale === 'en' ? 'View All Services' : 'ดูบริการทั้งหมด'}
          </Link>
        </div>
      </div>
    </section>
  )
}