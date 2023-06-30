import { ReactNode } from "react";
import { IconProps } from "../icon/types";
import { DictionaryData } from "@/dictionaries/types";

export interface HeaderProps {
  left?: {
    icon: IconProps
    onClick?: () => void
  }
  title: string
  right?: ReactNode
  data: DictionaryData['personal_infos']
}