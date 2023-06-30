import { Box, HeaderButton } from "@/components"
import { getPosts } from "@/lib/ghost"
import { getDictionary } from "@/utils/get-dictionary"

import styles from './styles.module.css'
import Link from "next/link"
import { resolvePath } from "@/utils/helpers"
import { paths } from "@/constants/paths"

export default async function BlogPage () {
  const { personal_infos } = await getDictionary()
  const posts = await getPosts()

  const renderPosts = posts.map(value => (
    <article key={value.slug}>
      <Link href={resolvePath(paths.post, { slug: value.slug })}>
        <h2 className={styles.article__title}>{value.title}</h2>
        <p>{value?.excerpt}</p>
      </Link>
    </article>
  ))

  return (
    <main>
      <HeaderButton 
        data={personal_infos} 
        left={{
          label: 'Início'
        }}
        title="Posts"
      />
      <div className="container">
        <Box gap={1.5} flexDirection="column">
          {renderPosts}
        </Box>
      </div>
    </main>
  )
}