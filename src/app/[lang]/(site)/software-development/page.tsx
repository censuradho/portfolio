import { getDictionary } from "@/utils/get-dictionary"

import Image from "next/image"
import styles from './styles.module.css'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Gustavo Leite Studio | Nossos serviços',
  description: 'Somos um tipo novo de agência, fornecendo soluções digitais completas. Não apenas construímos seu negócio digital, nós o aceleramos.',
}

export default async function SoftwareDevelopmentPage ({ params }: any) {
  const { lang } = params
  const dictionary = await getDictionary(lang)
  const { software_development } = dictionary

  const renderItems = software_development.items.map((value, index) => {
    const renderImages = value.images.map((image, index) => (
      <figure
        key={index}
        className={styles['software-development__item-figure']}
      >
        <Image 
          
          alt={image.alt}
          src={image.url}
          fill
          style={{
            objectFit: 'contain'
          }}
        />
      </figure>
    ))

    return (
      <li
        className={styles['software-development__item']} 
        key={index}
      >
        <h3 className={styles['software-development__item-title']}>{value.title}</h3>
        <p className={styles['software-development__item-description']}>{value.description}</p>
        <div className={styles['software-development__item-content']}>
          {renderImages}
        </div>
      </li>
    )
  })

   return (
    <main className={styles['software-development']}>
      <div className="container">
        <section className={styles['software-development__header']}>
          <h1 className={styles['software-development__title']}>{software_development.title}</h1>
          <p className={styles['software-development_subtitle']}>{software_development.subtitle}</p>
        </section>
      </div>
      <section className="container">
        <div className={styles['software-development__slogan']}>
          <h2 className={styles['software-development__slogan-title']}>{software_development.slogan.title}</h2>
          <p className={styles['software-development__slogan-description']}>{software_development.slogan.description}</p>
        </div>
        <ul className={styles['software-development__list']}>
          {renderItems}
        </ul>
      </section>
    </main>
   )
}