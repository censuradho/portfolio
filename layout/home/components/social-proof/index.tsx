import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'


import 'keen-slider/keen-slider.min.css'

import { Container } from 'components/common'

import { SectionTitle } from '../section-title'
import * as Styles from './styles'
import { uuid } from 'lib/uuid'
import { breakpoints } from 'constants/theme'

const images = [
  'img_3974.jpg',
  'img_3975.jpg',
  'img_4040.jpg',
  'img_5510.jpg',
  'img_5509.jpg',
  'img_5511.jpg',
  'img_5513.jpg',
  'resultado_2.jpg',
  'resultado_3.jpg',
  'resultado_4.jpg',
  'resultado_5.jpg',
  'resultado_6.jpg',
]

export function SocialProof () {
  const [slideImageRef] = useKeenSlider({
    slides: {
      perView: 1.4,
      spacing: 20,
    },
    loop: true,
    breakpoints: {
      [breakpoints['smartphone-min']]: {
        slides: {
          perView: 2.3,
          spacing: 20,

        }
      },
      [breakpoints['table-min']]: {
        slides: {
          perView: 3.3,
          spacing: 20,

        }
      },
      [breakpoints['laptops-min']]: {
        slides: {
          perView: 5.5,
          spacing: 20,

        }
      },
      [breakpoints['desktop-min']]: {
        slides: {
          perView: 5.4,
          spacing: 40,
        }
      }
    },

  })

  const renderImages = images.map(image => (
    <div className="keen-slider__slide" key={uuid()}>
      <Styles.Figure>
        <Image src={`/resultados/${image}`} alt="" fill />
      </Styles.Figure>
    </div>
  ))

  return (
    <Styles.Section>
      <Container>
        <SectionTitle 
          title="Será que é possível ter resultados em casa?"
          sub="Veja só alguns resultados de alunos do Simbora Trincar que treinaram somente em casa"
        />
      </Container>
      <Styles.CarouselContainer>
        <div ref={slideImageRef} className="keen-slider">{renderImages}</div>
      </Styles.CarouselContainer>
    </Styles.Section>
  )
}