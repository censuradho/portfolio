import { Container, Icons } from 'components/common'
import { SectionTitle } from '../section-title'
import * as Styles from './styles'

export function Presentation () {
  return (
    <Styles.Section>
      <Container>
        <SectionTitle 
          title="O que você vai receber no Simbora Trincar ?"
          sub={`
          O desafio SIMBORA TRINCAR já transformou mais de 10 mil corpos e mentes com o
          Nossa metodologia exclusiva desenvolvida para otimizar o emagrecimento, queima 
          de gordura e definição muscular transforma seu corpo através de ferramentas para 
          mudar a sua forma de pensar e treinos exclusivos para queima de gordura.  
          `}
        />
        <Styles.Benefits>
          <li>
            <Icons size={100} name="happyBold" />
            <p>
            Lives de treino de 
            Segunda a Sexta
            em instagram PRIVADO
            </p>
          </li>
          <li>
            <Icons size={100} name="cutleryBold" />
            <p>
            Cardápios elaborados por nutricionista para ganho de emagrecimento ou ganho de massa muscular(também nas versões vegetariana e vegana)
            </p>
          </li>
          <li>
            <Icons size={100} name="instagramBold" />
            <p>
            Instagram fechado exclusivo para os participantes acompanharem as lives
            </p>
          </li>
          <li>
            <Icons size={100} name="conversationBold" />
            <p>
            Grupo Exclusivo com Vivi Amato, Lê Teixeira e todos participantes
            </p>
          </li>
          <li>
            <Icons size={100} name="addBold" />
            <p>
              30 TREINOS queima gordura gravados para acelerar o emagrecimento
            </p>
          </li>
          <li>
            <Icons size={100} name="smartphoneBold" />
            <p>
              Acesso online pelo celular ou computador (plataforma online e aplicativo)
            </p>
          </li>
          <li>
            <Icons size={100} name="calendarBold" />
            <p>
              Acesso por 45 dias no plano express e  4 meses no plano express + janeiro
            </p>
          </li>
          <li>
            <Icons size={100} name="speedBold" />
            <p>
            Aulas de treinamento mental e mudança de hábitos
            </p>
          </li>
        </Styles.Benefits>
 
      </Container>
    </Styles.Section>
  )
}