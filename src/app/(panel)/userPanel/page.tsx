'use client'

import React from 'react'
import UserInfo from './components/UserInfo'
import PlanChoose from './components/PlanChoose'
import ActivePlan from './components/ActivePlan'
import Plans from './components/Plans'
import GoogleMeetReserve from './components/GoogleMeetReserve'
import VisitReserveReserve from './components/VisitReserve'

const userPanelPage = () => {
  return (
    <div className="w-full">
      <UserInfo />
      <PlanChoose />
      <ActivePlan />
      <Plans />
      <GoogleMeetReserve />
      <VisitReserveReserve />
    </div>
  )
}

export default userPanelPage
