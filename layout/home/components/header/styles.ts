import { ButtonIcon } from 'components/common';
import { styled } from 'stitches.config';

export const Header = styled('header', {
  width: '100%',
  height: '4.5rem',
  background: '$backgroundOpacity',
  borderBottom: '$border 1px solid',
  backdropFilter: 'saturate(180%) blur(5px)',
  position: 'sticky',
  top: 0,
  padding: '0 1rem',
  zIndex: 10
})


export const Navigation = styled('nav', {
  width: '100%',
  height: 'calc(100vh - 4.5rem)',
  background: '$background',
  position: 'absolute',
  zIndex: 9,
  left: 0,
  top: 0,
  transform: 'translateY(-100%)',
  transition: '0.2s',

  '@laptops-min': {
    position: 'static',
    width: 'unset',
    top: 'unset',
    left: 'unset',
    height: 'max-content',
    transform: 'translateY(0) !important',
    background: 'none'
  },
  variants: {
    open: {
      true: {
        transform: 'translateY(75px)'
      }
    }
  }
})

export const ButtonMenu = styled(ButtonIcon, {
  '@laptops-min': {
    display: 'none'
  }
})

export const List = styled('ul', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '1rem',

  '@laptops-min': {
    gap: '1rem',
    flexDirection: 'row',
    padding: '0',
  }
})

export const Item = styled('li', {
  a: {
    display: 'flex',
    padding: '0.5rem',
    color: '$ancesst8',
    fontSize: '$md',
    fontWeight: 400,
    borderBottom: '1px solid $border',
    '@laptops-min': {
      border: 'none',
      color: '$text',
      fontSize: '$sm',

      '&:hover': {
        color: '$heading',
      }
    }
  }
})
