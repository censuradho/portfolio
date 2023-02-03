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

export const Figure = styled('figure', {
  position: 'absolute',
  width: '800px',
  height: '500px',
  right: '-10%',

  '@laptops-max': {
    right: 'unset',
    position: 'relative',
    width: '350px',
    height: '200px',
  }
})