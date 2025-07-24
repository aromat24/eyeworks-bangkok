import { type Locale, translations } from '@/lib/i18n'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ServicePageProps {
  params: { locale: Locale; service: string }
}

const serviceData = {
  'prescription-lenses': {
    en: {
      title: 'Precision Prescription Lenses',
      subtitle: 'Custom crafted lenses for perfect vision',
      description: 'Experience unparalleled clarity with our precision-crafted prescription lenses. Using the latest technology and premium materials, we create lenses tailored to your exact vision needs.',
      features: [
        'Digital lens surfacing technology',
        'Anti-reflective coating',
        'Blue light filtering',
        'Scratch-resistant treatment',
        'UV protection',
        'Thin & lightweight options'
      ],
      process: [
        'Comprehensive eye examination',
        'Digital measurements',
        'Lens material selection',
        'Precision crafting',
        'Quality testing',
        'Professional fitting'
      ]
    },
    th: {
      title: 'เลนส์ตามใบสั่งแพทย์ความแม่นยำ',
      subtitle: 'เลนส์ที่ผลิตเฉพาะสำหรับการมองเห็นที่สมบูรณ์แบบ',
      description: 'สัมผัสความชัดเจนที่ไม่มีใครเทียบได้ด้วยเลนส์ตามใบสั่งแพทย์ที่ผลิตด้วยความแม่นยำ การใช้เทคโนโลยีล่าสุดและวัสดุพรีเมียม เราสร้างเลนส์ที่ตอบสนองความต้องการด้านการมองเห็นของคุณอย่างแม่นยำ',
      features: [
        'เทคโนโลยีการขึ้นรูปเลนส์ดิจิทัล',
        'เคลือบป้องกันแสงสะท้อน',
        'กรองแสงสีน้ำเงิน',
        'การป้องกันรอยขีดข่วน',
        'ป้องกันรังสี UV',
        'ตัวเลือกบางและเบา'
      ],
      process: [
        'การตรวจสายตาครอบคลุม',
        'การวัดแบบดิจิทัล',
        'การเลือกวัสดุเลนส์',
        'การผลิตความแม่นยำ',
        'การทดสอบคุณภาพ',
        'การปรับแต่งมืออาชีพ'
      ]
    }
  },
  'designer-frames': {
    en: {
      title: 'Luxury Designer Frames',
      subtitle: 'Curated collection of world-renowned brands',
      description: 'Discover our exclusive collection of luxury designer frames from the world\'s most prestigious eyewear brands. Each frame combines exceptional craftsmanship with timeless style.',
      features: [
        'Authentic designer brands',
        'Premium materials',
        'Italian craftsmanship',
        'Limited edition collections',
        'Celebrity-endorsed styles',
        'Lifetime authenticity guarantee'
      ],
      process: [
        'Style consultation',
        'Face shape analysis',
        'Brand selection',
        'Frame fitting',
        'Lens integration',
        'Final adjustment'
      ]
    },
    th: {
      title: 'กรอบแว่นดีไซเนอร์หรู',
      subtitle: 'คอลเลกชันที่คัดสรรจากแบรนด์ระดับโลก',
      description: 'ค้นพบคอลเลกชันพิเศษของกรอบแว่นดีไซเนอร์หรูจากแบรนด์แว่นตาที่มีชื่อเสียงที่สุดในโลก แต่ละกรอบผสมผสานงานฝีมือยอดเยี่ยมกับสไตล์ที่เหนือกาลเวลา',
      features: [
        'แบรนด์ดีไซเนอร์ของแท้',
        'วัสดุพรีเมียม',
        'งานฝีมือของอิตาลี',
        'คอลเลกชันรุ่นจำกัด',
        'สไตล์ที่ดารารับรอง',
        'รับประกันความแท้ตลอดชีวิต'
      ],
      process: [
        'การปรึกษาสไตล์',
        'การวิเคราะห์รูปหน้า',
        'การเลือกแบรนด์',
        'การปรับกรอบ',
        'การรวมเลนส์',
        'การปรับแต่งขั้นสุดท้าย'
      ]
    }
  },
  'lens-cutting': {
    en: {
      title: 'Professional Lens Cutting',
      subtitle: 'Same-day precision lens cutting service',
      description: 'Our state-of-the-art lens cutting facility ensures perfect precision and same-day completion for most prescriptions. Experience professional craftsmanship with every lens.',
      features: [
        'Digital lens edging',
        'Same-day completion',
        'Precision measurements',
        'Quality control testing',
        'Frame compatibility check',
        'Professional installation'
      ],
      process: [
        'Prescription verification',
        'Frame preparation',
        'Digital cutting',
        'Edge polishing',
        'Quality inspection',
        'Professional fitting'
      ]
    },
    th: {
      title: 'การตัดเลนส์มืออาชีพ',
      subtitle: 'บริการตัดเลนส์ความแม่นยำในวันเดียว',
      description: 'โรงงานตัดเลนส์ที่ทันสมัยของเรารับประกันความแม่นยำที่สมบูรณ์แบบและการเสร็จสิ้นในวันเดียวกันสำหรับใบสั่งแพทย์ส่วนใหญ่ สัมผัส งานฝีมือมืออาชีพกับทุกเลนส์',
      features: [
        'การขลิบเลนส์ดิจิทัล',
        'เส ร็จในวันเดียว',
        'การวัดความแม่นยำ',
        'การทดสอบควบคุมคุณภาพ',
        'การตรวจสอบความเข้ากันได้ของกรอบ',
        'การติดตั้งมืออาชีพ'
      ],
      process: [
        'การตรวจสอบใบสั่งแพทย์',
        'การเตรียมกรอบ',
        'การตัดดิจิทัล',
        'การขัดขอบ',
        'การตรวจสอบคุณภาพ',
        'การปรับแต่งมืออาชีพ'
      ]
    }
  },
  'eye-examinations': {
    en: {
      title: 'Comprehensive Eye Examinations',
      subtitle: 'Advanced eye health assessments',
      description: 'Our comprehensive eye examinations use the latest diagnostic equipment to assess your vision and eye health. Early detection and prevention are key to maintaining optimal eye health.',
      features: [
        'Digital retinal imaging',
        'Glaucoma screening',
        'Visual field testing',
        'Contact lens consultation',
        'Prescription updates',
        'Eye health counseling'
      ],
      process: [
        'Medical history review',
        'Visual acuity testing',
        'Refraction assessment',
        'Eye health examination',
        'Diagnostic imaging',
        'Consultation & recommendations'
      ]
    },
    th: {
      title: 'การตรวจสายตาครอบคลุม',
      subtitle: 'การประเมินสุขภาพตาขั้นสูง',
      description: 'การตรวจสายตาครอบคลุมของเราใช้อุปกรณ์วินิจฉัยล่าสุดเพื่อประเมินการมองเห็นและสุขภาพตาของคุณ การตรวจพบและการป้องกันล่วงหน้าเป็นกุญแจสำคัญในการรักษาสุขภาพตาให้อยู่ในสภาพเหมาะสม',
      features: [
        'การถ่ายภาพจอประสาทตาดิจิทัล',
        'การตรวจหาต้อหิน',
        'การทดสอบสนามการมองเห็น',
        'การปรึกษาคอนแทคเลนส์',
        'การปรับปรุงใบสั่งแพทย์',
        'การให้คำปรึกษาสุขภาพตา'
      ],
      process: [
        'การทบทวนประวิติทางการแพทย์',
        'การทดสอบความคมชัดของการมองเห็น',
        'การประเมินการหักแสง',
        'การตรวจสุขภาพตา',
        'การถ่ายภาพวินิจฉัย',
        'การปรึกษาและคำแนะนำ'
      ]
    }
  }
}

export async function generateStaticParams() {
  const services = ['prescription-lenses', 'designer-frames', 'lens-cutting', 'eye-examinations']
  const locales = ['en', 'th']
  
  return locales.flatMap(locale =>
    services.map(service => ({
      locale,
      service
    }))
  )
}

export default function ServicePage({ params: { locale, service } }: ServicePageProps) {
  if (!serviceData[service as keyof typeof serviceData]) {
    notFound()
  }

  const data = serviceData[service as keyof typeof serviceData][locale]
  const t = translations[locale]

  return (
    <>
      <Navigation locale={locale} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 hero-gradient">
          <div className="max-w-4xl mx-auto section-padding text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-gold-200 mb-8">
              {data.subtitle}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {data.description}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8">
                  {locale === 'en' ? 'Key Features' : 'คุณสมบัติหลัก'}
                </h2>
                <div className="space-y-4">
                  {data.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-gold-600 to-gold-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-lg">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="luxury-card p-8">
                <h3 className="text-2xl font-serif font-bold text-primary-900 mb-6">
                  {locale === 'en' ? 'Our Process' : 'กระบวนการของเรา'}
                </h3>
                <div className="space-y-4">
                  {data.process.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gold-100 text-gold-700 rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Integration */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
                {locale === 'en' ? 'Available at All Bangkok Locations' : 'มีบริการที่สาขาทุกแห่งในกรุงเทพฯ'}
              </h2>
              <p className="text-xl text-gray-600">
                {locale === 'en' 
                  ? 'Experience our premium services at any of our Bangkok locations'
                  : 'สัมผัสบริการพรีเมียมของเราที่สาขาใดก็ได้ในกรุงเทพฯ'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {['sukhumvit', 'silom', 'siam'].map((location, index) => (
                <Link 
                  key={index}
                  href={`/${locale}/locations/${location}/${service}`}
                  className="luxury-card p-6 text-center group hover:scale-105 transform transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-gold-600 to-gold-400 rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:shadow-lg transition-shadow duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary-900 mb-2 capitalize">
                    {location === 'sukhumvit' ? (locale === 'en' ? 'Sukhumvit' : 'สุขุมวิท') : 
                     location === 'silom' ? (locale === 'en' ? 'Silom' : 'สีลม') : 
                     (locale === 'en' ? 'Siam' : 'สยาม')}
                  </h3>
                  <p className="text-gold-600 font-medium">
                    {locale === 'en' ? 'Book Service' : 'จองบริการ'}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto section-padding text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
              {locale === 'en' ? 'Ready to Get Started?' : 'พร้อมที่จะเริ่มต้น?'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {locale === 'en' 
                ? 'Contact us today to schedule your appointment and experience our premium service.'
                : 'ติดต่อเราวันนี้เพื่อนัดหมายและสัมผัสบริการพรีเมียมของเรา'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`} className="luxury-button">
                {locale === 'en' ? 'Book Consultation' : 'จองการปรึกษา'}
              </Link>
              <Link 
                href={`/${locale}/services`} 
                className="px-8 py-4 border-2 border-primary-900 text-primary-900 rounded-full font-medium hover:bg-primary-900 hover:text-white transition-all duration-300"
              >
                {locale === 'en' ? 'View All Services' : 'ดูบริการทั้งหมด'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}