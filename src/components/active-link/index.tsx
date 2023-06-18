'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { ActiveLinkProps } from './types'

export function ActiveLink (props: ActiveLinkProps) {
  const pathName = usePathname();

  const { exact, ...otherProps } = props

  const hasMatch = exact ? pathName === props.href : pathName?.includes(props.href as string )

  return (
    <Link 
      {...otherProps}
      className={hasMatch ? 'active' : ''}  
    ></Link>
  )
}