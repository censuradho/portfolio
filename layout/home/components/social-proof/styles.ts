import { styled } from "stitches.config";

export const Section = styled('section', {
  padding: '4rem 1rem',
})

export const CarouselContainer = styled('div', {
  paddingLeft: '1rem',

  '@table-min': {
    paddingLeft: '2.5rem'
  },

  '@laptops-min': {
    paddingLeft: '3.75rem'
  }
})