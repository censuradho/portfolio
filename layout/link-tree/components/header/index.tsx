import { Avatar, Box, Typography } from 'components/common'

import * as Styles from './styles'
import { HeaderProps } from './types'

export function Header (props: HeaderProps) {
  
  const { 
    visible,
    title 
  } = props

  return (
    <Styles.Header visible={visible}>
      <Box gap={1} alignItems="center">
        <Avatar size={50} src='/logo.jpg' alt="logo" />
        <Box flex={1} justifyContent="center">
          <Typography as="h2" size="md" color="heading">{title}</Typography>
        </Box>
      </Box>
    </Styles.Header>
  )
}