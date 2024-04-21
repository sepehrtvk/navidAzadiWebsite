'use client'

import { useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import classNames from 'classnames'
import { KButton, KDialog } from 'src/kd-components'
import staticTexts from '@constants/locale/fa'
import {
  ACTIVITY_REPORT_ROUTE,
  INVESTOR_LOGIN_ROUTE,
  SESSION_EXPIRED_ROUTE,
} from '@constants/routes'
import { IdCardErrorSvg, KianDigitalLogoSvg } from '@svgs/illustrations'
import { AddIcon, MultipleFileIcon } from '@svgs/icons'
import useStore from '@store/storeManagement/useStore'
import useOfficeStore from '@store/office'
import useProfileStore from '@store/profile'

const { title, subTitle, enter } = staticTexts.mainHeader

function Header() {
  // const officeCode = useStore(useOfficeStore, store => store.officeCode)

  const router = useRouter()
  const path = usePathname()

  const Profile = useProfileStore(store => store.profile)
  const removeProfile = useProfileStore(store => store.clearProfile)

  return (
    <div className="sticky top-0 w-screen flex flex-col items-center bg-background-surface z-10">
      <div className="w-[1144px] flex py-5 items-center justify-between">
        <div className="flex items-center gap-0">
          <Image src="/images/Logo.png" width={64} height={64} alt="logo" />
          <div className="flex flex-col  gap-1">
            <span className="text-h5 text-text-dark pr-10">{title}</span>
            <span className="text-medium15 text-text-dark pr-10">{subTitle}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {Profile && Profile.firstName && (
            <div className="px-3 h-10 flex items-center justify-center rounded-xl bg-background-tint1 text-text text-bold15">
              <span>{Profile.firstName}</span>
              <span className="mr-1">{Profile.lastName}</span>
            </div>
          )}
          <KButton
            size="small"
            typography="buttonSmall"
            text="خروج"
            type="error"
            onClick={() => {
              removeProfile()
              router.replace('/login')
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
