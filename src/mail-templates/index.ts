import { ContactFormData } from "@/app/(site)/components/contac/validation";

export function contactTemplate (payload: ContactFormData) {
  return `
    <ul>
      <li>email: ${payload.email}</li>
      <li>name: ${payload.name}</li>
      <li>whatsapp: ${payload.whatsapp}</li>
    </ul>
    <br />
    <p>${payload.message}</p>
  `
}