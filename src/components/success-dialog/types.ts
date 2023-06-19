import { DialogProps } from '@radix-ui/react-dialog'

export interface SuccessDialogProps extends 
  Pick<DialogProps, 'onOpenChange' | 'open'> {
    title: string
}