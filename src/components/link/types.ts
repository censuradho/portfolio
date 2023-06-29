import { LinkProps as NextLinkProps } from "next/link";
import { IconProps } from "../icon/types";

export interface LinkProps extends NextLinkProps {
  pulse?: boolean
  icon?: IconProps
}