import NextLink from 'next/link'
import { PropsWithChildren } from "react";

import styles from './styles.module.css'
import { LinkProps } from "./types";
import { classNames } from "@/utils/classNames";


export function Link (props: PropsWithChildren<LinkProps>) {
  const { 
    children, 
    pulse = false, 
    ...otherProps 
  } = props

  return (
    <NextLink
      className={classNames({
        [styles['native_link-pulse']]: pulse
      }, [
        styles.native_link
      ])} 
      {...otherProps}
    >
      {children}
    </NextLink>
  )
}