export const ACTIVITY_REPORT_URL = '/v1/activities'

export enum ActivityReportType {
  ALL_OPERATIONS = 'ALL_OPERATIONS',
  ON_BOARDING = 'ON_BOARDING',
  BUY = 'BUY',
  SELL = 'SELL',
  COMMISSION = 'COMMISSION',
}

export interface ActivityReportContentProps {
  createdDate: string
  nationalCode: string
  type: ActivityReportType
}

export interface ActivityReportDto {
  content: ActivityReportContentProps[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: {
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
    unpaged: boolean
  }
  size: number
  sort: {
    empty: false
    sorted: true
    unsorted: false
  }
  totalElements: number
  totalPages: number
}
