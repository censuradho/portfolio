import Image from 'next/image'
import { styled } from 'stitches.config'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  background: 'url(/section-bg.png)',
  backgroundSize: '100%',
  backgroundAttachment: 'fixed',
  padding: '4rem 0',


})

export const CardList = styled('ul', {
  display: 'flex',
  justifyContent: 'center',

  '@table-max': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem'
  } 
})

export const Card = styled('li', {
  maxWidth: '25rem',
  width: '100%',
  padding: '1rem',
  background: '$foreground',

  border: '$foregroundActive 1px solid',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  position: 'relative',
  variants: {
    active: {
      true: {
        transform: 'scale(1.1)',
        background: '$background',
        '@table-max': {
          transform: 'scale(1)',
        },
        zIndex: 2
      }
    }
  },


  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem'
  }
})

export const Description = styled('span', {
  fontSize: '.875rem',
  color: '$heading'
})

export const InCash = styled('span', {
  fontSize: '.625rem',
})

export const Recommended = styled(Image, {
  position: 'absolute',
  top: 0,
  left: 0,
})

export const Label = styled('strong', {
  fontSize: '18px',
  color: '$heading',
  fontWeight: 500
})

export const From = styled('strong', {
  fontSize: '1.75rem',
  textDecoration: 'line-through',
  fontWeight: 400
})

export const To = styled('strong', {
  fontSize: '2rem',
  color: '$primary'
})

export const Benefit = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
})