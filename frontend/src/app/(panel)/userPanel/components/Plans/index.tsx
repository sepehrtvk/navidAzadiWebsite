import cs from 'classnames'
import KButton from '@components/KButton'
import staticTexts from '@constants/locale/fa'
import useStore from '@store/storeManagement/useStore'
import useRegisteredPlanStore from '@store/registeredPlan'
import useApi from '@utils/api/useApi'
import { PROGRAM_URL, ProgramDTO } from '@constants/apis/program'
import { useEffect, useState } from 'react'
import { epochToJalali } from '@utils/date'
import { useRouter } from 'next/navigation'
import { getQueryParams } from '@utils'
import Lottie from 'lottie-react'
import { PendingLottie } from '@animations'

const plansArray = [
  {
    title: 'برنامه اول',
    startDate: '1402/3/4',
    endDate: '1402/3/11',
    link: '...',
    isActive: true,
  },
  {
    title: 'برنامه دوم',
    startDate: '1402/3/12',
    endDate: '1402/3/19',
    link: '...',
    isActive: true,
  },
  {
    title: 'برنامه سوم',
    startDate: '1402/3/20',
    endDate: '1402/3/27',
    link: '...',
    isActive: false,
  },
  {
    title: 'برنامه چهارم',
    startDate: '1402/3/28',
    endDate: '1402/4/5',
    link: '...',
    isActive: false,
  },
]
function Plans() {
  const { plans, your_plans, download_plan, from, to } = staticTexts.userPanel.plans

  const [programs, setPrograms] = useState<ProgramDTO[]>([])

  const registeredPlan = useStore(useRegisteredPlanStore, store => store.registeredPlan)
  const router = useRouter()

  const {
    loading: programLoading,
    data: programData,
    fetch: getProgram,
  } = useApi<any>({
    url: PROGRAM_URL,
    callCondition: registeredPlan !== undefined,
    queryParams: { registeredPlanId: registeredPlan ? registeredPlan.id : '' },
    onSuccess: data => {
      const { program } = data.data
      setPrograms(program as ProgramDTO)
    },
  })

  if (!registeredPlan || !registeredPlan.startDate) return null

  return (
    <div className="px-4 py-3 rounded-xl w-full bg-background-surface mt-4">
      <div className="flex justify-between items-center mb-4 pb-2 border-0 border-b border-solid border-b-border-light">
        <div className="flex gap-4 items-center">
          <div className="text-h5 text-text">{plans}</div>
        </div>
      </div>
      <div className="mb-4">
        <div>{your_plans}:</div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {programs.map((item, index) => (
          <div
            className={cs(
              'flex flex-col gap-2 items-center rounded-xl p-4 border border-solid border-border-light',
              {
                'bg-background-tint1': !item.startDate,
              },
            )}
          >
            <span className="text-bold15">برنامه {(index + 1).toString()} </span>
            <div>
              <span> {from} </span>
              <span className="text-medium15 text-text-dark">
                {new Date(item.startDate).toLocaleDateString('fa-IR')}
              </span>
              <span> {to} </span>
              <span className="text-medium15 text-text-dark">
                {new Date(item.endDate).toLocaleDateString('fa-IR')}
              </span>
            </div>
            {item.status === 'PENDING' && (
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 rounded-full shadow-lottie bg-neutral-0">
                  <Lottie className="w-full h-full" animationData={PendingLottie} loop />
                </div>
                <span className="text-medium11 mr-2">در انتظار نوشتن مربی</span>
              </div>
            )}
            {item.status === 'NOTREQUESTED' && (
              <div className="mt-4">
                <KButton
                  // href={'item.link'}
                  disabled={!item.startDate}
                  // htmlType="submit"
                  text={'دریافت برنامه'}
                  size="small"
                  typography="buttonSmall"
                  width={128}
                  loading={false}
                  onClick={() => {
                    router.push(`userPanel/program${getQueryParams({ programId: item['_id'] })}`)
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
