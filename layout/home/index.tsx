import { Footer } from 'components'
import { 
  Bonus, 
  CommonQuestions, 
  Gradient, 
  Header, 
  HeroCarousel, 
  Presentation, 
  PricePlans, 
  SocialProof, 
  Terms
} from './components'
import * as Styles from './styles'

export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <HeroCarousel />
      <Presentation />
      <PricePlans />
      <SocialProof />
      <Bonus />
      <Gradient />
      <CommonQuestions />
      <Terms />
      <Footer />
    </Styles.Container>
  )
}