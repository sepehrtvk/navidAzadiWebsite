import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from '../storeManagement/index'

interface OfficeStore {
  officeCode: string | null
  setOfficeCode: (officeCode: string | null) => void
}

const useOfficeStore = create<OfficeStore>()(
  persist(
    set => ({
      officeCode: null,
      setOfficeCode: officeCode => set({ officeCode }),
    }),
    { name: 'KD_OFFICE', storage: createJSONStorage(() => sessionStorage) },
  ),
)

export default useOfficeStore
