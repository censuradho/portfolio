import { Box } from 'components/common'
import { styled } from 'stitches.config'

export const Header = styled('header', {
  width: '100%',
  borderRadius: '100px',
  padding: '0.5rem 1rem',
  position: 'sticky',
  top: '2rem',
  zIndex: 3,
  transition: '.15s ease',
  border: '1px solid transparent',
  background: 'none',
  display: 'flex',
  alignItems: 'center',
  minHeight: '5.425rem',

  variants: {
    visible: {
      true: {
        borderColor: '$foregroundActive',
        background: '$foregroundActiveOpacity',
        backdropFilter: 'blur(10px)',
      },
    }
  }
})

