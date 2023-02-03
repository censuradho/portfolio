import { styled } from 'stitches.config'

export const Section = styled('section', {
  padding: '2rem',
  img: {
    objectFit: 'contain'
  }
})

export const TItle = styled('h2', {
  fontSize: '$xlg',
  textFillColor: 'transparent',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  backgroundImage: 'linear-gradient(90deg, $selectiveYellow, $sweetCorn)',
  fontWeight: 800,
  textAlign: 'center'
})