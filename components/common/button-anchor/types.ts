import { LinkProps } from 'next/link'

import { VariantProps } from '@stitches/react'
import {
  ButtonHTMLAttributes,
  ReactNode,
  AnchorHTMLAttributes
} from 'react'
import { Anchor } from './styles'


type RootAnchorProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'>;


export interface AnchorProps
  extends VariantProps<typeof Anchor>,
  RootAnchorProps,
    RootAnchorProps {
  children: ReactNode;
}
