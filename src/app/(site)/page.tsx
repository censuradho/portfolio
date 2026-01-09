import { Icon, NativeLink } from '@/components'
import { getDictionary } from '@/utils/get-dictionary'
import { Metadata } from 'next'

import Image from 'next/image'
import { Contact, Experiences, Info, Projects } from './components'
import styles from './styles.module.css'
import { interpolate } from '@/utils/interpolate'
import differenceInYears from 'date-fns/esm/fp/differenceInYears/index.js'

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
      creator: metadata.twitter.creator,
      images: []
    },
  }
}
export const revalidate = 3600 // 1 hora

export default async function HomePage () {
  const { home, personal_infos } = await getDictionary()
  
  const xpYears = differenceInYears(new Date(), new Date('2019-11-01')) 
  
  const renderAboutDescription = home.about.description.map((value, index) => (
    <p key={index}>{interpolate(value, { xp_time: `${xpYears}+ anos` })}</p>
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
        <Info data={home.infos} />
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
              sizes="400px, (min-width: 762px) 600px"
              style={{ objectFit: 'cover' }}
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
      <Projects data={home.projects} />
      <Contact data={personal_infos} />
      <hr />
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