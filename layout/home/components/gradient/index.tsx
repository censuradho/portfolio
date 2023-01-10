import { Box, Container } from 'components/common'
import Image from 'next/image'
import * as Styles from './styles'

export function Gradient () {
  return (
    <Styles.Section>
      <Container style={{ display: 'flex', height: '100%' }}>
        <Box flex={1} gap={4} flexDirection="column" justifyContent="center"  alignItems="center">
          <Box flexDirection="column">
            <Styles.Title>Você terá acesso por 45 DIAS no plano único ou 4 MESES no plano express + janeiro</Styles.Title>
            <Styles.Subtitle>e <span>garantia incondicional</span> de 7 dias.</Styles.Subtitle>
          </Box>
          <Styles.ImageContainer>
            <Image src="/dgb5.png" fill alt="celular" />
          </Styles.ImageContainer>
        </Box>
      </Container>
    </Styles.Section>
  )
}