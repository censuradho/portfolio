import { Textarea } from "@/components/form"
import { TextareaFormProps } from "./types"

export function TextareaForm (props: TextareaFormProps) {
  const { register, ...otherProps } = props

  return (
    <Textarea 
      {...register}
      {...otherProps}
    />
  )
}