import { styled } from 'stitches.config'

export const Container = styled('div', {})

export const Title = styled('h1', {
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
  marginTop: '4rem'
})


export const ProjectLink = styled('a', {

})


export const ListEmphasis = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem 0',
  flexWrap: 'wrap',
  gap: '1rem',

  path: {
    fill: '$heading'
  },
  li: {
    width: '100%',
    maxWidth: '350px'
  },
  a: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem',
    borderRadius: '$default',
    
    '&:hover, &:focus': {
      background: '$foreground'
    }
  },

  '@laptops-min': {
    flexDirection: 'row',
  }
})
