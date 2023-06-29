import NextLink from 'next/link'
import { PropsWithChildren } from "react";

import styles from './styles.module.css'
import { LinkProps } from "./types";
import { classNames } from "@/utils/classNames";
import { Icon } from '../icon';


export function Link (props: PropsWithChildren<LinkProps>) {
  const { 
    children, 
    pulse = false,
    icon,
    ...otherProps 
  } = props

  const renderIcon = () => {
    if (!icon) return null

    return <Icon {...icon} />
  }

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
      {renderIcon()}
    </NextLink>
  )
}