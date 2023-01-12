import Image from 'next/image'
import * as Styles from './styles'
import { HoverPreviewProps } from './types'

export function HoverPreview (props: HoverPreviewProps) {
  const {
    children,
    src
  } = props
  
  return (
    <Styles.Root>
      <Styles.Trigger>{children}</Styles.Trigger>
      <Styles.Portal>
        <Styles.Content sideOffset={5}>
          <Image src={src} width={300} height={300} alt="preview" />
          <Styles.Arrow />
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}