import { Box } from 'components/common'
import * as Styles from './styles'
import { SectionTitleProps } from './types'

import Image from 'next/image'

export function SectionTitle (props: SectionTitleProps) {
  const { title, sub  } = props

  return (
    <Styles.Container>
      <Box gap={1} alignItems={{
        '@initial': 'flexStart',
        '@laptops-min': 'center'
      }}>
        <Styles.Title>{title}</Styles.Title>
      </Box>
      <Styles.Sub>{sub}</Styles.Sub>
    </Styles.Container>
  )
}