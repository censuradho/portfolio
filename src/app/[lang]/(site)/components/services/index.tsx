import { ServicesProps } from "./types";

import styles from './styles.module.css'
import Link from "next/link";

export function Services ({ data }: ServicesProps) {
  const renderItems = data.items.map((value, index) => (
    <li key={index}>
      <span className={styles['services__list-index']}>{`0${index + 1} /`}</span>
      <div>
        <Link href={value.path}>
          <h3 className={styles['services__list-title']}>{value.title}</h3>
        </Link>
        <p>{value.description}</p>
      </div>
    </li>
  ))

  return (
    <div className="container">
      <section className={styles.services}>
        <h2 className={styles.services__title}>{data.title}</h2>
        <ul className={styles.services__list}>{renderItems}</ul>
      </section>
    </div>
  )
}