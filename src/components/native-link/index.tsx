import { PropsWithChildren } from "react";

import styles from './styles.module.css'
import { NativeLinkProps } from "./types";
import { classNames } from "@/utils/classNames";

export function NativeLink (props: PropsWithChildren<NativeLinkProps>) {
  const { 
    children, 
    pulse = true, 
    ...otherProps 
  } = props

  return (
    <a 
      className={classNames({
        [styles['native_link-pulse']]: pulse
      }, [
        styles.native_link
      ])} 
      {...otherProps}
    >
      {children}
    </a>
  )
}