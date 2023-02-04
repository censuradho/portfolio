import { Box, Button, Typography } from 'components/common'
import { pathExternals } from 'constants/routes'
import { Letter } from './components/index.'
import * as Styles from './styles'

export function AboveFold () {
  return (
    <Styles.Section>
      <Box flexDirection="column" gap={1} alignItems="center">
        <Styles.Title>
          <Letter color="primary">Software</Letter>
          <Letter color="secondary">Marketing</Letter>
          <Letter color="third">Solução</Letter>
        </Styles.Title>
        <div style={{ maxWidth: '45rem' }}>
          <Typography as="P" size="sm" textAlign="center">
          Otimize suas vendas com nossa acessória, 
          tenha tudo que precisa para focar nos negócios 
          e desfrutar dos melhores resultados.
          </Typography>
        </div>
        <Box marginTop={2}>
          <Button as="a" href={pathExternals.whatsapp}>Entre em contato</Button>
        </Box>
      </Box>
    </Styles.Section>
  )
}