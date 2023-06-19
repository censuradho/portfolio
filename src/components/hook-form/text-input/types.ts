import { UseFormRegisterReturn  } from "react-hook-form/dist/types";
import { TextInputProps } from '@/components/text-input/types'

export interface TextInputFormProps extends TextInputProps {
  register: UseFormRegisterReturn
}