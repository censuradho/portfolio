import { getDictionary } from "@/utils/get-dictionary"
import { AboveFold } from "./components"

export default async function HomePage ({ params }: any) {
  const { lang } = params
  const dictionary = await getDictionary(lang)

  return (
    <main>
      <AboveFold 
        data={dictionary['home']}
      />
    </main>
  )
}