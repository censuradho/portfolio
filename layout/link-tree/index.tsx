import dynamic from 'next/dynamic'

import { uuid } from 'lib/uuid'
import { 
  Avatar, 
  Icon, 
  Typography 
} from 'components/common'


import { Header } from './components'
import * as Styles from './styles'
import { LinkTreeProps } from './types'

import ReactGA from 'react-ga4'
import { useRef } from 'react'
import { useIntersectionObserver } from 'hooks'
import { IconNames } from 'components/common/icon/types'
import Image from 'next/image'


export function LinkTreeLayout (props: LinkTreeProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    threshold: 1
  })

  const isVisible = ref.current ? !!entry?.isIntersecting : true

  const { 
    perfil
  } = props
  
  const renderLinks = perfil.social_links?.map(item => (
    <Styles.LinkItem
      key={uuid()}
      onClick={() => ReactGA.event({
        label: item.label,
        action: 'click',
        category: 'social link'
      })}
    >
      <a aria-label={item.label} href={item.link} target="_blank" rel="noreferrer">
        <Icon name={item.icon as IconNames} size={32}  />
        <Styles.Label>{item.label}</Styles.Label>
      </a>
    </Styles.LinkItem>
  ))


  const renderProjectsLinks = perfil.projects_links?.map(item => (
    <Styles.LinkItem
      key={uuid()}
      onClick={() => ReactGA.event({
        label: item.label,
        action: 'click',
        category: 'social link'
      })}
    >
      <a aria-label={item.label} href={item.link} target="_blank" rel="noreferrer">
        <Icon name={item.icon as IconNames} size={32}  />
        <Styles.Label>{item.label}</Styles.Label>
      </a>

    </Styles.LinkItem>
  ))

  return (
    <Styles.Container>
      <Styles.Main>
        <Header 
          visible={!isVisible}
          title={perfil.nickname} 
        />
        <Styles.Banner ref={ref}>
          <Styles.Presentation>
            <Image width={120} height={120} src='/logo.svg' style={{ objectFit: 'contain' }} alt="logo" />
            <Styles.Lettering >
              <Typography as="h1" size="md" color="heading">{perfil.instagram}</Typography>
            </Styles.Lettering>
          </Styles.Presentation>
        </Styles.Banner>
        <Typography as="h3" color="heading" size="md">Social links</Typography>
        <Styles.LinkList>
          {renderLinks}
        </Styles.LinkList>
        <Typography as="h3" color="heading" size="md">Projects links</Typography>
        <Styles.LinkList>
          {renderProjectsLinks}
        </Styles.LinkList>
      </Styles.Main>
    </Styles.Container>
  )
}
