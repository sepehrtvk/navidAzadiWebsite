export const GET_FUNDS_AGGREGATED = '/v1/funds/aggregated'

export interface ExtraDataSetType {
  key: string
  value: string
}

export type StageType = 'FETCHSEJAMDATA' | 'ESIGN'

export interface applicationType {
  applicationFinalStatus: string
  applicationID: string
  currentStage: StageType
  productGroup: string
  productType: string
  requestedProductGroup: string
  rq: boolean
  rqDate: string
  stagingState: 'PENDING' | 'DATA_ENTRY' | 'NEW'
  stagingDescription: string
  startOnboardingDto: {
    authorizedMobileNumber: string
    authorizedUserId: string
    birthDate: number
    extraDataSet: ExtraDataSetType[]
    mobileNumber: string
    nationalCode: string
    product: string
    productGroupCode: string
    referralCode: string
    registrationNumber: string
    startOnboardingFor: string
    unitCode: string
    userId: string
  }
  type: string
}

export interface FundType {
  dsCode: string
  type: 'NonETF' | 'ETF'
  name: string
  iconUrl: string
  lastUpdate: number
  rois: {
    daily: number
    monthly: number
    seasonal: number
    annual: number
  }
  additionalFields: [
    {
      id: number
      field: string
      value: string
      version: number
      device: string
      changeType: string
    },
  ]
  canSell: boolean
  canBuy: boolean
  sellState: string
  buyState: string
  buyDisabledMessage: string
  sellDisabledMessage: string
  marketState: string
  productCode: string
  providerId: number
  officeFund: boolean
  unitBuyAmount: number
  unitSellAmount: number
  minimumBuyAmount: number
}

export interface AssetType {
  asset: {
    dsCode: string
    kycState: string
    rq: boolean
    accountNumber: string
    fundType: string
    providerId: number
    officeFund: boolean
  }
  home: {
    dsCode: string
    totalShares: number
    totalValue: number
    pendingBuyAmount: string
    pendingSellAmount: string
    state: string
  }
}
export interface FundAndAssetsType {
  fund: FundType
  assetHome: AssetType | null
}

export interface UserApplicationsType {
  firstName: string
  lastName: string
  levantId: string
  mobile: string
  userId: string
  applications: applicationType[]
}

export type FundsAggregatedDto = {
  aggregatedFunds: FundAndAssetsType[]
  userApplications: UserApplicationsType
  otpRemainingSeconds: number
}

export enum AggregatedErrorReasons {
  OTP_REQUIRED = 'OTP_REQUIRED',
  OTP_NOT_EXPIRED = 'OTP_NOT_EXPIRED',
}
