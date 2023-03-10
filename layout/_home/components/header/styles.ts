import { styled } from 'stitches.config';

export const Header = styled('header', {
  padding: '1rem'
})


export const Navigation = styled('nav', {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  overflow: 'auto hidden',
})

export const List = styled('ul', {
  display: 'flex',
  gap: '1.2rem',
})

export const Item = styled('li', {
  a: {
    fontWeight: 400,
    padding: '0.5rem',
    borderRadius: '$default',
    transition: '0.2s',

    '&:hover, &.active': {
      color: '$heading',
      background: '$ancesst2'
    }
  }
})
