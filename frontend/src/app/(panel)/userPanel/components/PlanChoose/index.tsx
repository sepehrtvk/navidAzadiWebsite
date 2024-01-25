import KButton from '@components/KButton'
import KDialog from '@components/KDialog'
import staticTexts from '@constants/locale/fa'
import numberWithCommas from '@utils/numberWithCommas'
import { CheckIcon, CloseIcon } from '@svgs/icons'

import React, { useState } from 'react'
import useApi from '@utils/api/useApi'
import { NewPlanDTO, POST_NEWPLAN_URL } from '@constants/apis/newPlan'
import { enqueueSnackbar } from 'notistack'
import useStore from '@store/storeManagement/useStore'
import useProfileStore from '@store/profile'

const plansArray = [
  {
    type: 'online1',
    title: 'آنلاین 1',
    descriptions: ['ارسال عکس', 'پرسش و پاسخ داخل سایت', 'ارسال ویدیو های آموزشی'],
    price1: 6000000,
    price2: 12000000,
  },
  {
    type: 'online2',
    title: 'آنلاین 2',
    descriptions: [
      'ارسال عکس',
      'پرسش و پاسخ داخل سایت',
      'ارسال ویدیو های آموزشی',
      'ویزیت ویدیو کال ( گوگل میت )',
    ],
    price1: 8000000,
    price2: 16000000,
  },
  {
    type: 'visit',
    title: 'حضوری',
    descriptions: ['ویژه تهران و شهرستان ها', 'مشاوره حضوری', 'بادی آنالیز'],
    price1: 10000000,
    price2: 20000000,
  },
]

function PlanChoose() {
  const {
    choosePlan,
    noPlan,
    signPlan_one_year,
    signPlan_six_month,
    signInAlert,
    confirm,
    cancel,
    one_year,
    six_month,
    signPlan,
  } = staticTexts.userPanel.planChoose
  const { toman } = staticTexts.common

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<NewPlanDTO | null>(null)
  const profile = useStore(useProfileStore, store => store.profile)

  const { loading, fetch: submitNewPlan } = useApi<NewPlanDTO>({
    url: POST_NEWPLAN_URL,
    lazy: true,
    method: 'post',
    onSuccess: data => {
      enqueueSnackbar(data.status, { variant: 'error' })
      setIsModalVisible(false)
    },
    onError: error => {
      if (error.data.status) {
        enqueueSnackbar(error.data.status, { variant: 'error' })
      }
    },
  })

  return (
    <>
      <KDialog open={isModalVisible} withHeader={false}>
        <div className="flex flex-col items-center">
          {/* <PrintSvg className="w-[203px] h-[189px]" /> */}
          <div className="text-h4 text-text mt-6">{signPlan}</div>
          {selectedPlan && (
            <div className="flex gap-4 items-center">
              {selectedPlan.timeslot === '6month' && (
                <div className="mt-8">
                  <span className="text-text text-medium15">{six_month}: </span>
                  <span className="text-h4 text-text">{numberWithCommas(selectedPlan.price)}</span>
                  <span className="text-text mr-1 text-medium13">{toman}</span>
                </div>
              )}
              {selectedPlan.timeslot === '12month' && (
                <div className="mt-8">
                  <span className="text-text text-medium15">{one_year}: </span>
                  <span className="text-h4 text-text">{numberWithCommas(selectedPlan.price)}</span>
                  <span className="text-text mr-1 text-medium13">{toman}</span>
                </div>
              )}
            </div>
          )}
          <div className="text-regular15 text-text-middle mt-4 mb-8">{signInAlert}</div>

          <div className="flex w-1/2 gap-2">
            <KButton
              className="w-full"
              type="secondary"
              text={confirm}
              rightIcon={className => <CheckIcon className={className} />}
              loading={loading}
              onClick={() => {
                submitNewPlan({ payload: selectedPlan })
              }}
            />
            <KButton
              className="w-full"
              type="error"
              text={cancel}
              loading={loading}
              rightIcon={className => <CloseIcon className={className} />}
              onClick={() => {
                setIsModalVisible(false)
              }}
            />
          </div>
        </div>
      </KDialog>
      <div className="px-4 py-3 rounded-xl w-full bg-background-surface mt-4">
        <div className="flex justify-between items-center mb-4 pb-2 border-0 border-b border-solid border-b-border-light">
          <div className="flex gap-4 items-center">
            <div className="text-h5 text-text">{choosePlan}</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="text-error-dark">{noPlan}:</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {plansArray.map(item => {
            return (
              <div className="flex flex-col justify-between items-center border-solid border-border-light rounded-xl p-4">
                <div className="flex flex-col items-center">
                  <h4 className="pb-2 border-0 border-b border-solid border-b-border-light">
                    {item.title}
                  </h4>
                  <div className="flex flex-col my-4 ">
                    {item.descriptions.map((desc, index) => (
                      <span className="mb-4">
                        {index + 1}.{desc}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center mt-8">
                  <div className="flex flex-col items-center mt-2">
                    <div>
                      <span className="text-text text-medium15">{six_month}: </span>
                      <span className="text-h4 text-text">{numberWithCommas(item.price1)}</span>
                      <span className="text-text mr-1 text-medium13">{toman}</span>
                    </div>
                    <div>
                      <span className="text-text text-medium15">{one_year}: </span>
                      <span className="text-h4 text-text">{numberWithCommas(item.price2)}</span>
                      <span className="text-text mr-1 text-medium13">{toman}</span>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse justify-between mt-6">
                    <div>
                      <KButton
                        disabled={false}
                        htmlType="submit"
                        text={signPlan_one_year}
                        size="small"
                        typography="buttonSmall"
                        width={128}
                        loading={false}
                        onClick={() => {
                          const tempData: NewPlanDTO = {
                            type: item.type,
                            timeslot: '12month',
                            userId: profile?.userId ? profile?.userId : '',
                            price: item.price2,
                          }
                          setSelectedPlan(tempData)
                          setIsModalVisible(true)
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <KButton
                        disabled={false}
                        htmlType="submit"
                        text={signPlan_six_month}
                        size="small"
                        typography="buttonSmall"
                        width={128}
                        loading={false}
                        onClick={() => {
                          const tempData: NewPlanDTO = {
                            type: item.type,
                            timeslot: '6month',
                            userId: profile?.userId ? profile?.userId : '',
                            price: item.price1,
                          }
                          setSelectedPlan(tempData)
                          setIsModalVisible(true)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PlanChoose
