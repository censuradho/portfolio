'use client'

import { useRouter } from 'next/navigation'
import { Icon } from '../icon'
import styles from './styles.module.css'
import { HeaderProps } from './types'
import { classGroupe } from '@/utils/classNames'

export function HeaderButton (props: HeaderProps) {
  const { title, left } = props

  const router = useRouter()

  const renderLeftButton = () => {
    const { 
      icon = {
        name: 'arrowLeft',
        color: 'heading',
        size: 25
      }, 
      onClick = () => router.back()
    } = left || {}

    return (
      <button 
        className={styles.header__button} 
        onClick={onClick}
      >
        {icon ? <Icon {...icon} /> : null}
      </button>
    )
  } 
  
  return (
    <header className={classGroupe('container', styles.header)}>
      {renderLeftButton()}
      <strong>{title}</strong>
    </header>
  )
}