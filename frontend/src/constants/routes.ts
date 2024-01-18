// login
export const LOGIN_ROUTE = '/'
export const INVESTOR_LOGIN_ROUTE = '/investor-login'
export const NUMBER_VERIFICATION_ROUTE = '/investor-login/number-verification'
export const INVESTOR_OTP_ROUTE = '/investor-login/otp'

// funds
export const FUNDS_ROUTE = '/funds'
export const PRINT_ASSETS_COMMISSION_ROUTE = '/print-assets/commission'
export const PRINT_ASSETS_ROUTE = '/print-assets'

// activity report
export const ACTIVITY_REPORT_ROUTE = '/activity-report'

// onboarding
export const ONBOARDING_PHONE_NUMBER_ROUTE = (dsCode: string) =>
  `/onboarding/${dsCode}/phone-number`
export const ONBOARDING_PHONE_NUMBER_OTP_ROUTE = (dsCode: string, phone: string) =>
  `/onboarding/${dsCode}/phone-number/otp?phone=${phone}`
export const ONBOARDING_START_ROUTE = (dsCode: string, phone: string) =>
  `/onboarding/${dsCode}/start?phone=${phone}`
export const ONBOARDING_START_ERROR_ROUTE = (dsCode: string, type: string) =>
  `/onboarding/${dsCode}/start/error?type=${type}`
export const ONBOARDING_SEJAM_OTP_ROUTE = (dsCode: string, applicationId: string) =>
  `/onboarding/${dsCode}/${applicationId}/sejam-otp`
export const ONBOARDING_REVIEW_ROUTE = (dsCode: string, applicationId: string) =>
  `/onboarding/${dsCode}/${applicationId}/review`
export const ONBOARDING_COMMISSION_ROUTE = (dsCode: string, applicationId: string) =>
  `/onboarding/${dsCode}/${applicationId}/commission`
export const ONBOARDING_FINAL_SUBMIT_ROUTE = (dsCode: string, applicationId: string) =>
  `/onboarding/${dsCode}/${applicationId}/final-submit`
export const ONBOARDING_FINAL_SUBMIT_OTP_ROUTE = (dsCode: string, applicationId: string) =>
  `/onboarding/${dsCode}/${applicationId}/final-submit/otp`
export const ONBOARDING_FINAL_SUBMIT_ERROR_ROUTE = (dsCode: string, applicationId: string) =>
  `/onboarding/${dsCode}/${applicationId}/final-submit/error`
export const ONBOARDING_SUCCESS_ROUTE = (dsCode: string) => `/onboarding/${dsCode}/success`

// commission
export const COMMISSION_POSE_ROUTE = (paymentUUID: string, merchantTerminalId: string) =>
  `/api/v1/payments/commissions/pos/landing/${paymentUUID}/${merchantTerminalId}`

// buy
export const BUY_ROUTE = (dsCode: string) => `/${dsCode}/buy`
export const BUY_COMMISSION_ROUTE = (dsCode: string) => `/${dsCode}/buy/commission`
export const BUY_POSE_ROUTE = (paymentUUID: string, merchantTerminalId: string) =>
  `/api/v1/payments/funds/pos/landing/${paymentUUID}/${merchantTerminalId}`
export const CONFIRM_BUY_AMOUNT_ROUTE = (dsCode: string) => `/${dsCode}/buy/confirmPrice`
export const BUY_STATUS_ROUTE = (dsCode: string) => `/${dsCode}/buy/status`
export const BUY_RCP_ROUTE = (dsCode: string) => `/${dsCode}/buy/rcp`

// sell
export const SELL_ROUTE = (dsCode: string) => `/${dsCode}/sell`
export const SELL_COMMISSION_ROUTE = (dsCode: string) => `/${dsCode}/sell/commission`
export const SELL_OTP_ROUTE = (dsCode: string) => `/${dsCode}/sell/otp`
export const SELL_STATUS_ROUTE = (dsCode: string) => `/${dsCode}/sell/status`

// investment certificate
export const PRINT_CERTIFICATE_COMMISSION_ROUTE = (dsCode: string) =>
  `/${dsCode}/print-certificate/commission`
export const PRINT_CERTIFICATE_ROUTE = (dsCode: string) => `/${dsCode}/print-certificate`

// errors
export const SESSION_EXPIRED_ROUTE = '/401'
export const PISHKHAN_DISABLED_ROUTE = '/pishkhan-disabled'
