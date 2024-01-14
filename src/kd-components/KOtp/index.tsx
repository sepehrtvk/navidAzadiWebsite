import cs from 'classnames'
import OtpInput from './OtpInput'
import OtpTimer from './OtpTimer'
import OtpProps from './type'

function KOtp({
  onComplete,
  onResend,
  disabled,
  error,
  seconds,
  className,
  resendLoading,
}: OtpProps) {
  return (
    <div className={cs([className, 'flex flex-col gap-6 items-center'])}>
      <OtpInput onComplete={onComplete} disabled={disabled} error={error} />
      <OtpTimer resendLoading={resendLoading} onResend={onResend} seconds={seconds} />
    </div>
  )
}

export default KOtp
