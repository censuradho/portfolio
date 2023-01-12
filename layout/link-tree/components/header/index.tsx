import { Avatar, Box, ButtonIcon, Typography } from 'components/common'
import { Share } from '../shere'

import * as Styles from './styles'
import { HeaderProps } from './types'

export function Header (props: HeaderProps) {
  
  const { 
    visible = false,
    title 
  } = props

  const renderBranding = () => {
    if (!visible) return null
    
    return (
      <Box fullWidth gap={1} alignItems="center" flex={1}>
        <Avatar size={50} src='/logo.jpg' alt="logo" />
        <Box flex={1} justifyContent="center">
          <Typography as="h2" size="md" color="heading">{title}</Typography>
        </Box>
      </Box>
    )
  }
  
  return (
    <Styles.Header visible={visible}>
      {renderBranding()}
      <div style={{ marginLeft: 'auto' }}>
        <Share>
          <ButtonIcon label="share" icon={{ name: 'shareAlt' }} />
        </Share>
      </div>
    </Styles.Header>
  )
}