'use client'

import { useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
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

const {
  office_code_x,
  enter_new_national_code,
  confirm_new_national_code,
  go_back,
  you_will_logout,
  new_user_with_national_code,
  activity_report,
} = staticTexts.main_header

function Header() {
  const officeCode = useStore(useOfficeStore, store => store.officeCode)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const router = useRouter()
  const path = usePathname()

  return (
    <>
      <KDialog
        open={isModalVisible}
        handleClose={() => setIsModalVisible(false)}
        title={enter_new_national_code}
      >
        <div className="flex flex-col items-center">
          <IdCardErrorSvg className="w-[132px] h-[160px]" />
          <div className="text-h6 text-text mt-6">{confirm_new_national_code}</div>
          <div className="text-regular13 text-text-middle mt-2">{you_will_logout}</div>
          <div className="flex items-center mt-10 gap-2 ">
            <KButton
              text={go_back}
              onClick={() => setIsModalVisible(false)}
              type="neutral"
              style="stroke"
              width={246}
            />
            <KButton
              text={enter_new_national_code}
              onClick={() => {}}
              type="primary"
              style="stroke"
              width={246}
            />
          </div>
        </div>
      </KDialog>
      <div className="sticky top-0 w-screen flex flex-col items-center bg-background-surface z-10">
        <div className="w-[1144px] flex py-5 items-center justify-between">
          <div className="flex flex-col gap-1">
            <KianDigitalLogoSvg className="w-[180px] h-[36px]" />
            {officeCode && (
              <div className="text-medium13 text-text-dark pr-10">{office_code_x(officeCode)}</div>
            )}
          </div>
          <div className="flex items-center gap-4">
            {true && (
              <div className="px-3 h-10 flex items-center justify-center rounded-xl bg-background-tint1 text-text text-bold15">
                {'username'}
              </div>
            )}
            {path !== SESSION_EXPIRED_ROUTE && path !== INVESTOR_LOGIN_ROUTE && (
              <KButton
                text={enter_new_national_code}
                type="secondary"
                rightIcon={className => <AddIcon className={className} />}
                onClick={() => {}}
                size="small"
                typography="buttonSmall"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
