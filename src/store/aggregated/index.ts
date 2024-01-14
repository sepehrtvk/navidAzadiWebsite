import { createJSONStorage, persist } from 'zustand/middleware'
import {
  FundAndAssetsType,
  FundType,
  FundsAggregatedDto,
  UserApplicationsType,
} from '@constants/apis/fund/aggregated'
import { GetFundsDto } from '@constants/apis/fund/funds'
import { Optional } from '@utils/optionalUtilityType'
import { create } from '../storeManagement/index'

interface FundsStore {
  aggregatedData: Optional<FundsAggregatedDto, 'userApplications' | 'otpRemainingSeconds'>
  setAggregatedData: (aggregatedData: FundsAggregatedDto) => void
  getFundFromDsCode: (dsCode: string) => FundAndAssetsType | undefined
  setAggregatedWithoutAssets: (data: GetFundsDto) => void
  getDsNameFromDsCode: (dsCode: string) => string
  clearAggregatedData: () => void
  getFundProductGroupCode: (dsCode: string) => string
  getUserApplications: () => UserApplicationsType | undefined
  getFundByProductGroup: (productGroup: string) => FundType | undefined
}

const useAggregatedStore = create<FundsStore>()(
  persist(
    (set, get) => ({
      aggregatedData: { aggregatedFunds: [] },
      setAggregatedData: aggregatedData =>
        set(store => ({ aggregatedData: { ...store.aggregatedData, ...aggregatedData } })),
      setAggregatedWithoutAssets: data => {
        const fundsAndAssets = data.funds.map(fund => ({ fund, assetHome: null }))
        set({
          aggregatedData: {
            aggregatedFunds: fundsAndAssets,
            userApplications: data.userApplications,
          },
        })
      },

      getFundFromDsCode: dsCode => {
        return get().aggregatedData.aggregatedFunds.find(fund => fund.fund.dsCode === dsCode)
      },

      getDsNameFromDsCode: dsCode => {
        return (
          get().aggregatedData.aggregatedFunds.find(fund => fund.fund.dsCode === dsCode)?.fund
            .name ?? ''
        )
      },
      clearAggregatedData: () => {
        set({ aggregatedData: { aggregatedFunds: [] } })
      },
      getFundProductGroupCode: dsCode => {
        return (
          get()
            .getFundFromDsCode(dsCode)
            ?.fund.additionalFields.find(item => item.field === 'productGroupCode')?.value ?? ''
        )
      },
      getUserApplications: () => {
        return get().aggregatedData.userApplications
      },
      getFundByProductGroup: productGroup => {
        return get().aggregatedData.aggregatedFunds.find(fund =>
          fund.fund.additionalFields.some(
            item => item.field === 'productGroupCode' && item.value === productGroup,
          ),
        )?.fund
      },
    }),

    { name: 'KD_AGGREGATED', storage: createJSONStorage(() => sessionStorage) },
  ),
)

export default useAggregatedStore
