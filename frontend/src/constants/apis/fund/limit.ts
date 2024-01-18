export const GET_FUND_LIMIT = (dsCode: string) => `/v1/funds/${dsCode}/limit`

export interface FundLimitDto {
  fundCode: string
  state: 'OPEN' | 'CLOSED'
}
