import { styled } from "stitches.config";

export const Container = styled('div', {
  width: '100%',
  maxWidth: '50rem',
  margin: '0 auto',
  padding: '0 1rem',
  '@table-min': {
    padding: '0 2rem',

  },
  '@laptops-min': {
    maxWidth: '75rem'
  },

  '@desktop-min': {
    maxWidth: '92.5rem'
  }
})