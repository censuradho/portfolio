import { Icon } from 'components/common'
import { useEventListener } from 'hooks'
import { PropsWithChildren, useState } from 'react'
import * as Styles from './styles'

import json from 'data/perfil.json'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function ModalLinks ({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const [search, setSearch] = useState('')

  const renderFastLinks = json.fast_links
    .filter(value => !search || value.label.toLowerCase() === search.toLowerCase())
    .map((item, index) => (
      <Styles.Item
        key={index}
      >
        <Styles.Cancel asChild>
          <Link href={item.link}>
            <Icon name={item.icon as any} />
            <span>
              {item.label}
            </span>
          </Link>        
        </Styles.Cancel>
      </Styles.Item>
    ))

    const renderSocialLinks = json.social_links
    .filter(value => !search || value.label.toLowerCase().includes(search.toLowerCase()))
    .map((item, index) => (
      <Styles.Item
        key={index}
      >
        <Styles.Cancel asChild>
          <a target="_blank" rel="noreferrer" href={item.link}>
            <Icon name={item.icon as any} />
            <span>
              {item.label}
            </span>
          </a>  
        </Styles.Cancel>      
      </Styles.Item>
    ))

  const handleCopyToClipBoard = () => {
    const path = `${window.location.origin}${router.basePath}`

    navigator.clipboard.writeText(path)
  }

  useEventListener('keydown', event => {
    const _event = event as any
    
    if (_event.ctrlKey) {
      if (isOpen) return;

      event.preventDefault()
      const keyValue = _event?.key;
      if (keyValue !== 'k') return;

      setIsOpen(true)
    }
  })

  return (
    <Styles.Root open={isOpen} onOpenChange={setIsOpen}>
      <Styles.Trigger asChild>{children}</Styles.Trigger>
      <Styles.Portal>
        <Styles.Overlay onClick={() => setIsOpen(false)} />
        <Styles.Content>
          <Styles.Input 
            placeholder="Digite um comando ou pesquise..." 
            autoComplete="false"
            autoCapitalize="false"
            autoCorrect="false"
            autoFocus
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
          <Styles.ScrollView>
            <Styles.SectionTitle>Geral</Styles.SectionTitle>
            <Styles.List>
              <Styles.Item onClick={handleCopyToClipBoard}>
                <Styles.Cancel asChild>
                  <a href="#">
                    <Icon name="copy" />
                    <span>Copiar URL</span>
                  </a>
                </Styles.Cancel>
              </Styles.Item>
              <Styles.Item>
                <Styles.Cancel asChild>
                  <a href={json.email} target="_blank" rel="noreferrer">
                    <Icon name="mail" />
                    <span>Enviar email</span>
                  </a>
                </Styles.Cancel>
              </Styles.Item>
              <Styles.Item>
                <Styles.Cancel asChild>
                  <a href={json.wahtsapp} target="_blank" rel="noreferrer">
                    <Icon name="whatsapp" />
                    <span>Mensagem</span>
                  </a>
                  </Styles.Cancel>
              </Styles.Item>
            </Styles.List>
            {renderFastLinks.length > 0 && (
              <>
              <Styles.SectionTitle>Ir para</Styles.SectionTitle>
              <Styles.List>{renderFastLinks}</Styles.List>
            </>
            )}
            {renderSocialLinks.length > 0 && (
              <>
                <Styles.SectionTitle>Seguir</Styles.SectionTitle>
                <Styles.List>{renderSocialLinks}</Styles.List>
              </>
            )}
          </Styles.ScrollView>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}