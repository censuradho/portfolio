import { PropsWithChildren } from "react";

import styles from './styles.module.css'

export function Button (props: PropsWithChildren) {
  const { children } = props

  
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}