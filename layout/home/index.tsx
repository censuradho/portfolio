import * as Styles from './styles'

import { Header } from './components'
import { AboveFold } from './components/above-fold'

export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <AboveFold />
    </Styles.Container>
  )
}