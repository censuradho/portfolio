import { TextareaProps } from "./types"

import styles from './styles.module.css'
import { classNames } from "@/utils/classNames"
import { ChangeEvent, forwardRef, useImperativeHandle, useRef } from "react"

export const Textarea = forwardRef<HTMLTextAreaElement | null, TextareaProps>((props, ref) => {
  const {
    errorMessage,
    variant,
    label,
    onChange,
    ...otherProps
  } = props

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useImperativeHandle<HTMLTextAreaElement | null, HTMLTextAreaElement | null>(ref, () => {
    return textAreaRef.current
  }, [textAreaRef])

  const variants = classNames({
    [styles['textarea-default']]: variant === 'default'
  }, [
    styles.textarea
  ])

  const renderLabel = () => {
    if (!label) return null

    return (
      <label
        htmlFor={otherProps?.id} 
        className={styles['textarea-label']}
      >{label}</label>
    )
  }

  const renderErrorMessage = () => {
    if (!errorMessage) return null

    return (
      <span className={styles['textarea-error_message']}>{errorMessage}</span>
    )
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${event.target.scrollHeight - 16}px`;
    }
    onChange?.(event)
  }

  return (
    <div className={variants}>
      {renderLabel()}
      <textarea
        ref={textAreaRef}
        onChange={handleChange}
        className={styles['textarea-input']}
        {...otherProps}
      />
      {renderErrorMessage()}
    </div>
  )
}) 