'use client'

import { useState } from 'react'
import Link from 'next/link'
import { type Locale, translations } from '@/lib/i18n'

interface NavigationProps {
  locale: Locale
}

export default function Navigation({ locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = translations[locale]

  const navItems = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/locations`, label: t.nav.locations },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-gold-600 to-gold-400 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <span className="text-2xl font-serif font-bold text-primary-900">Eyeworks</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gold-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-gray-200 pl-6">
              <Link
                href={`/en${typeof window !== 'undefined' ? window.location.pathname.replace(/^\/[a-z]{2}/, '') : ''}`}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  locale === 'en' 
                    ? 'bg-gold-100 text-gold-700' 
                    : 'text-gray-600 hover:text-gold-600'
                }`}
              >
                EN
              </Link>
              <Link
                href={`/th${typeof window !== 'undefined' ? window.location.pathname.replace(/^\/[a-z]{2}/, '') : ''}`}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  locale === 'th' 
                    ? 'bg-gold-100 text-gold-700' 
                    : 'text-gray-600 hover:text-gold-600'
                }`}
              >
                TH
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-gold-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 pt-4 border-t border-gray-100 mt-4">
              <Link
                href={`/en${typeof window !== 'undefined' ? window.location.pathname.replace(/^\/[a-z]{2}/, '') : ''}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  locale === 'en' 
                    ? 'bg-gold-100 text-gold-700' 
                    : 'text-gray-600 hover:text-gold-600'
                }`}
              >
                English
              </Link>
              <Link
                href={`/th${typeof window !== 'undefined' ? window.location.pathname.replace(/^\/[a-z]{2}/, '') : ''}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  locale === 'th' 
                    ? 'bg-gold-100 text-gold-700' 
                    : 'text-gray-600 hover:text-gold-600'
                }`}
              >
                ไทย
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}