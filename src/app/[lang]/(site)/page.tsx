import { getDictionary } from "@/utils/get-dictionary"
import { AboveFold, ProjectFeatured, Services, Slogan } from "./components"

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