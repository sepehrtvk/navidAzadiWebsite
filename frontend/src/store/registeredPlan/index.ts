import { createJSONStorage, persist } from 'zustand/middleware'
import { NewPlanDTO } from '@constants/apis/newPlan'
import { create } from '../storeManagement/index'

interface RegisteredPlanStore {
  registeredPlan: NewPlanDTO | null
  setRegisteredPlan: (registeredPlan: NewPlanDTO) => void
}

const useRegisteredPlanStore = create<RegisteredPlanStore>()(
  persist(
    set => ({
      registeredPlan: null,
      setRegisteredPlan: registeredPlan => set({ registeredPlan }),
    }),
    { name: 'registeredPlan', storage: createJSONStorage(() => localStorage) },
  ),
)

export default useRegisteredPlanStore
