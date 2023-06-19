import { FORM_ERROR } from '@/constants/errors'
import { z } from 'zod'

export const contactSchemaValidation = z.object({
  email: z.string().email(FORM_ERROR.invalid),
  name: z.string().nonempty(FORM_ERROR.required),
  whatsapp: z.string().nonempty(FORM_ERROR.required),
  message: z.string().nonempty(FORM_ERROR.required),
})

export type ContactFormData = z.infer<typeof contactSchemaValidation>