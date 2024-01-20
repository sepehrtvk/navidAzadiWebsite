import KButton from '@components/KButton'
import KDialog from '@components/KDialog'
import staticTexts from '@constants/locale/fa'
import numberWithCommas from '@utils/numberWithCommas'
import { CheckIcon, CloseIcon } from '@svgs/icons'

import React, { useState } from 'react'

const plansArray = [
  {
    title: 'آنلاین 1',
    descriptions: ['ارسال عکس', 'پرسش و پاسخ داخل سایت', 'ارسال ویدیو های آموزشی'],
    price: 6000000,
  },
  {
    title: 'آنلاین 2',
    descriptions: [
      'ارسال عکس',
      'پرسش و پاسخ داخل سایت',
      'ارسال ویدیو های آموزشی',
      'ویزیت ویدیو کال ( گوگل میت )',
    ],
    price: 8000000,
  },
  {
    title: 'حضوری',
    descriptions: ['ویژه تهران و شهرستان ها', 'مشاوره حضوری', 'بادی آنالیز'],
    price: 10000000,
  },
]

function PlanChoose() {
  const { choosePlan, noPlan, signPlan, signInAlert, confirm, cancel } =
    staticTexts.userPanel.planChoose
  const { toman } = staticTexts.common

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<any>(null)

  return (
    <>
      <KDialog open={isModalVisible} withHeader={false}>
        <div className="flex flex-col items-center">
          {/* <PrintSvg className="w-[203px] h-[189px]" /> */}
          <div className="text-h4 text-text mt-6">{signPlan}</div>
          {selectedPlan && (
            <div className="flex gap-4 items-center">
              <h4>{selectedPlan.title} : </h4>
              <div>
                <span className="text-h4 text-text">{numberWithCommas(selectedPlan.price)}</span>
                <span className="text-text mr-1 text-medium13">{toman}</span>
              </div>
            </div>
          )}
          <div className="text-regular15 text-text-middle mb-4 ">{signInAlert}</div>

          <div className="flex w-1/2 gap-2">
            <KButton
              className="w-full"
              type="secondary"
              text={confirm}
              rightIcon={className => <CheckIcon className={className} />}
              loading={false}
              onClick={() => {
                setIsModalVisible(false)
              }}
            />
            <KButton
              className="w-full"
              type="error"
              text={cancel}
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
                <div>
                  <div className="mt-2">
                    <span className="text-h4 text-text">{numberWithCommas(item.price)}</span>
                    <span className="text-text mr-1 text-medium13">{toman}</span>
                  </div>
                  <div className="mt-4">
                    <KButton
                      disabled={false}
                      htmlType="submit"
                      text={signPlan}
                      size="small"
                      typography="buttonSmall"
                      width={128}
                      loading={false}
                      onClick={() => {
                        setSelectedPlan(item)
                        setIsModalVisible(true)
                      }}
                    />
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
