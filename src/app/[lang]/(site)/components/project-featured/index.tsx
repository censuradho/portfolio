'use client'

import { ProjectFeaturedProps } from "./types";
import { useKeenSlider } from "keen-slider/react"

import styles from './styles.module.css'
import "keen-slider/keen-slider.min.css"
import Image from "next/image";
import { classGroupe } from "@/utils/classNames";
import { breakpoints } from "constants/theme";

export function ProjectFeatured (props: ProjectFeaturedProps) {
  const { data, projects } = props

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.4,
      spacing: 20,
    },
    breakpoints: {
      [breakpoints["table-min"]]: {
        slides: {
          perView: 2.1,
          spacing: 20,
        }
      },
      [breakpoints["laptops-min"]]: {
        slides: {
          perView: 3.4,
          spacing: 20,
        }
      },
      [breakpoints["desktop-min"]]: {
        slides: {
          perView: 'auto',
          spacing: 20,
        }
      }
    }
  })

  const items = projects
    .filter((project, index) =>
      data.items.includes(index)
    )

    const renderItems = items.map((value, index) => (
      <div ref={sliderRef} className="keen-slider__slide">
        <figure className={styles['project__item-figure']}>
          <Image 
            src={value.thumb.thumb_url}
            alt={value.thumb.title}
            fill
          />
        </figure>
        <div className={styles['project__item-content']}>
          <h3 className={styles['project__item-title']}>{value.thumb.title}</h3>
          <p className={styles['project__item-description']}>{value.thumb.description}</p>
        </div>
      </div>
    ))
  

  return (
    <section className={styles.project}>
      <div className={classGroupe('container', styles.project__header)}>
        <h2 className={styles.project__title}>{data.title}</h2>
      </div>
      <div className={styles.project__slide}>
        <div ref={sliderRef} className="keen-slider">
          {renderItems}
        </div>
      </div>
    </section>
  )
}