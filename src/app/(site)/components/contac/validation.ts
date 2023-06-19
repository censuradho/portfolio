import { FORM_ERROR } from '@/constants/errors'
import { z } from 'zod'

export const contactSchemaValidation = z.object({
  email: z.string({
    required_error: FORM_ERROR.required
  }).email(),
  name: z.string({
    required_error: FORM_ERROR.required
  }),
  whatsapp: z.string({
    required_error: FORM_ERROR.required
  }).nonempty(),
})

export type ContactFormData = z.infer<typeof contactSchemaValidation>