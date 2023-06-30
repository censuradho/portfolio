import { Box, HeaderButton, Icon, Tag } from "@/components"
import { getPosts } from "@/lib/ghost"
import { getDictionary } from "@/utils/get-dictionary"

import styles from './styles.module.css'
import Link from "next/link"
import { resolvePath } from "@/utils/helpers"
import { paths } from "@/constants/paths"
import { Tags } from "../components"

export default async function BlogPage () {
  const { personal_infos } = await getDictionary()
  const posts = await getPosts({
    include: ['tags']
  })

  const renderPosts = posts.map(value => {
    return (
      <article key={value.slug}>
        <Link href={resolvePath(paths.post, { slug: value.slug })}>
          <h2 className={styles.article__title}>{value.title}</h2>
          <p>{value?.excerpt}</p>
        </Link>
        <Tags data={value?.tags || []} />
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