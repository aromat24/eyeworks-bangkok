export type Locale = 'en' | 'th'

export const locales: Locale[] = ['en', 'th']
export const defaultLocale: Locale = 'en'

export function getLocale(pathname: string): Locale {
  const segments = pathname.split('/')
  const locale = segments[1] as Locale
  return locales.includes(locale) ? locale : defaultLocale
}

export function removeLocalePrefix(pathname: string): string {
  const segments = pathname.split('/')
  const locale = segments[1] as Locale
  if (locales.includes(locale)) {
    return '/' + segments.slice(2).join('/')
  }
  return pathname
}

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      locations: 'Locations',
      contact: 'Contact',
      about: 'About Us'
    },
    hero: {
      title: 'Premium Eyewear in the Heart of Bangkok',
      subtitle: 'Discover luxury frames, precision lenses, and expert care at Bangkok\'s finest optical boutique',
      cta: 'Book Consultation',
      cta_secondary: 'View Collection'
    },
    services: {
      title: 'Our Premium Services',
      prescription: {
        title: 'Prescription Lenses',
        description: 'Custom prescription lenses crafted with precision using the latest technology for perfect vision.'
      },
      designer: {
        title: 'Designer Frames',
        description: 'Curated collection of luxury eyewear from world-renowned designers and premium brands.'
      },
      cutting: {
        title: 'On-Site Lens Cutting',
        description: 'Professional lens cutting and fitting service with same-day completion for most prescriptions.'
      },
      exam: {
        title: 'Eye Examinations',
        description: 'Comprehensive eye health assessments by certified optometrists using advanced equipment.'
      }
    },
    locations: {
      title: 'Serving Bangkok & Beyond',
      subtitle: 'Premium eyewear services across Bangkok\'s most prestigious districts'
    },
    contact: {
      title: 'Visit Our Boutique',
      subtitle: 'Experience luxury eyewear in the heart of Bangkok',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Hours'
    },
    footer: {
      about: 'About Eyeworks',
      services: 'Services',
      locations: 'Locations',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  th: {
    nav: {
      home: 'หน้าแรก',
      services: 'บริการ',
      locations: 'สาขา',
      contact: 'ติดต่อ',
      about: 'เกี่ยวกับเรา'
    },
    hero: {
      title: 'แว่นตาพรีเมียมในใจกลางกรุงเทพฯ',
      subtitle: 'ค้นพบกรอบแว่นหรู เลนส์ความแม่นยำ และการดูแลจากผู้เชี่ยวชาญที่ร้านแว่นตาชั้นนำของกรุงเทพฯ',
      cta: 'จองการปรึกษา',
      cta_secondary: 'ดูคอลเลกชัน'
    },
    services: {
      title: 'บริการพรีเมียมของเรา',
      prescription: {
        title: 'เลนส์ตามใบสั่งแพทย์',
        description: 'เลนส์ตามใบสั่งแพทย์ที่ผลิตด้วยความแม่นยำโดยใช้เทคโนโลยีล่าสุดเพื่อการมองเห็นที่สมบูรณ์แบบ'
      },
      designer: {
        title: 'กรอบแว่นดีไซเนอร์',
        description: 'คอลเลกชันแว่นตาหรูที่คัดสรรมาจากดีไซเนอร์ระดับโลกและแบรนด์พรีเมียม'
      },
      cutting: {
        title: 'การตัดเลนส์ในสถานที่',
        description: 'บริการตัดและใส่เลนส์แว่นตาอย่างมืออาชีพพร้อมการทำให้เสร็จในวันเดียวกันสำหรับใบสั่งแพทย์ส่วนใหญ่'
      },
      exam: {
        title: 'การตรวจสายตา',
        description: 'การประเมินสุขภาพดวงตาอย่างครอบคลุมโดยนักทัศนมาตรศาสตร์ที่ผ่านการรับรองด้วยอุปกรณ์ทันสมัย'
      }
    },
    locations: {
      title: 'ให้บริการกรุงเทพฯ และพื้นที่โดยรอบ',
      subtitle: 'บริการแว่นตาพรีเมียมทั่วย่านชั้นนำของกรุงเทพฯ'
    },
    contact: {
      title: 'เยี่ยมชมบูติกของเรา',
      subtitle: 'สัมผัสประสบการณ์แว่นตาหรูในใจกลางกรุงเทพฯ',
      phone: 'โทรศัพท์',
      email: 'อีเมล',
      address: 'ที่อยู่',
      hours: 'เวลาทำการ'
    },
    footer: {
      about: 'เกี่ยวกับ Eyeworks',
      services: 'บริการ',
      locations: 'สาขา',
      contact: 'ติดต่อ',
      privacy: 'นโยบายความเป็นส่วนตัว',
      terms: 'ข้อกำหนดการใช้บริการ'
    }
  }
}