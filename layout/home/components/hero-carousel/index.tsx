
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import * as Styles from './styles'
import Banner from 'public/banner.jpeg'
import { uuid } from 'lib/uuid'
import Image from 'next/image'

const images = Array(9)
  .fill(1)
  .map(() => Banner)
  
const text = [
  '30+ treinos',
  'treinamento mental',
  'alimentação/suplementação',
  'live nutri',
  '4 Bônus'
]

const animation = { duration: 5000, easing: (t) => t }

export function HeroCarousel () {
  const [slideImageRef] = useKeenSlider()
  const [slideTextRef] = useKeenSlider({
    loop: true,
    drag: false,
    renderMode: "performance",
    created(s) {
      s.moveToIdx(0.5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 0.5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 0.5, true, animation)
    },
    slides: {
      perView: 'auto',
      spacing: 10
    }
  })


  const renderImages = images?.map((value) => (
    <div className="keen-slider__slide" key={uuid()}>
      <Image
        src={value}
        alt="banner"
        sizes="100vw"
        style={{ 
          width: '100%', 
        }}
      />
    </div>
  ));

  const renderText = text?.map((value) => (
    <div className="keen-slider__slide" key={uuid()}>
      <Styles.RangeText>{value}</Styles.RangeText>
    </div>
  ));

  return (
     <Styles.Container>
        <Styles.Banner>
          <div ref={slideImageRef} className="keen-slider">{renderImages}</div>
        </Styles.Banner>
        <Styles.Range>
          <div ref={slideTextRef} className="keen-slider">{renderText}</div>
        </Styles.Range>
     </Styles.Container>
  )
}