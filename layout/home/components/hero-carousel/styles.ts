import { styled } from "stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  'keen-slider__slide': {
    width: '100%',
    position: 'relative',

    img: {
      width: '100%'
    }
  }
})

export const Figure = styled('figure', {
  width: '100%',
  position: 'relative',
  height: '12.5rem',
  '@smartphone-min': {
    height: '31.25rem'
  },

  '@laptops-min': {
    height: '43.75rem'
  },
 
})

export const Banner = styled('div', {



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