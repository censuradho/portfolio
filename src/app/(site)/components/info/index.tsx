import Image from "next/image";

import { InfoProps } from "./types";
import styles from './styles.module.css'
import { interpolate } from "@/utils/interpolate";
import { differenceInYears } from 'date-fns'

export function Info ({ data }: InfoProps) {
  const renderInfos = data.map((value, index) => {
  
  const myAge = differenceInYears(new Date(), new Date('1996-04-20'))

    const renderImage = () => {
      if (!value.image) return null

      return(
        <Image 
          src={value.image}
          alt="emoji"
          width={20}
          height={20}
        />
      )
    }

    const renderEmoji = () => {
      if (!value.emoji) return null

      return (
        <span className={styles.info__list__item__emoji}>{value.emoji}</span>
      )
    }

    return (
      <li key={index} className={styles.info__list__item}>
        {renderImage()}
        {renderEmoji()}
        <span>{interpolate(value.label, { age: myAge + ' anos' })}</span>
      </li>
    )
  })

  return (
    <div className="container-sm">
      <section className={styles.info}>
        <ul className={styles.info__list}>
          {renderInfos}
        </ul>
      </section>
    </div>
  )
}