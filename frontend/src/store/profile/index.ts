import { createJSONStorage, persist } from 'zustand/middleware'
import { LoginDto } from '@constants/apis/auth'
import { create } from '../storeManagement/index'

interface ProfileStore {
  profile: LoginDto | null
  setProfile: (profile: LoginDto) => void
}

const useProfileStore = create<ProfileStore>()(
  persist(
    set => ({
      profile: null,
      setProfile: profile => set({ profile }),
    }),
    { name: 'KD_AP_PROFILE', storage: createJSONStorage(() => localStorage) },
  ),
)

export default useProfileStore
