import { useEventListener } from 'hooks'
import { PropsWithChildren, useState } from 'react'
import * as Styles from './styles'

export function ModalLinks ({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false)

  useEventListener('keydown', event => {
    const _event = event as any
    
    if (_event.ctrlKey) {
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
        <Styles.Overlay />
        <Styles.Content>
          <Styles.Input placeholder="Digite um comando ou pesquise..." />
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}