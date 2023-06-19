
import { ContactFormData, contactSchemaValidation } from "@/app/(site)/components/contac/validation";
import { appSettings } from '@/config/app';
import { mailChimpTransactionalService } from '@/services/mailchimp';
import { NextApiRequest, NextApiResponse } from "next";

import json from '@/dictionaries/pt-BR.json'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(404).send('Not found')

  const {
    email,
    message,
    name,
    whatsapp
  } = req.body as ContactFormData

  const contact = {
    email,
    message,
    name,
    whatsapp
  }

  const isValid = contactSchemaValidation.parse(contact)

  if (!isValid) return res.status(403).json({ 
    description: 'body bad formatted'
  })

  try {
    await mailChimpTransactionalService.sendEmail({
      from_email: contact.email,
      message: {
        subject: 'Contato',
        text: contact.message,
        to: [{
          email: json.personal_infos.email,
          type: 'to'
        }]
      }
    })
  
    return res.status(200).send('ok')
  } catch (err) {
    console.log(err)
    return res.status(500).send('It was not possible to send the email')
  }
}