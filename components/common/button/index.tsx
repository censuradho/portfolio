import { memo } from 'react'

import { Icon } from 'components/common'

import Link from 'next/link'
import * as Styles from './styles'

import { ButtonProps } from './types'

import LoadingSvg from 'public/loading.svg'

function BaseButton (props: ButtonProps) {
  const { children, icon, loading, disabled, href, type, as, ...otherProps } =
    props

  const renderButton = () => {
    const Loader = () => loading && (
      <LoadingSvg height={30} width={30} />
    )
    const Content = () => !loading  && (
      <>
        {icon && <Icon {...icon} />}
        <span>{children}</span>
      </>
    )
    return (
      <Styles.Button
        type={type}
        disabled={disabled || loading}
        {...otherProps}
      >
        {Content()}
        {Loader()}
      </Styles.Button>
    )
  }

  const renderContent = () => {
    if (as === 'a' && href) {
      return <Link href={href}>{renderButton()}</Link>
    }

    return renderButton()
  }

  return renderContent()
}

export const Button = memo(BaseButton)