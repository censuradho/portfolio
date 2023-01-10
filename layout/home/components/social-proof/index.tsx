import { Container } from 'components/common'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { SectionTitle } from '../section-title'
import * as Styles from './styles'
import 'keen-slider/keen-slider.min.css'

const images = [
  '/img_3974.jpg',
  '/img_3975.jpg',
  '/img_4040.jpg',
  '/img_5510.jpg',
  '/img_5511.jpg',
  '/resultado_2.jpg',
  '/resultado_3.jpg',
  '/resultado_4.jpg',
  '/resultado_5.jpg',
  '/resultado_6.jpg',
]

export function SocialProof () {
  const [slideImageRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 20
    }
  })

  const renderImages = images.map((image, index) => (
    <Image key={index} src={`/resultados${image}`} alt="" width={300} height={300} />
  ))

  return (
    <Styles.Section>
      <Container>
        <SectionTitle 
          title="Será que é possível ter resultados em casa?"
          sub="Veja só alguns resultados de alunos do Simbora Trincar que treinaram somente em casa"
        />
      </Container>
      <div ref={slideImageRef} className="keen-slider">{renderImages}</div>
    </Styles.Section>
  )
}