import { styled } from 'stitches.config'
import NextImage from 'next/image'

export const Section = styled('section', {
  margin: '3rem 0',
  position: 'relative',
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  overflow: 'hidden',
  gap: '3rem',

  '@laptops-max': {
    flexDirection: 'column'
  }
})

export const Image = styled(NextImage, {
  borderRadius: '$default',
})

export const Glass = styled('div', {
  backdropFilter: 'blur(5px)',
  zIndex: 7,
  position: 'absolute',
  padding: '1rem',
  border: '1px solid rgba(225, 255, 255, 0.2)'
})
export const ImageContainer = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '&::after': {
    content: '',
    display: 'block',
    borderRadius: '$default',
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: '-5%',
    left: '-5%',
    border: '1px solid $border',
  },

  right: '-10%',
  '@laptops-max': {
    right: 'unset',
    position: 'relative',
  }
})

export const Figure = styled('figure', {
  width: '800px',
  height: '500px',

  '@laptops-max': {
    width: '350px',
    height: '200px',
  }
})