import dynamic from 'next/dynamic'

import * as Styles from './styles'

import { Footer, Header } from './components'
import { AboveFold } from './components/above-fold'

const Services = dynamic(() => import('./components').then(t => t.Section), {
  ssr: false
})

const Contact = dynamic(() => import('./components').then(t => t.Contact), {
  ssr: false
})

const UsSection = dynamic(() => import('./components').then(t => t.UsSection), {
  ssr: false
})

export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <AboveFold />
      <UsSection />
      <Services />
      <Contact />
      <Footer />
    </Styles.Container>
  )
}