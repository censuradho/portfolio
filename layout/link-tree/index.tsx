import { Avatar } from 'components/common'
import { Typography } from 'components/common/typography'
import { uuid } from 'lib/uuid'
import * as Styles from './styles'
import { LinkTreeProps } from './types'

import ReactGA from 'react-ga4'

export function LinkTreeLayout (props: LinkTreeProps) {
  const { 
    perfil
  } = props

  const renderLinks = perfil.linktree?.map(item => (
    <Styles.LinkItem
      key={uuid()}
      onClick={() => ReactGA.event({
        label: item.label,
        action: 'click',
        category: 'social link'
      })}
    >
      <a aria-label={item.label} href={item.link} target="_blank" rel="noreferrer">
        <Styles.Emoji>{item.icon}</Styles.Emoji>
        <Styles.Label>{item.label}</Styles.Label>
      </a>
    </Styles.LinkItem>
  ))

  return (
    <Styles.Container>
      <Styles.Main>
        <Styles.Banner>
          <Styles.Presentation>
            <Avatar size={120} src='/logo.jpg' alt="avatar" />
            <Styles.Lettering >
              <Typography as="h1" size="md" color="heading">{perfil.instagram}</Typography>
            </Styles.Lettering>
          </Styles.Presentation>
        </Styles.Banner>
        <Styles.LinkList>
          {renderLinks}
        </Styles.LinkList>
      </Styles.Main>
    </Styles.Container>
  )
}
