import { memo } from 'react'

import Link from 'next/link'
import * as Styles from './styles'

import { ButtonProps } from './types'

function BaseButton (props: ButtonProps) {
  const { children, loading, disabled, href, type, as, ...otherProps } =
    props

  const renderButton = () => (
    <Styles.Button
      type={type}
      disabled={disabled || loading}
      {...otherProps}
    >
      {children}
    </Styles.Button>
  )

  const renderContent = () => {
    if (as === 'a' && href) {
      return <Link href={href}>{renderButton()}</Link>
    }

    return renderButton()
  }

  return renderContent()
}

export const Button = memo(BaseButton)