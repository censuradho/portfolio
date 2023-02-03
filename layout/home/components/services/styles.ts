import { styled } from 'stitches.config'

export const Section = styled('section', {
  padding: '4rem 0'
})

export const Card = styled('div', {
  borderRadius: '$default',
  border: '1px solid $border',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
  maxWidth: '300px'
})

export const IconCard = styled('div', {
  padding: '0.5rem',
  width: 'max-content',
  borderRadius: '$default',
  backgroundImage: 'linear-gradient(90deg, $selectiveYellow, $sweetCorn)'
})