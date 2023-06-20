import { contactSchemaValidation } from "@/app/(site)/components/contac/validation";
import { mailOptions, nodemailerTransport } from "@/lib/nodemailer";
import { contactTemplate } from "@/mail-templates";
import { ContactRequestPayload } from "@/services/local-api/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(404).send('Not found')

  const {
    email,
    message,
    name,
    whatsapp
  } = req.body as ContactRequestPayload

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
    await nodemailerTransport.sendMail({
      ...mailOptions,
      subject: `Contato de ${contact.name} vindo do portfólio`,
      text: contact.message,
      html: contactTemplate(contact)
    })

    return res.status(201).send('ok')
  } catch (err) {
    console.log(err)

    return res.status(400).json({ description: 'bad request' })
  }

}