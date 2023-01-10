import { Box, Container } from 'components/common'
import Image from 'next/image'
import { SectionTitle } from '../section-title'
import * as Styles from './styles'

export function Bonus () {
  return (
    <Styles.Section>
      <Container>
        <SectionTitle 
          title="E vamos te dar mais 4 bônus incríveis"
          sub="Confira esses bônus incríveis que você irá receber se a inscrição for feita ainda hoje:"
        />
      </Container>
      <Container>
        <Box
          gap={2}
          justifyContent={{
            '@initial': 'center',
            '@table-min': 'space-between'
          }}
          alignItems="center"
          flexDirection={{
            "@initial": 'column-reverse',
            "@table-min": 'row'
          }}
        >
          <Box flexDirection="column">
            <Styles.Number>#1</Styles.Number>
            <Styles.Call>E-book</Styles.Call>
            <p>Ebook Receitas Saudáveis para utilizar na sua rotina sem fugir da alimentação saudável</p>
          </Box>
          <Image src="/layer-1.png" width={330} height={330} alt="ebook" />
        </Box>
      </Container>
      <Styles.Foreground>
        <Container>
          <Box
            gap={2}
            alignItems="center"
            justifyContent={{
              '@initial': 'center',
              '@table-min': 'space-between'
            }}
            flexDirection={{
              "@initial": 'column',
              "@table-min": 'row'
            }}
          >
            <Image src="/img_3991.jpg" width={330} height={330} alt="ebook" />
            <Box flexDirection="column">
              <Styles.Number>#2</Styles.Number>
              <Styles.Call>Nutricionista</Styles.Call>
              <p>Lives com Vivi Amato, Lê Teixeira e Nutricionista Muriely Verdin para você tirar todas suas dúvidas</p>
            </Box>
          </Box>
        </Container>
      </Styles.Foreground>
      <Container>
        <Box
          gap={2}
          alignItems="center"
          justifyContent={{
            '@initial': 'center',
            '@table-min': 'space-between'
          }}
          flexDirection={{
            "@initial": 'column-reverse',
            "@table-min": 'row'
          }}
        >
          <Box flexDirection="column">
            <Styles.Number>#3</Styles.Number>
            <Styles.Call>Antidor + Pilates</Styles.Call>
            <p>Módulo Anti-DOR + 4 Aulas de pilates 13 vídeos para prevenir e eliminar dores com fisioterapeuta Keyner Luiz</p>
          </Box>
          <Image src="/antidor.png" width={330} height={330} alt="ebook" />
        </Box>
      </Container>
      <Styles.Foreground>
        <Container>
          <Box
            gap={2}
            alignItems="center"
            justifyContent={{
              '@initial': 'center',
              '@table-min': 'space-between'
            }}
            flexDirection={{
              "@initial": 'column',
              "@table-min": 'row'
            }}
          >
            <Image src="/diastase.png" width={300} height={330} alt="ebook" />
            <Box flexDirection="column">
              <Styles.Number>#4</Styles.Number>
              <Styles.Call>Diástase</Styles.Call>
              <p>Aulas especiais para diástase com a fisioterapeuta Manu Pimentel</p>
            </Box>
          </Box>
        </Container>
      </Styles.Foreground>

    </Styles.Section>
  )
}