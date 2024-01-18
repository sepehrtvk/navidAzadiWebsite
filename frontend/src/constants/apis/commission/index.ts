export enum CommissionType {
  ON_BOARDING = 'ON_BOARDING',
  BUY = 'BUY',
  SELL = 'SELL',
  PRINT = 'PRINT',
}

export const COMMISSION_URL = '/v1/payments/commissions'
export const SPEND_COMMISSION_URL = (commissionType: CommissionType) =>
  `/v1/payments/commissions?commissionType=${commissionType}`

export type TerminalGatewayType = 'POS' | 'RCP'

export type DestinationAccount = {
  bankAccountNumber: string
  bankId: string
  bankName: string
  iban: string
}

export interface TerminalDtoType {
  merchantTerminalId: string
  allowed: boolean
  ceilingAmount: number
  description: string
  floorAmount: number
  gatewayType: TerminalGatewayType
  pgLandingUrl: string
  psp: string
  pspIcon: string
  pspName: string
  destinationAccounts: DestinationAccount[]
}

export interface PaymentResponseType {
  paymentResNum: string
  paymentUUID: string
  terminalDTOList: TerminalDtoType[]
}

export interface CommissionDto {
  successfulCommissions: boolean
  successUserKeys: number[]
  paymentResponse: PaymentResponseType
}

export enum TransactionStatusType {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  IN_PROGRESS = 'IN_PROGRESS',
  WAITING_FOR_VERIFY = 'WAITING_FOR_VERIFY',
}
export interface CommissionStatusDto {
  transactionStatus: TransactionStatusType
  amount: number
}
