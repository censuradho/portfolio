import { styled } from 'stitches.config'

export const Container = styled('div', {})

export const Header = styled('header', {
  width: '100%',
  margin: '2rem 0'
})

export const Article = styled('article', {
  margin: '2rem 0',
  ul: {
    padding: '0 1rem'
  },
  figure: {
    width: '100%'
  },
  iframe: {
    width: '100% !important',
    marginBottom: '1.25rem'
  },
  li: {
    listStyleType: 'unset',
    padding: '0.2rem 0',
    fontSize: '$xsm'
  },
  h2: {
    fontSize: '$md',
    margin: '10px 0'
  },
  h3: {
    fontSize: '$sm',
    padding: '0.4rem 0'
  },
  h4: {
    fontSize: '$xsm',
    paddingBottom: '0.4rem'
  },
  p: {
    fontSize: '$sm',
    lineHeight: '2rem',
    paddingBottom: '1.25rem'
  },
  pre: {
    code: {
      background: 'none'
    },
    margin: '15px 0'
  },
  code: {
    background: '$backgroundOpacity',
    padding: '1.6px 4px',
    color: '$heading'
  },
  a: {
    textDecoration: 'underline',
    color: '$information'
  },
  img: {
    maxWidth: '100%'
  }
})