import { ReactNode } from 'react'

export default interface RetryErrorProps {
  children: ReactNode
  illustration?: ReactNode
  title?: string
  description?: string
  error: boolean
  onRetry: () => void
  className?: string
  loading?: boolean
  loadingComponent?: ReactNode
}
