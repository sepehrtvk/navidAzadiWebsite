'use client'

import { useEffect } from 'react'
import { enqueueSnackbar } from 'notistack'
import KButton from '../../KButton'
import { timeToCounter, useTimer } from '../../helper'
import RefreshIcon from './refresh.svg'
import consts from './consts'
import OtpTimerProps from './type'

const { no_code_received, resend } = consts

function OtpTimer({ seconds = 120, onResend, resendLoading = false }: OtpTimerProps) {
  const { remainingSeconds, setSeconds } = useTimer(seconds)

  useEffect(() => {
    if (remainingSeconds > 0) setTimeout(() => setSeconds(remainingSeconds - 1), 1000)
  }, [remainingSeconds, setSeconds])

  const handleResend = async () => {
    try {
      await onResend()
      setSeconds(seconds)
    } catch (error) {
      enqueueSnackbar('error.data.message', { variant: 'error' })
    }
  }

  if (remainingSeconds === 0) {
    return (
      <div className="flex items-center gap-4">
        <div className="text-text text-regular15">{no_code_received}</div>
        <KButton
          loading={resendLoading}
          onClick={handleResend}
          text={resend}
          type="primary"
          style="text"
          size="small"
          rightIcon={className => <RefreshIcon className={className} />}
        />
      </div>
    )
  }
  return <div className="text-text-tertiary text-h5">{timeToCounter(remainingSeconds)}</div>
}

export default OtpTimer
