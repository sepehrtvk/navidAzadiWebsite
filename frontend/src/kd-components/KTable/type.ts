import { ReactNode } from 'react'

interface ComponentTableItem {
  component: ReactNode
  value: any
}

type TableItem = ComponentTableItem | string

type TableRow = TableItem[]

export type TableDataType = TableRow[]

interface KTableDefaultProps {
  headers: string[]
  data?: TableDataType
  indexed?: boolean
  className?: string
  getSelectedRow?: (row: any) => void
}

interface PaginationTableProps {
  hasPagination: true
  page: number
  setPage: (value: number) => void
  totalPages: number
  totalElements: number
  pageSize?: number
}

interface WithoutPaginationProps {
  hasPagination: false
  page?: number
  setPage?: (value: number) => void
  totalPages?: number
  totalElements?: number
  pageSize?: number
}

type KTableProps = KTableDefaultProps & (WithoutPaginationProps | PaginationTableProps)

export default KTableProps
