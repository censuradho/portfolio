import { Head } from "components/common";
import { ProjectLayout } from "layout/projects";
import { ProjectsProps } from "layout/projects/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { github } from "service/github";

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const { data } = await github.getRepositories()

  return {
    props: {
      data: data
    },
    revalidate: 100
  }
}

export default function ProjetosPage (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
    <Head 
      title="Projetos//censuradho"
      description="Lista de projetos que desenvolvo no meu tempo livre"
    />
    <ProjectLayout {...props} />
    </>
  )
}