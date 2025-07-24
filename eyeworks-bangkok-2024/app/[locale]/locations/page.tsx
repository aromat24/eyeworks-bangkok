import { type Locale, translations } from '@/lib/i18n'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

interface LocationsPageProps {
  params: { locale: Locale }
}

export default function LocationsPage({ params: { locale } }: LocationsPageProps) {
  const t = translations[locale]

  const bangkokDistricts = [
    {
      name: locale === 'en' ? 'Sukhumvit' : 'สุขุมวิท',
      description: locale === 'en' 
        ? 'Bangkok\'s international business district, home to multinational corporations and expatriate communities. Our Sukhumvit location offers premium eyewear services with multilingual staff.'
        : 'เขตธุรกิจนานาชาติของกรุงเทพฯ ที่เป็นที่ตั้งของบริษัทข้ามชาติและชุมชนชาวต่างชาติ สาขาสุขุมวิทของเราให้บริการแว่นตาพรีเมียมด้วยพนักงานที่พูดได้หลายภาษา',
      slug: 'sukhumvit',
      highlights: locale === 'en' ? [
        'International business hub',
        'Multilingual service',
        'Executive eyewear collection',
        'BTS Skytrain access'
      ] : [
        'ศูนย์กลางธุรกิจนานาชาติ',
        'บริการหลายภาษา',
        'คอลเล็กชันแว่นผู้บริหาร',
        'เข้าถึงง่ายด้วย BTS'
      ]
    },
    {
      name: locale === 'en' ? 'Silom' : 'สีลม',
      description: locale === 'en'
        ? 'Bangkok\'s financial heart, where tradition meets modernity. Our Silom boutique serves banking professionals and discerning clients with sophisticated eyewear solutions.'
        : 'หัวใจทางการเงินของกรุงเทพฯ ที่ความเป็นประเพณีผสานความทันสมัย บูติกสีลมของเราให้บริการผู้เชี่ยวชาญด้านธนาคารและลูกค้าที่เข้าใจด้วยโซลูชันแว่นตาที่ซับซ้อน',
      slug: 'silom',
      highlights: locale === 'en' ? [
        'Financial district',
        'Professional clientele',
        'Premium brands',
        'MRT connectivity'
      ] : [
        'เขตการเงิน',
        'ลูกค้าระดับมืออาชีพ',
        'แบรนด์พรีเมียม',
        'เชื่อมต่อด้วย MRT'
      ]
    },
    {
      name: locale === 'en' ? 'Siam' : 'สยาม',
      description: locale === 'en'
        ? 'The shopping and entertainment capital of Bangkok. Our Siam location showcases the latest trends in designer eyewear within the city\'s most prestigious shopping district.'
        : 'เมืองหลวงของการช้อปปิ้งและความบันเทิงของกรุงเทพฯ สาขาสยามของเราจัดแสดงเทรนด์ล่าสุดในแว่นตาดีไซเนอร์ภายในย่านช้อปปิ้งที่มีชื่อเสียงที่สุดของเมือง',
      slug: 'siam',
      highlights: locale === 'en' ? [
        'Shopping paradise',
        'Latest trends',
        'Fashion-forward styles',
        'Tourist friendly'
      ] : [
        'สวรรค์ช้อปปิ้ง',
        'เทรนด์ล่าสุด',
        'สไตล์แฟชั่นชั้นนำ',
        'เป็นมิตรกับนักท่องเที่ยว'
      ]
    },
    {
      name: locale === 'en' ? 'Thonglor' : 'ทองหล่อ',
      description: locale === 'en'
        ? 'Bangkok\'s trendiest neighborhood, known for its hip cafes, art galleries, and boutique lifestyle. Our Thonglor store caters to creative professionals and style enthusiasts.'
        : 'ย่านที่มีเทรนด์ที่สุดของกรุงเทพฯ ที่เป็นที่รู้จักจากคาเฟ่ฮิป แกลลอรี่ศิลปะ และไลฟ์สไตล์บูติก ร้านทองหล่อของเราบริการผู้เชี่ยวชาญด้านสร้างสรรค์และผู้ที่ชื่นชอบสไตล์',
      slug: 'thonglor',
      highlights: locale === 'en' ? [
        'Hip & trendy area',
        'Creative community',
        'Boutique atmosphere',
        'Artistic neighborhood'
      ] : [
        'พื้นที่ฮิปและทันสมัย',
        'ชุมชนสร้างสรรค์',
        'บรรยากาศบูติก',
        'ย่านศิลปะ'
      ]
    },
    {
      name: locale === 'en' ? 'Phrom Phong' : 'พร้อมพงษ์',
      description: locale === 'en'
        ? 'An upscale residential area popular with expatriates and affluent locals. Our Phrom Phong location offers personalized service for the international community.'
        : 'พื้นที่อยู่อาศัยระดับบนที่ได้รับความนิยมจากชาวต่างชาติและคนท้องถิ่นที่ร่ำรวย สาขาพร้อมพงษ์ของเราให้บริการส่วนบุคคลสำหรับชุมชนนานาชาติ',
      slug: 'phrom-phong',
      highlights: locale === 'en' ? [
        'Upscale residential',
        'Expat community',
        'Personalized service',
        'International brands'
      ] : [
        'ที่อยู่อาศัยหรู',
        'ชุมชนชาวต่างชาติ',
        'บริการส่วนบุคคล',
        'แบรนด์นานาชาติ'
      ]
    },
    {
      name: locale === 'en' ? 'Asok' : 'อโศก',
      description: locale === 'en'
        ? 'Bangkok\'s major transportation hub connecting BTS and MRT lines. Our Asok branch provides convenient access for commuters and busy professionals.'
        : 'ศูนย์กลางการคมนาคมหลักของกรุงเทพฯ ที่เชื่อมต่อสาย BTS และ MRT สาขาอโศกของเราให้การเข้าถึงที่สะดวกสำหรับผู้เดินทางและผู้เชี่ยวชาญที่ยุ่ง',
      slug: 'asok',
      highlights: locale === 'en' ? [
        'Transport hub',
        'Easy accessibility',
        'Quick service',
        'Commuter friendly'
      ] : [
        'ศูนย์กลางคมนาคม',
        'เข้าถึงง่าย',
        'บริการรวดเร็ว',
        'เป็นมิตรกับผู้โดยสาร'
      ]
    }
  ]

  return (
    <>
      <Navigation locale={locale} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 hero-gradient">
          <div className="max-w-4xl mx-auto section-padding text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              {t.locations.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t.locations.subtitle}
            </p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="grid lg:grid-cols-2 gap-12">
              {bangkokDistricts.map((district, index) => (
                <div key={index} className="luxury-card p-8 group hover:scale-105 transform transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-gold-600 to-gold-400 rounded-xl flex items-center justify-center text-white group-hover:shadow-lg transition-shadow duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h2 className="text-2xl font-serif font-bold text-primary-900">
                        {district.name}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {district.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">
                      {locale === 'en' ? 'Highlights:' : 'จุดเด่น:'}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {district.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-gold-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/${locale}/locations/${district.slug}`}
                      className="flex-1 text-center bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 py-3 rounded-full font-medium hover:from-gold-700 hover:to-gold-600 transition-all duration-300"
                    >
                      {locale === 'en' ? 'View Details' : 'ดูรายละเอียด'}
                    </Link>
                    <Link
                      href={`/${locale}/contact?location=${district.slug}`}
                      className="flex-1 text-center border-2 border-gold-600 text-gold-600 px-6 py-3 rounded-full font-medium hover:bg-gold-600 hover:text-white transition-all duration-300"
                    >
                      {locale === 'en' ? 'Book Visit' : 'จองเยี่ยมชม'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
                {locale === 'en' ? 'Services Available at All Locations' : 'บริการที่มีทุกสาขา'}
              </h2>
              <p className="text-xl text-gray-600">
                {locale === 'en' 
                  ? 'Experience consistent premium service quality across all our Bangkok locations'
                  : 'สัมผัสคุณภาพบริการพรีเมียมที่สม่ำเสมอทั่วทุกสาขาในกรุงเทพฯ'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: t.services.prescription.title,
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                {
                  title: t.services.designer.title,
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  title: t.services.cutting.title,
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  )
                },
                {
                  title: t.services.exam.title,
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                }
              ].map((service, index) => (
                <div key={index} className="luxury-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-gold-600 to-gold-400 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-primary-900">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto section-padding text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
              {locale === 'en' ? 'Visit Us Today' : 'มาเยี่ยมชมเราวันนี้'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {locale === 'en' 
                ? 'Find the location most convenient for you and experience Bangkok\'s finest eyewear services.'
                : 'ค้นหาสถานที่ที่สะดวกที่สุดสำหรับคุณและสัมผัสบริการแว่นตาที่ดีที่สุดในกรุงเทพฯ'
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