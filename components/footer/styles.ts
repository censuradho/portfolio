import { styled } from 'stitches.config'

export const Footer = styled('footer', {
  width: '100%',
  padding: '4rem 0',
  background: '$foreground',
  textAlign: 'center',

  'p a': {
    fontWeight: 600
  }
})

export const SocialLinks = styled('aside', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rems',
  margin: '1rem 0'
})