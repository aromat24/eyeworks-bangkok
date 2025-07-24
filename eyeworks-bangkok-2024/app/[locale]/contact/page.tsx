import { type Locale, translations } from '@/lib/i18n'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface ContactPageProps {
  params: { locale: Locale }
}

export default function ContactPage({ params: { locale } }: ContactPageProps) {
  const t = translations[locale]

  return (
    <>
      <Navigation locale={locale} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 hero-gradient">
          <div className="max-w-4xl mx-auto section-padding text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="luxury-card p-8">
                <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">
                  {locale === 'en' ? 'Book Your Consultation' : 'จองการปรึกษาของคุณ'}
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'en' ? 'First Name' : 'ชื่อ'}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                        placeholder={locale === 'en' ? 'Enter your first name' : 'กรอกชื่อของคุณ'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'en' ? 'Last Name' : 'นามสกุล'}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                        placeholder={locale === 'en' ? 'Enter your last name' : 'กรอกนามสกุลของคุณ'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'en' ? 'Email Address' : 'ที่อยู่อีเมล'}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      placeholder={locale === 'en' ? 'Enter your email' : 'กรอกอีเมลของคุณ'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'en' ? 'Phone Number' : 'หมายเลขโทรศัพท์'}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      placeholder={locale === 'en' ? 'Enter your phone number' : 'กรอกหมายเลขโทรศัพท์'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'en' ? 'Preferred Location' : 'สถานที่ที่ต้องการ'}
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors">
                      <option value="">
                        {locale === 'en' ? 'Select a location' : 'เลือกสถานที่'}
                      </option>
                      <option value="sukhumvit">
                        {locale === 'en' ? 'Sukhumvit' : 'สุขุมวิท'}
                      </option>
                      <option value="silom">
                        {locale === 'en' ? 'Silom' : 'สีลม'}
                      </option>
                      <option value="siam">
                        {locale === 'en' ? 'Siam' : 'สยาม'}
                      </option>
                      <option value="thonglor">
                        {locale === 'en' ? 'Thonglor' : 'ทองหล่อ'}
                      </option>
                      <option value="phrom-phong">
                        {locale === 'en' ? 'Phrom Phong' : 'พร้อมพงษ์'}
                      </option>
                      <option value="asok">
                        {locale === 'en' ? 'Asok' : 'อโศก'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'en' ? 'Service Interest' : 'บริการที่สนใจ'}
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors">
                      <option value="">
                        {locale === 'en' ? 'Select a service' : 'เลือกบริการ'}
                      </option>
                      <option value="prescription-lenses">
                        {t.services.prescription.title}
                      </option>
                      <option value="designer-frames">
                        {t.services.designer.title}
                      </option>
                      <option value="lens-cutting">
                        {t.services.cutting.title}
                      </option>
                      <option value="eye-examinations">
                        {t.services.exam.title}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'en' ? 'Message' : 'ข้อความ'}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      placeholder={locale === 'en' ? 'Tell us about your needs...' : 'บอกเราเกี่ยวกับความต้องการของคุณ...'}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full luxury-button text-lg"
                  >
                    {locale === 'en' ? 'Send Message' : 'ส่งข้อความ'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Main Contact Info */}
                <div className="luxury-card p-8">
                  <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">
                    {locale === 'en' ? 'Get in Touch' : 'ติดต่อเรา'}
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gold-600 to-gold-400 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-900 mb-1">{t.contact.phone}</h3>
                        <p className="text-gray-600">+66 (0) 2-XXX-XXXX</p>
                        <p className="text-gray-600">+66 (0) 8X-XXX-XXXX</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gold-600 to-gold-400 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-900 mb-1">{t.contact.email}</h3>
                        <p className="text-gray-600">info@eyeworksbangkok.com</p>
                        <p className="text-gray-600">appointments@eyeworksbangkok.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gold-600 to-gold-400 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-900 mb-1">{t.contact.address}</h3>
                        <p className="text-gray-600">
                          {locale === 'en' 
                            ? 'Multiple locations across Bangkok\'s premium districts'
                            : 'หลายสาขาทั่วย่านพรีเมียมของกรุงเทพฯ'
                          }
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gold-600 to-gold-400 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-900 mb-1">{t.contact.hours}</h3>
                        <p className="text-gray-600">
                          {locale === 'en' ? 'Monday - Saturday: 10:00 AM - 8:00 PM' : 'จันทร์ - เสาร์: 10:00 - 20:00'}
                        </p>
                        <p className="text-gray-600">
                          {locale === 'en' ? 'Sunday: 11:00 AM - 7:00 PM' : 'อาทิตย์: 11:00 - 19:00'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Service */}
                <div className="luxury-card p-6 bg-gradient-to-r from-gold-50 to-gold-100 border-gold-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-gold-600 to-gold-400 rounded-lg flex items-center justify-center text-white mr-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-primary-900">
                      {locale === 'en' ? '24/7 Emergency Service' : 'บริการฉุกเฉิน 24/7'}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {locale === 'en' 
                      ? 'Need urgent eyewear repair or replacement? Our emergency service is available around the clock.'
                      : 'ต้องการซ่อมหรือเปลี่ยนแว่นตาเร่งด่วน? บริการฉุกเฉินของเราพร้อมให้บริการตลอด 24 ชั่วโมง'
                    }
                  </p>
                  <p className="text-gold-700 font-semibold mt-2">
                    Emergency Hotline: +66 (0) 8X-XXX-XXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}