import { classNames } from '@/utils/classNames'
import styles from './styles.module.css'
import { TextInputProps } from './types'
import { forwardRef } from 'react'

export const TextInput = forwardRef<HTMLInputElement | null, TextInputProps>(
  (props, ref) => {
    const { 
      variant ='dark',
      label,
      errorMessage,
      ...otherProps
    } = props

    const variantes = classNames({
      [styles['text_input-default']]: variant === 'default'
    }, [
      styles.text_input
    ])

    const renderLabel = () => {
      if (!label) return null

      return (
        <label
          htmlFor={otherProps?.id} 
          className={styles['text_input-label']}
        >{label}</label>
      )
    }

    const renderErrorMessage = () => {
      if (!errorMessage) return null

      return (
        <span className={styles['text_input-error_message']}>{errorMessage}</span>
      )
    }


    return (
      <div className={variantes}>
        {renderLabel()}
        <input
          ref={ref}
          className={styles['text_input-input']}
          {...otherProps}
        />
        {renderErrorMessage()}
      </div>
    )
  })