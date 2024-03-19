'use client'

import { useMemo, ReactNode } from 'react'
import useProfileStore from '@store/profile'
import useStore from '@store/storeManagement/useStore'
// import { DashboardIcon, UploadIcon, UsersIcon } from '@svgs/icons'
import { FILE_MANAGER_ROUTE, LANDING_ROUTE, USER_MANAGEMENT_ROUTE } from '@routes'
import useApi from 'src/utils/api/useApi'
// import { RetryError } from '../components'
// import RouteList from './components/RouteList'
import { RouteListItemType } from './components/RouteList/type'
import staticTexts from '@constants/locale/fa'
import RouteList from './components/RouteList'
import Image from 'next/image'
import { OnlineTimeIcon, PlansIcon, TrainingTimeIcon, VisitTimeIcon } from '@svgs/icons'
import {
  ONLINE_VISIT_DASHBOARD_ROUTE,
  PLANS_DASHBOARD_ROUTE,
  PROGRAMS_DASHBOARD_ROUTE,
  TRAINING_DASHBOARD_ROUTE,
  VISIT_DASHBOARD_ROUTE,
} from '@constants/routes'
// import NavigationLoading from './components/NavigationLoading'

const { plans, visit, online_visit, training_, programs_ } = staticTexts.adminPanel.menuItems
const { title } = staticTexts.adminPanel

const ALL_NAVIGATION_ITEMS: RouteListItemType[] = [
  {
    label: plans,
    route: PLANS_DASHBOARD_ROUTE,
    icon: className => (
      <Image className={className} width={45} height={45} src={PlansIcon} alt="PlansIcon" />
    ),
    id: '1',
  },
  {
    label: visit,
    route: VISIT_DASHBOARD_ROUTE,
    icon: className => (
      <Image className={className} width={45} height={45} src={VisitTimeIcon} alt="VisitTimeIcon" />
    ),
    id: '2',
  },
  {
    label: online_visit,
    route: ONLINE_VISIT_DASHBOARD_ROUTE,
    icon: className => (
      <Image
        className={className}
        width={45}
        height={45}
        src={OnlineTimeIcon}
        alt="OnlineTimeIcon"
      />
    ),
    id: '3',
  },
  {
    label: training_,
    route: TRAINING_DASHBOARD_ROUTE,
    icon: className => (
      <Image
        className={className}
        width={45}
        height={45}
        src={TrainingTimeIcon}
        alt="OnlineTimeIcon"
      />
    ),
    id: '4',
  },
  {
    label: programs_,
    route: PROGRAMS_DASHBOARD_ROUTE,
    icon: className => (
      <Image
        className={className}
        width={45}
        height={45}
        src={TrainingTimeIcon}
        alt="OnlineTimeIcon"
      />
    ),
    id: '4',
  },
]

export default function LoginLayout({ children }: { children: ReactNode }) {
  const userprofile = useStore(useProfileStore, store => store.profile)

  return (
    <div className="flex flex-row-reverse overflow-scroll">
      <div className="flex flex-grow p-8 shrink-0 bg-background-surface flex-col items-center h-screen overflow-y-scroll rounded-xl">
        <div className="flex flex-grow min-w-[1240px] ">{children}</div>
      </div>
      <div className="shrink-0 p-6 bg-background w-[240px] flex flex-col gap-10 h-screen overflow-y-scroll no-scrollbar">
        <div className="flex gap-2 items-center ">
          <div className="flex flex-col ">
            <div className="text-text text-h6">{title}</div>
            <div className="text-primary-darker text-medium11">
              {userprofile?.firstName + ' ' + userprofile?.lastName}
            </div>
          </div>
        </div>
        <RouteList items={ALL_NAVIGATION_ITEMS} withGap />
      </div>
    </div>
  )
}
