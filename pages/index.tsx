import { Head } from "components/common";
import { HomeLayout } from "layout/_home";

export default function HomePage () {
  return (
    <>
      <Head 
        title="Gustavo Leite Oliveira"
        description="Desenvolvedor de software com fono no frontend, trabalho majoritariamente com a stack React/Node/Typescript"
        />
      <HomeLayout />
    </>
  )
}