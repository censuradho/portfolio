import { PropsWithChildren } from "react";

import styles from './styles.module.css'
import { ButtonProps } from "./types";
import { classNames } from "@/utils/classNames";

export function Button (props: PropsWithChildren<ButtonProps>) {
  const { 
    children, 
    pulse = false, 
    fullWidth = false,
    ...otherProps 
  } = props

  return (
    <button
      className={classNames({
        [styles['button-pulse']]: pulse,
        [styles['button-fullwidth']]: fullWidth
      }, [
        styles.button
      ])} 
      {...otherProps}
    >
      {children}
    </button>
  )
}