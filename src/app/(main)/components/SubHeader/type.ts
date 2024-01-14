import { ReactNode } from 'react'

export default interface SubHeaderProps {
  title?: string
  showBackButton?: boolean
  backButtonTitle?: string
  backButtonRoute?: string
  showPrintAssets?: boolean
  onPrintAssetsClick?: () => void
  loading?: boolean
  children?: ReactNode
}
