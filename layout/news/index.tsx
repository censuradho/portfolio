import { Container, Typography } from 'components/common'
import { Footer, Header } from 'layout/_home/components'
import * as Styles from './styles'

export function NewsLayout () {
  return (
     <Styles.Container>
      <Header />
        <Styles.Main>
          <Container>
            <Styles.Title>News</Styles.Title>
            <Typography>Em breve aqui, todas as novidades sobre minha carreira e </Typography>
          </Container>
        </Styles.Main>
      <Footer />
     </Styles.Container>
  )
}