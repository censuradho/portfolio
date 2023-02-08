import { ActiveLink, Box, ButtonIcon } from 'components/common'
import { paths } from 'constants/routes'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import * as Styles from './styles'

const ModalLinks = dynamic(() => import('../modal-links').then(t => t.ModalLinks), {
  ssr: false
})

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
        <ActiveLink href={paths.home}>
          <Logo />
        </ActiveLink>
        <ModalLinks>
          <ButtonIcon label="command" icon={{ name: 'command', size: 25 }} />
        </ModalLinks>
      </Box>
      <Styles.Navigation>
        <Styles.List>
          <Styles.Item>
            <ActiveLink href={paths.home}>Sobre</ActiveLink>
          </Styles.Item>
          <Styles.Item>
            <ActiveLink href={paths.projects}>Projetos</ActiveLink>
          </Styles.Item>
          <Styles.Item>
            <ActiveLink href="#soluções">Setup</ActiveLink>
          </Styles.Item>
          <Styles.Item>
            <ActiveLink href="#contato">News</ActiveLink>
          </Styles.Item>
        </Styles.List>
      </Styles.Navigation>
    </Styles.Header>
  )
}