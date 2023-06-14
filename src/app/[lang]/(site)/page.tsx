import { getDictionary } from "@/utils/get-dictionary"
import { AboveFold, Services } from "./components"

export default async function HomePage ({ params }: any) {
  const { lang } = params
  const dictionary = await getDictionary(lang)

  return (
    <main>
      <AboveFold 
        data={dictionary.home}
      />
      <Services 
        data={dictionary.home.services}
      />
    </main>
  )
}