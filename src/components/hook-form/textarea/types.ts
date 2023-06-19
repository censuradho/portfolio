import { UseFormRegisterReturn  } from "react-hook-form/dist/types";
import { TextareaProps } from '@/components/form/textarea/types'

export interface TextareaFormProps extends TextareaProps {
  register: UseFormRegisterReturn
}