import { styled } from 'stitches.config'

export const Button = styled('button', {
  padding: '0.4rem',
  border: 'transparent 1px solid',
  outline: 'none',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '&:focus': {
    borderColor: '$heading',
  }
})