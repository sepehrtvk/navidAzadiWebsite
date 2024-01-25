import staticTexts from '@constants/locale/fa'
import { WaitSvg } from '@svgs/illustrations'
import numberWithCommas from '@utils/numberWithCommas'
import React from 'react'

interface NotActivePlanProps {
  type: string
  timeslot: string
  price: number
}

function NotActivePlan({ type, timeslot, price }: NotActivePlanProps) {
  const {
    wait_plan,
    wait_plan_desc,
    plan_type,
    plan_time,
    plan_price,
    one_year,
    six_month,
    pay_desc,
  } = staticTexts.userPanel.waitingPlan
  const { toman } = staticTexts.common

  return (
    <div className="px-4 py-3 rounded-xl w-full bg-background-surface mt-4">
      <div className="flex justify-between items-center mb-4 pb-2 border-0 border-b border-solid border-b-border-light">
        <div className="flex gap-4 items-center">
          <div className="text-h5 text-text">{wait_plan}</div>
        </div>
      </div>
      <div className="mb-4">
        <span className="text-medium15 text-text">{wait_plan_desc}. </span>
      </div>
      <div className="w-full text-center">
        <WaitSvg className="w-[203px] h-[189px]" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <span className="text-bold15">{plan_type}: </span>
          <span className="text-medium15 text-text-dark">{type}</span>
        </div>
        <div>
          <span className="text-bold15">{plan_time}: </span>
          <span className="text-medium15 text-text-dark">
            {timeslot === '12month' ? one_year : six_month}
          </span>
        </div>
        <div>
          <span className="text-bold15">{plan_price}: </span>
          <span className="text-h4 text-text">{numberWithCommas(price)}</span>
          <span className="text-text mr-1 text-medium13">{toman}</span>
        </div>
      </div>
      <div className="mt-8 mb-4 text-center">
        <span className="text-medium15 text-text">{pay_desc}. </span>
      </div>
    </div>
  )
}

export default NotActivePlan
