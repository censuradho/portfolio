import perfil from 'data/perfil.json'

export interface TLink {
  icon: string
  label: string
  link: string
  link_preview: string
}

export type Perfil = typeof perfil