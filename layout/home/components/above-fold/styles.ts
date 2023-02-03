import { styled } from 'stitches.config'

export const Title = styled('h1', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '@desktop-min': {
    flexDirection: 'row',
    gap: '1rem'
  }
})


export const Section = styled('section', {
  minHeight: 'calc(100vh - 4.5rem)',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})