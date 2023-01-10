import { Box, ButtonAnchor, Container } from 'components/common'
import { uuid } from 'lib/uuid'
import Image from 'next/image'
import { toLocaleString } from 'utils/helpers'
import { SectionTitle } from '../section-title'
import * as Styles from './styles'

const plans = [
  {
    label: 'Anual',
    from: 1985,
    to: 1290,
    recommended: false,
    description: '35% de desconto',
    link: 'https://pay.hotmart.com/I39214669L?checkoutMode=6&off=giwjs57c&offDiscount=ANUAL35&bid=1671482578804&_hi=eyJjaWQiOiIxNjczMDA1OTQ2NDU4MTcyNDUzMzAzNzUyNzA3ODQwIiwiYmlkIjoiMTY3MzAwNTk0NjQ1ODE3MjQ1MzMwMzc1MjcwNzg0MCIsInNpZCI6IjQ4MzZlYzA1ZDlhZDQyMjE5YjMyY2M2N2ZlNTA3NDQ1In0%3D.1673302837885',
    benefits: [
      {
        label: 'Desconto de 35%, são 694,75 de desconto',
        emphasis: false
      },
      {
        label: 'Um ano completo - Próximas 5 edições do Simbora Trincar',
        emphasis: false
      },
      {
        label: 'Garante 5 edições sem reajuste de preços',
        emphasis: true
      }
    ]
  },
  {
    label: 'Semestral',
    from: 1191,
    to: 893.25,
    recommended: true,
    description: '25% de desconto',
    link: 'https://pay.hotmart.com/I39214669L?checkoutMode=6&off=kof6jy0v&offDiscount=SEMESTRAL25&_ga=2.11903863.298818360.1671482624-1539207102.1628022271&_hi=eyJjaWQiOiIxNjczMDA1OTQ2NDU4MTcyNDUzMzAzNzUyNzA3ODQwIiwiYmlkIjoiMTY3MzAwNTk0NjQ1ODE3MjQ1MzMwMzc1MjcwNzg0MCIsInNpZCI6IjQ4MzZlYzA1ZDlhZDQyMjE5YjMyY2M2N2ZlNTA3NDQ1In0%3D.1673304540373&bid=1673304544953',
    benefits: [
      {
        label: 'Desconto de 25%',
        emphasis: false
      },
      {
        label: '3 edições do Simbora Trincar',
        emphasis: false
      },
      {
        label: 'Participa de todos sorteios das 3 edições',
        emphasis: true
      }
    ]
  },
  {
    label: 'Apenas próxima turma',
    from: 397,
    to: 317.60,
    recommended: false,
    description: '20% de desconto',
    link: 'https://pay.hotmart.com/I39214669L?checkoutMode=6&off=zqduzl3j&offDiscount=ALUNO20&_hi=eyJjaWQiOiIxNjczMDA1OTQ2NDU4MTcyNDUzMzAzNzUyNzA3ODQwIiwiYmlkIjoiMTY3MzAwNTk0NjQ1ODE3MjQ1MzMwMzc1MjcwNzg0MCIsInNpZCI6IjQ4MzZlYzA1ZDlhZDQyMjE5YjMyY2M2N2ZlNTA3NDQ1In0=.1673304555821',
    benefits: [
      {
        label: '1 edição do Simbora Trincar (Início 17/01)',
        emphasis: false
      },
      {
        label: 'Desconto de 20% sob o valor de novos alunos',
        emphasis: false
      },
      {
        label: 'Participa de todos sorteios da edição',
        emphasis: true
      }
    ]
  }
]

export function PricePlans () {
  const renderPlans = plans.map(plan => {

    const renderBenefits = plan.benefits.map(benefit => (
      <Styles.Benefit 
        key={uuid()}
      >
        <Image src="/done.svg" width={15} height={15} alt="done" />
        {benefit.label}
      </Styles.Benefit>
    ))
    
    return (
      <Styles.Card
        active={plan.recommended}
        key={uuid()}
      >
        <Styles.Label>{plan.label}</Styles.Label>

        <Box flexDirection="column"  justifyContent="center" alignItems="center">
          <Styles.From>{toLocaleString(plan.from)}</Styles.From>
          <Box alignItems="flexEnd">
            <Styles.To>{toLocaleString(plan.to)}</Styles.To>
            <Styles.InCash>à vista</Styles.InCash>
          </Box>
        </Box>
        <Styles.Description>{plan.description}</Styles.Description>
        <ul>
          {renderBenefits}
        </ul>
        <ButtonAnchor 
          href={plan.link} 
          fullWidth 
          variant={plan.recommended ? 'primary' : 'stroke'}
          target="_blank"
          rel="noreferrer"
        >Quero esse plano</ButtonAnchor>

      </Styles.Card>
    )
  })

  return (
    <Styles.Container>
      <Container>
        <SectionTitle title="Escolha seu plano simbora trincar" />
        <Styles.CardList>
          {renderPlans}
        </Styles.CardList>
      </Container>
    </Styles.Container>
  )
}