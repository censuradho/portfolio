'use client'
import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';

import styles from './styles.module.css';

import { HeaderProps } from './types';
import { classGroupe, classNames } from '@/utils/classNames';
import Link from 'next/link';
import { paths } from '@/constants/paths';
import { ActiveLink, Box, Icon } from '@/components';
import { useToggle } from '@/hooks';

export function Header (props: HeaderProps) {
  const { navigation } = props
  const [isOpen, toggleOpen] = useToggle(false)
  
  const renderNavigation = navigation.map((value, index) => {

    const renderSubLinks = value?.items?.map((value, index) => (
      <li key={index} onClick={toggleOpen}>
        <ActiveLink href={value.href}>{value.label}</ActiveLink>
      </li>
    ))

    if (renderSubLinks) return (
      <li key={index}>
        <Accordion.Item className={styles['header__accordion-item']} value={String(index)}>
          <Box gap={1} alignItems="center">
            <Accordion.Header>
              <Accordion.Trigger className={styles['header__accordion-trigger']}>
                <span>{value.label}</span>
                <Icon name="keyBoardArrowDown" />
              </Accordion.Trigger>
            </Accordion.Header>
          </Box>
          <Accordion.Content className={styles['header__accordion-content']}>
            <ul>{renderSubLinks}</ul>
          </Accordion.Content>
        </Accordion.Item>
      </li>
    )
    
    return (
      <li key={index} onClick={toggleOpen}>
        <ActiveLink href={value.href as string}>{value.label}</ActiveLink>
      </li>
    )
  })
  return (
    <Dialog.Root open={isOpen} onOpenChange={toggleOpen}  >
      <header className={styles.header}>
        <div className={classGroupe('container', styles.header__content)}>
          <Link href={paths.home}>Logo</Link>
          <Dialog.Trigger className={styles.header__trigger}>
            <Icon name="menu" />
          </Dialog.Trigger>
        </div>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content className={styles['header__dialog-content']}>
            <nav className={classGroupe('container', styles.header__navigation)}>
              <div className={styles['header__navigation-header']}>
                <Dialog.Close>
                  <Icon name="close" />
                </Dialog.Close>
              </div>
              <Accordion.Root 
                type="single"
                collapsible
              >
                <ul>{renderNavigation}</ul>
              </Accordion.Root>
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </header>
    </Dialog.Root>
  )
}