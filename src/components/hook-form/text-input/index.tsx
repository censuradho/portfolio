import { TextInput } from "@/components"
import { TextInputFormProps } from "./types"

export function TextInputForm (props: TextInputFormProps) {
  const { register, ...otherProps } = props

  return (
    <TextInput 
      {...register}
      {...otherProps}
    />
  )
}