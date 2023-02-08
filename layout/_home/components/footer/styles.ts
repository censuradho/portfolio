import { styled } from 'stitches.config'

export const Footer = styled('footer', {
  padding: '1rem'
})

export const List = styled('ul', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  gap: '1rem'
})

export const Item = styled('li', {
  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  svg: {
    opacity: 0,
    transition: '0.2s'
  },

  span: {
    fontSize: '$xsm',
  },
  '&:hover': {
    svg: {
      opacity: 1
    },
  },

  '@table-max': {
    span: {
      display: 'none',
    },
    svg: {
      opacity: 1
    }
  }
})