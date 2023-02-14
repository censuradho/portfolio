import { styled } from 'stitches.config'

export const Container = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export const Main = styled('main', {
  flex: 1,
  marginTop: '4rem'
})


export const Article = styled('article', {

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

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  marginTop: '4rem'
})