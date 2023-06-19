import { TextareaHTMLAttributes } from "react"

type RootTextareaProps = Pick<TextareaHTMLAttributes<HTMLTextAreaElement>,
  'placeholder'
  | 'id'
  | 'onChange'
  | 'onBlur'
  | 'onFocus'
  | 'value'
  | 'defaultValue'
>

export interface TextareaProps extends RootTextareaProps {
  variant?: 'default'
  label?: string
  errorMessage?: string
}