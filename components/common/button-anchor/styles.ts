import { styled } from 'stitches.config'

export const Anchor = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '.2s',
  justifyContent: 'center',
  position: 'relative',
  whiteSpace: 'nowrap',
  borderRadius: '3px',
  fontSize: '.875rem',
  textTransform: 'uppercase',

  '&:disabled': {
    cursor: 'not-allowed'
  },
  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    variant: {
      primary: {
        background: '$primary',
        padding: '1rem 2rem',
        color: '#fff',
        width: 'auto',

        '&:hover': {
          background: '$primaryActive'
        },
        '&:disabled': {
          background: '$disabled'
        },
        '> *': {
          color: '$background',
          fontWeight: 600

        }
      },
      stroke: {
        background: 'none',
        border: '1px solid $foregroundActive',
        padding: '1rem',
        color: '$heading',
        
        '&:hover': {
          background: '$foregroundActive'
        },
        '> *': {
          color: '$white',
          fontSize: '$xsm'
        }
      },
      letter: {
        background: 'none',
        '> *': {
          color: '$heading'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})
