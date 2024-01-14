'use client'

import cs from 'classnames'
import { KButton } from 'src/kd-components'
import staticTexts from '@constants/locale/fa'
import { ServerErrorSvg } from '@svgs/illustrations'
import RetryErrorProps from './type'

const { connection_lost, error_fetching_data, retry } = staticTexts.retry_error

function RetryError({
  children,
  error,
  onRetry,
  illustration = <ServerErrorSvg className="w-[135px] h-[173px]" />,
  title = error_fetching_data,
  description = connection_lost,
  className,
  loading,
  loadingComponent,
}: RetryErrorProps) {
  return error ? (
    <div
      className={cs(
        className,
        'flex flex-col w-full items-center gap-6 bg-background-surface rounded-xl pb-10 pt-6',
      )}
    >
      {illustration}
      <div className="flex flex-col items-center gap-2">
        <div className="text-text text-h6">{title}</div>
        <div className="text-regular13 text-text-middle">{description}</div>
      </div>
      <KButton width={350} type="primary" style="stroke" text={retry} onClick={onRetry} />
    </div>
  ) : loading ? (
    loadingComponent
  ) : (
    children
  )
}

export default RetryError
