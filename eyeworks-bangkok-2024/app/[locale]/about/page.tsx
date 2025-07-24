import { type Locale, translations } from '@/lib/i18n'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface AboutPageProps {
  params: { locale: Locale }
}

export default function AboutPage({ params: { locale } }: AboutPageProps) {
  const t = translations[locale]

  return (
    <>
      <Navigation locale={locale} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 hero-gradient">
          <div className="max-w-4xl mx-auto section-padding text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              {t.nav.about}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {locale === 'en' 
                ? 'Discover the story behind Bangkok\'s premier eyewear destination'
                : 'ค้นพบเรื่องราวเบื้องหลังจุดหมายปลายทางแว่นตาชั้นนำของกรุงเทพฯ'
              }
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto section-padding">
            <div className="luxury-card p-12">
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 text-center">
                {locale === 'en' ? 'Our Story' : 'เรื่องราวของเรา'}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {locale === 'en' 
                    ? 'For over 15 years, Eyeworks Bangkok has been at the forefront of luxury eyewear in Thailand. What started as a single boutique has grown into the city\'s most trusted destination for premium optical services.'
                    : 'มานานกว่า 15 ปี Eyeworks Bangkok ได้เป็นผู้นำด้านแว่นตาหรูในประเทศไทย สิ่งที่เริ่มต้นจากบูติกเดียวได้เติบโตเป็นจุดหมายปลายทางที่เชื่อถือได้ที่สุดในเมืองสำหรับบริการแว่นตาพรีเมียม'
                  }
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  {locale === 'en'
                    ? 'Our commitment to excellence extends beyond just providing eyewear. We believe in creating experiences that enhance not only your vision but your lifestyle. Each frame in our collection is carefully curated from the world\'s finest designers, and every lens is crafted with precision using the latest technology.'
                    : 'ความมุ่งมั่นในความเป็นเลิศของเราขยายไปเกินกว่าการให้บริการแว่นตา เราเชื่อในการสร้างประสบการณ์ที่ไม่เพียงแต่เสริมสร้างการมองเห็นของคุณ แต่ยังรวมถึงไลฟ์สไตล์ของคุณด้วย กรอบแต่ละอันในคอลเล็กชันของเราได้รับการคัดสรรอย่างพิถีพิถันจากดีไซเนอร์ที่ดีที่สุดในโลก และเลนส์ทุกชิ้นผลิตด้วย ความแม่นยำโดยใช้เทคโนโลยีล่าสุด'
                  }
                </p>

                <div className="grid md:grid-cols-3 gap-8 my-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gold-600 mb-2">15+</div>
                    <div className="text-gray-600">
                      {locale === 'en' ? 'Years of Excellence' : 'ปีแห่งความเป็นเลิศ'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gold-600 mb-2">5000+</div>
                    <div className="text-gray-600">
                      {locale === 'en' ? 'Satisfied Customers' : 'ลูกค้าที่พึงพอใจ'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gold-600 mb-2">6</div>
                    <div className="text-gray-600">
                      {locale === 'en' ? 'Bangkok Locations' : 'สาขาในกรุงเทพฯ'}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {locale === 'en'
                    ? 'Today, we continue to set the standard for optical excellence in Bangkok, combining traditional craftsmanship with modern innovation. Our team of certified optometrists and eyewear specialists are dedicated to helping you find the perfect solution for your vision needs.'
                    : 'วันนี้ เรายังคงตั้งมาตรฐานความเป็นเลิศทางด้านทัศนมาตรในกรุงเทพฯ โดยผสมผสานงานฝีมือแบบดั้งเดิมกับนวัตกรรมสมัยใหม่ ทีมนักทัศนมาตรศาสตร์ที่ได้รับการรับรองและผู้เชี่ยวชาญด้านแว่นตาของเรามุ่งมั่นที่จะช่วยคุณค้นหาโซลูชันที่สมบูรณ์แบบสำหรับความต้องการด้านการมองเห็นของคุณ'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}