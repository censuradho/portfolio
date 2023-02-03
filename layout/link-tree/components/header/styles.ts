import { Box } from 'components/common'
import { styled } from 'stitches.config'

export const HiddenView = styled('div', {
  gap: '1rem',
  alignItems: 'center',
  width: '100%',
  flex: 1,
  display: 'none',
  
  variants: {
    visible: {
      true: {
        display: 'flex',
      }
    }
  },
  defaultVariants: {
    visible: false
  }
})

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
        borderColor: '$border',
        background: '$foregroundActiveOpacity',
        backdropFilter: 'blur(10px)',
      },
    }
  },

  defaultVariants: {
    visible: false
  }
})

