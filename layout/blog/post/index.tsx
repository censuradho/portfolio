import { Avatar, Box, Container, Typography } from 'components/common'
import { Header } from 'layout/_home/components'
import { format, formatDistance } from 'lib/date-fns'
import dynamic from 'next/dynamic'

import * as Styles from './styles'
import { PostProps } from './types'

const Footer = dynamic(() => import('layout/_home/components').then(e => e.Footer))

export function PostLayout (props: PostProps) {
  const { post } = props
  const { authors } = post

  const publishedAtFormat = post?.created_at ? (
    `${format(new Date(post?.created_at), 'EEEE - dd, LLLL yyyy')} (${formatDistance(new Date(post.created_at), new Date())} atrás)`
  ) : ''

  const renderAuthors = authors?.map(author => (
    <Box key={author.id} gap={1}>
      <Avatar src={author?.profile_image || ''} size={35} alt={author?.name || ''} />
      <Box flexDirection="column">
        <Typography size="xsm" fontWeight="600">{author.name}</Typography>
      </Box>
    </Box>
  ))


  return (
    <>
      <Header />
      <Styles.Container>
        <Container>
          <Styles.Header>
            <Box flexDirection="column" gap={1} alignItems="center" justifyContent="center">
              <Typography color="heading" as="h1" size="md" fontWeight="600">{post.title}</Typography>
              <Typography color="heading" size="xsm">{publishedAtFormat}</Typography>
            </Box>
            <Box justifyContent="center" alignItems="center" marginTop={1}>
              {renderAuthors}
            </Box>
          </Styles.Header>
          <hr />
          <Styles.Article dangerouslySetInnerHTML={{ __html: post?.html || '' }} />
        </Container>
      </Styles.Container>
      <Footer />
    </>

  )
}