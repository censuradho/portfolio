import { Box, Container, Typography } from 'components/common'
import * as Styles from './styles'

export function UsSection () {
  return (
    <Styles.Section id="quem-somos">
      <Container>
        <Box  flexDirection="column" gap={1} style={{ maxWidth: '450px' }}>
          <Typography 
            as="h2" 
            fontWeight="800" 
            size="xlg" 
            color="heading" 
            
          >Quem somos</Typography>
          <Typography as="p">
            Muito Prazer, somos a <Typography as="strong" color="heading">Estúdio Prisma</Typography>! 
            Uma consultoria de software com foco no cliente.
            Estamos começando no mercado agora, mas com sede de resultado, nosso método de trabalho 
            é pautado no pilar do respeito ao cliente, transparência, dedicação e resultado. 
            Mais do que negócios, acreditamos em relações.
          </Typography>
        </Box>
      </Container>
      <Styles.Figure>
        <Styles.Image
          fill
          src="/hack-capital-uv5_bsypFUM-unsplash.jpg" 
          alt="image"
        />
      </Styles.Figure>
    </Styles.Section>
  )
}