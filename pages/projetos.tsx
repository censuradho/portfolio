import { Head } from "components/common";
import { ProjectLayout } from "layout/projects";
import { ProjectsProps } from "layout/projects/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { github } from "service/github";

export const getServerSideProps: GetServerSideProps<ProjectsProps> = async () => {
  const { data } = await github.getRepositories()

  return {
    props: {
      data
    }
  }
} 


export default function ProjetosPage (props: InferGetServerSidePropsType<typeof getServerSideProps>) {
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