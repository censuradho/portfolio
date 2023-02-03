import { Box } from 'components/common'
import { paths } from 'constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import * as Styles from './styles'

export function Header () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prevState => !prevState)

  const Logo = () => (
    <Image 
      src="/logo-full.svg" 
      alt="logo" 
      width={149} 
      height={63} 
    />
  )
  return (
    <Styles.Header>
      <Box fullWidth justifyContent="space-between" alignItems="center">
        <Link href={paths.home}>
          <Logo />
        </Link>
        <Styles.ButtonMenu 
          label="Menu" 
          icon={{ name: isOpen ? 'outlineClose' : 'menu', size: 25 }} 
          onClick={toggleMenu}
        />
        <Styles.Navigation open={isOpen} onClick={toggleMenu}>
          <Styles.List>
            <Styles.Item>
              <Link href={paths.home}>Home</Link>
            </Styles.Item>
            <Styles.Item>
              <Link href="#quem-somos">Sobre</Link>
            </Styles.Item>
            <Styles.Item>
              <Link href="#soluções">Soluções</Link>
            </Styles.Item>
            <Styles.Item>
              <Link href="#contato">Contato</Link>
            </Styles.Item>
          </Styles.List>
        </Styles.Navigation>
      </Box>
    </Styles.Header>
  )
}