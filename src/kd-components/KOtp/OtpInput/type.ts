export default interface OtpInputProps {
  onComplete: (code: string) => void
  disabled?: boolean
  error?: boolean
}
