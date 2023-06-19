export interface ListsSubscribeErrorResponse {
  type: string
  title: string
  status: number
}

interface Location {
  latitude: number
  longitude: number
}

interface Member {
  email_address: string
  email_type: 'html' | 'text'
  status: 'unsubscribed' | 'cleaned' | 'pending' | 'transactional'
  vip?: boolean
  location?: Location
  timestamp_signup?: string
  ip_signup?: string
  timestamp_opt?: string
}

export interface ListSubscribeRequestPayload {
  members: Member[]
  sync_tags?: boolean
  update_existing?: boolean
}

export interface SendEmailPayload {
  from_email: string
  message: {
    subject: string
    text: string
    to: Array<{
      email: string
      type: 'to'
    }>
  }
}

export interface Contact {
  contents: {
    section: 'signup_message' | 'unsub_message' | 'signup_thank_you_title'
    value: string
  }[]
}