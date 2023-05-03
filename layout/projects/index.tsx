import { Box, Container, Icon, Typography, UnderlineLink } from 'components/common'
import { Footer, Header } from 'layout/_home/components'
import * as Styles from './styles'

import json from 'data/perfil.json'
import { ProjectsProps } from './types'

export function ProjectLayout (props: ProjectsProps) {

  const {
    data = []
  } = props

  const projectsCount = data.length

  const renderEmphasis =  json.projects_links
    .filter(value => value.emphasis)
    .map((value, index) => (
      <li key={index}>
        <Styles.ProjectLink href={value.link} rel="noreferrer" target="_blank">
          <Icon name={value.icon as any} size={30} color="heading" />
          <Typography size="sm" color="heading">{value.label}</Typography>
          <Typography as="p" size="xsm">{value?.description}</Typography>
        </Styles.ProjectLink>
      </li>
  ))

  return (
     <Styles.Container>
      <Header />
      <Styles.Main>
        <Container>
          <Styles.Title>Projetos pessoais & Open source</Styles.Title>
          <Typography as="p" size="xsm">
            Aqui estão listados os projetos que venho desenvolvendo no meu tempo livre
          </Typography>

          <Box flexDirection="column" gap={2} marginTop={2}>
            <Typography as="h2" size="md" color="heading" fontWeight="600">Destaques</Typography>
            <Styles.ListEmphasis>{renderEmphasis}</Styles.ListEmphasis>
          </Box>
        </Container>
      </Styles.Main>
      <Footer />
     </Styles.Container>
  )
}