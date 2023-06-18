import { PropsWithChildren } from "react";

import styles from './styles.module.css'
import { NativeLinkProps } from "./types";

export function NativeLink (props: PropsWithChildren<NativeLinkProps>) {
  const { children, ...otherProps } = props

  
  return (
    <a className={styles.native_link} {...otherProps}>
      {children}
    </a>
  )
}