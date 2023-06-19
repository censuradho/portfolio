import axios from 'axios'

import { appSettings } from '@/config/app'

import { ListSubscribeRequestPayload, SendEmailPayload } from './types'

const mailChimpMarketingApi = axios.create({
  baseURL: `${appSettings.mailChimp.marketingBaseUrl}`,
  headers: {
    Authorization: `auth ${appSettings.mailChimp.apiKey}`
  }
})

const mailChimpTransactionalApi = axios.create({
  baseURL: `${appSettings.mailChimp.transactionalBaseUrl}`
})

function subscribe (payload: ListSubscribeRequestPayload) {
  return mailChimpMarketingApi.post('/lists/9f9d7dddd3', payload)
}

async function sendEmail (payload: SendEmailPayload) {
  return await mailChimpTransactionalApi.post('/messages/send', {
    key: appSettings.mailChimp.apiKey,
    ...payload
  })
}

export const mailChimpMarketingService = {
  subscribe
}

export const mailChimpTransactionalService = {
  sendEmail
}