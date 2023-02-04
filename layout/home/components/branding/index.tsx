import { Box, Container, Typography } from 'components/common'
import Image from 'next/image'
import * as Styles from './styles'

export function Branding () {
  return (
    <Styles.Section>
      <Container>
        <Box justifyContent="center" marginBottom={100}>
          <Styles.TItle>Empresas que confiam  no<br/> meu trabalho</Styles.TItle>
        </Box>
        <Box justifyContent="center" gap={1} flexWrap="wrap">
          <a aria-label="Arezzo&co" href="https://www.arezzo.com.br/" target="_blank" rel="noreferrer">
            <Image 
              src="/brandings/arezzo.png" 
              alt="arezzo"  
              width={100}
              height={100} 
            />
          </a>
          <a aria-label="openbox.ai" href="https://openbox.com.br/" target="_blank" rel="noreferrer">
            <Image 
              src="/brandings/openbox.svg" 
              alt="openbox"  
              width={100}
              height={100} 
            />
          </a>
          <a aria-label="cwi" href="https://cwi.com.br/" target="_blank" rel="noreferrer">
            <Image 
              src="/brandings/cwi.svg" 
              alt="cwi"  
              width={100}
              height={100} 
            />
          </a>
          <a aria-label="cwi" href="https://www.ubistart.com/" target="_blank" rel="noreferrer">
            <Image 
              src="/brandings/ubistart.webp" 
              alt="openbox"  
              width={100}
              height={100} 
            />
          </a>
        </Box>
      </Container>
    </Styles.Section>
  )
}