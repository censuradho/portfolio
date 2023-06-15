'use client'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useMemo } from "react";
import Image from "next/image";

import styles from './styles.module.css'
import { classGroupe } from "@/utils/classNames";

import { theme } from "@/config/theme";
import { ProjectFeaturedProps } from "./types";

export function ProjectFeatured (props: ProjectFeaturedProps) {
  const { data, projects } = props
  const { breakpoints } = theme

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.1,
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

  const renderItems = useMemo(() => items.map((value, index) => (
    <div
      key={index} 
      ref={sliderRef} 
      className="keen-slider__slide"
    >
      <figure className={styles['project__item-figure']}>
        <Image 
          src={value.thumb.thumb_url}
          alt={value.thumb.title}
          fill
          sizes="(min-width: 450px) 30vw, 400px"
        />
      </figure>
      <div className={styles['project__item-content']}>
        <h3 className={styles['project__item-title']}>{value.thumb.title}</h3>
        <p className={styles['project__item-description']}>{value.thumb.description}</p>
      </div>
    </div>
  )), [items, sliderRef])
  

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