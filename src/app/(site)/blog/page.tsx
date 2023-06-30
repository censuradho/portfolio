import { Box, HeaderButton, Icon, Tag } from "@/components"
import { getPosts } from "@/lib/ghost"
import { getDictionary } from "@/utils/get-dictionary"

import styles from './styles.module.css'
import Link from "next/link"
import { resolvePath } from "@/utils/helpers"
import { paths } from "@/constants/paths"

export default async function BlogPage () {
  const { personal_infos } = await getDictionary()
  const posts = await getPosts({
    include: ['tags']
  })

  const renderPosts = posts.map(value => {
    const renderTags = value?.tags?.map((value, index) => (
      <Tag href={resolvePath(paths.tags, { slug: value.slug })} key={index}>{value.name}</Tag>
    ))

    const renderTagContent = () => {
      if (!renderTags || renderTags.length === 0) return null
      
      return (
        <div className={styles.article__tags}>
          <Icon name="tag" />
          {renderTags}
        </div>
      )
    }
    return (
      <article key={value.slug}>
        <Link href={resolvePath(paths.post, { slug: value.slug })}>
          <h2 className={styles.article__title}>{value.title}</h2>
          <p>{value?.excerpt}</p>
        </Link>
        {renderTagContent()}
      </article>
    )
  })

  return (
    <>
      <HeaderButton 
        data={personal_infos} 
        left={{
          label: 'Início',
          href: paths.home
        }}
        title="Posts"
      />
      <main className={styles.article}>

        <div className="container">
          <Box gap={1.5} flexDirection="column">
            {renderPosts}
          </Box>
        </div>
      </main>
    </>

  )
}