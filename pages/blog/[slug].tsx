import { Head } from "components/common"
import { PostLayout } from "layout/blog/post"
import { InferGetStaticPropsType } from "next"

import {  PostOrPage } from "@tryghost/content-api";
import type { 
  GetStaticPaths, 
  GetStaticProps, 
} from "next";

import { getPost, getPosts } from "lib/ghost";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  const paths = posts?.map(value => ({ params: { slug: value.slug }}))

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{ post: PostOrPage}> = async (context) => {
  const slug = context?.params?.slug as string
  const post = await getPost(slug, {
    include: ['tags', 'authors']
  })

  if (!post) return {
    notFound: true,
    revalidate: 10
  }

  return {
    props: {
      post: {
        ...post,
      }
    },
    revalidate: 10
  }
}

export default function Post (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head
        title={props.post.meta_title || ''}
        description={props.post.meta_description || ''}
        image={props.post.og_image as string}
        og={{
          description: props.post.og_description as string,
          title: props.post.og_title as string,
        }}
        twitter={{
          description: props.post.twitter_description as string,
          title: props.post.twitter_title as string,
        }}
      />
      <PostLayout {...props} />
    </>
  )
}
