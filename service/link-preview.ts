import axios from 'axios'

export const apiLinkPreview = axios.create({
  baseURL: `http://api.linkpreview.net/?key=${process.env.NEXT_PUBLIC_LINK_PREVIEW}`
})

export interface LinkPreview {
  title?: string,
  description?: string
  image?: string
  url?: string
}

export const getLinkPreview = async (href: string) => {
  return apiLinkPreview.get<LinkPreview>(`&q=${href}`)
}