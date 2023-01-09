import Image from 'next/image'
import Link from 'next/link'

import Logo from 'public/logo.jpg'

import * as Styles from './styles'

export function Header () {
  return (
     <Styles.Header>
      <Link href="#">
        <Image src={Logo} alt="logo" height={40}  />
      </Link>
     </Styles.Header>
  )
}