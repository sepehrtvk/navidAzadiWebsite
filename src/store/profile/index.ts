// import { OfficeDetailType } from '@apis/user/details'
// import { create } from './../storeManagement/index'
// import { createJSONStorage, persist } from 'zustand/middleware'

// interface ProfileStore {
//   data: Partial<OfficeDetailType>
//   setData: (data: Partial<OfficeDetailType>) => void
// }

// const useProfileStore = create<ProfileStore>()(
//   persist(
//     (set, get) => ({
//       data: {},
//       setData: data => set(state => ({ data })),
//     }),
//     { name: 'KD_OFFICE_ADMIN', storage: createJSONStorage(() => sessionStorage) },
//   ),
// )

// export default useProfileStore
