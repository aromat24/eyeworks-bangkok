import { type Locale, translations } from '@/lib/i18n'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

interface ServicesPageProps {
  params: { locale: Locale }
}

export default function ServicesPage({ params: { locale } }: ServicesPageProps) {
  const t = translations[locale]

  const services = [
    {
      title: t.services.prescription.title,
      description: t.services.prescription.description,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      slug: 'prescription-lenses',
      features: locale === 'en' ? [
        'Single vision lenses',
        'Progressive lenses',
        'Blue light filtering',
        'Anti-reflective coating',
        'Photochromic lenses',
        'High-index lenses'
      ] : [
        'เลนส์โฟกัสเดียว',
        'เลนส์โปรเกรสซีฟ',
        'กรองแสงสีน้ำเงิน',
        'เคลือบป้องกันแสงสะท้อน',
        'เลนส์ปรับแสงอัตโนมัติ',
        'เลนส์ความหนาแน่นสูง'
      ]
    },
    {
      title: t.services.designer.title,
      description: t.services.designer.description,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      slug: 'designer-frames',
      features: locale === 'en' ? [
        'Ray-Ban Collection',
        'Oakley Sports Frames',
        'Prada Luxury Line',
        'Tom Ford Eyewear',
        'Gucci Designer Frames',
        'Exclusive Limited Editions'
      ] : [
        'คอลเลกชัน Ray-Ban',
        'กรอบกีฬา Oakley',
        'ไลน์หรู Prada',
        'แว่นตา Tom Ford',
        'กรอบดีไซเนอร์ Gucci',
        'รุ่นพิเศษจำกัด'
      ]
    },
    {
      title: t.services.cutting.title,
      description: t.services.cutting.description,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      slug: 'lens-cutting',
      features: locale === 'en' ? [
        'Same-day completion',
        'Precision digital cutting',
        'Frame fitting service',
        'Lens thickness optimization',
        'Quality assurance testing',
        'Professional installation'
      ] : [
        'เสร็จภายในวันเดียว',
        'การตัดดิจิทัลความแม่นยำ',
        'บริการปรับกรอบ',
        'ปรับความหนาเลนส์',
        'การทดสอบคุณภาพ',
        'การติดตั้งมืออาชีพ'
      ]
    },
    {
      title: t.services.exam.title,
      description: t.services.exam.description,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      slug: 'eye-examinations',
      features: locale === 'en' ? [
        'Comprehensive eye exams',
        'Digital retinal imaging',
        'Glaucoma screening',
        'Contact lens fitting',
        'Color vision testing',
        'Prescription verification'
      ] : [
        'การตรวจตาครอบคลุม',
        'การถ่ายภาพจอประสาทตาดิจิทัล',
        'การตรวจต้อหิน',
        'การปรับคอนแทคเลนส์',
        'การทดสอบการมองเห็นสี',
        'การตรวจสอบใบสั่งแพทย์'
      ]
    }
  ]

  return (
    <>
      <Navigation locale={locale} />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-24 hero-gradient">
          <div className="max-w-7xl mx-auto section-padding text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              {t.services.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {locale === 'en' 
                ? 'Discover our comprehensive range of premium eyewear services, from precision prescription lenses to luxury designer frames, all delivered with expert care in Bangkok.'
                : 'ค้นพบบริการแว่นตาพรีเมียมครบครันของเรา ตั้งแต่เลนส์ตามใบสั่งแพทย์ความแม่นยำไปจนถึงกรอบดีไซเนอร์หรู ทั้งหมดนี้ให้บริการด้วยการดูแลจากผู้เชี่ยวชาญในกรุงเทพฯ'
              }
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div key={index} className="luxury-card p-8 group hover:scale-105 transform transition-all duration-300">
                  {/* Icon */}
                  <div className="w-24 h-24 bg-gradient-to-r from-gold-600 to-gold-400 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:shadow-lg transition-shadow duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">
                      {locale === 'en' ? 'Features:' : 'คุณสมบัติ:'}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-gold-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="inline-flex items-center bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 py-3 rounded-full font-medium hover:from-gold-700 hover:to-gold-600 transition-all duration-300"
                  >
                    {locale === 'en' ? 'Learn More' : 'เรียนรู้เพิ่มเติม'}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto section-padding text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
              {locale === 'en' ? 'Ready to Experience Premium Eyecare?' : 'พร้อมสัมผัสการดูแลสายตาพรีเมียม?'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {locale === 'en' 
                ? 'Book your consultation today and discover the perfect eyewear solution for your needs.'
                : 'จองการปรึกษาวันนี้และค้นพบโซลูชันแว่นตาที่สมบูรณ์แบบสำหรับความต้องการของคุณ'
              }
            </p>
            <Link href={`/${locale}/contact`} className="luxury-button text-lg">
              {locale === 'en' ? 'Book Consultation' : 'จองการปรึกษา'}
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}