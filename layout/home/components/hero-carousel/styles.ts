import { styled } from "stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 76px)',
  'keen-slider__slide': {
    width: '100%',
    position: 'relative',

    img: {
      width: '100%'
    }
  }
})

export const Banner = styled('div', {

  img: {
    height: '400px'
  },

  '@table-min': {
    img: {
      height: '500px'
    },
  },

  '@laptops-min': {
    img: {
      height: '700px'
    },
  },
 
})

export const Range = styled('div', {
  width: '100%',
  height: '4.375rem',
  background: '$primary',
  display: 'flex',
  alignItems: 'center',

})

export const RangeText = styled('strong', {
  fontSize: '1.5rem',
  color: '$background',
  whiteSpace: 'nowrap',
  display: 'block',
  textTransform: 'uppercase'
})