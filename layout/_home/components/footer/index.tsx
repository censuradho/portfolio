import { Box, Container, Icon, Typography } from 'components/common'
import * as Styles from './styles'

import json from 'data/perfil.json'

export function Footer () {
  const renderCategories = json.social_links.map((value, index) => {
    return (
      <Styles.Item key={index}>
        <a
          href={value.link}
          aria-label={value.label}
          target="_blank"
          rel="noreferrer"
        >
          <span>{value.label}</span>
          <Icon name={value.icon as any} />
        </a>
      </Styles.Item>
    )
  })

  return (
    <Styles.Footer>
      <Container>
        <Styles.List>
          {renderCategories}
        </Styles.List>
      </Container>
    </Styles.Footer>
  )
}