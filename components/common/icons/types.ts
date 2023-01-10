import { icons } from "./icons"

export type IconNames = keyof typeof icons

export interface IconsProps {
  name: IconNames
  size?: number
} 