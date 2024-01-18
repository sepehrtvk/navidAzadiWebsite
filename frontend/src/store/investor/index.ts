'use client'

import { createJSONStorage, persist } from 'zustand/middleware'
import { UserApplicationsDto } from '@constants/apis/userManagment/userApplications'
import { create } from '../storeManagement/index'

export type InvestorProfile = UserApplicationsDto & {
  nationalCode: string
  firstName?: string
  lastName?: string
  sessionStartTime?: number
}

interface InvestorStore {
  profile: Partial<InvestorProfile>
  setProfile: (profile: Partial<InvestorProfile>) => void
  clearProfile: () => void
}

const useInvestorStore = create<InvestorStore>()(
  persist(
    set => ({
      profile: {},
      setProfile: profileData =>
        set(store => {
          return { profile: { ...store.profile, ...profileData } }
        }),
      clearProfile: () => {
        set({ profile: {} })
      },
    }),
    { name: 'KD_INVESTOR', storage: createJSONStorage(() => sessionStorage) },
  ),
)

export default useInvestorStore
