import { PropsWithChildren } from "react";

import styles from './styles.module.css'
import { NativeLinkProps } from "./types";
import { classNames } from "@/utils/classNames";
import { Icon } from "../icon";

export function NativeLink (props: PropsWithChildren<NativeLinkProps>) {
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
    <a 
      className={classNames({
        [styles['native_link-pulse']]: pulse
      }, [
        styles.native_link
      ])} 
      {...otherProps}
    >
      {children}
      {renderIcon()}
    </a>
  )
}