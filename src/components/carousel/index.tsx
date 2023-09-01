'use client'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from 'react'

import { classGroupe } from '@/utils/classNames'
import { breakpoints } from "@/config/theme/breakpoints"
import { CarouselProps } from "./types"

import styles from './styles.module.css'
import Image from "next/image"

export function Carousel (props: CarouselProps) {
  const { data } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1.3,
      spacing: 20
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    breakpoints: {
      [breakpoints["table-min"]]: {
        slides: {
          perView: 2.12,
          spacing: 20
        },
      }
    }
  })

  const renderItems = data.map((value, index) => {
    return (
      <li 
        key={index}
        className={classGroupe('keen-slider__slide')}
        aria-hidden={currentSlide !== index}
      >
        <a
          href={value.link}
          rel="noreferrer"
          target="_blank"
          className={styles.carousel__item}
        >
          <figure className={styles.carousel__item_image}>
            <Image 
              src={value.image.src}
              alt={value.image.alt}
              fill
              sizes="300px"
            />
          </figure>
          <div className={styles.carousel__item_body}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        </a>
      </li>
    )
  })

  if (!data || data.length === 0) return null


  return (
    <ul aria-label="carousel" ref={sliderRef} className="keen-slider">
      {renderItems}
    </ul>
  )
}