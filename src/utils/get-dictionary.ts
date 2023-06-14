import 'server-only'
import type { Locale } from '@/config/i18n'

const dictionaries = {
  'pt-BR': () => import('@/dictionaries/pt-BR.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()