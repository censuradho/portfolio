import { styled } from 'stitches.config'

export const Container = styled('section', {
  border: '1px solid $border',
  padding: '1.5rem',
  borderRadius: '$default'
})

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  marginTop: '2rem'
})

export const Item = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  img: {
    borderRadius: '50%',
  }
})

export const Description = styled('p', {
  whiteSpace: 'nowrap',
  fontSize: '$xsm'
})