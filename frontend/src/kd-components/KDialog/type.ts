import { ReactNode } from 'react'

export default interface KDialogProps {
  open: boolean
  handleClose?: () => void
  title?: string
  children?: ReactNode
  withHeader?: boolean
}
