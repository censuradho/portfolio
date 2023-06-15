import { getDictionary } from "@/utils/get-dictionary"
import { AboveFold, ProjectFeatured, Services, Slogan } from "./components"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Gustavo Leite Studio',
  description: 'Somos uma agência digital que entrega serviços de ponta a ponta com foco em estratégia, design de experiência do usuário (UX) e transformação digital.',
}


export default async function HomePage ({ params }: any) {
  const { lang } = params
  const dictionary = await getDictionary(lang)

  return (
    <main>
      <AboveFold data={dictionary.home.above} />
      <ProjectFeatured 
        data={dictionary.home.projects}
        projects={dictionary.projects.items}
      />
      <Services data={dictionary.home.services} />
      <Slogan message={dictionary.home.slogan} />
    </main>
  )
}