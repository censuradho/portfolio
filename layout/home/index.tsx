import { Header, HeroCarousel } from './components'
import * as Styles from './styles'

export function HomeLayout () {
  return (
     <Styles.Container>
      <Header />
      <HeroCarousel />
     </Styles.Container>
  )
}