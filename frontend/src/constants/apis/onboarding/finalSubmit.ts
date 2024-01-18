export const ONBOARDING_SEND_ESIGN_OTP = (applicationId: string, nationalCode: string) =>
  `/v1/user-management/esign/sendOTP/${applicationId}?nationalCode=${nationalCode}`
export const ONBOARDING_FINAL_SUBMIT = (nationalCode: string) =>
  `/v1/user-management/onboarding/submit?nationalCode=${nationalCode}`

export interface OnboardingFinalSubmitDto {
  levantId: string
  mobile: string
  kiani: boolean
}
