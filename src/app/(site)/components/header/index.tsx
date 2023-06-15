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
    <Dialog.Root>
      <header className={styles.header}>
        <div className={classGroupe('container', styles.header__content)}>
          <Link href={paths.home}>Logo</Link>
          <button onClick={toggleOpen} className={styles.header__trigger}>
            <Icon name="menu" />
          </button>
        </div>
        <nav 
          className={classNames({
            [styles['header__navigation--close']]: !isOpen,
          }, [styles.header__navigation])}
        >
          <Box justifyContent="flex-end">
            <button onClick={toggleOpen}>
              <Icon name="close" />
            </button>
          </Box>
          <Accordion.Root 
            type="single"
            collapsible
          >
            <ul>{renderNavigation}</ul>
          </Accordion.Root>
        </nav>
      </header>
    </Dialog.Root>
  )
}