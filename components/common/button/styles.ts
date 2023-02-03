import { styled } from 'stitches.config'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '.2s',
  justifyContent: 'center',
  position: 'relative',
  whiteSpace: 'nowrap',
  borderRadius: '3px',
  height: '3.125rem',
  '&:disabled': {
    cursor: 'not-allowed'
  },
  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    size: {
      md: {
        paddingRight: '4rem',
        paddingLeft: '4rem',
      }
    },
    variant: {
      primary: {
        background: '$ancesst8',
        padding: '0.7rem 1rem',
        border: '1px solid transparent',

        '&:disabled': {
          background: '$disabled'
        },
        '> *': {
          color: '$background',
          fontWeight: 600
        },
        '&:hover': {
          background: 'transparent',
          borderColor: 'white',

          '> *': {
            color: 'white',
          },
        },
      },
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export const LoaderContainer = styled('div', {

})