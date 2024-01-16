'use client'

import React from 'react'
import UserInfo from './components/UserInfo'
import PlanChoose from './components/PlanChoose'
import ActivePlan from './components/ActivePlan'
import Plans from './components/Plans'

const userPanelPage = () => {
  return (
    <div className="w-full">
      <UserInfo />
      <PlanChoose />
      <ActivePlan />
      <Plans />
    </div>
  )
}

export default userPanelPage
