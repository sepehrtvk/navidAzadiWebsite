export const ONBOARDING_GET_SIGNUP_OTP = (mobile: string) =>
  `/v1/user-management/signup/${mobile}/send-otp`
export const ONBOARDING_SEND_SIGNUP_OTP = (mobile: string, otp: string) =>
  `/v1/user-management/signup/${mobile}/${otp}/validate-otp`
