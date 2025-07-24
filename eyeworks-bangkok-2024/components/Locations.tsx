import Link from 'next/link'
import { type Locale, translations } from '@/lib/i18n'

interface LocationsProps {
  locale: Locale
}

export default function Locations({ locale }: LocationsProps) {
  const t = translations[locale]

  const bangkokDistricts = [
    {
      name: locale === 'en' ? 'Sukhumvit' : 'สุขุมวิท',
      description: locale === 'en' 
        ? 'Premium eyewear services in Bangkok\'s business district' 
        : 'บริการแว่นตาพรีเมียมในย่านธุรกิจของกรุงเทพฯ',
      slug: 'sukhumvit'
    },
    {
      name: locale === 'en' ? 'Silom' : 'สีลม',
      description: locale === 'en' 
        ? 'Luxury frames and expert eye care in the financial center' 
        : 'กรอบแว่นหรูและการดูแลสายตาจากผู้เชี่ยวชาญในศูนย์การเงิน',
      slug: 'silom'
    },
    {
      name: locale === 'en' ? 'Siam' : 'สยาม',
      description: locale === 'en' 
        ? 'Designer eyewear in the heart of Bangkok\'s shopping district' 
        : 'แว่นตาดีไซเนอร์ในใจกลางย่านช้อปปิ้งของกรุงเทพฯ',
      slug: 'siam'
    },
    {
      name: locale === 'en' ? 'Thonglor' : 'ทองหล่อ',
      description: locale === 'en' 
        ? 'Boutique optical services in Bangkok\'s trendy neighborhood' 
        : 'บริการแว่นตาบูติกในย่านมีสไตล์ของกรุงเทพฯ',
      slug: 'thonglor'
    },
    {
      name: locale === 'en' ? 'Phrom Phong' : 'พร้อมพงษ์',
      description: locale === 'en' 
        ? 'Premium optical care for the expatriate community' 
        : 'การดูแลสายตาพรีเมียมสำหรับชุมชนชาวต่างชาติ',
      slug: 'phrom-phong'
    },
    {
      name: locale === 'en' ? 'Asok' : 'อโศก',
      description: locale === 'en' 
        ? 'Professional eyewear services at the city\'s transportation hub' 
        : 'บริการแว่นตามืออาชีพ ณ ศูนย์กลางการคมนาคมของเมือง',
      slug: 'asok'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
            {t.locations.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t.locations.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-gold-400 mx-auto"></div>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bangkokDistricts.map((district, index) => (
            <div
              key={index}
              className="luxury-card p-6 group hover:scale-105 transform transition-all duration-300"
            >
              {/* Location Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-gold-600 to-gold-400 rounded-xl flex items-center justify-center mb-4 text-white group-hover:shadow-lg transition-shadow duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-primary-900 mb-3">
                {district.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {district.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={`/${locale}/locations/${district.slug}`}
                className="inline-flex items-center text-gold-600 font-medium hover:text-gold-700 transition-colors duration-200"
              >
                {locale === 'en' ? 'View Services' : 'ดูบริการ'}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-20 luxury-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
              {locale === 'en' ? 'Find Us in Bangkok' : 'ค้นหาเราในกรุงเทพฯ'}
            </h3>
            <p className="text-gray-600">
              {locale === 'en' 
                ? 'Located in the most convenient areas of Bangkok for your eyewear needs'
                : 'ตั้งอยู่ในพื้นที่ที่สะดวกที่สุดของกรุงเทพฯ เพื่อตอบสนองความต้องการด้านแว่นตาของคุณ'
              }
            </p>
          </div>
          
          {/* Placeholder for map - would integrate with Google Maps */}
          <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-lg">
                {locale === 'en' ? 'Interactive Map Coming Soon' : 'แผนที่อินเทอร์แอคทีฟเร็วๆ นี้'}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link href={`/${locale}/locations`} className="luxury-button">
            {locale === 'en' ? 'View All Locations' : 'ดูสถานที่ทั้งหมด'}
          </Link>
        </div>
      </div>
    </section>
  )
}