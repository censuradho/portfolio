import { styled, keyframes } from 'stitches.config'
import * as AlertDialog from '@radix-ui/react-alert-dialog';


const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const Overlay = styled(AlertDialog.Overlay, {
  backgroundColor: '$backgroundOpacity',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  backdropFilter: 'blur(5px)'
});

export const Content = styled(AlertDialog.Content, {
  backgroundColor: '$background',
  borderRadius: '$default',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxHeight: '50vh',
  maxWidth: '500px',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
  display: 'flex',
  flexDirection: 'column'
});

export const { 
  Root,
  Trigger,
  Portal,
  Cancel,
} = AlertDialog

export const Container = styled('div', {

})

export const ScrollView = styled('div', {
  overflow: 'auto'
})

export const Input = styled('input', {
  width: '100%',
  background: 'none',
  border: 'none',
  padding: '1rem',
  outline: 'none',
  color: '$heading',
  fontSize: '$sm'
})

export const SectionTitle = styled('strong', {
  fontSize: '$xsm',
  color: '$heading',
  textTransform: 'uppercase',
  fontWeight: 400,
  padding: '0.5rem 1rem',
  display: 'inline-block'
})

export const List = styled('ul', {

})

export const Item = styled('li', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  a: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    color: '$text',
    fontWeight: 400,
    width: '100%',
    padding: '1rem',
    outline: 'none',

    '&:hover': {
      background: '$foreground',
    },
    '&:focus': {
      background: '$ancesst7',
    }
  },
  color: '$text',
  cursor: 'pointer',

  '&:hover': {
    span: {
      color: '$heading'
    }
  }
})