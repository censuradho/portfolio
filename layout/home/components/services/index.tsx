import { Box, Container, Typography } from 'components/common'
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
      <Typography color="heading" as="h3" size="md">{service.title}</Typography>
      <Typography as="p" size="sm">{service.body}</Typography>
    </Styles.Card>
  ))

  return (
    <Styles.Section>
      <Container>
        <Typography textAlign="center" as="h2" size="lg" color="heading">Serviços que oferecemos</Typography>
        <Box gap={2}>
          {renderServices}
        </Box>
      </Container>
    </Styles.Section>
  )
}