import { styled } from "stitches.config";

export const Section = styled('section', {
  padding: '4rem 0',
})

export const Number = styled('span', {
  fontSize: '1.6rem',
  textTransform: 'uppercase',
  color: '$heading',
  fontWeight: 600
})

export const Call = styled('strong', {
  fontSize: '2rem',
  color: '$primary',
  textTransform: 'uppercase'
})

export const Foreground = styled('div', {
  background: '$foreground',
  padding: '2rem 0',
  margin: '2rem 0'
})