import { PropsWithChildren } from 'react'
import * as Styles from './styles'
import { LetterProps } from './types'

export function Letter (props: PropsWithChildren<LetterProps>) {
  const { children, color } = props

  return (
    <Styles.Container>
      <Styles.Overlay>{children}</Styles.Overlay>
      <Styles.Span color={color}>{children}</Styles.Span>
    </Styles.Container>
  )
}