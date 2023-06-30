import { IconProps } from "../icon/types";

export interface HeaderProps {
  left?: {
    icon: IconProps
    onClick?: () => void
  }
  title: string
}