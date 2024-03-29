import { Box, HeaderButton } from "@/components";
import { getPosts, getTag, getTags } from "@/lib/ghost";
import { classGroupe } from "@/utils/classNames";
import { getDictionary } from "@/utils/get-dictionary";
import { BlogPageProps } from "../../[slug]/types";
import { resolvePath } from "@/utils/helpers";
import { paths } from "@/constants/paths";
import { Tags } from "@/app/(site)/components";

import styles from '../../styles.module.css'
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 120

export async function generateStaticParams () {
  const tags = await getTags()

  return tags.map(value => ({
    slug: value.slug
  }))
}


export async function generateMetadata ({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = params

  const tag = await getTag(slug)

  return {
    title: `Posts sobre ${tag.name} - Gustavo Leite`,
    description: `Aqui você encontra um pouco do que eu falo sobre ${tag.name}`,
  }
}

export default async function TagPage ({ params }: BlogPageProps) {
  const { slug } = params
  
  const { personal_infos } = await getDictionary()
  
  const posts = await getPosts({
    filter: [`tags.slug:[${slug}]`]
  })

  const tag = await getTag(slug)

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
    <div style={{ height: '100%' }}>
      <HeaderButton
        left={{
          label: 'Início',
          href: paths.home
        }}
        data={personal_infos}  
        title={tag.name}
      />
      <main className={classGroupe('container', styles.article)}>
        <Box gap={1.5} flexDirection="column">
          {renderPosts}
        </Box>
      </main>
    </div>
  )
} 