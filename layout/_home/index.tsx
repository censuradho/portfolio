import { Box, Container, Typography } from 'components/common'
import dynamic from 'next/dynamic'
import { Experiences, Footer, Header } from './components'
import * as Styles from './styles'
import { HomePageProps } from './types'

const ModalLinks = dynamic(() => import('./components').then(t => t.ModalLinks), {
  ssr: false
})

export function HomeLayout (props: HomePageProps) {
  return (
    <Styles.Container>
      <Header />
      <Styles.Main>
        <Container>
          <Box flexDirection="column" gap={4}>
            <Box flexDirection="column" >
              <Styles.MyName>Gustavo Leite Oliveira</Styles.MyName>
              <Box flexDirection="column" gap={1} alignItems="flexStart">
                <Typography
                  as="h2"
                  size="xsm" 
                  color="heading"
                >Front-end Developer - React | Next | Node | Nest</Typography>
                <Typography
                  size="xsm"
                  as="p"
                >
                Desenvolvedor de software com foco no Frontend, apaixonado por 
                entregar projetos desafiadores e promover experiências incríveis para as pessoas.
                Eterno estudante, sempre aprendendo algo novo pra melhorar minha caixa de ferramentas.
                Participei do desenvolvimento de sistemas de grande porte como e-commerces e ERPs.
                Atualmente trabalho com Frontend React, experiência +3 anos, mas estou estudando backend node com Nest.js.
                Typescript é minha paixão, projetos nessa linguagem são muito bem vindos.
                </Typography>
                <ModalLinks>
                  <Styles.Button>Pressione <kbd>ctrl</kbd><kbd>K</kbd> para iniciar</Styles.Button>
                </ModalLinks>
              </Box>
            </Box>
            <Experiences />
          </Box>
        </Container>
      </Styles.Main>
      <Footer />
    </Styles.Container>
  )
}