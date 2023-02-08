import { Head } from "components/common";
import { HomeLayout } from "layout/_home";

export default function HomePage () {
  return (
    <>
      <Head 
        title="Gustavo Leite Oliveira"
        description={`
          Estúdio 42. Mais do que negócios, nós. 
          acreditamos nas relações. Quem somos. Muito prazer, 
          somos a Estúdio 42! Uma agência de Marketing Digital com foco em Micro e pequenas empresas, 
          ajudamos a alavancar seu produto para que você possa focar no core do seu negócio, e não se preocupar com o marketing .
        `}
      />
      <HomeLayout />
    </>
  )
}