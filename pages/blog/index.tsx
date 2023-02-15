import { PostsOrPages, Pagination as PaginationMeta } from "@tryghost/content-api";
import { Head } from "components/common";
import { BlogLayout } from "layout/blog";
import { getPosts } from "lib/ghost";
import { GetStaticProps, InferGetStaticPropsType } from "next";


export const getStaticProps: GetStaticProps<{ post: PostsOrPages, meta: PaginationMeta }> = async(context) => {

  const post = await getPosts({
    include: ['authors', 'tags'],
  })

  if (!post) return {
    notFound: true,
    revalidate: 60 * 60
}


  return {
    props: { 
      post,
      meta: post.meta.pagination
    },
    revalidate: 10
  }
}


export default function BlogPage (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head
        title="Gustavo Leite Oliveira | Blog"
        description="Dicas, Artigos e mais"
      />
      <BlogLayout {...props} />
    </>
  )
}

export const revalidate = 10