import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
const headers = { 'accept-language': 'en-US,pt-BR,en;q=0.5' }
const languages = new Negotiator({ headers }).languages()
const locales = ['en-US', 'pt-BR']
const defaultLocale = 'pt-BR'
 
match(languages, locales, defaultLocale)