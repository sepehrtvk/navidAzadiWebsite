import staticTexts from '@constants/locale/fa'
import { TimeErrorSvg } from '@svgs/illustrations'

const { office_session_expired, please_login_again } = staticTexts.session_expired_page

function SessionExpiredPage() {
  return (
    <div className="w-full h-[438px] bg-background-surface rounded-xl flex flex-col items-center justify-center mt-4">
      <TimeErrorSvg className="w-[86px] h-[125px]" />
      <div className="mt-6 text-h6 text-text">{office_session_expired}</div>
      <div className="mt-2 text-regular13 text-text-middle">{please_login_again}</div>
    </div>
  )
}

export default SessionExpiredPage
