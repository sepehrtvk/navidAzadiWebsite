import staticTexts from '@constants/locale/fa'
import React from 'react'

function ActivePlan() {
  const { planActive, planType, startDate, endDate, planCount, receivedPlanCount } =
    staticTexts.userPanel.activePlan

  return (
    <div className="px-4 py-3 rounded-xl w-full bg-background-surface mt-4">
      <div className="flex justify-between items-center mb-4 pb-2 border-0 border-b border-solid border-b-border-light">
        <div className="flex gap-4 items-center">
          <div className="text-h5 text-text">{planActive}</div>
        </div>
      </div>
      <div className="mb-4">
        <span className="text-bold15">{planType}: </span>
        <span className="text-medium15 text-text-dark">آنلاین۱</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-bold15">{startDate}: </span>
          <span className="text-medium15 text-text-dark">{'14/5/1402'}</span>
        </div>
        <div>
          <span className="text-bold15">{endDate}: </span>
          <span className="text-medium15 text-text-dark">{'19/5/1402'}</span>
        </div>
        <div>
          <span className="text-bold15">{planCount}: </span>
          <span className="text-medium15 text-text-dark">8</span>
        </div>
        <div>
          <span className="text-bold15">{receivedPlanCount}: </span>
          <span className="text-medium15 text-text-dark">4</span>
        </div>
      </div>
    </div>
  )
}

export default ActivePlan
