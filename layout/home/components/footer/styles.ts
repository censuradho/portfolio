import { styled } from 'stitches.config'

export const Footer = styled('footer', {
  borderTop: '1px solid $border',
  width: '100%',
  padding: '4rem 1rem',
})

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const Item = styled('li', {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  '> *': {
    fontWeight: 400
  },
  a: {
    '&:hover': {
      color: '$heading'
    }
  }
})