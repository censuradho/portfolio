import { Container } from 'components/common/container'
import { Header, HeroCarousel, PricePlans, SectionTitle, SocialProof } from './components'
import * as Styles from './styles'

export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <HeroCarousel />
      <PricePlans />
      <SocialProof />
    </Styles.Container>
  )
}