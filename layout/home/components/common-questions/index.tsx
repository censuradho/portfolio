import { Container } from 'components/common'
import { uuid } from 'lib/uuid'
import { SectionTitle } from '../section-title'
import * as Styles from './styles'

const questions = [
  {
    title: 'Iniciantes conseguem fazer o desafio ?',
    content: 'Sim, os treinos tem adaptações para todos os níveis de treinamento'
  },
  {
    title: 'Quantas horas por dia são necessárias com a prática?',
    content: 'Em média 40 minutos a 1 hora por dia'
  },
  {
    title: 'Para quem serve o Simbora Trincar ?',
    content: 'Para qualquer pessoa que queira transformar seu corpo. Emagrecer, definir ou ganhar massa muscular.'
  },
  {
    title: 'A partir do momento que eu compro,em quanto tempo eu recebo o conteúdo?',
    content: 'Assim que seu pagamento é identificado imediatamente recebe o acesso a plataforma com as informações iniciais.'
  },
  {
    title: 'Como eu entro no instagram privado do desafio ?',
    content: 'Assim que efetua o pagamento é direcionado para uma página onde encontrará um botão que te levará ao perfil privado. Basta solicitar para seguir e em até 48h será aceito. Importante colocar o seu instagram correto na hora da compra.'
  },
  {
    title: 'Precisa de equipamento ?',
    content: 'Se você tiver pesinhos ou elásticos serão utilizados. Caso não tenha ensinaremos como utilizar pesos adaptados como galões, mochilas, garrafas entre outros. Será possível treinar de qualquer maneira.'
  }
]

export function CommonQuestions () {
  const renderQuestions = questions.map((value, index) => (
    <Styles.Root key={uuid()}>
      <Styles.Trigger>
        <Styles.Index>{index}</Styles.Index>
        <Styles.Title>{value.title}</Styles.Title>
      </Styles.Trigger>
      <Styles.Content>
        <p>{value.content}</p>
      </Styles.Content>
    </Styles.Root>
  ))

  return (
    <Styles.Section>
      <Container>
        <SectionTitle 
          title="Perguntas Frequentes Respondidas"
        />
        {renderQuestions}
      </Container>
    </Styles.Section>
  )
}