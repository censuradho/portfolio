import { getPost, getPosts } from "@/lib/ghost";
import { BlogPageProps } from "./types";
import { Metadata } from "next";
import { appSettings } from "@/config/app";
import { resolvePath } from "@/utils/helpers";
import { paths } from "@/constants/paths";

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

export default async function BlogPage ({ params }: BlogPageProps) {
  const { slug } = params

  const data = await getPost(slug, {
    include: ['tags', 'authors']
  })

  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  )
}