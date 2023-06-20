import { appSettings } from '@/config/app'
import axios from 'axios'
import { ContactRequestPayload, subscribeRequestPayload } from './types'

const localApi = axios.create({
  baseURL: `${appSettings.siteUrl}/api`
})

function subscribe (payload: subscribeRequestPayload) {
  return localApi.post('/subscribe', payload)
}

function contact (payload: ContactRequestPayload) {
  return localApi.post('/contact', payload)
}

export const localApiService = {
  subscribe,
  contact
}