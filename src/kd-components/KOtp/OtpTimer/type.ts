export default interface OtpTimerProps {
  seconds?: number
  onResend: () => Promise<any>
  resendLoading?: boolean
}
