interface Item {
  title: string
  description?: string
  link: string
  image: {
    src: string
    alt: string
  }
}

export interface CarouselProps {
  data: Item[]
}