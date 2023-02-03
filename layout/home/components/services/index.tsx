import { Box, Container, Icon, Typography } from 'components/common'
import * as Styles from './styles'

const services = [
  {
    icon: 'clock',
    title: 'Otimização',
    body: 'Fique no topo das pesquisas e seja o mais ágil para entregar sempre primeiro, Otimizamos SEO, Performance, Acessibilidade, Responsividade e Analytics.',
  },
  {
    icon: 'code',
    title: 'Desenvolvimento de software',
    body: 'Precisando de uma solução que atenda as suas necessidades? Marque uma reunião com nossos consultores e comece a já o planejamento do seu software customizado.'
  },
  {
    icon: 'database',
    title: 'Analise de dados',
    body: 'Integre suas bases de dados para acelerar a leitura das informações e a tomada de decisão. Nosso time possui expertise em integração de bases complexas para dar suporte a operações de vendas e logística.'
  },
]

export function Section () {
  const renderServices = services.map((service, index) => (
    <Styles.Card key={index}>
      <Styles.IconCard>
        <Icon name={service.icon as any} size={30} color="background" />
      </Styles.IconCard>
      <Typography textAlign="center" color="heading" as="h3" size="md">{service.title}</Typography>
      <Typography textAlign="center" as="p" size="sm">{service.body}</Typography>
    </Styles.Card>
  ))

  return (
    <Styles.Section>
      <Container>
        <Typography 
          textAlign="center" 
          as="h2" 
          fontWeight="800" 
          size="xlg" 
          color="heading" 
          id="soluções"
        >Soluções que ofereço</Typography>
        <Box gap={2} marginTop={4} flexWrap="wrap"  justifyContent="center">
          {renderServices}
        </Box>
      </Container>
    </Styles.Section>
  )
}