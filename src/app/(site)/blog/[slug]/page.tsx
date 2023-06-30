import Link from "next/link";
import { Metadata } from "next";


import { appSettings } from "@/config/app";

import { paths } from "@/constants/paths";

import { classGroupe } from "@/utils/classNames";
import { resolvePath } from "@/utils/helpers";

import { formatPostDate } from "@/lib/date-fns";
import { getPost, getPosts } from "@/lib/ghost";

import styles from './styles.module.css'
import { BlogPageProps } from "./types";
import { Highligh } from "./components";
import { HeaderButton } from "@/components";
import { getDictionary } from "@/utils/get-dictionary";

export async function generateStaticParams () {
  const posts = await getPosts()

  return posts.map(value => ({
    slug: value.slug
  }))
}

export async function generateMetadata ({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = params

 
  const data = await getPost(slug, {
    include: [
      'authors',
      "tags"
    ]
  })

  const title =  data.meta_title || data.title
  const description = data.meta_description || data.excerpt
  const authors = data?.authors?.map(value => ({
    name: value.name,
  }))

  const url = `${appSettings.siteUrl}/${resolvePath(paths.post, { slug })}`

  return {
    title,
    description,
    authors,
    openGraph: {
      title,
      description,
      authors: authors?.[0].name,
      releaseDate: data.created_at,
      modifiedTime: data.updated_at as string,
      tags:  data.tags?.map(value => value.name as string),
      url,
    },
    twitter: {
      card: 'summary',
      site: url,
      title,
      description
    }
  }
}

export const revalidate = 10

export default async function PostPage ({ params }: BlogPageProps) {
  const { slug } = params

  const { personal_infos } = await getDictionary()

  const data = await getPost(slug, {
    include: ['tags', 'authors']
  })


  return (
    <>
      <HeaderButton 
        data={personal_infos} 
        left={{
          href: paths.blog,
          label: 'Outros posts'
        }}
      />
      <main  className={classGroupe('container', styles.blog_post)}>
        <h1 className={styles.blog_post__title}>{data.title}</h1>
        <div className={styles.blog_post__meta}>
          <span>{`${formatPostDate(data.published_at as string)} • Leitura de ${data.reading_time} min`}</span>
        </div>
        <Highligh 
          className={styles.blog_post__article}
          innerHTML={data?.html as string}
        />
      </main>
    </>
  )
}