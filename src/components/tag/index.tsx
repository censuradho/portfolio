import Link from "next/link";
import { LinkProps } from "./types";
import { PropsWithChildren } from "react";

import styles from './styles.module.css'

export function Tag (props: PropsWithChildren<LinkProps>) {
  const {
    children,
    ...otherProps
  } = props

  return (
    <Link 
      className={styles.tag} 
      {...otherProps}
    >
      {children}
    </Link>
  )
}