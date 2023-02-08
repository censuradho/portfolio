import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
})

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
  height: '100%',
  flex: 1,
  marginTop: '4rem',
})

