import { styled } from "stitches.config";

export const Container = styled('div', {
  width: '100%',
  maxWidth: '50rem',
  margin: '0 auto',

  '@laptops-min': {
    maxWidth: '75rem'
  },

  '@desktop-min': {
    maxWidth: '92.5rem'
  }
})