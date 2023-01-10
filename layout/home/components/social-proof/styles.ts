import { styled } from "stitches.config";

export const Section = styled('section', {
  padding: '4rem 1rem',
})

export const CarouselContainer = styled('div', {
  paddingLeft: '1rem',
  position: 'relative',

  '@table-min': {
    paddingLeft: '2.5rem'
  },

  '@laptops-min': {
    paddingLeft: '3.75rem'
  }
})

export const Figure = styled('figure', {
  width: '300px',
  height: '300px',

  img: {
    objectFit: 'contain'
  }
})

export const Arrow = styled('button', {
  width: '30px',
  height: '30px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  '-webkit-transform': 'translateY(-50%)',
  cursor: 'pointer',

  svg: {
    width: '40px',
    height: '40px',
    path: {
      fill: '$heading'
    }
  }
})

export const Left = styled(Arrow, {
  left: 5
})

export const Right = styled(Arrow, {
  left: 'auto',
  right: '5px'
})
