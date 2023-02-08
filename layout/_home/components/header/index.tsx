import { Box, ButtonIcon } from 'components/common'
import { paths } from 'constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ModalLinks } from '../modal-links'
import * as Styles from './styles'

export function Header () {
  const Logo = () => (
    <Image 
      src="/logo.svg" 
      alt="logo" 
      width={60} 
      height={60}
      style={{
        objectFit: 'contain'
      }}
    />
  )
  return (
    <Styles.Header>
      <Box fullWidth justifyContent="space-between" alignItems="center">
        <Link href={paths.home}>
          <Logo />
        </Link>
        <ModalLinks>
          <ButtonIcon label="command" icon={{ name: 'command', size: 25 }} />
        </ModalLinks>
      </Box>
      <Styles.Navigation>
        <Styles.List>
          <Styles.Item>
            <Link href={paths.home}>Sobre</Link>
          </Styles.Item>
          <Styles.Item>
            <Link href="#quem-somos">Projetos</Link>
          </Styles.Item>
          <Styles.Item>
            <Link href="#soluções">Setup</Link>
          </Styles.Item>
          <Styles.Item>
            <Link href="#contato">News</Link>
          </Styles.Item>
        </Styles.List>
      </Styles.Navigation>
    </Styles.Header>
  )
}