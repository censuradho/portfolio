import { Box, Container, Typography } from 'components/common'
import Image from 'next/image'
import * as Styles from './styles'

export function Branding () {
  return (
    <Styles.Section>
      <Container>
        <Box justifyContent="center">
          <Styles.TItle>Empresas que confiam  no<br/> meu trabalho</Styles.TItle>
        </Box>
        <Box justifyContent="center" gap={1}>
          <Image 
            src="/brandings/arezzo.png" 
            alt="arezzo"  
            width={100}
            height={100} 
          />
          <Image 
            src="/brandings/openbox.svg" 
            alt="openbox"  
            width={100}
            height={100} 
          />
          <Image 
            src="/brandings/cwi.svg" 
            alt="openbox"  
            width={100}
            height={100} 
          />
        </Box>
      </Container>
    </Styles.Section>
  )
}