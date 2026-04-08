'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, getTranslation } from './translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get language from localStorage on mount
    const storedLanguage = localStorage.getItem('language') as Language | null
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'hi')) {
      setLanguageState(storedLanguage)
      document.documentElement.lang = storedLanguage
    } else {
      document.documentElement.lang = 'en'
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
  }

  const t = (key: string) => getTranslation(language, key)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

// Safe version of useLanguage that returns default values if not in provider
export function useLanguageSafe() {
  const context = useContext(LanguageContext)
  
  if (!context) {
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      t: (key: string) => key,
    }
  }
  
  return context
}
