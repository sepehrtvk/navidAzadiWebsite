import cs from 'classnames'
import staticTexts from '@constants/locale/fa'
import KButton from '@components/KButton'

const VisitReserveTimes = [
  {
    day: 'شنبه',
    date: '1402/5/5',
    time: '13:30',
    selected: true,
  },
  {
    day: 'دوشنبه',
    date: '1402/5/7',
    time: '14:00',
    selected: false,
  },
]
function VisitReserveReserve() {
  const { visitReserve, noVisitTime, date, time, choose } =
    staticTexts.userPanel.visitReserveReserve

  return (
    <div className="px-4 py-3 rounded-xl w-full bg-background-surface mt-4">
      <div className="flex justify-between items-center mb-4 pb-2 border-0 border-b border-solid border-b-border-light">
        <div className="flex gap-4 items-center">
          <div className="text-h5 text-text">{visitReserve}</div>
        </div>
      </div>
      <div className="mb-4">
        <div>{noVisitTime}:</div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {VisitReserveTimes.map(item => (
          <div
            className={cs(
              'flex flex-col gap-2 items-center rounded-xl p-4 border border-solid border-border-light',
            )}
          >
            <span className="text-bold15">{item.date}</span>
            <div>
              <span className="text-bold15"> {date}: </span>
              <span className="text-medium15 text-text-dark">{item.day}</span>
              <span className="text-bold15 mr-2"> {time}: </span>
              <span className="text-medium15 text-text-dark">{item.time}</span>
            </div>
            {!item.selected && (
              <div className="mt-4">
                <KButton
                  type={item.selected ? 'primary' : 'secondary'}
                  htmlType="submit"
                  text={choose}
                  size="small"
                  typography="buttonSmall"
                  width={128}
                  loading={false}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default VisitReserveReserve
