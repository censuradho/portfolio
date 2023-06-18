import { Box } from "@/components"
import { getDictionary } from "@/utils/get-dictionary"
import { Metadata } from "next"

import styles from './styles.module.css'
import { classGroupe } from "@/utils/classNames"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Gustavo Leite Studio',
  description: 'Somos uma agência digital que entrega serviços de ponta a ponta com foco em estratégia, design de experiência do usuário (UX) e transformação digital.',
}


export default async function HomePage () {
  const { home } = await getDictionary()

  return (
    <main>
      <div className="container-sm">
        <div className={styles.header}>
          <h1 className={styles.header__name}>{home.name}</h1>
          <Image 
            src={home.avatar}
            alt={home.name}
            width={96}
            height={96}
            className={styles.header__avatar}
          />
        </div>
      </div>
      <div className="container-sm">
        <h2 className={styles.presentation}>{home.presentation}</h2>
      </div>
    </main>
  )
}