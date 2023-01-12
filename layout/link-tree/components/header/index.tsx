import { Avatar, Box, ButtonIcon, Typography } from 'components/common'


import { Share } from '../shere'

import * as Styles from './styles'
import { HeaderProps } from './types'

export function Header (props: HeaderProps) {
  
  const { 
    visible = true,
    title 
  } = props

  return (
    <Styles.Header visible={visible}>
      <Styles.HiddenView visible={visible}>
        <Avatar size={50} src='/logo.jpg' alt="logo" />
        <Box flex={1} justifyContent="center">
          <Typography as="h2" size="md" color="heading">{title}</Typography>
        </Box>
      </Styles.HiddenView>
      <div style={{ marginLeft: 'auto' }}>
        <Share>
          <ButtonIcon label="share" icon={{ name: 'shareAlt' }} />
        </Share>
      </div>
    </Styles.Header>
  )
}