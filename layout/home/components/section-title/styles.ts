import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.4rem',
  marginBottom: '4rem'
})

export const Title = styled('h2', {
  fontSize: '2.5rem',
  color: '$heading',
  textTransform: 'uppercase',
  fontFamily: '$heading'
})

export const Sub = styled('p', {
  fontSize: '1rem',
})