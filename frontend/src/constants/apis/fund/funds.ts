import { FundType, applicationType } from './aggregated'

export const GET_FUNDS_URL = '/v1/funds'

export interface GetFundsDto {
  funds: FundType[]
  userApplications: {
    firstName: string
    lastName: string
    levantId: string
    mobile: string
    userId: string
    kiani: boolean
    applications: applicationType[]
  }
}
