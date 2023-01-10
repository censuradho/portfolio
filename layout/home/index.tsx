import { 
  Bonus, 
  Header, 
  HeroCarousel, 
  PricePlans, 
  SocialProof 
} from './components'
import * as Styles from './styles'

export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <HeroCarousel />
      <PricePlans />
      <SocialProof />
      <Bonus />
    </Styles.Container>
  )
}