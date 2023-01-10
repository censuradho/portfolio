import { styled } from "stitches.config";

export const Section = styled('section', {
  padding: '4rem 0',

})

export const Benefits = styled('ul', {
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '4rem',

  '@table-min': {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  '@laptops-min': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginTop: '8rem',
  },
  '@desktop-min': {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  li: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap:  '2rem',
    flexDirection: 'column',
    padding: '1rem',
    textAlign: 'center',

    svg: {
      path: {
        fill: '$heading'
      }
    }
  }
})