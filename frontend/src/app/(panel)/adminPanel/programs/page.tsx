'use client'

import { KButton } from '@components'
import { ALL_PROGRAM_URL } from '@constants/apis/program'
import staticTexts from '@constants/locale/fa'
import useApi from '@utils/api/useApi'
import { useRouter } from 'next/navigation'
import React from 'react'

function ProgramsPage() {
  const { plans, your_plans, download_plan, from, to } = staticTexts.userPanel.plans
  const router = useRouter()

  const {
    data: allPrograms,
    loading: allProgramsLoading,
    fetch: getPrograms,
  } = useApi<any>({
    url: ALL_PROGRAM_URL,
    dataFormatter: data => {
      return data.data.programs
    },
  })

  if (allProgramsLoading) return <p>loading...</p>
  return (
    <div className="flex-grow">
      <div className="grid grid-cols-4 gap-4">
        {allPrograms &&
          allPrograms.map((item, index) => (
            <div className="flex flex-col gap-2 items-center rounded-xl p-4 border border-solid border-border-light">
              <span className="text-bold15 mb-2 pb-2 border-0 border-b border-solid border-b-border-light">
                برنامه {(index + 1).toString()}{' '}
              </span>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="text-bold13">نوع: </span>
                  <span className="text-medium13 text-text-dark">{item.registeredPlanId.type}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-bold13">زمان: </span>
                  <span className="text-medium13 text-text-dark">
                    {item.registeredPlanId.timeslot == '6month' ? 'شش‌ماهه' : 'یکساله'}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-bold13">نام: </span>
                  <span className="text-medium13 text-text-dark">
                    <span>{item.registeredPlanId.userId.firstName}</span>
                    <span className="mr-1">{item.registeredPlanId.userId.lastName}</span>
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="text-bold13">موبایل: </span>
                  <span className="text-medium13 text-text-dark">
                    {item.registeredPlanId.userId.phone}
                  </span>
                </div>
              </div>

              <div className="mt-2">
                <span> {from} </span>
                <span className="text-medium15 text-text-dark">
                  {new Date(item.startDate).toLocaleDateString('fa-IR')}
                </span>
                <span> {to} </span>
                <span className="text-medium15 text-text-dark">
                  {new Date(item.endDate).toLocaleDateString('fa-IR')}
                </span>
              </div>

              <div className="mt-4">
                <KButton
                  // href={'item.link'}
                  disabled={!item.startDate}
                  // htmlType="submit"
                  text={'ارسال برنامه'}
                  size="small"
                  typography="buttonSmall"
                  width={128}
                  loading={false}
                  onClick={() => {
                    router.push(`/adminPanel/programDetails/${item._id}`)
                  }}
                />
              </div>
            </div>
          ))}
      </div>
      {allPrograms && allPrograms.length === 0 && (
        <p className=" text-error text-bold15">هیچ برنامه ای برای نوشتن وجود ندارد!</p>
      )}
    </div>
  )
}

export default ProgramsPage
