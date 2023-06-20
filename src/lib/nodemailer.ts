import { appSettings } from '@/config/app'
import nodemailer, { SendMailOptions} from 'nodemailer'

import json from '@/dictionaries/pt-BR.json'

export const nodemailerTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    pass: appSettings.nodemailer.auth.password,
    user: appSettings.nodemailer.auth.user,
  }
})

export const mailOptions: SendMailOptions = {
  from: json.personal_infos.email,
  to: json.personal_infos.email,
}