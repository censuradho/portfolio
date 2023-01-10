import * as Collapsible from '@radix-ui/react-collapsible';
import { styled } from 'stitches.config';


export const Root = styled(Collapsible.Root, {
  marginBottom: '5rem'
})

export const Section = styled('section', {
  padding: '4rem 0',

  [`${Root}:last-child`]: {
    marginBottom: 0
  }
})

export const Trigger = styled(Collapsible.Trigger, {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
})

export const Index = styled('span', {
  fontSize: '1.3rem',
  paddingRight: '2rem',
  '@table-min': {
    paddingRight: '11rem'
  }
})

export const Title = styled('strong', {
  fontSize: '1.8rem',
  color: '$heading',
  maxWidth: '35rem',
  textAlign: 'left',
  fontWeight: 500,

})

export const Content = styled(Collapsible.Content, {
  p: {
    maxWidth: '50rem',
    fontSize: '1rem',
    paddingLeft: '3rem',
    
    '@table-min': {
      paddingLeft: '12rem'
    }
  }
})