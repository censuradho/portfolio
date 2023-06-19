import { appSettings } from '@/config/app'
import axios from 'axios'
import { subscribeRequestPayload } from './types'

const localApi = axios.create({
  baseURL: `${appSettings.siteUrl}/api`
})

function subscribe (payload: subscribeRequestPayload) {
  return localApi.post('/subscribe', payload)
}

export const localApiService = {
  subscribe
}