import { styled, keyframes } from 'stitches.config'

const shine1 = keyframes({
  '0%, 16.667%, 100%': {
    opacity: 1
  },
  '33.333%, 83.333%': {
    opacity: 0
  },
})

const shine2 = keyframes({
  '0%, 16.667%, 66.667%, 100%': {
    opacity: 0
  },
  '33.333%, 50%': {
    opacity: 1
  },
})

const shine3 = keyframes({
  '0%, 50%, 100%': {
    opacity: 0
  },
  '66.667%, 83.333%': {
    opacity: 1
  },
})


export const Overlay = styled('span', {
  fontSize: '5rem',
  color: '$ancesst8',
})


export const Span = styled('span', {
  fontSize: '5rem',
  color: '$ancesst8',
  backgroundSize: '400% 400%',
  fontWeight: 800,
  height: '100%',
  width: 'auto',
  backgroundClip: 'text',
  backgroundImage: 'linear-gradient(90deg, #fff, #fff)',
  textFillColor: 'transparent',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  opacity: 1,
  position: 'absolute',
  top: 0,
  left: 0,

  variants: {
    color: {
      primary: {
        backgroundImage: 'linear-gradient(90deg, $selectiveYellow, $sweetCorn)',
        animation: `${shine1} 8s ease infinite`
      },
      secondary: {
        backgroundImage: 'linear-gradient(90deg, $secondary, $brightTurquoise)',
        animation: `${shine2} 8s ease infinite`
      },
      third: {
        backgroundImage: 'linear-gradient(90deg, $eminence, $heliotrope)',
        animation: `${shine3} 8s ease infinite`
      }
    }
  }
})

export const Container = styled('div', {
  fontSize: '5rem',
  color: '$ancesst8',
  position: 'relative',
  fontWeight: 800,
})
