'use client'

import * as Dialog from '@radix-ui/react-dialog';
import { PropsWithChildren } from 'react';

import styles from './styles.module.css'
import { SuccessDialogProps } from './types';
import { Icon } from '../icon';

export function SuccessDialog (props: PropsWithChildren<SuccessDialogProps>) {
  const {
    children,
    onOpenChange,
    open,
    title
  } = props

  const renderTrigger = () => {
    if (!children) return null
    return (
      <Dialog.Trigger>{children}</Dialog.Trigger>
    )
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {renderTrigger()}
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialog_overlay} />
        <Dialog.Content className={styles.dialog_content}>
          <button onClick={() => onOpenChange?.(false)} className={styles.success_dialog__close}>
            <Icon name="close" color="heading" />
          </button>
          <div className={styles.success_dialog__icon}>
            <Icon size={30} name="done" color="heading" />
          </div>
          <strong className={styles.success_dialog__title}>{title}</strong>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}