import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eyeworksbangkok.com'
  const locales = ['en', 'th']
  const services = ['prescription-lenses', 'designer-frames', 'lens-cutting', 'eye-examinations']
  const locations = ['sukhumvit', 'silom', 'siam', 'thonglor', 'phrom-phong', 'asok']

  const routes: MetadataRoute.Sitemap = []

  // Homepage for each locale
  locales.forEach(locale => {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          th: `${baseUrl}/th`,
        }
      }
    })
  })

  // Services pages
  locales.forEach(locale => {
    routes.push({
      url: `${baseUrl}/${locale}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    })

    // Individual service pages
    services.forEach(service => {
      routes.push({
        url: `${baseUrl}/${locale}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    })
  })

  // Locations pages
  locales.forEach(locale => {
    routes.push({
      url: `${baseUrl}/${locale}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    })

    // Individual location pages
    locations.forEach(location => {
      routes.push({
        url: `${baseUrl}/${locale}/locations/${location}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })

      // Service + Location combinations for maximum SEO
      services.forEach(service => {
        routes.push({
          url: `${baseUrl}/${locale}/locations/${location}/${service}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        })
      })
    })
  })

  // Contact and other pages
  locales.forEach(locale => {
    ['contact', 'about'].forEach(page => {
      routes.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  })

  return routes
}