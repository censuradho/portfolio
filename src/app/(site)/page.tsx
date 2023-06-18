import { Icon, NativeLink } from "@/components"
import { getDictionary } from "@/utils/get-dictionary"
import { Metadata } from "next"

import Image from "next/image"
import { Experiences } from "./components"
import styles from './styles.module.css'

export async function generateMetadata (): Promise<Metadata> {

  const data = await getDictionary()

  const { metadata } = data.home

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      type: metadata.openGraph.type as any,
      images: metadata.openGraph.images,
    },
    twitter: {
      card: metadata.twitter.card as any,
      description: metadata.description,
      title: metadata.title,
      creator: metadata.twitter.creator
    },
  }
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
            priority
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
              pulse
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
            aria-label="linkedin"
          >
            <Icon name="linkedin" color="background" />
          </a>
          <a 
            className={styles.social__icon}
            href={home.social.github}
            target="_blank" 
            rel="noreferrer"
            aria-label="github"
          >
            <Icon name="github" color="background" />
          </a>
          <a 
            className={styles.social__icon}
            href={home.social.instagram}
            target="_blank" 
            rel="noreferrer"
            aria-label="instagram"
          >
            <Icon name="instagram" color="background" />
          </a>
          <a 
            className={styles.social__icon}
            href={home.social.spotify}
            target="_blank" 
            rel="noreferrer"
            aria-label="instagram"
          >
            <Icon name="spotify" color="background" />
          </a>
        </aside>
      </div>
    </main>
  )
}