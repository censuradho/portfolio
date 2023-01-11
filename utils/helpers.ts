import { StandardLonghandProperties } from '@stitches/react/types/css'

export function toLocaleString (value: number) {
  return value.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  })
} 

export function parseToVariant <T> (obj: Record<string, string>, property: keyof StandardLonghandProperties) {
  return Object
    .entries(obj)
    .map(([value]) => ({
      [value]: {
        [property]: `$${value}`
      }
    }))
    .reduce((prev, next) => ({
      ...prev,
      ...next
    }), {}) as unknown as T
}
