import { Avatar, Box, Container, Typography } from 'components/common'
import { pathExternals } from 'constants/routes'
import * as Styles from './styles'

export function About () {
  return (
    <Styles.Section id="quem-somos">
      <Container>
        <Box  flexDirection="column" gap={1} style={{ maxWidth: '450px' }}>
          <Typography 
            as="h2" 
            fontWeight="800" 
            size="xlg" 
            color="heading" 
            
          >Sobre</Typography>
          <Typography as="p">
            Muito Prazer, Meu nome é <a href={pathExternals.linkdin} target="_blank" rel="noreferrer">
              <Typography as="strong" color="heading">Gustavo Leite Oliveira</Typography></a>! 
            Sou desenvolvedor de software a mais de 4 anos, atuei em vários seguimentos desde E-Commerces à ERPs.
            Meu método de trabalho é pautado no pilar do respeito ao cliente, transparência, dedicação e resultado. 
            Mais do que negócios, acredito em relações.  
          </Typography>
          <Box alignItems="center" gap={1}>
            <Avatar src="/avatar.jfif" alt="Gustavo leite oliveira" />
            <Typography color="heading">Gustavo Leite Oliveira</Typography>
          </Box>
        </Box>
      </Container>
      <Styles.ImageContainer>
        {/* <Styles.Glass>
          <Box flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar src="/avatar.jfif" size={100} alt="" />
            <Typography size="xlg" fontWeight="600" color="heading">Gustavo Leite Oliveira</Typography>
          </Box>
        </Styles.Glass> */}
        <Styles.Figure>
          <Styles.Image
            fill
            src="/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg" 
            alt="image"
          />
        </Styles.Figure>
      </Styles.ImageContainer>
    </Styles.Section>
  )
}