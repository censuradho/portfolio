import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
})

export const MyName = styled('h1', {
  fontSize: '2.5rem',
  background: 'linear-gradient(90deg, $secondary, $brightTurquoise)',
  textFillColor: 'transparent',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  fontWeight: 700,
  paddingBottom: '1rem'
})

export const Main = styled('main', {
  display: 'flex',
  alignItems: 'center',
  flex: 1,
})

export const Button = styled('button', {
  color: '$heading',
  fontSize: '$xsm',
  padding: '5px',
  borderRadius: '$default',
  transition: '0.2s',
  fontWeight: 500,
  
  'kbd:last-child': {
    marginLeft: '5px'
  },

  kbd: {
    background: '$ancesst6',
    padding: '1px 5px',
    borderRadius: '4px',
    fontSize: '14px',
    color: '$background'
  },

  '&:hover': {
    background: '$ancesst4',

    kbd: {
      background: '$ancesst7'
    }
  },
})