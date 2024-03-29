import NextLink from 'next/link'

import styles from './styles.module.css'
import { BlogPostsProps } from './types'
import { resolvePath } from '@/utils/helpers'
import { paths } from '@/constants/paths'
import { formatPostDate } from '@/lib/date-fns'
import { Box, Link } from '@/components'
import { Tags } from '../tags'

export function BlogPosts ({ data }: BlogPostsProps) {
  const renderData = data.map((value, index) => {

    return (
      <article 
        key={index}
        className={styles.blog__article}
      >
        <NextLink href={resolvePath(paths.post, { slug: value.slug })}>
          {value.created_at 
            ? (
              <span className={styles.blog__article__created_at}>{formatPostDate(value.created_at)}</span>
            ) : null}
          <h3 className={styles.blog__article__title}>{value?.title}</h3>
          <p className={styles.blog__article__description}>{value.excerpt}</p>
        </NextLink>
        <Tags data={value.tags} />
      </article>
    )
  })

  return (
    <div className="container-sm">
      <section className={styles.blog}>
        <h2 className={styles.blog__title}>Últimos do blog</h2>
        <Box gap={2.7} flexDirection="column">
          {renderData}
        </Box>
        <div>
          <Link href={paths.blog}>Ver todos</Link>
        </div>
      </section>
    </div>
  )
}
