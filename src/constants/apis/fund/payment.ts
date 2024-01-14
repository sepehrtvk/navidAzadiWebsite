import { PaymentResponseType, TransactionStatusType } from '@constants/apis/commission'

export const FUND_PAYMENT_URL = '/v1/payments/funds'

export type POST_FUND_PAYMENT_DTO = PaymentResponseType

export interface GET_FUND_PAYMENT_DTO {
  transactionStatus: TransactionStatusType
  amount: number
}
