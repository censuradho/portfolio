import { AnchorHTMLAttributes } from "react";
import { IconProps } from "../icon/types";

export interface NativeLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  pulse?: boolean
  icon?: IconProps
}