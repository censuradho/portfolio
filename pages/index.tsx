import { Head } from "components/common";
import { HomeLayout } from "layout/home";

export default function Home () {
  return (
    <>
      <Head 
        title="Simbora Trincar, programa de treino em casa que já ajudou mais de 40 mil alunos."
        description={`
          O desafio SIMBORA TRINCAR já transformou mais de 10 mil corpos e mentes com o
          Nossa metodologia exclusiva desenvolvida para otimizar o emagrecimento, queima de 
          gordura e definição muscular transforma seu corpo através de ferramentas para mudar 
          a sua forma de pensar e treinos exclusivos para queima de gordura.  
        `} 
      />
      <HomeLayout />
    </>
  )
}