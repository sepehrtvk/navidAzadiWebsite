'use client'

import staticTexts from '@constants/locale/fa'
import useProfileStore from '@store/profile'
import useStore from '@store/storeManagement/useStore'

function UserInfo() {
  const { userInfo, firstName, lastName, mobile, trainer } = staticTexts.userPanel
  const profile = useStore(useProfileStore, store => store.profile)

  return (
    <div className="px-4 py-3 rounded-xl w-full bg-background-surface">
      <div className="flex justify-between items-center mb-4 pb-2 border-0 border-b border-solid border-b-border-light">
        <div className="flex gap-4 items-center">
          <div className="text-h5 text-text">{userInfo}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-bold15">{firstName}: </span>
          <span className="text-medium15 text-text-dark">{profile?.firstName}</span>
        </div>
        <div>
          <span className="text-bold15">{mobile}: </span>
          <span className="text-medium15 text-text-dark">{profile?.phone}</span>
        </div>
        <div>
          <span className="text-bold15">{lastName}: </span>
          <span className="text-medium15 text-text-dark">{profile?.lastName}</span>
        </div>
        <div>
          <span className="text-bold15">{trainer}: </span>
          <span className="text-medium15 text-text-dark">نویدآزادی</span>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
