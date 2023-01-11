import { styled } from 'stitches.config'

export const Container = styled('div', {

})

export const Main = styled('main', {
  width: '100%',
  maxWidth: '45rem',
  margin: '0 auto',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
})

export const Banner = styled('div', {
  width: '100%',
  height: '300px',
  borderRadius: '0 0 2rem 2rem',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const Presentation = styled('div', {
  fontSize: '2.2rem',
  fontFamily: '$heading',
  position: 'absolute',
  zIndex: 2,
  padding: '0.5rem 1rem',
  borderRadius: '0 0.5rem 0.5rem 0',
  fontWeight: 500,
  color: '$heading',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem'
})

export const Lettering = styled('div', {
  background: '$background',
  padding: '0.5rem 1rem',
  borderRadius: '$default'
})

export const LinkList = styled('ul', {
  flex: 1,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

export const LinkItem = styled('li', {

  background: '$foreground',
  border: 'transparent 1px solid',
  borderRadius: '$default',

  '&:hover': {
    borderColor: '$foregroundActive'
  },
  a: {
    borderRadius: '$default',
    outline: 'none',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    border: 'transparent 1px solid',

    '&:focus': {
      borderColor: '$heading'
    },
  }
})

export const Emoji = styled('span', {
  fontSize: '2rem'
})

export const Label = styled('strong', {
  fontSize: '1.125rem',
  color: '$heading'
})