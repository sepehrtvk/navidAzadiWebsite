import KButton from '@components/KButton'
import staticTexts from '@constants/locale/fa'
import numberWithCommas from '@utils/numberWithCommas'
import React from 'react'

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
  const { choosePlan, signPlan } = staticTexts.userPanel.planChoose
  const { toman } = staticTexts.common

  return (
    <div className="px-4 py-3 rounded-xl w-full bg-background-surface mt-4">
      <div className="flex justify-between items-center mb-4 pb-2 border-0 border-b border-solid border-b-border-light">
        <div className="flex gap-4 items-center">
          <div className="text-h5 text-text">{choosePlan}</div>
        </div>
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
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlanChoose
