import { Box, Button, Typography, UnderlineLink } from 'components/common'
import { useLocalStorage } from 'hooks'

import * as Styles from './styles'
import { Compliance } from './types'

const baseCookies: Compliance[] = [
  {
    concentGiven: false,
    lastUpdate: new Date().toISOString(),
    type: 'Analytics'
  }
]

export function CookieWarn () {
  const [concents, setConcents] = useLocalStorage<Compliance[]>('@estudio/cookies-warn', baseCookies)

  const handleAccept = () => {
    setConcents(prevState => prevState.map(item => ({
      ...item,
      concentGiven: true
    })))
  }

  const isAcceptAllConcents = !concents.map(item => item.concentGiven).includes(false)

  if (isAcceptAllConcents) return null

  return (
    <Styles.Container>
      <Styles.Content>
        <Box
          alignItems="center"
          justifyContent="space-between"
          gap={4}
          flexDirection={{
            '@initial': 'column',
            '@table-min': 'row'
          }}>
          <Box flexDirection="column" gap={0.5}>
            <Typography
              size="xsm"
              textAlign={{
                '@initial': 'center',
                '@table-min': 'left'
              }}
            >
              Utilizo cookies nesse site para maximizar a experiência de usuário.
              Para mais informações sobre todos os cookies que utilizamos, por favor veja em <UnderlineLink
                href=""
              >Cookies</UnderlineLink>
            </Typography>

          </Box>
          <Button onClick={handleAccept}>Concordo</Button>
        </Box>
      </Styles.Content>
    </Styles.Container>
  )
}