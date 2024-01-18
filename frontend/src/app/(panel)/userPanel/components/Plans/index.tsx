import cs from 'classnames'
import KButton from '@components/KButton'
import staticTexts from '@constants/locale/fa'

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
        {plansArray.map(item => (
          <div
            className={cs(
              'flex flex-col gap-2 items-center rounded-xl p-4 border border-solid border-border-light',
              {
                'bg-background-tint1': !item.isActive,
              },
            )}
          >
            <span className="text-bold15">{item.title}</span>
            <div>
              <span> {from} </span>
              <span className="text-medium15 text-text-dark">{item.startDate}</span>
              <span> {to} </span>
              <span className="text-medium15 text-text-dark">{item.endDate}</span>
            </div>
            <div className="mt-4">
              <KButton
                href={item.link}
                disabled={!item.isActive}
                htmlType="submit"
                text={download_plan}
                size="small"
                typography="buttonSmall"
                width={128}
                loading={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
