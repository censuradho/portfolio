import { ContactFormData } from "@/app/(site)/components/contac/validation";

export function contactTemplate (payload: ContactFormData) {
  const { message, ...contact } = payload

  const list = Object.entries(contact).reduce((string, [key, value]) => {
    return string += `<li>${key}: ${value}</li>`
  }, '')

  return `
    <ul>
      ${list}
    </ul>
    <br />
    <p>${payload.message}</p>
  `
}