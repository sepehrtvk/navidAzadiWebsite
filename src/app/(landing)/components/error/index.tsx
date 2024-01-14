'use client'

import { KButton } from 'src/kd-components'
import { RefreshIcon } from '@svgs/icons'
import staticTexts from '@constants/locale/fa'
import ErrorProps from './type'

const { retry, receiving_failed } = staticTexts.login

function Error({ onRetry }: ErrorProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-h6 text-text-button">{receiving_failed}</div>
      <KButton
        size="medium"
        width={156}
        text={retry}
        type="primaryAlt"
        style="stroke"
        onClick={onRetry}
        rightIcon={className => <RefreshIcon className={className} />}
      />
    </div>
  )
}

export default Error
