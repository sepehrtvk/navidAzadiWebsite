'use client'

import { createJSONStorage, persist } from 'zustand/middleware'
import { ConfigDto, OrganizationConfig, OrganizationConfigKeys } from '@constants/apis/user/config'
import { create } from '../storeManagement/index'

interface ConfigStore {
  config: Partial<ConfigDto>
  setConfig: (config: Partial<ConfigDto>) => void
  getSelectedConfig: (key: OrganizationConfigKeys) => OrganizationConfig | undefined
}

const useConfigStore = create<ConfigStore>()(
  persist(
    (set, get) => ({
      config: {},
      setConfig: configData =>
        set(store => {
          return { config: { ...store.config, ...configData } }
        }),
      getSelectedConfig: (key: OrganizationConfigKeys) => {
        return get().config.organization?.configs.find(item => item.key === key)
      },
    }),
    { name: 'KD_CONFIG', storage: createJSONStorage(() => sessionStorage) },
  ),
)

export default useConfigStore
