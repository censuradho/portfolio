import { AboveFoldProps } from "./types";

import styles from './styles.module.css'
import { classGroupe } from "@/utils/classNames";

export function AboveFold (props: AboveFoldProps) {
  const { data } = props

  return (
    <section className={classGroupe('container', styles.above)}>
      <div>
        <h1 className={styles.above__title}>{data.above.title}</h1>
        <strong>{data.above.subtitle}</strong>
        <p>{data.above.description}</p>
      </div>
    </section>
  )
}