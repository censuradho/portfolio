import { styled } from 'stitches.config'

export const Section = styled('section', {
  padding: '2rem 0',
  textAlign: 'center',

  background: '$foreground',
  h2: {
    color: '$heading',
    fontSize: '1.125rem',
    textTransform: 'uppercase',
  },

  '@table-min': {
    padding: '4rem 0',
  }
})