import dynamic from 'next/dynamic'

import * as Styles from './styles'

import { Contact, Footer, Header } from './components'
import { AboveFold } from './components/above-fold'

const Services = dynamic(() => import('./components').then(t => t.Section), {
  ssr: false
})


export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <AboveFold />
      <Services />
      <Contact />
      <Footer />
    </Styles.Container>
  )
}