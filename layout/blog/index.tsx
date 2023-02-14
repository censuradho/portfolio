import { Box, Container, Typography, UnderlineLink } from 'components/common'
import { paths } from 'constants/routes'
import { Footer, Header } from 'layout/_home/components'
import { format, formatDistance } from 'lib/date-fns'
import Link from 'next/link'
import { resolvePath } from 'utils/helpers'
import * as Styles from './styles'
import { BlogProps } from './types'

export function BlogLayout (props: BlogProps) {
  const {
    post
  } = props

  const renderPosts = post?.map((value, index) => {
    const href = resolvePath(paths.blog.post, { slug: value.slug })
    const publishedAtFormat = value?.created_at ? (
      `${format(new Date(value?.created_at), 'EEEE - dd, LLLL yyyy')} (${formatDistance(new Date(value.created_at), new Date())} atrás)`
    ) : ''

    return (
      <li key={index}>
        <Styles.Article>
          <Box  flexDirection="column" gap={1}>
            <Link href={href}>
              <Typography as="h2" size="md" color="heading" fontWeight="600">{value.title}</Typography>
            </Link>
            <Typography color="heading" size="xsm">{publishedAtFormat}</Typography>
            <Typography>{value?.excerpt}</Typography>
            <UnderlineLink href={href}>Leia mais</UnderlineLink>
          </Box>
        </Styles.Article>
      </li>
    )
  })
  
  return (
     <Styles.Container>
      <Header />
      <Styles.Main>
        <Container>
          <Styles.Title>Blog | Dicas, artigos & mais</Styles.Title>
          <Styles.List>
            {renderPosts}
          </Styles.List>
        </Container>
      </Styles.Main>
      <Footer />
     </Styles.Container>
  )
}