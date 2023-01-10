import { styled } from 'stitches.config'

export const Section = styled('section', {
  backgroundImage: 'url(/bg-gradient.png)',
  minHeight: '70vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  padding: '4rem 0'
})

export const ImageContainer = styled('figure', {
  width: '18.75rem',
  height: '18.75rem',
  position: 'relative',

  img: {
    objectFit: 'contain'
  },

  '@table-min': {
    width: '24rem',
    height: '24rem',
  },

  '@laptops-min': {
    width: '30rem',
    height: '30rem',
  }
})

export const Title = styled('h2', {
  color: '#fff',
  fontSize: '2rem',
  textAlign: 'center'
})

export const Subtitle = styled('p', {
  fontSize: '1.3rem',
  color: '#fff',
  textAlign: 'center',

  span: {
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 600
  }
})