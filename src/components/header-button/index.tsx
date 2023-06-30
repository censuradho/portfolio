'use client'

import { useRouter } from 'next/navigation'
import { Icon } from '../icon'
import styles from './styles.module.css'
import { HeaderProps } from './types'
import { classGroupe } from '@/utils/classNames'
import Image from 'next/image'
import Link from 'next/link'
import { paths } from '@/constants/paths'

export function HeaderButton (props: HeaderProps) {
  const { title, left, right, data } = props

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
  
  const renderDefaultRight = () => {
    if (right) return null

    return (
      <Link href={paths.home} aria-label="voltar ao início">
        <Image 
          src={data.avatar}
          alt={data.name}
          width={40}
          height={40}
          priority
          className={styles.header__avatar}
        />
      </Link>
    )
  }


  return (
    <header className={classGroupe('container', styles.header)}>
      {renderLeftButton()}
      <strong className={styles.header__title}>{title}</strong>
      {right || renderDefaultRight()}
    </header>
  )
}