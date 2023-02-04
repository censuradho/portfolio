import dynamic from 'next/dynamic'

import * as Styles from './styles'

import {  Header, AboveFold } from './components'

const Services = dynamic(() => import('./components').then(t => t.Section), {
  ssr: false
})

const Contact = dynamic(() => import('./components').then(t => t.Contact), {
  ssr: false
})

const About = dynamic(() => import('./components').then(t => t.About), {
  ssr: false
})

const Branding = dynamic(() => import('./components').then(t => t.Branding), {
  ssr: false
})

const Footer = dynamic(() => import('./components').then(t => t.Footer), {
  ssr: false
})


export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <AboveFold />
      <About />
      <Branding />
      <Services />
      <Contact />
      <Footer />
    </Styles.Container>
  )
}