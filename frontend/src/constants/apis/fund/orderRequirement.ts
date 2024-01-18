export const GET_ORDER_REQUIREMENT_URL = (dsCode: string) => `/v1/funds/${dsCode}/order-requirement`

export interface CommissionDto {
  buy: number
  buyMax: number
  description: string
  sell: number
  sellMax: number
  type: 'FIX' | 'PERCENT'
}

export interface OrderRequirementDto {
  fund: {
    buyDisabledMessage: string
    canBuy: boolean
    canSell: boolean
    commissionDtos: Array<CommissionDto>
    dsCode: string
    id: string
    inputAmountIsLimited: boolean
    lastUpdate: number
    maxBuyAmount: number
    minBuyAmount: number
    minSellUnit: number
    name: string
    sellDisabledMessage: string
    sellProbationDuration: number
    type: 'ETF' | 'NonETF'
    unitBuyAmount: number
    unitSellAmount: number
  }
  lastUpdate: number
  sellableShares: number
  sellableSharesValue: number
  totalShareValue: number
  totalShares: number
}
