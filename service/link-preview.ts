import axios from 'axios'

export const apiLinkPreview = axios.create({
  baseURL: `http://api.linkpreview.net/?key=${process.env.NEXT_PUBLIC_LINK_PREVIEW}`
})

export const getLinkPreview = async (href: string) => {
  const response = await apiLinkPreview.get(`&q=${href}`)
  return response
}