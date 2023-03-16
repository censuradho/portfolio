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

  function groupItems<T>(array: T[],  property: string) {
      return array.reduce(function(groups, item) {
          const _item = item as any
          const _groups = groups as any

          var name = _item[property as string]
          var group = _groups[name] || (_groups[name] = []);
          group.push(item);
          return groups;
      }, { });
  }

  const groupReposByYear = groupItems(
    data.map((value) => ({
      ...value,
      created_at: String(new Date(value.created_at).getFullYear())
    })
  ), 'created_at') as Record<string, typeof data>

 
  const sortedDesRepos = Object
    .entries(groupReposByYear || {})
    .map(([key, value]) => ({
      created: key,
      data: value,
    })).sort((a, b) => {
      const first = Number(a.created)
      const last = Number(b.created)
  
      if (first < last) return 1
      if (first > last) return -1
      return 0
    })

  const renderProjects = sortedDesRepos.map((value, index) => {
      const renderItems = value.data.map((value, index) => (
        <li key={index}>
          <UnderlineLink type="native" href={value.svn_url} rel="noreferrer" target="_blank">{value.name}</UnderlineLink>
          {value?.description && <Typography size="xsm" as="p">: {value?.description}</Typography>}
        </li>
      ))

      return (
        <Box flexDirection="column" gap={1} key={value.created} marginBottom={40}>
          <Typography as="h3" size="md" fontWeight="600" color="heading">{value.created}</Typography>
          <Styles.ListProjects>
            {renderItems}
          </Styles.ListProjects>
        </Box>
      )
    })


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
            Aqui estão listados os <Typography as="strong" color="heading">{projectsCount}</Typography> projetos que venho desenvolvendo no meu tempo livre
          </Typography>

          <Box flexDirection="column" gap={2} marginTop={2}>
            <Typography as="h2" size="md" color="heading" fontWeight="600">Destaques</Typography>
            <Styles.ListEmphasis>{renderEmphasis}</Styles.ListEmphasis>
          </Box>
          <Box flexDirection="column" gap={2} marginTop={2}>
            <Typography as="h2" size="md" color="heading" fontWeight="600">Todos Projetos</Typography>
            {renderProjects}
          </Box>
        </Container>
      </Styles.Main>
      <Footer />
     </Styles.Container>
  )
}