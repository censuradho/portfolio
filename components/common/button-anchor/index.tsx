import { memo } from 'react'

import * as Styles from './styles'

import { AnchorProps } from './types'

export function ButtonAnchor (props: AnchorProps) {

  return (
    <Styles.Anchor
      {...props}
    >
      {props?.children}
    </Styles.Anchor>
  )

}
