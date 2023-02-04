import { styled } from 'stitches.config'

export const Section = styled('section', {
  padding: '2rem',
  minHeight: '50vh',

  img: {
    objectFit: 'contain',
    opacity: 0.6,
    transition: '0.2s',

    '&:hover': {
      opacity: 1,

    }
  },
})

export const TItle = styled('h2', {
  fontSize: '$md',
  lineHeight: '2rem',
  textFillColor: 'transparent',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  backgroundImage: 'linear-gradient(90deg, $selectiveYellow, $sweetCorn)',
  fontWeight: 800,
  textAlign: 'center',

  '@table-min': {
    fontSize: '3.125rem',
    lineHeight: '4.8rem',
  }
})