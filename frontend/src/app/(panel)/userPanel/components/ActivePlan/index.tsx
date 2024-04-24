import staticTexts from '@constants/locale/fa'
import useRegisteredPlanStore from '@store/registeredPlan'
import useStore from '@store/storeManagement/useStore'
import { epochToJalali } from '@utils/date'
import React from 'react'

function ActivePlan() {
  const { planActive, planType, startDate, endDate, planCount, receivedPlanCount } =
    staticTexts.userPanel.activePlan

  const registeredPlan = useStore(useRegisteredPlanStore, store => store.registeredPlan)

  if (!registeredPlan || !registeredPlan.startDate) return null

  return (
    <div className="px-4 py-3 rounded-xl w-full bg-background-surface mt-4">
      <div className="flex justify-between items-center mb-4 pb-2 border-0 border-b border-solid border-b-border-light">
        <div className="flex gap-4 items-center">
          <div className="text-h5 text-text">{planActive}</div>
        </div>
      </div>
      <div className="mb-4">
        <span className="text-bold15">{planType}: </span>
        <span className="text-medium15 text-text-dark">{registeredPlan.type}</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-bold15">{startDate}: </span>
          <span className="text-medium15 text-text-dark">
            {epochToJalali(new Date(registeredPlan.startDate))}
          </span>
        </div>
        <div>
          <span className="text-bold15">{endDate}: </span>
          <span className="text-medium15 text-text-dark">
            {epochToJalali(new Date(registeredPlan.endDate))}
          </span>
        </div>
        <div>
          <span className="text-bold15">{planCount}: </span>
          <span className="text-medium15 text-text-dark">{registeredPlan.totalPlan}</span>
        </div>
        <div>
          <span className="text-bold15">{receivedPlanCount}: </span>
          <span className="text-medium15 text-text-dark">{registeredPlan.receivedPlan}</span>
        </div>
      </div>
    </div>
  )
}

export default ActivePlan
