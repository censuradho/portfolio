import { LinkProps } from 'next/link'

import { VariantProps } from '@stitches/react'
import {
  ComponentProps,
  ButtonHTMLAttributes,
  ReactNode,
  AnchorHTMLAttributes
} from 'react'
import { Button } from './styles'

type RootButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'onFocus' | 'id' | 'type' | 'disabled'
>;

type RootAnchorProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target'>;

type NextLinkProps = Partial<Pick<LinkProps, 'href'>>;

export interface ButtonProps
  extends VariantProps<typeof Button>,
    RootButtonProps,
    NextLinkProps,
    RootAnchorProps {
  children: ReactNode;
  loading?: boolean;
  as?: any;
}
