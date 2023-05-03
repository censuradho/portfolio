import { Head } from "components/common";
import { HomeLayout } from "layout/_home";
import { HomePageProps } from "layout/_home/types";
import { getPosts } from "lib/ghost";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const posts = await getPosts({ 
    limit: 3
  })

  return {
    props: {
      posts
    }
  }
}

export default function HomePage (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head 
        title="Gustavo Leite Oliveira"
        description="Desenvolvedor de software com fono no frontend, trabalho majoritariamente com a stack React/Node/Typescript"
        />
      <HomeLayout {...props} />
    </>
  )
}