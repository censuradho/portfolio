import { Box, Container, Icons } from 'components/common'
import Image from 'next/image'
import * as Styles from './styles'

export function Footer () {
  return (
    <Styles.Footer>
      <Container>
        <Box flexDirection="column">
          <span>Prime Training e Assessoria Esportiva Ltda CNPJ: 27.633.878/0001-10</span>    
          <span>Atendimento: simboratrincar@gmail.com</span>
          <span>© 2023, simboratrincar. Todos os direitos reservados.</span> 
        </Box>
        <Styles.SocialLinks>
          <a 
            aria-label="instagram @simboratrincar" 
            target="_blank" 
            href="https://www.instagram.com/simboratrincar/" 
            rel="noreferrer"
          >
            <Icons name="instagram" size={30}/>
          </a>
        </Styles.SocialLinks>
        <Box fullWidth justifyContent="center" marginTop={5} alignItems="center" gap={1}>
          <Image src="/estudio42-logo.jpg" width={50} height={50} alt="Estúdio 42 logo" />
          <p>Powered by <a href="https://www.instagram.com/lestudio_42l/" target="_blank" rel="noreferrer">@lestudio_42l</a></p>
        </Box>
      </Container>
    </Styles.Footer>
  )
}