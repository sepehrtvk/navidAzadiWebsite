'use client'

import React from 'react'
import UserInfo from './components/UserInfo'
import PlanChoose from './components/PlanChoose'
import ActivePlan from './components/ActivePlan'

const userPanelPage = () => {
  return (
    <div className="w-full">
      <UserInfo />
      <PlanChoose />
      <ActivePlan />
    </div>
  )
}

export default userPanelPage
