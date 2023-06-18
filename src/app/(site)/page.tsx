import { Box, Icon, NativeLink } from "@/components"
import { getDictionary } from "@/utils/get-dictionary"
import { Metadata } from "next"

import styles from './styles.module.css'
import { classGroupe } from "@/utils/classNames"
import Image from "next/image"
import { Experiences } from "./components"

export const metadata: Metadata = {
  title: 'Gustavo Leite Studio',
  description: 'Somos uma agência digital que entrega serviços de ponta a ponta com foco em estratégia, design de experiência do usuário (UX) e transformação digital.',
}


export default async function HomePage () {
  const { home } = await getDictionary()

  const renderAboutDescription = home.about.description.map((value, index) => (
    <p key={index}>{value}</p>
  ))

  return (
    <main className={styles.home}>
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
        <section className={styles.presentation}>
          <h2 className={styles.presentation_title}>{home.presentation.title}</h2>
          <div className={styles.presentation__cta}>
            <NativeLink
              href={home.presentation.cta.href}
              rel="noreferrer"
              target="_blank"
            >{home.presentation.cta.label}</NativeLink>
          </div>
          <figure className={styles.presentation__banner}>
            <Image 
              src={home.banner_image.url}
              alt={home.banner_image.alt}
              fill
              priority
            />
          </figure>
        </section>
      </div>
      <div className="container-sm">
        <section className={styles.about}>
          <h2 className={styles.about__title}>Sobre</h2>
          <strong className={styles.about__subtitle}>{home.about.subtitle}</strong>
          {renderAboutDescription}
        </section>
      </div>
      <Experiences data={home.experiences} />
      <div className="container-sm">
        <aside className={styles.social}>
          <a 
            className={styles.social__icon}
            href={home.social.linkedin}
            target="_blank" 
            rel="noreferrer"
          >
            <Icon name="linkedin" color="background" />
          </a>
          <a 
            className={styles.social__icon}
            href={home.social.github}
            target="_blank" 
            rel="noreferrer"
          >
            <Icon name="github" color="background" />
          </a>
          <a 
            className={styles.social__icon}
            href={home.social.instagram}
            target="_blank" 
            rel="noreferrer"
          >
            <Icon name="instagram" color="background" />
          </a>
        </aside>
      </div>
    </main>
  )
}