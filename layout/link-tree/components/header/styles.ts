import { styled } from 'stitches.config'

export const Header = styled('header', {
  width: '100%',
  backdropFilter: 'blur(10px)',
  borderRadius: '100px',
  padding: '0.5rem 1rem',
  position: 'sticky',
  top: '2rem',
  zIndex: 3,
  transition: '.15s ease',
  background: '$foregroundActiveOpacity',
  border: '1px solid $foregroundActive',

  variants: {
    visible: {
      true: {
        opacity: 0,
        visibility: 'hidden'
      }
    }
  }
})