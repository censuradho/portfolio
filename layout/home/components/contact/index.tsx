import { Box, Button, Container, Typography } from 'components/common'
import { pathExternals } from 'constants/routes'
import * as Styles from './styles'

export function Contact () {
  return (
    <Styles.Section>
      <Container>
        <Box
          gap={2}
          flexDirection={{
            '@initial': 'column',
            '@table-min': 'row'
          }}
          justifyContent={{
            '@table-min': 'space-between'
          }}
          alignItems={{
            '@initial': 'center',
          }}
        >
          <Typography textAlign="center" as="h2" fontWeight="800" size="xlg" color="heading" id="contato">Quer falar comigo?</Typography>
          <Button as="a" href={pathExternals.whatsapp} target="_blank" size="md">Entre em contato</Button>
        </Box>
      </Container>
    </Styles.Section>
  )
}